import * as THREE from 'three';
import { groundStations } from '../shared/catalogue.js';

export const EARTH_RADIUS_KM = 6371;
export const LIGHT_SPEED_KMS = 299792.458;

// Calcul géométrique de l'empreinte au sol / spot (Angle theta au centre de la Terre)
export function calculateFootprint(altitudeKm, minElevationDeg = 5, customRadiusDeg = null) {
  const alt = Math.max(100, Number(altitudeKm) || 35786);

  let thetaRad, thetaDeg;
  if (customRadiusDeg != null) {
    thetaDeg = Number(customRadiusDeg);
    thetaRad = (thetaDeg * Math.PI) / 180;
  } else {
    const eps = (minElevationDeg * Math.PI) / 180;
    const cosEps = Math.cos(eps);
    const ratio = (EARTH_RADIUS_KM / (EARTH_RADIUS_KM + alt)) * cosEps;
    thetaRad = Math.acos(Math.max(-1, Math.min(1, ratio))) - eps;
    thetaDeg = (thetaRad * 180) / Math.PI;
  }

  const arcRadiusKm = EARTH_RADIUS_KM * thetaRad;
  const diameterKm = Math.round(2 * arcRadiusKm);
  const areaKm2 = 2 * Math.PI * EARTH_RADIUS_KM * EARTH_RADIUS_KM * (1 - Math.cos(thetaRad));
  const areaPctEarth = ((1 - Math.cos(thetaRad)) / 2) * 100;

  return {
    thetaRad,
    thetaDeg: Number(thetaDeg.toFixed(1)),
    arcRadiusKm: Math.round(arcRadiusKm),
    diameterKm,
    areaKm2,
    areaPctEarth: areaPctEarth.toFixed(1)
  };
}

// Conversion coordonnées géographiques (Lat, Lon) -> Repère local de la Terre dans Three.js
export function geoToEarthLocal(latDeg, lonDeg, radius = 1.003) {
  const phi = (latDeg * Math.PI) / 180;
  const lambda = (lonDeg * Math.PI) / 180;
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const cosLam = Math.cos(lambda);
  const sinLam = Math.sin(lambda);

  return new THREE.Vector3(
    radius * cosPhi * cosLam,
    radius * sinPhi,
    -radius * cosPhi * sinLam
  );
}

// Rose des vents pour l'azimut
const COMPASS_POINTS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'];
export function compassHeading(degrees) {
  const normalized = ((degrees % 360) + 360) % 360;
  const index = Math.round(normalized / 22.5) % 16;
  return COMPASS_POINTS[index];
}

// Calcul des angles de pointage et visibilité observateur (Look Angles)
export function calculateObserverLookAngles(obsLatDeg, obsLonDeg, satLatDeg, satLonDeg, satAltKm, minElevationDeg = 5) {
  const phi1 = (obsLatDeg * Math.PI) / 180;
  const phi2 = (satLatDeg * Math.PI) / 180;
  const dLam = ((satLonDeg - obsLonDeg) * Math.PI) / 180;

  const cosPsi = Math.sin(phi1) * Math.sin(phi2) + Math.cos(phi1) * Math.cos(phi2) * Math.cos(dLam);
  const psiRad = Math.acos(Math.max(-1, Math.min(1, cosPsi)));
  const psiDeg = (psiRad * 180) / Math.PI;

  const footprint = calculateFootprint(satAltKm, minElevationDeg);
  const inFootprint = psiRad <= footprint.thetaRad;

  const rEarth = EARTH_RADIUS_KM;
  const rSat = EARTH_RADIUS_KM + Math.max(100, satAltKm);
  const slantRangeKm = Math.sqrt(rEarth * rEarth + rSat * rSat - 2 * rEarth * rSat * cosPsi);

  const sinElev = (rSat * Math.cos(psiRad) - rEarth) / slantRangeKm;
  const elevationDeg = (Math.asin(Math.max(-1, Math.min(1, sinElev))) * 180) / Math.PI;

  const y = Math.sin(dLam);
  const x = Math.cos(phi1) * Math.tan(phi2) - Math.sin(phi1) * Math.cos(dLam);
  let azimuthDeg = (Math.atan2(y, x) * 180) / Math.PI;
  azimuthDeg = (azimuthDeg + 360) % 360;

  const rttMs = Math.round(((2 * slantRangeKm) / LIGHT_SPEED_KMS) * 1000);

  return {
    inFootprint,
    elevationDeg: Number(elevationDeg.toFixed(1)),
    azimuthDeg: Number(azimuthDeg.toFixed(1)),
    compass: compassHeading(azimuthDeg),
    slantRangeKm: Math.round(slantRangeKm),
    rttMs,
    psiDeg: Number(psiDeg.toFixed(1))
  };
}

