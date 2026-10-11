import { calculateFootprint } from './spot.js';
import { groundStations, fleetInfo } from '../shared/catalogue.js';

const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || './';
const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

export function computeSubSolarCoordinates(d) {
  const date = d || new Date();
  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  let subSolarLon = -((utcHours - 12) * 15);
  while (subSolarLon > 180) subSolarLon -= 360;
  while (subSolarLon < -180) subSolarLon += 360;
  if (subSolarLon === 0) subSolarLon = 0;
  const dayOfYear = (date - Date.UTC(date.getUTCFullYear(), 0, 0)) / 86400000;
  const subSolarLat = 23.44 * Math.sin(((284 + dayOfYear) / 365.25) * 2 * Math.PI);
  return { subSolarLat, subSolarLon };
}

export function isPointAtNight(lat, lon, d) {
  const { subSolarLat, subSolarLon } = computeSubSolarCoordinates(d);
  const phi = (lat * Math.PI) / 180;
  const delta = (subSolarLat * Math.PI) / 180;
  const dLam = ((lon - subSolarLon) * Math.PI) / 180;
  const sinElevation = Math.sin(phi) * Math.sin(delta) + Math.cos(phi) * Math.cos(delta) * Math.cos(dLam);
  return sinElevation < 0;
}

export function calculateZoomPan(currentZoom, currentPanX, currentPanY, targetZoom, centerX, centerY, width, height) {
  const scale = targetZoom / currentZoom;
  const midX = width * 0.5;
  const midY = height * 0.5;
  const dx = centerX - midX;
  const dy = centerY - midY;
  const panX = currentPanX * scale + dx * (1 - scale);
  const panY = currentPanY * scale + dy * (1 - scale);
  return { zoom: targetZoom, panX, panY };
}

// Constellation de sécurité mondiale bande L officielle (Slide 5 FIT Asia 2025)
export const SLIDE5_SATELLITES = [
  { id: 25153, name: 'I-3 F5', nominalLon: -54.0, color: '#e6ee28', region: 'Atlantic Ocean (AORE)' },
  { id: 28899, name: 'I-4 F2', nominalLon: 143.5, color: '#e91e63', region: 'Asia Pacific (APAC)' },
  { id: 33278, name: 'I-4 F3', nominalLon: -98.0, color: '#00e5ff', region: 'Americas (AMER)' },
  { id: 39215, name: 'Alphasat', nominalLon: 25.0, color: '#00e676', region: 'Europe/Mid-East/Africa (EMEA)' },
  { id: 50319, name: 'I-6 F1', nominalLon: 83.7, color: '#b388ff', region: 'Indian Ocean (IOR/IOE)' }
];