// Visualisateur 3D professionnel du spot terrestre et des contours de flotte (Viasat + Inmarsat Slide 5)
export class SatelliteSpotVisualizer {
  constructor(scene, earth = null, { includeGroundStations = true } = {}) {
    this.scene = scene;
    this.earth = earth;

    // Groupe principal dans la scène
    this.group = new THREE.Group();
    this.group.name = 'satellite-spot-group';
    this.scene.add(this.group);

    // Groupe pour les stations sol (GES) attachées à la Terre
    this.groundStationsGroup = new THREE.Group();
    this.groundStationsGroup.name = 'viasat-ground-stations-group';
    if (this.earth) {
      this.earth.add(this.groundStationsGroup);
    } else {
      this.scene.add(this.groundStationsGroup);
    }
    if (includeGroundStations) this.initGroundStations();

    this.visible = false;
    this.showBeam = true;
    this.pulseTime = 0;

    this.capMesh = null;
    this.rimLine = null;
    this.laserLine = null;
    this.beamLines = null;
    this.mode = 'service';
    this.lastCenterDir = null;
    this.lastThetaRad = null;
    this.lastColor = null;
    this.lastSatPos = null;
    this.lastNadirPos = null;
    this.lastBeamColor = null;

    this.initNadirMarker();
  }

  setMode(mode) {
    if (this.mode !== mode) {
      this.mode = mode;
      this.lastCenterDir = null;
      this.lastThetaRad = null;
      this.lastSatPos = null;
      this.lastNadirPos = null;
    }
  }

  setEarth(earth) {
    if (this.earth === earth) return;
    if (this.earth && this.groundStationsGroup.parent === this.earth) {
      this.earth.remove(this.groundStationsGroup);
    }
    this.earth = earth;
    if (this.earth) {
      this.earth.add(this.groundStationsGroup);
    }
  }

  initNadirMarker() {
    this.nadirMarkerGroup = new THREE.Group();

    // Point central blanc net au nadir (surface du globe)
    const centerGeom = new THREE.SphereGeometry(0.016, 16, 16);
    const centerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centerMesh = new THREE.Mesh(centerGeom, centerMat);
    this.nadirMarkerGroup.add(centerMesh);

    // Anneaux radar pulsants sur le sol au nadir
    this.nadirRings = [];
    for (let i = 0; i < 2; i++) {
      const ringGeom = new THREE.RingGeometry(0.018, 0.026, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0.85
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.userData = { phase: i * 0.5 };
      this.nadirMarkerGroup.add(ringMesh);
      this.nadirRings.push(ringMesh);
    }

    this.group.add(this.nadirMarkerGroup);
    this.nadirMarkerGroup.visible = false;
  }

  initGroundStations() {
    groundStations.forEach(st => {
      const pos = geoToEarthLocal(st.lat, st.lon, 1.004);

      // Pastille de station sol
      const geom = new THREE.SphereGeometry(0.009, 12, 12);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffc107 });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(pos);
      this.groundStationsGroup.add(mesh);

      // Petit anneau radar au sol
      const ringGeom = new THREE.RingGeometry(0.012, 0.016, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffd54f,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      this.groundStationsGroup.add(ringMesh);
    });
  }

  // Construit le contour sphérique pur et le maillage calotte sans déformation ni z-fighting
  createSphericalFootprint(nadirDir, thetaRad, color) {
    if (
      this.capMesh &&
      this.rimLine &&
      this.lastCenterDir &&
      this.lastCenterDir.distanceTo(nadirDir) < 0.0002 &&
      Math.abs(this.lastThetaRad - thetaRad) < 0.0002 &&
      this.lastColor === color
    ) {
      this.capMesh.visible = true;
      this.rimLine.visible = true;
      return;
    }

    this.lastCenterDir = nadirDir.clone();
    this.lastThetaRad = thetaRad;
    this.lastColor = color;

    if (this.capMesh) {
      this.group.remove(this.capMesh);
      this.capMesh.geometry.dispose();
      this.capMesh.material.dispose();
      this.capMesh = null;
    }
    if (this.rimLine) {
      this.group.remove(this.rimLine);
      this.rimLine.geometry.dispose();
      this.rimLine.material.dispose();
      this.rimLine = null;
    }

    const rSurface = 1.003;
    const rLine = 1.0042;
    const segments = 128;
    const numRings = 8;

    // Base orthonormée u, v perpendiculaire à n
    const n = nadirDir.clone().normalize();
    const up = Math.abs(n.y) < 0.99 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const u = new THREE.Vector3().crossVectors(n, up).normalize();
    const v = new THREE.Vector3().crossVectors(n, u).normalize();

    const cosT = Math.cos(thetaRad);
    const sinT = Math.sin(thetaRad);

    // 1. Ligne de contour fermée (LineLoop)
    const rimPoints = [];
    for (let i = 0; i < segments; i++) {
      const beta = (i / segments) * Math.PI * 2;
      const cosB = Math.cos(beta);
      const sinB = Math.sin(beta);

      const pt = new THREE.Vector3(
        rLine * (cosT * n.x + sinT * (cosB * u.x + sinB * v.x)),
        rLine * (cosT * n.y + sinT * (cosB * u.y + sinB * v.y)),
        rLine * (cosT * n.z + sinT * (cosB * u.z + sinB * v.z))
      );
      rimPoints.push(pt);
    }
    this.activeRimPoints = rimPoints;

    const rimGeom = new THREE.BufferGeometry().setFromPoints(rimPoints);
    const rimMat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.95,
      linewidth: 2.2
    });
    this.rimLine = new THREE.LineLoop(rimGeom, rimMat);
    this.group.add(this.rimLine);

    // 2. Calotte sphérique remplie (Triangle Fan multi-anneaux)
    const vertices = [n.x * rSurface, n.y * rSurface, n.z * rSurface];
    const indices = [];

    for (let r = 1; r <= numRings; r++) {
      const frac = r / numRings;
      const curTheta = thetaRad * frac;
      const cTh = Math.cos(curTheta);
      const sTh = Math.sin(curTheta);

      for (let i = 0; i < segments; i++) {
        const beta = (i / segments) * Math.PI * 2;
        const cosB = Math.cos(beta);
        const sinB = Math.sin(beta);

        vertices.push(
          rSurface * (cTh * n.x + sTh * (cosB * u.x + sinB * v.x)),
          rSurface * (cTh * n.y + sTh * (cosB * u.y + sinB * v.y)),
          rSurface * (cTh * n.z + sTh * (cosB * u.z + sinB * v.z))
        );
      }
    }

    // Triangles du centre vers l'anneau 1
    for (let i = 0; i < segments; i++) {
      const next = (i + 1) % segments;
      indices.push(0, 1 + i, 1 + next);
    }

    // Bandes de quadrilatères entre l'anneau r et l'anneau r+1
    for (let r = 1; r < numRings; r++) {
      const startCur = 1 + (r - 1) * segments;
      const startNext = 1 + r * segments;
      for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const a = startCur + i;
        const b = startCur + next;
        const c = startNext + i;
        const d = startNext + next;
        indices.push(a, c, b);
        indices.push(b, c, d);
      }
    }

    const capGeom = new THREE.BufferGeometry();
    capGeom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    capGeom.setIndex(indices);
    capGeom.computeVertexNormals();

    const capMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -2
    });

    this.capMesh = new THREE.Mesh(capGeom, capMat);
    this.group.add(this.capMesh);
  }

  updateSpot(satelliteVector, satAltKm, options = {}) {
    if (!satelliteVector || satelliteVector.lengthSq() === 0) {
      this.hide();
      return;
    }

    this.visible = true;
    this.nadirMarkerGroup.visible = true;

    const nadirDir = satelliteVector.clone().normalize();
    const nadirPos = nadirDir.clone().multiplyScalar(1.004);

    // Orientation vers le nadir
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), nadirDir);

    // Détermination de la couleur (selon Slide 5 ou constellation)
    const spotColor = options.color || 0x00f0ff;

    const activeMode = options.mode || this.mode || 'service';
    let thetaDeg = calculateFootprint(satAltKm, 5).thetaDeg;
    let centerDir = nadirDir;

    if (activeMode === 'service') {
      if (options.serviceRadiusDeg && options.serviceRadiusDeg < 50) {
        thetaDeg = options.serviceRadiusDeg;
      }
      if (options.coverageZone?.center && this.earth) {
        const czPos = geoToEarthLocal(options.coverageZone.center.lat, options.coverageZone.center.lon, 1.0);
        centerDir = czPos.clone().applyMatrix4(this.earth.matrixWorld).normalize();
      }
    }
    const thetaRad = (thetaDeg * Math.PI) / 180;

    // 1. Calotte sphérique et pourtour de faisceau sur Terre
    this.createSphericalFootprint(centerDir, thetaRad, spotColor);

    // 2. Positionnement du marqueur nadir au sol
    this.nadirMarkerGroup.position.copy(nadirPos);
    this.nadirMarkerGroup.quaternion.copy(quat);
    this.nadirMarkerGroup.rotateX(Math.PI / 2);

    // 3. Faisceau 3D descendant du satellite vers la Terre
    this.updateBeam(satelliteVector, nadirPos, spotColor);
  }

  updateBeam(satelliteVector, nadirPos, color) {
    if (!this.showBeam) {
      if (this.laserLine) this.laserLine.visible = false;
      if (this.beamLines) this.beamLines.visible = false;
      return;
    }

    if (
      this.laserLine &&
      this.beamLines &&
      this.lastSatPos &&
      this.lastSatPos.distanceTo(satelliteVector) < 0.001 &&
      this.lastNadirPos &&
      this.lastNadirPos.distanceTo(nadirPos) < 0.001 &&
      this.lastBeamColor === color
    ) {
      this.laserLine.visible = true;
      this.beamLines.visible = true;
      return;
    }

    this.lastSatPos = satelliteVector.clone();
    this.lastNadirPos = nadirPos.clone();
    this.lastBeamColor = color;

    if (this.laserLine) {
      this.group.remove(this.laserLine);
      this.laserLine.geometry.dispose();
      this.laserLine.material.dispose();
      this.laserLine = null;
    }
    if (this.beamLines) {
      this.group.remove(this.beamLines);
      this.beamLines.geometry.dispose();
      this.beamLines.material.dispose();
      this.beamLines = null;
    }

    // Rayon laser axial central : Satellite -> Point sous-satellite au sol (Nadir)
    const laserGeom = new THREE.BufferGeometry().setFromPoints([satelliteVector, nadirPos]);
    const laserMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });
    this.laserLine = new THREE.Line(laserGeom, laserMat);
    this.group.add(this.laserLine);

    // 12 rayons directeurs coniques reliant le satellite aux points du contour au sol
    const rayPoints = [];
    const numRays = 12;
    const step = Math.floor(this.activeRimPoints.length / numRays) || 1;

    for (let i = 0; i < numRays; i++) {
      const idx = (i * step) % this.activeRimPoints.length;
      const rimPt = this.activeRimPoints[idx];
      rayPoints.push(satelliteVector.clone(), rimPt);
    }

    if (rayPoints.length > 0) {
      const beamGeom = new THREE.BufferGeometry().setFromPoints(rayPoints);
      const beamMat = new THREE.LineSegments(
        beamGeom,
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0.25
        })
      );
      this.beamLines = beamMat;
      this.group.add(this.beamLines);
    }
  }

  animate(deltaSeconds) {
    if (!this.visible) return;

    this.pulseTime += deltaSeconds * 1.5;

    // Pulsation douce des anneaux radar au sol
    this.nadirRings.forEach(ring => {
      const p = (this.pulseTime + ring.userData.phase) % 1;
      const scale = 1 + p * 3.2;
      ring.scale.set(scale, scale, scale);
      ring.material.opacity = Math.max(0, 0.9 * (1 - p));
    });

    // Éclat du pourtour de la zone géographique
    if (this.rimLine) {
      const glow = 0.8 + Math.sin(this.pulseTime * 2.5) * 0.2;
      this.rimLine.material.opacity = Math.min(1, Math.max(0.4, glow));
    }
  }

  toggleBeam(show) {
    this.showBeam = Boolean(show);
    if (this.beamLines) this.beamLines.visible = this.showBeam;
    if (this.laserLine) this.laserLine.visible = this.showBeam;
  }

  hide() {
    this.visible = false;
    this.nadirMarkerGroup.visible = false;
    if (this.capMesh) this.capMesh.visible = false;
    if (this.rimLine) this.rimLine.visible = false;
    if (this.beamLines) this.beamLines.visible = false;
    if (this.laserLine) this.laserLine.visible = false;
  }
}