export class WorldMapTracker2D {
  constructor(container) {
    this.container = container;
    this.container.innerHTML = '';

    // Canvas principal
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'map2d-canvas';
    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.container.appendChild(this.canvas);

    // Infobulle de survol interactive
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'map2d-tooltip';
    this.tooltip.style.display = 'none';
    this.container.appendChild(this.tooltip);

    // HUD Coordonnées curseur
    this.coordHud = document.createElement('div');
    this.coordHud.className = 'map2d-coord-hud';
    this.coordHud.textContent = '📍 --.-°N, --.-°E';
    this.container.appendChild(this.coordHud);

    // Barre d'outils 2D (Zoom +, Zoom -, Reset, Mode Carte)
    this.toolsEl = document.createElement('div');
    this.toolsEl.className = 'map2d-tools';
    this.toolsEl.innerHTML = `
      <button class="map2d-tool-btn" data-action="zoom-in" title="Zoom avant (Molette)">+</button>
      <button class="map2d-tool-btn" data-action="zoom-out" title="Zoom arrière (Molette)">−</button>
      <button class="map2d-tool-btn" data-action="reset" title="Réinitialiser la vue">⟲</button>
      <div class="map2d-tool-sep"></div>
      <button class="map2d-tool-btn" data-action="toggle-layer" title="Basculer fond Vectoriel / Imagerie">🗺</button>
    `;
    this.container.appendChild(this.toolsEl);

    // État du zoom & pan
    this.zoom = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.hoverTarget = null;
    this.mouseScreenX = 0;
    this.mouseScreenY = 0;
    this.useVectorOnly = false; // Bascule entre vectoriel pur et vectoriel + imagerie satellite

    // Texture image Terre
    this.earthImg = new Image();
    this.earthImgLoaded = false;
    this.earthImg.onload = () => {
      this.earthImgLoaded = true;
      this.render();
    };
    this.earthImg.onerror = () => {
      this.earthImgLoaded = false;
      this.render();
    };
    this.earthImg.src = `${cleanBase}textures/earth.jpg`;
    if (this.earthImg.complete && this.earthImg.naturalWidth > 0) {
      this.earthImgLoaded = true;
    }

    // Données vectorielles mondiales (GeoJSON)
    this.geoRings = [];
    this.loadGeoJson();

    // État métier
    this.satellite = null;
    this.fleetRecords = [];
    this.observer = { lat: 48.8566, lon: 2.3522, name: 'Paris' };
    this.groundTrack = [];
    this.simDate = new Date();
    this.spotMode = 'global';
    this.pulsePhase = 0;
    this.showFleetOverlay = true;
    this.showGateways = true;
    this.showSpot = true;
    this.showOrbits = true;
    this.showLabels = true;
    this.onSelectSatellite = null;
    this.legendBoxes = [];

    // Redimensionnement réactif
    this.width = 800;
    this.height = 450;
    this.handleResize = () => {
      const rect = this.container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);
      this.canvas.style.width = `${rect.width}px`;
      this.canvas.style.height = `${rect.height}px`;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.clampPan();
      this.render();
    };

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.container);
    window.addEventListener('resize', this.handleResize);

    // Initialisation des écouteurs de zoom, pan, hover et clic
    this.initInteractions();
  }

  // Chargement asynchrone du GeoJSON mondial vectoriel HD
  async loadGeoJson() {
    try {
      const res = await fetch(`${cleanBase}data/world-110m.geojson`);
      if (!res.ok) throw new Error('GeoJSON status ' + res.status);
      const data = await res.json();
      const rings = [];

      data.features.forEach(f => {
        const geom = f.geometry;
        if (!geom) return;
        const coords = geom.type === 'Polygon' ? [geom.coordinates] : geom.type === 'MultiPolygon' ? geom.coordinates : [];
        coords.forEach(poly => {
          if (poly[0]) rings.push(poly[0]); // Anneau extérieur du polygone
        });
      });

      this.geoRings = rings;
      this.render();
    } catch (e) {
      console.warn('Carte vectorielle 110m : chargement en arrière-plan', e);
    }
  }

  initInteractions() {
    // Boutons de la barre d'outils 2D
    this.toolsEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === 'zoom-in') this.zoomAt(this.width / 2, this.height / 2, 1.4);
      else if (action === 'zoom-out') this.zoomAt(this.width / 2, this.height / 2, 1 / 1.4);
      else if (action === 'reset') this.resetView();
      else if (action === 'toggle-layer') {
        this.useVectorOnly = !this.useVectorOnly;
        btn.classList.toggle('active', this.useVectorOnly);
        this.render();
      }
    });

    // Zoom molette centré sur la position de la souris
    this.canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.25 : 1 / 1.25;
      this.zoomAt(mouseX, mouseY, factor);
    }, { passive: false });

    // Glissement à la souris, au stylet ou au doigt.
    this.canvas.style.touchAction = 'none';
    this.canvas.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      if (this.isDragging) return;
      this.isDragging = true;
      this.dragPointer = e.pointerId;
      this.didPan = false;
      this.pointerStart = { x: e.clientX, y: e.clientY };
      this.canvas.setPointerCapture(e.pointerId);
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
      this.canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', e => {
      if (this.isDragging && e.pointerId === this.dragPointer) {
        if (Math.hypot(e.clientX - this.pointerStart.x, e.clientY - this.pointerStart.y) > 5) this.didPan = true;
        this.panX = e.clientX - this.dragStartX;
        this.panY = e.clientY - this.dragStartY;
        this.clampPan();
        this.render();
      }

      if (e.pointerType === 'touch') return;
      // Mise à jour de la position de survol si dans le canvas
      const rect = this.canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      ) {
        this.mouseScreenX = e.clientX - rect.left;
        this.mouseScreenY = e.clientY - rect.top;
        this.handleHover(this.mouseScreenX, this.mouseScreenY, e.clientX, e.clientY);
      } else {
        this.tooltip.style.display = 'none';
        this.hoverTarget = null;
      }
    });

    const endDrag = e => {
      if (this.isDragging && e.pointerId === this.dragPointer) {
        this.isDragging = false;
        this.canvas.style.cursor = 'crosshair';
      }
    };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    // Clic pour sélectionner un satellite, une gateway ou un élément de légende
    this.canvas.addEventListener('click', e => {
      if (this.didPan) { this.didPan = false; return; }
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // 1. Clic sur la barre de légende Slide 5 en bas
      if (this.legendBoxes) {
        for (const item of this.legendBoxes) {
          if (
            clickX >= item.x && clickX <= item.x + item.w &&
            clickY >= item.y && clickY <= item.y + item.h
          ) {
            if (this.onSelectSatellite) this.onSelectSatellite(item.id);
            return;
          }
        }
      }

      // 2. Clic sur un satellite sur la carte
      const hitSat = this.findSatelliteAt(clickX, clickY, 14);
      if (hitSat) {
        if (this.onSelectSatellite) this.onSelectSatellite(hitSat.data?.NORAD_CAT_ID ?? hitSat.id);
        return;
      }

      // 3. Clic sur une station sol (Gateway)
      const hitGw = this.findGatewayAt(clickX, clickY, 12);
      if (hitGw && hitGw.primarySatId) {
        if (this.onSelectSatellite) this.onSelectSatellite(hitGw.primarySatId);
      }
    });

    // Double clic pour recentrer la vue
    this.canvas.addEventListener('dblclick', () => {
      this.resetView();
    });
  }

  zoomAt(centerX, centerY, factor) {
    const newZoom = Math.max(1.0, Math.min(10.0, this.zoom * factor));
    if (newZoom === this.zoom) return;

    const res = calculateZoomPan(this.zoom, this.panX, this.panY, newZoom, centerX, centerY, this.width, this.height);
    this.panX = res.panX;
    this.panY = res.panY;
    this.zoom = res.zoom;

    if (this.zoom <= 1.01) {
      this.panY = 0;
      this.zoom = 1.0;
    }
    this.clampPan();
    this.render();
  }

  centerAt(lat, lon) {
    // Une largeur de monde entière, centrée sur la longitude du satellite.
    // Les pôles restent visibles : aucun décalage vertical ni zoom résiduel.
    this.zoom = 1;
    this.panX = -lon / 360 * this.width;
    this.panY = 0;
    this.clampPan();
    this.render();
  }

  resetView() {
    this.zoom = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.render();
  }

  clampPan() {
    const worldWidth = this.width * this.zoom;
    this.panX = ((this.panX + worldWidth / 2) % worldWidth + worldWidth) % worldWidth - worldWidth / 2;
    if (this.zoom <= 1.0) {
      this.panY = 0;
      return;
    }
    const maxPanY = (this.zoom - 1) * this.height * 0.5;
    this.panY = Math.max(-maxPanY, Math.min(maxPanY, this.panY));
  }

  // Conversion Lat/Lon -> Pixels écran avec Zoom et Pan
  toXY(lat, lon) {
    let normalizedLon = lon;
    if (lon > 180 || lon < -180) {
      normalizedLon = ((((lon + 180) % 360) + 360) % 360) - 180;
    }
    const baseW = this.width;
    const baseH = this.height;

    // Coordonnées de base non zoomées
    const baseX = ((normalizedLon + 180) / 360) * baseW;
    const baseY = ((90 - lat) / 180) * baseH;

    // Transformation zoom & pan centrée
    const centerX = baseW * 0.5;
    const centerY = baseH * 0.5;
    const x = centerX + (baseX - centerX) * this.zoom + this.panX + (this.drawingWorldOffset || 0);
    const y = centerY + (baseY - centerY) * this.zoom + this.panY;
    return { x, y };
  }

  // Conversion Pixels écran -> Lat/Lon
  fromXY(screenX, screenY) {
    const baseW = this.width;
    const baseH = this.height;
    const centerX = baseW * 0.5;
    const centerY = baseH * 0.5;

    const baseX = ((screenX - this.panX - centerX) / this.zoom) + centerX;
    const baseY = ((screenY - this.panY - centerY) / this.zoom) + centerY;

    let lon = (baseX / baseW) * 360 - 180;
    let lat = 90 - (baseY / baseH) * 180;

    lon = ((lon + 180) % 360 + 360) % 360 - 180;
    lat = Math.max(-90, Math.min(90, lat));
    return { lat, lon };
  }

  handleHover(screenX, screenY, clientX, clientY) {
    const geo = this.fromXY(screenX, screenY);
    const latStr = `${Math.abs(geo.lat).toFixed(1)}°${geo.lat >= 0 ? 'N' : 'S'}`;
    const lonStr = `${Math.abs(geo.lon).toFixed(1)}°${geo.lon >= 0 ? 'E' : 'O'}`;
    this.coordHud.textContent = `📍 ${latStr}, ${lonStr} ${this.zoom > 1.05 ? `· ×${this.zoom.toFixed(1)}` : ''}`;

    const hitSat = this.findSatelliteAt(screenX, screenY, 14);
    if (hitSat) {
      const meta = hitSat.meta || {};
      const cur = hitSat.current || {};
      this.tooltip.style.display = 'block';
      this.tooltip.style.left = `${clientX + 14}px`;
      this.tooltip.style.top = `${clientY - 12}px`;
      this.tooltip.innerHTML = `
        <div class="tip-title">${meta.name || hitSat.data?.OBJECT_NAME}</div>
        <div class="tip-row"><span>Position :</span> <strong>${meta.orbitalSlot || 'GEO'}</strong></div>
        <div class="tip-row"><span>Bande :</span> <strong>${meta.band || 'Ka'} (${meta.category || 'Viasat'})</strong></div>
        <div class="tip-row"><span>Alt :</span> <strong>${Math.round(cur.alt || 35786).toLocaleString('fr-FR')} km</strong></div>
        <div class="tip-action">👆 Cliquez pour sélectionner</div>
      `;
      this.canvas.style.cursor = 'pointer';
      return;
    }

    const hitGw = this.findGatewayAt(screenX, screenY, 12);
    if (hitGw) {
      this.tooltip.style.display = 'block';
      this.tooltip.style.left = `${clientX + 14}px`;
      this.tooltip.style.top = `${clientY - 12}px`;
      this.tooltip.innerHTML = `
        <div class="tip-title">🏢 ${hitGw.name}</div>
        <div class="tip-row"><span>Rôle :</span> <strong>${hitGw.role || 'Passerelle Téléport Sol'}</strong></div>
        <div class="tip-row"><span>Opérateur :</span> <strong>Viasat / Inmarsat Gateways</strong></div>
      `;
      this.canvas.style.cursor = 'pointer';
      return;
    }

    this.tooltip.style.display = 'none';
    this.canvas.style.cursor = this.isDragging ? 'grabbing' : 'crosshair';
  }

  findSatelliteAt(screenX, screenY, threshold = 14) {
    if (!this.fleetRecords || !this.fleetRecords.length) {
      if (this.satellite?.current) {
        const p = this.toXY(this.satellite.current.lat, this.satellite.current.lon);
        if (this.wrappedDistance(screenX, screenY, p) <= threshold) return this.satellite;
      }
      return null;
    }

    for (let i = this.fleetRecords.length - 1; i >= 0; i--) {
      const sat = this.fleetRecords[i];
      const cur = sat.current;
      if (!cur) continue;
      const p = this.toXY(cur.lat, cur.lon);
      if (this.wrappedDistance(screenX, screenY, p) <= threshold) {
        return sat;
      }
    }
    return null;
  }

  findGatewayAt(screenX, screenY, threshold = 12) {
    for (const gw of groundStations) {
      const p = this.toXY(gw.lat, gw.lon);
      if (this.wrappedDistance(screenX, screenY, p) <= threshold) {
        return gw;
      }
    }
    return null;
  }

  wrappedDistance(screenX, screenY, point) {
    const worldWidth = this.width * this.zoom;
    const dx = screenX - point.x;
    return Math.hypot(dx - Math.round(dx / worldWidth) * worldWidth, screenY - point.y);
  }

  setFleet(records) {
    this.fleetRecords = records || [];
    this.render();
  }

  setSatellite(record, groundTrack = []) {
    this.satellite = record;
    this.groundTrack = groundTrack;
    this.render();
  }

  setObserver(observer) {
    this.observer = observer;
    this.render();
  }

  setSpotMode(mode) {
    this.spotMode = mode;
    this.render();
  }

  toggleFleetOverlay(enable) {
    this.showFleetOverlay = enable;
    this.render();
  }

  toggleGateways(enable) {
    this.showGateways = enable;
    this.render();
  }

  toggleSpot(enable) {
    this.showSpot = Boolean(enable);
    this.render();
  }

  toggleOrbits(enable) {
    this.showOrbits = Boolean(enable);
    this.render();
  }

  toggleLabels(enable) {
    this.showLabels = Boolean(enable);
    this.render();
  }

  update(simDate, records = null, pulseDelta = 0.016) {
    this.simDate = simDate;
    if (records) this.fleetRecords = records;
    this.pulsePhase = (this.pulsePhase + pulseDelta * 1.5) % 1;
    this.render();
  }

  // Calcul mathématique précis des points de contour de l'horizon sur une sphère (Slide 5)
  computeFootprintPoints(lat0Deg, lon0Deg, thetaDeg, segments = 120) {
    const lat0 = (lat0Deg * Math.PI) / 180;
    const lon0 = (lon0Deg * Math.PI) / 180;
    const theta = (thetaDeg * Math.PI) / 180;
    const pts = [];

    for (let i = 0; i <= segments; i++) {
      const alpha = (i / segments) * Math.PI * 2;
      const sinLat = Math.sin(lat0) * Math.cos(theta) + Math.cos(lat0) * Math.sin(theta) * Math.cos(alpha);
      const lat = Math.asin(Math.max(-1, Math.min(1, sinLat)));
      const y = Math.sin(alpha) * Math.sin(theta);
      const x = Math.cos(lat0) * Math.cos(theta) - Math.sin(lat0) * Math.sin(theta) * Math.cos(alpha);
      let lon = lon0 + Math.atan2(y, x);
      let lonDeg = (lon * 180) / Math.PI;
      while (lonDeg > 180) lonDeg -= 360;
      while (lonDeg < -180) lonDeg += 360;

      pts.push({
        lat: (lat * 180) / Math.PI,
        lon: lonDeg
      });
    }
    return pts;
  }

  // Découpage propre à l'antiméridien (+/- 180°)
  splitAntimeridianSegments(pts) {
    const segments = [];
    let current = [];

    for (let i = 0; i < pts.length; i++) {
      const curr = pts[i];
      if (current.length > 0) {
        const prev = current[current.length - 1];
        const dLon = curr.lon - prev.lon;
        if (Math.abs(dLon) > 180) {
          let prevLon = prev.lon;
          let currLon = curr.lon;
          if (dLon > 180) currLon -= 360;
          else currLon += 360;
          const t = (curr.lon > prev.lon ? -180 - prevLon : 180 - prevLon) / (currLon - prevLon);
          const crossLat = prev.lat + t * (curr.lat - prev.lat);

          if (curr.lon > prev.lon) {
            current.push({ lat: crossLat, lon: -180 });
            segments.push(current);
            current = [{ lat: crossLat, lon: 180 }];
          } else {
            current.push({ lat: crossLat, lon: 180 });
            segments.push(current);
            current = [{ lat: crossLat, lon: -180 }];
          }
        }
      }
      current.push(curr);
    }
    if (current.length > 0) segments.push(current);
    return segments;
  }

  render() {
    if (!this.width || !this.height) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Fond Océan Tactique Aérospatial
    ctx.fillStyle = '#070d18';
    ctx.fillRect(0, 0, this.width, this.height);

    // Raccord horizontal : continents, ombre, empreintes et marqueurs
    // utilisent les mêmes copies du monde, découpées à leurs frontières.
    const worldWidth = this.width * this.zoom;
    const left = (this.width - worldWidth) / 2 + this.panX;
    for (const copy of [-1, 0, 1]) {
      const x = left + copy * worldWidth;
      if (x >= this.width || x + worldWidth <= 0) continue;
      ctx.save();
      ctx.beginPath();
      ctx.rect(x, 0, worldWidth, this.height);
      ctx.clip();
      this.drawingWorldOffset = copy * worldWidth;
      this.drawWorld(ctx);
      ctx.restore();
    }
    this.drawingWorldOffset = 0;
    this.drawSlide5Legend(ctx);
  }

  drawWorld(ctx) {

    // 2. Texture Satellite en arrière-plan (si disponible et non masquée)
    if (this.earthImgLoaded && !this.useVectorOnly) {
      ctx.save();
      const pTopLeft = this.toXY(90, -180);
      const pBotRight = this.toXY(-90, 180);
      const w = pBotRight.x - pTopLeft.x;
      const h = pBotRight.y - pTopLeft.y;
      ctx.globalAlpha = 0.55;
      ctx.drawImage(this.earthImg, pTopLeft.x, pTopLeft.y, w, h);
      ctx.fillStyle = 'rgba(7, 13, 24, 0.40)';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.restore();
    }

    // 3. Dessin des Continents Vectoriels Haute Définition (GeoJSON 110m)
    this.drawVectorLandmasses(ctx);

    // 4. Grille de Méridiens et Parallèles
    this.drawGrid(ctx);

    // 5. Ombre Jour / Nuit (Terminateur Solaire Dynamique)
    this.drawDayNightShadow(ctx);

    // 6. Trace au sol du satellite actif (Ground Track)
    if (this.showOrbits && this.groundTrack && this.groundTrack.length > 1) {
      this.drawGroundTrack(ctx);
    }

    // 7. Contours de couverture globale flotte L-band (Slide 5 officielle)
    if (this.showFleetOverlay && this.showSpot) {
      this.drawSlide5FleetCoverage(ctx);
    }

    // 8. Stations sol / Passerelles (Slide 6 Gateways)
    if (this.showGateways) {
      this.drawGateways(ctx);
    }

    // 9. Empreinte active du satellite sélectionné
    if (this.showSpot && this.satellite?.current) {
      this.drawActiveSatelliteFootprint(ctx);
    }

    // 10. Rendu de l'ENSEMBLE de la Flotte Viasat sur la Carte 2D
    this.drawAllFleetSatellites(ctx);

    // 11. Observateur / Mon Antenne
    if (this.observer) {
      this.drawObserver(ctx);
    }

  }

  // Rendu vectoriel ultra-net des continents et frontières
  drawVectorLandmasses(ctx) {
    if (!this.geoRings || !this.geoRings.length) return;

    ctx.save();
    // Tracé et remplissage de tous les anneaux vectoriels
    ctx.beginPath();
    this.geoRings.forEach(ring => {
      if (!ring.length) return;
      const p0 = this.toXY(ring[0][1], ring[0][0]);
      ctx.moveTo(p0.x, p0.y);
      for (let i = 1; i < ring.length; i++) {
        const pt = this.toXY(ring[i][1], ring[i][0]);
        ctx.lineTo(pt.x, pt.y);
      }
    });

    // Style de terre tactique sombre & net
    ctx.fillStyle = this.useVectorOnly ? '#0e1c2e' : 'rgba(15, 30, 48, 0.65)';
    ctx.fill();

    // Liseré des côtes haute définition
    ctx.strokeStyle = this.useVectorOnly ? '#1f4368' : 'rgba(38, 80, 122, 0.75)';
    ctx.lineWidth = 1.0;
    ctx.stroke();

    ctx.restore();
  }

  drawGrid(ctx) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.font = '10px "Space Grotesk", monospace';
    ctx.fillStyle = 'rgba(180, 205, 230, 0.45)';

    // Méridiens
    for (let lon = -180; lon <= 180; lon += 30) {
      const top = this.toXY(90, lon);
      const bot = this.toXY(-90, lon);
      ctx.beginPath();
      ctx.moveTo(top.x, top.y);
      ctx.lineTo(bot.x, bot.y);
      ctx.stroke();

      if (lon > -180 && lon < 180) {
        const labelY = Math.max(16, Math.min(this.height - 42, bot.y - 12));
        ctx.fillText(`${Math.abs(lon)}°${lon >= 0 ? 'E' : 'O'}`, top.x + 3, labelY);
      }
    }

    // Parallèles
    for (let lat = -60; lat <= 60; lat += 30) {
      const left = this.toXY(lat, -180);
      const right = this.toXY(lat, 180);
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.lineTo(right.x, right.y);
      ctx.stroke();

      const labelX = Math.max(6, Math.min(this.width - 50, left.x + 6));
      ctx.fillText(`${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'}`, labelX, left.y - 4);
    }

    // Équateur en surbrillance subtile
    const eqL = this.toXY(0, -180);
    const eqR = this.toXY(0, 180);
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
    ctx.beginPath();
    ctx.moveTo(eqL.x, eqL.y);
    ctx.lineTo(eqR.x, eqR.y);
    ctx.stroke();

    ctx.restore();
  }

  drawDayNightShadow(ctx) {
    const d = this.simDate || new Date();
    const { subSolarLat, subSolarLon } = computeSubSolarCoordinates(d);

    ctx.save();
    ctx.fillStyle = 'rgba(1, 4, 10, 0.50)';

    // Remplissage précis par bandes horizontales de latitude
    // Assure un ombrage 100% exact et continu de l'hémisphère nocturne
    const stepDeg = 1.0;
    for (let lat = -90; lat < 90; lat += stepDeg) {
      const midLat = lat + stepDeg / 2;
      const phi = (midLat * Math.PI) / 180;
      const delta = (subSolarLat * Math.PI) / 180;
      const tanProd = Math.tan(phi) * Math.tan(delta);

      const yTop = this.toXY(lat + stepDeg, 0).y;
      const yBot = this.toXY(lat, 0).y;
      const h = yBot - yTop;

      if (tanProd >= 1 || tanProd <= -1) {
        if (Math.sin(phi) * Math.sin(delta) < 0) {
          const pLeft = this.toXY(midLat, -180);
          const pRight = this.toXY(midLat, 180);
          ctx.fillRect(pLeft.x, yTop, pRight.x - pLeft.x, h);
        }
        continue;
      }

      const deltaLam = (Math.acos(-tanProd) * 180) / Math.PI;
      const d1 = subSolarLon - deltaLam;
      const d2 = subSolarLon + deltaLam;

      if (d1 >= -180 && d2 <= 180) {
        if (d1 > -180) {
          const x1 = this.toXY(midLat, -180).x;
          const x2 = this.toXY(midLat, d1).x;
          ctx.fillRect(x1, yTop, x2 - x1, h);
        }
        if (d2 < 180) {
          const x1 = this.toXY(midLat, d2).x;
          const x2 = this.toXY(midLat, 180).x;
          ctx.fillRect(x1, yTop, x2 - x1, h);
        }
      } else if (d1 < -180) {
        const x1 = this.toXY(midLat, d2).x;
        const x2 = this.toXY(midLat, d1 + 360).x;
        ctx.fillRect(x1, yTop, x2 - x1, h);
      } else if (d2 > 180) {
        const x1 = this.toXY(midLat, d2 - 360).x;
        const x2 = this.toXY(midLat, d1).x;
        ctx.fillRect(x1, yTop, x2 - x1, h);
      }
    }

    // Ligne douce de terminateur crépusculaire
    const antiSolarLon = subSolarLon > 0 ? subSolarLon - 180 : subSolarLon + 180;
    const antiSolarLat = -subSolarLat;
    const termPts = this.computeFootprintPoints(antiSolarLat, antiSolarLon, 90, 180);
    const segments = this.splitAntimeridianSegments(termPts);

    ctx.strokeStyle = 'rgba(255, 180, 50, 0.35)';
    ctx.lineWidth = 1.4;
    segments.forEach(seg => {
      if (seg.length < 2) return;
      ctx.beginPath();
      const p0 = this.toXY(seg[0].lat, seg[0].lon);
      ctx.moveTo(p0.x, p0.y);
      for (let i = 1; i < seg.length; i++) {
        const pt = this.toXY(seg[i].lat, seg[i].lon);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();
    });

    ctx.restore();
  }

  drawGroundTrack(ctx) {
    ctx.save();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2.0;
    ctx.setLineDash([5, 4]);
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 6;

    let prevX = null;
    ctx.beginPath();
    for (const p of this.groundTrack) {
      const { x, y } = this.toXY(p.lat, p.lon);
      if (prevX !== null && Math.abs(x - prevX) > this.width * 0.4) {
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        if (prevX === null) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      prevX = x;
    }
    ctx.stroke();
    ctx.restore();
  }

  // Empreintes de flotte calculées à partir des positions propagées.
  drawSlide5FleetCoverage(ctx) {
    if (!this.showSpot || !this.showFleetOverlay) return;
    const selId = Number(this.satellite?.data?.NORAD_CAT_ID ?? this.satellite?.id ?? 0);

    for (const sat of SLIDE5_SATELLITES) {
      const isSelected = selId === sat.id;
      // Si un satellite est sélectionné, son empreinte est gérée dynamiquement par drawActiveSatelliteFootprint
      if (isSelected) continue;

      const record = this.fleetRecords?.find(record => Number(record.data?.NORAD_CAT_ID ?? record.id) === sat.id);
      const current = record?.current;
      if (!current) continue;
      const meta = record.meta || fleetInfo(record.data || record);
      const mode = this.spotMode || 'global';
      let theta = calculateFootprint(current.alt, 5).thetaDeg;
      let centerLat = current.lat;
      let centerLon = current.lon;

      if (mode === 'service') {
        if (meta?.serviceSpotRadiusDeg) theta = meta.serviceSpotRadiusDeg;
        if (meta?.coverageZone?.center) {
          centerLat = meta.coverageZone.center.lat;
          centerLon = meta.coverageZone.center.lon;
        }
      }

      const pts = this.computeFootprintPoints(centerLat, centerLon, theta, 120);
      const segments = this.splitAntimeridianSegments(pts);

      ctx.save();
      ctx.strokeStyle = sat.color;
      ctx.lineWidth = 1.8;
      ctx.shadowColor = sat.color;
      ctx.shadowBlur = 4;

      segments.forEach(seg => {
        if (seg.length < 2) return;
        ctx.beginPath();
        const p0 = this.toXY(seg[0].lat, seg[0].lon);
        ctx.moveTo(p0.x, p0.y);
        for (let i = 1; i < seg.length; i++) {
          const pt = this.toXY(seg[i].lat, seg[i].lon);
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      });

      ctx.restore();
    }
  }

  // Empreinte dynamique pour satellite actif
  drawActiveSatelliteFootprint(ctx) {
    if (!this.showSpot) return;
    const cur = this.satellite?.current;
    if (!cur) return;

    const meta = this.satellite.meta || fleetInfo(this.satellite.data || this.satellite) || {};
    const mode = this.spotMode || 'global';

    let centerLat = cur.lat;
    let centerLon = cur.lon;
    let theta = calculateFootprint(cur.alt, 5).thetaDeg; // Horizon 5° (~76.3° / 16 978 km)

    if (mode === 'service') {
      if (meta.serviceSpotRadiusDeg) theta = meta.serviceSpotRadiusDeg;
      if (meta.coverageZone?.center) {
        centerLat = meta.coverageZone.center.lat;
        centerLon = meta.coverageZone.center.lon;
      }
    }

    const pts = this.computeFootprintPoints(centerLat, centerLon, theta, 120);
    const segments = this.splitAntimeridianSegments(pts);

    const color = meta.slide5Color || '#00e5ff';

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3.0;
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.fillStyle = `${color}28`;

    ctx.shadowBlur = 0;
    this.fillSphericalFootprint(ctx, centerLat, centerLon, theta);
    ctx.shadowBlur = 12;
    segments.forEach(seg => {
      if (seg.length < 2) return;
      ctx.beginPath();
      const p0 = this.toXY(seg[0].lat, seg[0].lon);
      ctx.moveTo(p0.x, p0.y);
      for (let i = 1; i < seg.length; i++) {
        const pt = this.toXY(seg[i].lat, seg[i].lon);
        ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();
    });

    ctx.restore();
  }

  // Remplit la calotte par bandes de latitude, y compris à travers ±180°.
  // Fermer chaque fragment de contour par une corde crée des trous au Pacifique.
  fillSphericalFootprint(ctx, centerLat, centerLon, theta) {
    const phi0 = centerLat * Math.PI / 180;
    const cosTheta = Math.cos(theta * Math.PI / 180);
    const lon0 = ((centerLon + 180) % 360 + 360) % 360 - 180;
    for (let lat = -90; lat < 90; lat++) {
      const phi = (lat + 0.5) * Math.PI / 180;
      const divisor = Math.cos(phi) * Math.cos(phi0);
      const value = (cosTheta - Math.sin(phi) * Math.sin(phi0)) / divisor;
      if (value >= 1) continue;
      const halfWidth = value <= -1 ? 180 : Math.acos(value) * 180 / Math.PI;
      const top = this.toXY(lat + 1, 0).y;
      const bottom = this.toXY(lat, 0).y;
      const fill = (left, right) => ctx.fillRect(
        this.toXY(lat, left).x, top,
        this.toXY(lat, right).x - this.toXY(lat, left).x, bottom - top
      );
      if (halfWidth === 180) fill(-180, 180);
      else if (lon0 - halfWidth < -180) {
        fill(-180, lon0 + halfWidth);
        fill(lon0 - halfWidth + 360, 180);
      } else if (lon0 + halfWidth > 180) {
        fill(lon0 - halfWidth, 180);
        fill(-180, lon0 + halfWidth - 360);
      } else fill(lon0 - halfWidth, lon0 + halfWidth);
    }
  }

  // Rendu de TOUS les satellites de la flotte sur la carte 2D
  drawAllFleetSatellites(ctx) {
    const list = this.fleetRecords?.length ? this.fleetRecords : (this.satellite ? [this.satellite] : []);
    const selId = Number(this.satellite?.data?.NORAD_CAT_ID ?? this.satellite?.id ?? 0);

    ctx.save();

    list.forEach(sat => {
      const cur = sat.current;
      if (!cur) return;

      const satId = Number(sat.data?.NORAD_CAT_ID ?? sat.id);
      const isSelected = satId === selId;
      const meta = sat.meta || {};
      const { x, y } = this.toXY(cur.lat, cur.lon);

      // Couleur distinctive
      let color = meta.slide5Color;
      if (!color) {
        const cat = meta.category;
        if (cat === 'viasat') color = '#00e5ff';
        else if (cat === 'gx') color = '#00ff9d';
        else if (cat === 'arctic') color = '#c09cff';
        else color = '#5bc4e3';
      }

      if (isSelected) {
        if (this.showSpot) {
          // Anneau pulsant radar pour le satellite actif
          const ringR = 6 + this.pulsePhase * 20;
          const ringAlpha = Math.max(0, 0.85 * (1 - this.pulsePhase));
          ctx.strokeStyle = `rgba(0, 255, 204, ${ringAlpha})`;
          ctx.lineWidth = 2.0;
          ctx.beginPath();
          ctx.arc(x, y, ringR, 0, Math.PI * 2);
          ctx.stroke();

          // Réticule de pointage
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x - 10, y);
          ctx.lineTo(x + 10, y);
          ctx.moveTo(x, y - 10);
          ctx.lineTo(x, y + 10);
          ctx.stroke();
        }

        // Pastille centrale brillante
        ctx.fillStyle = '#00ffcc';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        if (this.showLabels) {
          // Étiquette en surbrillance
          ctx.font = 'bold 11px "Space Grotesk", sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#000000';
          ctx.shadowBlur = 6;
          const name = meta.name || sat.data?.OBJECT_NAME || 'SATELLITE';
          ctx.fillText(name, x + 12, y - 5);

          ctx.font = '10px monospace';
          ctx.fillStyle = '#00ffcc';
          const latStr = `${Math.abs(cur.lat).toFixed(1)}°${cur.lat >= 0 ? 'N' : 'S'}`;
          const lonStr = `${Math.abs(cur.lon).toFixed(1)}°${cur.lon >= 0 ? 'E' : 'O'}`;
          ctx.fillText(`${latStr} ${lonStr}`, x + 12, y + 9);
        }
      } else {
        // Satellite passif de la flotte : point net
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(x, y, 3.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.0;
        ctx.stroke();

        if (this.showLabels) {
          ctx.font = '10px "Space Grotesk", sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.shadowColor = '#000000';
          ctx.shadowBlur = 4;
          const name = meta.name || sat.data?.OBJECT_NAME || '';
          ctx.fillText(name, x + 8, y + 3);
        }
      }
    });

    ctx.restore();
  }

  // Stations sol / Passerelles (Gateways Slide 6)
  drawGateways(ctx) {
    ctx.save();
    const curSat = this.satellite?.current;
    const curMeta = this.satellite?.meta || {};

    groundStations.forEach(st => {
      const { x, y } = this.toXY(st.lat, st.lon);

      // Pastille dorée de passerelle sol
      ctx.fillStyle = '#ffc107';
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Libellé court
      if (this.zoom > 1.2) {
        ctx.font = '9px "DM Sans", sans-serif';
        ctx.fillStyle = '#ffe082';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 3;
        const shortName = st.name.split(' (')[0];
        ctx.fillText(shortName, x + 5, y - 3);
      }

      // Liaison avec le satellite sélectionné (Slide 6)
      if (curSat && curMeta.gateways) {
        const gwStr = `${curMeta.gateways.primary || ''} ${curMeta.gateways.secondary || ''}`;
        const shortName = st.name.split(' (')[0];
        if (gwStr.toLowerCase().includes(shortName.toLowerCase())) {
          const satPos = this.toXY(curSat.lat, curSat.lon);
          ctx.strokeStyle = 'rgba(255, 193, 7, 0.55)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 3]);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(satPos.x, satPos.y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
    });
    ctx.restore();
  }

  drawObserver(ctx) {
    const { x, y } = this.toXY(this.observer.lat, this.observer.lon);
    ctx.save();

    ctx.fillStyle = '#ffbe3b';
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.font = 'bold 10px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#ffd166';
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 3;
    ctx.fillText(this.observer.name || 'Mon Antenne', x + 7, y - 5);

    if (this.satellite?.current) {
      const satPos = this.toXY(this.satellite.current.lat, this.satellite.current.lon);
      ctx.strokeStyle = 'rgba(255, 209, 102, 0.45)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(satPos.x, satPos.y);
      ctx.stroke();
    }

    ctx.restore();
  }

  // Légende officielle Slide 5 en bas de carte
  drawSlide5Legend(ctx) {
    const selId = Number(this.satellite?.data?.NORAD_CAT_ID ?? this.satellite?.id ?? 0);
    this.legendBoxes = [];

    ctx.save();
    const columns = Math.max(1, Math.min(5, Math.floor((this.width - 48) / 105)));
    const rows = Math.ceil(SLIDE5_SATELLITES.length / columns);
    const legendH = 27 + rows * 26;
    if (this.coordHud) this.coordHud.style.bottom = `${legendH + 12}px`;
    const legendY = Math.max(10, this.height - legendH - 6);
    const boxWTotal = Math.max(200, this.width - 28);

    // Fond de légende
    ctx.fillStyle = 'rgba(8, 15, 24, 0.92)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(14, legendY, boxWTotal, legendH, 6);
    } else {
      ctx.rect(14, legendY, boxWTotal, legendH);
    }
    ctx.fill();
    ctx.stroke();

    // Titre
    ctx.font = 'bold 10px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#8fa1b0';
    ctx.fillText(this.showSpot
      ? this.spotMode === 'service' ? 'ZONES INDICATIVES · BANDE L' : 'VISIBILITÉ GÉOMÉTRIQUE · HORIZON 5°'
      : 'FLOTTE INMARSAT · EMPREINTES MASQUÉES', 24, legendY + 17);

    ctx.font = '600 11px "Space Grotesk", sans-serif';

    SLIDE5_SATELLITES.forEach((sat, index) => {
      const isSelected = selId === sat.id;
      const text = sat.name;
      const itemW = (boxWTotal - 20) / columns;
      const startX = 26 + (index % columns) * itemW;
      const rowY = legendY + 27 + Math.floor(index / columns) * 26;

      if (isSelected) {
        ctx.fillStyle = `${sat.color}33`;
        ctx.strokeStyle = sat.color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(startX - 4, rowY - 1, itemW - 6, 22, 4);
        else ctx.rect(startX - 4, rowY - 1, itemW - 6, 22);
        ctx.fill();
        ctx.stroke();
      }

      // Pastille couleur
      ctx.fillStyle = sat.color;
      ctx.beginPath();
      ctx.arc(startX + 6, rowY + 10, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Texte
      ctx.fillStyle = isSelected ? '#ffffff' : '#c9d6e2';
      ctx.fillText(text, startX + 16, rowY + 14);

      this.legendBoxes.push({
        id: sat.id,
        x: startX - 4,
        y: rowY - 1,
        w: itemW - 6,
        h: 22
      });

    });

    ctx.restore();
  }
}
