import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { json2satrec, propagate, gstime, eciToGeodetic } from 'satellite.js';
import {
  createIcons, Search, Orbit, Play, Pause, RotateCcw, Plus, Minus, Focus,
  ChevronRight, ArrowUpRight, Radio, X, Info, Satellite, Globe, Map as MapIcon, Target,
  Antenna, Compass, Signal, Sparkles, Filter
} from 'lucide';
import { SatelliteFollow } from './follow-camera.js';
import { SimulationClock, formatTimeOffset } from './time.js';
import { orbitalDataStatus } from './data-status.js';
import { createSatelliteModel, updateSatelliteModel, disposeSatelliteModels } from './satellite-model.js';
import { earthAngle, scenePosition } from './reference-frame.js';
import { calculateFootprint, calculateObserverLookAngles, geoToEarthLocal, SatelliteSpotVisualizer } from './spot.js';
import { WorldMapTracker2D } from './map2d.js';
import { isViasatSatellite, isOperationalLBandSatellite, fleetInfo, fleetCategories, fleetSources, fleet, isPointInCoverage } from '../shared/catalogue.js';
import './style.css';

const baseUrl = import.meta.env.BASE_URL || './';
const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

const icon = name => `<i data-lucide="${name}"></i>`;

// Stations sol observateur prédéfinies
const OBSERVER_PRESETS = [
  { id: 'paris', name: 'Paris (France)', lat: 48.8566, lon: 2.3522 },
  { id: 'toulouse', name: 'Toulouse · CNES (France)', lat: 43.6047, lon: 1.4442 },
  { id: 'brest', name: 'Brest · Façade Atlantique', lat: 48.3904, lon: -4.4861 },
  { id: 'kourou', name: 'Kourou · CSG Guyane', lat: 5.1588, lon: -52.6499 },
  { id: 'washington', name: 'Washington D.C. (USA)', lat: 38.9072, lon: -77.0369 },
  { id: 'carlsbad', name: 'Carlsbad · Siège Viasat (USA)', lat: 33.1581, lon: -117.3506 },
  { id: 'newyork', name: 'New York (USA)', lat: 40.7128, lon: -74.0060 },
  { id: 'miami', name: 'Miami (USA)', lat: 25.7617, lon: -80.1918 },
  { id: 'losangeles', name: 'Los Angeles (USA)', lat: 34.0522, lon: -118.2437 },
  { id: 'london', name: 'Londres (UK)', lat: 51.5074, lon: -0.1278 },
  { id: 'tokyo', name: 'Tokyo (Japon)', lat: 35.6762, lon: 139.6503 }
];

let currentObserver = OBSERVER_PRESETS[0];
let currentSpotMode = 'global'; // Visibilité géométrique par défaut ; régions de service illustratives.

document.querySelector('#app').innerHTML = `
<header>
  <a class="brand" href="/">
    ${icon('satellite')} ORBITAL
    <span>SUIVI DE FLOTTE BANDE L · SÉCURITÉ AÉRO & MARITIME</span>
  </a>
  <div class="view-switchers" role="tablist" aria-label="Mode de vue">
    <button id="view-mode-3d" class="view-btn active" role="tab" aria-selected="true">${icon('globe')} Globe 3D</button>
    <button id="view-mode-2d" class="view-btn" role="tab" aria-selected="false">${icon('map')} Carte 2D & Trace</button>
  </div>
  <div class="header-right">
    <span class="system" id="telemetry-status">${icon('radio')} <span id="status-label">Télémétrie CelesTrak SGP4</span></span>
    <button id="about" class="icon-button" aria-label="À propos des données">${icon('info')}</button>
  </div>
</header>

<main>
  <!-- Volet latéral : Constellation Bande L & Filtres -->
  <aside class="catalogue">
    <div class="eyebrow">CONSTELLATION BANDE L OPÉRATIONNELLE</div>
    <h1>Bande L<span>.</span></h1>
    <p class="intro">Satellites opérationnels de sécurité aéronautique & maritime (FIT Asia Slide 5). Hors satellites de réserve.</p>

    <!-- Filtres rapides par région / océan -->
    <div class="category-filters" role="group" aria-label="Filtres régionaux bande L">
      <button data-cat="all" class="cat-pill active">Tous (5)</button>
      <button data-cat="ior" class="cat-pill">IOR · Indien</button>
      <button data-cat="emea" class="cat-pill">EMEA · Europe-Afr</button>
      <button data-cat="apac" class="cat-pill">APAC · Pacifique</button>
      <button data-cat="amer" class="cat-pill">AMER · Amériques</button>
      <button data-cat="aore" class="cat-pill">AORE · Atlantique</button>
    </div>

    <div class="search-wrap">
      <label class="search">${icon('search')}
        <input id="search" type="search" placeholder="Rechercher par nom, NORAD, région..." aria-label="Rechercher un satellite">
      </label>
      <button id="show-all" class="all-button" title="Afficher tous les satellites ensemble">${icon('focus')} Vue flotte</button>
    </div>

    <div class="list-heading">
      <span>SATELLITES BANDE L ACTIFS</span>
      <span id="count">—</span>
    </div>

    <div id="sat-list" class="sat-list" aria-label="Objets en orbite">
      <div class="loading">Chargement des orbites Bande L…</div>
    </div>

    <div class="source">
      <span class="source-dot"></span>
      <div id="source-text">Connexion à CelesTrak…</div>
      <button id="refresh" class="icon-button" aria-label="Actualiser les données">${icon('rotate-ccw')}</button>
    </div>
  </aside>

  <!-- Zone de visualisation : Globe 3D et Carte 2D -->
  <section class="space" aria-label="Espace de visualisation">
    <div class="map-actions" role="group" aria-label="Affichage de la carte">
      <button id="show-fleet" aria-pressed="false">${icon('satellite')} Tous les satellites</button>
      <button id="toggle-menus" aria-pressed="false">${icon('focus')} <span>Masquer les menus</span></button>
    </div>
    <!-- Conteneur 3D Three.js -->
    <div id="globe"></div>
    <div id="sat-labels" aria-label="Satellites affichés sur le globe"></div>

    <!-- Conteneur 2D World Map -->
    <div id="map2d-container" class="map2d-view" hidden></div>

    <!-- En-tête des calques et réglages -->
    <div class="view-controls-bar">
      <div class="view-heading">
        <span class="live-tag" id="mode">TEMPS RÉEL</span>
        <span class="view-label">VUE GLOBALE</span>
        <label class="layer-toggle"><input id="show-spot" type="checkbox" checked> Spot au sol</label>
        <label class="layer-toggle"><input id="show-beam" type="checkbox" checked> Faisceau 3D</label>
        <label class="layer-toggle"><input id="show-fleet-lband" type="checkbox" checked> Flotte L-band</label>
        <label class="layer-toggle"><input id="show-gateways" type="checkbox" checked> Gateways sol</label>
        <label class="layer-toggle"><input id="show-labels" type="checkbox" checked> Noms</label>
        <label class="layer-toggle"><input id="show-orbits" type="checkbox" checked> Orbites</label>
      </div>

      <div class="view-settings">
        <div role="group" aria-label="Point de vue">
          <button data-frame="space" aria-pressed="true">Vue spatiale</button>
          <button data-frame="earth" aria-pressed="false">Vue terrestre</button>
        </div>
        <label class="layer-toggle"><input id="auto-view" type="checkbox" checked> Vue tournante</label>
      </div>
    </div>

    <!-- Barre d'outils caméra -->
    <div class="globe-tools">
      <button id="zoom-in" class="icon-button" aria-label="Zoom avant">${icon('plus')}</button>
      <button id="zoom-out" class="icon-button" aria-label="Zoom arrière">${icon('minus')}</button>
      <div class="tool-separator"></div>
      <button id="home-view" class="icon-button" aria-label="Recentrer la Terre">${icon('focus')}</button>
    </div>

    <!-- Légende interactive constellation Bande L -->
    <div class="globe-caption">
      <span class="legend-dot" style="background:#b388ff;box-shadow:0 0 6px #b388ff"></span>I-6 F1 (IOR)
      <span class="legend-dot" style="background:#00e676;box-shadow:0 0 6px #00e676"></span>Alphasat (EMEA)
      <span class="legend-dot" style="background:#e91e63;box-shadow:0 0 6px #e91e63"></span>I-4 F2 (APAC)
      <span class="legend-dot" style="background:#00e5ff;box-shadow:0 0 6px #00e5ff"></span>I-4 F3 (AMER)
      <span class="legend-dot" style="background:#e6ee28;box-shadow:0 0 6px #e6ee28"></span>I-3 F5 (AORE)
      <span class="legend-dot spot-dot"></span>Spot au sol
    </div>

    <div id="render-error" hidden>Le globe nécessite WebGL. Essayez un navigateur compatible avec l’accélération graphique.</div>

    <!-- Volet Télémétrie HUD / Spot & Détail Satellite -->
    <article class="detail" id="detail">
      <div class="detail-header">
        <div class="status-badge badge-reserve" id="sat-status-badge">AUCUNE SÉLECTION</div>
        <div class="sat-id-tag" id="sat-cat-id">NORAD —</div>
      </div>

      <h2 id="sat-name">Aucun satellite</h2>
      <p class="norad" id="norad">Sélectionnez un satellite dans la liste, sur le globe 3D ou sur la carte 2D.</p>

      <!-- Section SPOT AU SOL & COUVERTURE GÉOGRAPHIQUE RÉELLE -->
      <div class="hud-box spot-box">
        <div class="hud-box-header">
          <div class="hud-box-title">${icon('target')} COUVERTURE & SPOT AU SOL</div>
          <div class="spot-mode-toggle" role="group" aria-label="Mode de spot">
            <button id="spot-mode-service" class="spot-mode-btn" aria-pressed="false" title="Zone régionale simplifiée, sans garantie de réception">Zone indicative</button>
            <button id="spot-mode-global" class="spot-mode-btn active" aria-pressed="true" title="Visibilité géométrique au-dessus de 5° d’élévation">Horizon 5°</button>
          </div>
        </div>
        <div class="spot-grid">
          <div>
            <span>Point sous-satellite (Nadir)</span>
            <strong id="spot-coords" class="coord-glow">—</strong>
          </div>
          <div>
            <span>Région de référence</span>
            <strong id="spot-zone-name">—</strong>
          </div>
          <div>
            <span id="spot-mode-label">Diamètre du faisceau</span>
            <strong id="spot-diameter">—</strong>
          </div>
          <div>
            <span>Surface de l’empreinte</span>
            <strong id="spot-area">—</strong>
          </div>
        </div>

        <div class="coverage-detail-block">
          <div class="coverage-subhead">RÉGIONS ASSOCIÉES AU SATELLITE</div>
          <div class="badge-cluster" id="spot-countries">
            <span class="coverage-tag">—</span>
          </div>

          <div class="coverage-subhead">SERVICES RÉFÉRENCÉS</div>
          <div class="badge-cluster" id="spot-services">
            <span class="service-tag">—</span>
          </div>

          <div class="spot-beam-type-line">
            <span>Architecture :</span>
            <strong id="spot-beam-type">—</strong>
          </div>

          <!-- Section Spécifique Sécurité Aéronautique (FIT Asia 2025 Slide 6 & 7) -->
          <div id="satcom-datalink-block" class="satcom-datalink-block" hidden>
            <div class="coverage-subhead">LIAISON DE SÉCURITÉ AÉRONAUTIQUE (FANS / IRIS)</div>
            <div class="satcom-datalink-desc" id="satcom-datalink-desc">—</div>
            <div class="satcom-gateways" id="satcom-gateways">—</div>
            <div class="satcom-acars" id="satcom-acars">—</div>
          </div>
        </div>

        <p id="coverage-note" class="coverage-note">Visibilité théorique à partir de 5° d’élévation. La réception dépend du service et de l’antenne.</p>
        <button id="center-spot" class="hud-action-btn">${icon('target')} Centrer la vue sur le satellite et son spot</button>
      </div>

      <!-- Section TÉLÉMÉTRIE ORBITALE -->
      <div class="hud-box telemetry-box">
        <div class="hud-box-title">${icon('satellite')} POSITION ORBITALE CALCULÉE</div>
        <div class="metrics">
          <div><span>Altitude</span><strong id="altitude">—</strong></div>
          <div><span>Vitesse orbitale</span><strong id="velocity">—</strong></div>
          <div><span>Bande & Débit</span><strong id="sat-band-capacity">—</strong></div>
          <div><span>Slot orbital</span><strong id="orbital-slot">—</strong></div>
        </div>
      </div>

      <!-- Section OBSERVATEUR / MON ANTENNE -->
      <div class="hud-box antenna-box">
        <div class="hud-box-header">
          <div class="hud-box-title">${icon('antenna')} POINTAGE MON ANTENNE</div>
          <select id="obs-select" class="obs-select" aria-label="Sélectionner la station d'observation">
            ${OBSERVER_PRESETS.map(o => `<option value="${o.id}">${o.name}</option>`).join('')}
          </select>
        </div>
        <div class="antenna-verdict" id="antenna-verdict">
          <span class="verdict-dot"></span>
          <span id="verdict-text">Calcul de la visibilité…</span>
        </div>
        <div class="antenna-metrics">
          <div><span>Élévation</span><strong id="antenna-elev">—</strong></div>
          <div><span>Azimut</span><strong id="antenna-azim">—</strong></div>
          <div><span>Distance (portée)</span><strong id="antenna-range">—</strong></div>
          <div><span>Trajet radio A/R théorique</span><strong id="antenna-rtt">—</strong></div>
        </div>
      </div>

      <div class="detail-actions">
        <button class="follow" id="follow">${icon('focus')} Suivre le satellite</button>
      </div>

      <p id="epoch" class="epoch">Éléments orbitaux : —</p>
    </article>
  </section>
</main>

<!-- Barre chronologique & simulation -->
<footer class="timeline">
  <div class="time-display">
    <div class="eyebrow">TEMPS DE SIMULATION · UTC</div>
    <time id="sim-date">—</time>
  </div>
  <div class="time-controls">
    <button id="pause" class="play-button" aria-label="Mettre en pause">${icon('pause')}</button>
    <div class="speed">
      <span>VITESSE DU TEMPS</span>
      <div role="group" aria-label="Vitesse de simulation">
        ${[1, 10, 100, 1000].map(v => `<button data-speed="${v}" class="${v === 1 ? 'active' : ''}">×${v.toLocaleString('fr-FR')}</button>`).join('')}
      </div>
    </div>
    <button id="live" class="reset-button">${icon('rotate-ccw')} Temps réel</button>
  </div>
  <div class="scrubber">
    <div>
      <span id="start-time">−12 h</span>
      <span id="offset">Maintenant</span>
      <span>+12 h</span>
    </div>
    <input id="seek" type="range" min="-720" max="720" value="0" step="1" aria-label="Décaler le temps de simulation">
  </div>
</footer>

<!-- Modale À propos & Sources -->
<dialog id="info-dialog">
  <button id="close-info" class="icon-button" aria-label="Fermer">${icon('x')}</button>
  <div class="eyebrow">MISSION CONTROL · CONSTELLATION BANDE L</div>
  <h2>Suivi orbital et empreintes terrestres Bande L en temps réel.</h2>
  <p>Cette application suit cinq satellites de la flotte <strong>Inmarsat bande L</strong> : I-6 F1, Alphasat, I-4 F2, I-4 F3 et I-3 F5. Les positions sont calculées par SGP4 à partir d’éléments orbitaux CelesTrak ; elles ne sont pas une télémétrie mesurée en direct.</p>
  
  <h3>Comment fonctionne le spot sur la Terre ?</h3>
  <p>Le point sous-satellite et les empreintes sont projetés sur la Terre. Deux représentations sont disponibles :</p>
  <ul>
    <li><strong>Zone indicative :</strong> Cercle régional simplifié pour situer la région de référence du satellite. Il ne représente pas les faisceaux commerciaux réels.</li>
    <li><strong>Horizon global (5°) :</strong> Calotte d'horizon théorique maximal pour une visibilité à 5° au-dessus de l'horizon (~17 000 km de diamètre en GEO).</li>
    <li><strong>Cible au sol (Nadir) :</strong> Localise la latitude et la longitude exactes à la verticale sous le satellite avec réticule radar pulsant.</li>
    <li><strong>Faisceau 3D :</strong> Axe laser central et rayons de guidage descendant du satellite vers son spot au sol.</li>
    <li><strong>Calculateur Mon Antenne :</strong> Affiche la visibilité géométrique, l’azimut, l’élévation, la portée et le temps de trajet radio théorique. Il ne confirme ni réception, ni abonnement, ni disponibilité commerciale.</li>
  </ul>
  <p>La <a href="https://www.icao.int/sites/default/files/APAC/Meetings/2024/2024%20FIT-Asia-14/4-Information%20Papers/IP04-Inmarsat-Aeronautical-Satellite-Safety-Communications-Update.pdf" target="_blank" rel="noopener">carte présentée par Inmarsat à l’OACI en juillet 2024 (page 2)</a> donne une vue illustrative de la flotte. Pour connaître une couverture commerciale, consultez la carte du produit concerné chez l’opérateur.</p>

  <h3>Sources officielles :</h3>
  <p>${fleetSources.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${x.title}</a>`).join('<br>')}</p>
</dialog>
`;

const icons = {
  Search, Orbit, Play, Pause, RotateCcw, Plus, Minus, Focus,
  ChevronRight, ArrowUpRight, Radio, X, Info, Satellite, Globe, Map: MapIcon, Target,
  Antenna, Compass, Signal, Sparkles, Filter
};
const refreshIcons = () => createIcons({ icons });
refreshIcons();

const $ = s => document.querySelector(s);
const clock = new SimulationClock();
const tracking = new SatelliteFollow();

let records = [];
let selected = null;
let fleetOverview = false;
let query = '';
let currentCategory = 'all';
let lastUpdate = 0;
let lastOrbit = 0;
let lastTrackSimTime = 0;
let currentViewMode = '3d'; // '3d' | '2d'

let earth, points, orbitLine, renderer, scene, camera, controls, raycaster;
let allOrbits = new THREE.Group();
let showOrbits = true;
let showLabels = true;
let showSpot = true;
let showBeam = true;
let referenceFrame = 'space';
let autoView = true;

let spotVisualizer = null;
const fleetSpots = new Map();
let worldMap2D = null;

// Couleur du spot selon la constellation et Slide 5 FIT Asia 2025
function getSatelliteColor(record) {
  if (record.meta?.slide5Color) {
    return new THREE.Color(record.meta.slide5Color).getHex();
  }
  const cat = record.meta?.category;
  if (cat === 'viasat') return 0x00e5ff; // Cyan électrique
  if (cat === 'gx') return 0x00ff9d;     // Vert émeraude
  if (cat === 'arctic') return 0xc09cff; // Violet polaire
  return 0x5bc4e3;                       // Bleu clair
}

function position(record, date, frame = date) {
  const state = propagate(record.satrec, date);
  if (!state?.position || !state.velocity) return null;
  const gmst = gstime(date);
  const geo = eciToGeodetic(state.position, gmst);
  const world = scenePosition(state.position, frame, referenceFrame);
  if (!Number.isFinite(geo.height) || geo.height < 0) return null;
  return {
    vector: new THREE.Vector3(world.x, world.y, world.z),
    alt: geo.height,
    lat: (geo.latitude * 180) / Math.PI,
    lon: (geo.longitude * 180) / Math.PI,
    velocity: Math.hypot(state.velocity.x, state.velocity.y, state.velocity.z)
  };
}

function initGlobe() {
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2.5));
    renderer.setClearColor(0x060b11, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    $('#globe').append(renderer.domElement);

    scene = new THREE.Scene();
    scene.add(allOrbits);

    camera = new THREE.PerspectiveCamera(40, 1, 0.01, 100);
    camera.position.set(11, 7, 18);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 1.35;
    controls.maxDistance = 80;
    controls.enablePan = false;
    controls.autoRotateSpeed = 0.45;

    // Terre Haute Définition avec relief et reflets océaniques spéculaires
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    const loader = new THREE.TextureLoader();

    const map = loader.load(`${cleanBase}textures/earth.jpg`);
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = maxAnisotropy;

    const specularMap = loader.load(`${cleanBase}textures/specular.jpg`);
    specularMap.anisotropy = maxAnisotropy;

    const normalMap = loader.load(`${cleanBase}textures/normal.jpg`);
    normalMap.anisotropy = maxAnisotropy;

    earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 128, 96),
      new THREE.MeshPhongMaterial({
        map,
        specularMap,
        normalMap,
        normalScale: new THREE.Vector2(0.85, 0.85),
        specular: new THREE.Color(0x285070),
        shininess: 32,
        color: 0xffffff
      })
    );
    scene.add(earth);

    // Éclairage réaliste spatial
    scene.add(new THREE.AmbientLight(0x8faec9, 1.35));
    const sunlight = new THREE.DirectionalLight(0xffffff, 2.9);
    sunlight.name = 'sunlight';
    scene.add(sunlight);

    // Halo atmosphérique haute fidélité
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.032, 96, 64),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexShader: 'varying vec3 n; varying vec3 v; void main(){n=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.0);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',
        fragmentShader: 'varying vec3 n; varying vec3 v; void main(){float a=pow(1.0-abs(dot(n,v)),3.5);gl_FragColor=vec4(0.08,0.65,1.0,a*0.65);}'
      })
    );
    scene.add(atmosphere);

    // Étoiles de fond haute densité
    const stars = new Float32Array(3600);
    for (let i = 0; i < stars.length; i += 3) {
      let a = i * 2.399963, b = Math.acos(1 - 2 * (i / 3 + 0.5) / 1200);
      stars[i] = 60 * Math.sin(b) * Math.cos(a);
      stars[i + 1] = 60 * Math.cos(b);
      stars[i + 2] = 60 * Math.sin(b) * Math.sin(a);
    }
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute('position', new THREE.BufferAttribute(stars, 3));
    scene.add(new THREE.Points(starGeom, new THREE.PointsMaterial({ color: 0x8ea2b4, size: 0.05, transparent: true, opacity: 0.65 })));

    // Visualiseur du Spot au Sol & Faisceau
    spotVisualizer = new SatelliteSpotVisualizer(scene, earth);
    spotVisualizer.setMode(currentSpotMode);

    raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 0.22;

    let down;
    renderer.domElement.addEventListener('pointerdown', e => down = { x: e.clientX, y: e.clientY });
    renderer.domElement.addEventListener('pointerup', e => {
      if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5 || !points) return;
      const rect = renderer.domElement.getBoundingClientRect();
      raycaster.setFromCamera(
        new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1),
        camera
      );
      const hit = raycaster.intersectObject(points, true).find(h => {
        return !raycaster.intersectObject(earth).some(x => x.distance < h.distance);
      });
      if (hit) select(records.find(record => record.data.NORAD_CAT_ID === hit.object.userData.satelliteId));
    });

    let sized = false;
    new ResizeObserver(() => {
      const rect = $('#globe').getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      renderer.setSize(rect.width, rect.height);
      camera.aspect = rect.width / rect.height;
      if (!sized) {
        camera.position.setLength(Math.max(21, 7.4 / (Math.tan(THREE.MathUtils.degToRad(20)) * camera.aspect)));
        sized = true;
      }
      camera.updateProjectionMatrix();
      if (fleetOverview) fitFleet();
    }).observe($('#globe'));

  } catch (e) {
    renderer?.dispose();
    renderer = null;
    scene = null;
    camera = null;
    controls = null;
    $('#view-mode-3d').disabled = true;
    $('#view-mode-3d').title = 'WebGL indisponible : la carte 2D reste accessible';
    switchViewMode('2d');
    console.error(e);
  }
}

function updateGlobe(date) {
  if (!renderer) {
    records.forEach(record => { record.current = position(record, date); });
    if (selected && Math.abs(clock.time - lastTrackSimTime) > 30000) {
      lastTrackSimTime = clock.time;
      worldMap2D.groundTrack = calculateGroundTrack(selected, date);
    }
    worldMap2D?.update(date, records);
    return;
  }

  earth.rotation.y = earthAngle(date, referenceFrame);
  earth.updateMatrixWorld(true);

  records.forEach((r, i) => {
    const p = position(r, date);
    r.current = p;
  });

  // Un spot distinct par satellite en vue flotte, avec les mêmes calculs
  // et couleurs que la sélection individuelle, sans dupliquer les stations.
  const visibleFleetIds = new Set();
  if (fleetOverview && showSpot && currentViewMode === '3d') {
    for (const record of records) {
      if (!record.current) continue;
      const id = record.data.NORAD_CAT_ID;
      let visualizer = fleetSpots.get(id);
      if (!visualizer) {
        visualizer = new SatelliteSpotVisualizer(scene, earth, { includeGroundStations: false });
        fleetSpots.set(id, visualizer);
      }
      visualizer.toggleBeam(showBeam);
      visualizer.updateSpot(record.current.vector, record.current.alt, {
        color: getSatelliteColor(record),
        mode: currentSpotMode,
        serviceRadiusDeg: record.meta?.serviceSpotRadiusDeg || 26,
        coverageZone: record.meta?.coverageZone
      });
      visibleFleetIds.add(id);
    }
  }
  for (const [id, visualizer] of fleetSpots) {
    if (!visibleFleetIds.has(id)) visualizer.hide();
  }

  // Position du Soleil
  const utc = date.getUTCHours() + date.getUTCMinutes() / 60;
  const sunAngle = ((12 - utc) / 24) * Math.PI * 2 + earthAngle(date, referenceFrame);
  const day = (date - Date.UTC(date.getUTCFullYear(), 0, 0)) / 86400000;
  const decl = 0.409 * Math.sin((2 * Math.PI * (day - 81)) / 365.25);
  scene.getObjectByName('sunlight').position.set(Math.cos(sunAngle) * 10, Math.sin(decl) * 10, -Math.sin(sunAngle) * 10);

  if (selected?.current) {
    if (currentViewMode === '3d') {

      // Mise à jour du Spot au Sol & Faisceau (en vue 3D uniquement)
      if (showSpot && spotVisualizer) {
        spotVisualizer.updateSpot(selected.current.vector, selected.current.alt, {
          color: getSatelliteColor(selected),
          serviceColor: 0x00ff9d,
          mode: currentSpotMode,
          serviceRadiusDeg: selected.meta?.serviceSpotRadiusDeg || 26,
          coverageZone: selected.meta?.coverageZone,
          satLat: selected.current.lat,
          satLon: selected.current.lon
        });
        spotVisualizer.toggleBeam(showBeam);
      } else if (spotVisualizer) {
        spotVisualizer.hide();
      }
    }
  } else {
    if (spotVisualizer) spotVisualizer.hide();
  }

  if ((selected || fleetOverview) && Math.abs(clock.time - lastOrbit) > (referenceFrame === 'space' ? 600000 : 300000)) {
    lastOrbit = clock.time;
    drawOrbit(date);
    drawAllOrbits(date);
  }

  // Mise à jour dynamique de la trace au sol si l'horloge simulée a avancé (> 30s)
  if (selected && Math.abs(clock.time - lastTrackSimTime) > 30000) {
    lastTrackSimTime = clock.time;
    if (worldMap2D) {
      worldMap2D.groundTrack = calculateGroundTrack(selected, date);
    }
  }

  // Mise à jour de la carte 2D si active
  if (worldMap2D && currentViewMode === '2d') {
    worldMap2D.update(date, records);
  }
}

function calculateGroundTrack(record, date) {
  if (!record?.satrec) return [];
  const track = [];
  const period = 86400000 / (record.data?.MEAN_MOTION || 1);
  const stepCount = 60;
  const stepMs = period / stepCount;

  for (let i = -stepCount / 2; i <= stepCount / 2; i++) {
    const t = new Date(+date + i * stepMs);
    const state = propagate(record.satrec, t);
    if (state?.position) {
      const geo = eciToGeodetic(state.position, gstime(t));
      track.push({
        lat: (geo.latitude * 180) / Math.PI,
        lon: (geo.longitude * 180) / Math.PI
      });
    }
  }
  return track;
}

function drawOrbit(date) {
  if (!scene) return;
  if (!selected) {
    if (orbitLine) orbitLine.visible = false;
    return;
  }
  if (orbitLine) {
    scene.remove(orbitLine);
    orbitLine.geometry.dispose();
    orbitLine.material.dispose();
  }
  const coords = [];
  const period = 86400000 / selected.data.MEAN_MOTION;
  for (let i = 0; i <= 180; i++) {
    const p = position(selected, new Date(+date + (period * i) / 180), date);
    if (p) coords.push(p.vector);
  }
  orbitLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(coords),
    new THREE.LineBasicMaterial({ color: getSatelliteColor(selected), transparent: true, opacity: 0.85, linewidth: 2 })
  );
  orbitLine.visible = showOrbits;
  scene.add(orbitLine);
}

function drawAllOrbits(date) {
  for (const child of [...allOrbits.children]) {
    allOrbits.remove(child);
    child.geometry.dispose();
    child.material.dispose();
  }
  allOrbits.visible = showOrbits;
  if (!scene || !fleetOverview) return;
  for (const record of records) {
    const coords = [];
    const period = 86400000 / record.data.MEAN_MOTION;
    for (let i = 0; i <= 180; i++) {
      const point = position(record, new Date(+date + period * i / 180), date);
      if (point) coords.push(point.vector);
    }
    if (coords.length < 2) continue;
    const orbit = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(coords),
      new THREE.LineBasicMaterial({ color: getSatelliteColor(record), transparent: true, opacity: 0.6 })
    );
    allOrbits.add(orbit);
  }
}

function matches(r) {
  const meta = r.meta || {};
  const id = Number(r.data?.NORAD_CAT_ID ?? meta.id);

  if (currentCategory === 'ior') {
    if (id !== 50319) return false;
  } else if (currentCategory === 'emea') {
    if (id !== 39215) return false;
  } else if (currentCategory === 'apac') {
    if (id !== 28899) return false;
  } else if (currentCategory === 'amer') {
    if (id !== 33278) return false;
  } else if (currentCategory === 'aore') {
    if (id !== 25153) return false;
  }

  if (!query) return true;
  const text = `${meta.name || ''} ${meta.alias || ''} ${meta.region || ''} ${meta.band || ''} ${r.data?.OBJECT_NAME || ''} ${r.data?.NORAD_CAT_ID || ''}`.toLowerCase();
  return text.includes(query) || text.replace(/[^a-z0-9]/g, '').includes(query.replace(/[^a-z0-9]/g, ''));
}

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, x => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[x]));
}

function getStatusBadgeHtml(status) {
  if (status === 'service') return '<span class="status-pill status-service">🟢 En service</span>';
  if (status === 'testing') return '<span class="status-pill status-test">🟡 En test</span>';
  if (status === 'partner') return '<span class="status-pill status-partner">🔵 Partenaire</span>';
  if (status === 'reserve') return '<span class="status-pill status-reserve">⚪ Réserve</span>';
  return '<span class="status-pill">Opérationnel</span>';
}

function renderList() {
  const filtered = records.filter(matches);
  $('#count').textContent = `${filtered.length} / ${records.length}`;

  $('#sat-list').innerHTML = filtered.length
    ? filtered.map(r => `
      <button class="sat-row ${selected === r || fleetOverview ? 'selected' : ''}" data-id="${r.data.NORAD_CAT_ID}">
        <span class="sat-symbol ${r.meta?.category || ''}">${icon(r.meta?.category === 'viasat' ? 'satellite' : 'orbit')}</span>
        <span class="sat-info">
          <strong class="sat-title">${escapeHtml(r.meta?.name || r.data.OBJECT_NAME)}</strong>
          <small class="sat-sub">${escapeHtml(r.meta?.orbitalSlot || '')} · <span class="band-tag">${escapeHtml(r.meta?.band || 'Ka')}</span></small>
        </span>
        <span class="sat-status-col">${getStatusBadgeHtml(r.meta?.status)}</span>
        ${icon('chevron-right')}
      </button>
    `).join('')
    : '<div class="empty">Aucun satellite trouvé pour ce filtre.<br>Essayez un autre mot-clé.</div>';

  refreshIcons();
}

function deselect() {
  selected = null;
  fleetOverview = false;
  $('#show-fleet').setAttribute('aria-pressed', 'false');
  stopFollowing();
  $('#detail')?.classList.add('empty-selection');

  $('#sat-name').textContent = 'Aucun satellite';
  $('#sat-cat-id').textContent = 'NORAD —';
  const badge = $('#sat-status-badge');
  badge.className = 'status-badge badge-reserve';
  badge.textContent = 'AUCUNE SÉLECTION';
  $('#norad').textContent = 'Sélectionnez un satellite dans la liste ou sur la carte pour afficher sa trajectoire, ses paramètres orbitaux et sa zone de couverture.';
  $('#sat-band-capacity').textContent = '—';
  $('#orbital-slot').textContent = '—';
  $('#spot-coords').textContent = '—';
  $('#spot-zone-name').textContent = '—';
  $('#spot-diameter').textContent = '—';
  $('#spot-area').textContent = '—';
  $('#spot-countries').innerHTML = '<span class="coverage-tag">—</span>';
  $('#spot-services').innerHTML = '<span class="service-tag">—</span>';
  $('#spot-beam-type').textContent = '—';
  $('#satcom-datalink-block').hidden = true;
  $('#altitude').textContent = '—';
  $('#velocity').textContent = '—';
  $('#antenna-verdict').className = 'antenna-verdict';
  $('#verdict-text').textContent = 'Sélectionnez un satellite pour pointer votre antenne';
  $('#antenna-elev').textContent = '—';
  $('#antenna-azim').textContent = '—';
  $('#antenna-range').textContent = '—';
  $('#antenna-rtt').textContent = '—';
  $('#epoch').textContent = 'Éléments orbitaux : —';

  if (spotVisualizer) spotVisualizer.hide();
  if (orbitLine) orbitLine.visible = false;
  drawAllOrbits(new Date(clock.time));

  renderList();
  updateLabels();
  if (worldMap2D) worldMap2D.setSatellite(null, []);
}

function select(record, { follow = true } = {}) {
  if (!record) {
    deselect();
    return;
  }
  selected = record;
  fleetOverview = false;
  $('#show-fleet').setAttribute('aria-pressed', 'false');
  $('#detail').scrollTop = 0;
  $('#detail')?.classList.remove('empty-selection');
  const meta = record.meta || {};

  $('#sat-name').textContent = meta.name || record.data.OBJECT_NAME;
  $('#sat-cat-id').textContent = `NORAD ${record.data.NORAD_CAT_ID}`;

  // Badge de statut
  const badge = $('#sat-status-badge');
  badge.className = 'status-badge';
  if (meta.status === 'service') {
    badge.textContent = '🟢 EN SERVICE COMMERCIAL';
    badge.classList.add('badge-service');
  } else if (meta.status === 'testing') {
    badge.textContent = '🟡 EN COURS DE TEST / DÉPLOIEMENT';
    badge.classList.add('badge-testing');
  } else if (meta.status === 'partner') {
    badge.textContent = '🔵 CHARGE UTILE PARTENAIRE';
    badge.classList.add('badge-partner');
  } else if (meta.status === 'reserve') {
    badge.textContent = '⚪ RÉSERVE OPÉRATIONNELLE';
    badge.classList.add('badge-reserve');
  } else {
    badge.textContent = 'SATELLITE OPÉRATIONNEL';
  }

  $('#norad').textContent = `${meta.alias || ''} · ${meta.description || ''}`;
  $('#sat-band-capacity').textContent = `${meta.band || 'Ka'} · ${meta.capacity || 'Haut débit'}`;
  $('#orbital-slot').textContent = meta.orbitalSlot || '—';

  const zone = meta.coverageZone;
  $('#spot-zone-name').textContent = zone?.name || meta.region || 'Couverture globale';
  $('#spot-beam-type').textContent = zone?.beamArchitecture || meta.spotBeamType || 'Bande Ka Viasat';

  if (zone?.countries && zone.countries.length) {
    $('#spot-countries').innerHTML = zone.countries
      .map(c => `<span class="coverage-tag">${escapeHtml(c)}</span>`)
      .join('');
  } else {
    $('#spot-countries').innerHTML = `<span class="coverage-tag">${escapeHtml(meta.region || 'Zone globale')}</span>`;
  }

  if (zone?.services && zone.services.length) {
    $('#spot-services').innerHTML = zone.services
      .map(s => `<span class="service-tag">${escapeHtml(s)}</span>`)
      .join('');
  } else {
    $('#spot-services').innerHTML = `<span class="service-tag">Connectivité satellite</span>`;
  }

  // Section Liaison de sécurité aéronautique (Slide 6 & 7)
  const datalinkBlock = $('#satcom-datalink-block');
  if (meta.gateways || meta.safetyDataLink) {
    datalinkBlock.hidden = false;
    const s = meta.safetyDataLink || {};
    const parts = [];
    if (s.fans) parts.push(`<strong>${escapeHtml(s.fans)}</strong>`);
    if (s.iris) parts.push(`<strong>Iris:</strong> ${escapeHtml(s.iris)}`);
    if (s.classicAero) parts.push(`<strong>Classic:</strong> ${escapeHtml(s.classicAero)}`);
    if (s.sbs) parts.push(`<strong>SB-S:</strong> ${escapeHtml(s.sbs)}`);
    if (s.voice) parts.push(`<strong>Voix:</strong> ${escapeHtml(s.voice)}`);
    $('#satcom-datalink-desc').innerHTML = parts.join(' · ') || 'Liaison de données aéronautique opérationnelle';

    const gw = meta.gateways;
    if (gw) {
      $('#satcom-gateways').innerHTML = `🏢 <strong>Gateways sol (Passerelles Slide 6) :</strong> Primaire: ${escapeHtml(gw.primary || '—')} · Secondaire: ${escapeHtml(gw.secondary || 'Aucune')}`;
      $('#satcom-acars').innerHTML = `📡 <strong>Codes ACARS :</strong> ARINC: <code>${escapeHtml(gw.arinc || '—')}</code> | SITA: <code>${escapeHtml(gw.sita || '—')}</code> | ADCC: <code>${escapeHtml(gw.adcc || '—')}</code>`;
    } else {
      $('#satcom-gateways').innerHTML = '';
      $('#satcom-acars').innerHTML = '';
    }
  } else {
    datalinkBlock.hidden = true;
  }

  const epoch = new Date(record.data.EPOCH.endsWith('Z') ? record.data.EPOCH : record.data.EPOCH + 'Z');
  const ageDays = Math.max(0, Math.floor((Date.now() - epoch.getTime()) / 86400000));
  const origin = record.data.DATA_SOURCE === 'fallback' ? 'Données de secours' : 'CelesTrak';
  $('#epoch').textContent = `${origin} · Éléments OMM du ${epoch.toLocaleString('fr-FR', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })} UTC${ageDays ? ` · âge : ${ageDays} j` : ''}${ageDays > 7 ? ' · Précision dégradée' : ''}`;

  renderList();
  lastOrbit = 0;
  const simDate = new Date(clock.time);
  updateGlobe(simDate);
  drawOrbit(simDate);
  drawAllOrbits(simDate);
  updateDetails();

  // Mise à jour de la carte 2D
  if (worldMap2D) {
    const track = calculateGroundTrack(record, simDate);
    worldMap2D.setSatellite(record, track);
  }

  if (follow) startFollowing();
}

function updateDetails() {
  const p = selected?.current;
  if (!p) {
    $('#altitude').textContent = 'Indisponible';
    $('#velocity').textContent = '—';
    $('#spot-coords').textContent = '—';
    $('#spot-diameter').textContent = '—';
    $('#spot-area').textContent = '—';
    return;
  }

  // Télémétrie
  $('#altitude').textContent = `${Math.round(p.alt).toLocaleString('fr-FR')} km`;
  const kmh = Math.round(p.velocity * 3600);
  $('#velocity').textContent = `${p.velocity.toFixed(2)} km/s (${kmh.toLocaleString('fr-FR')} km/h)`;

  // Spot terrestre
  const latStr = `${Math.abs(p.lat).toFixed(2)}° ${p.lat >= 0 ? 'N' : 'S'}`;
  const lonStr = `${Math.abs(p.lon).toFixed(2)}° ${p.lon >= 0 ? 'E' : 'O'}`;
  $('#spot-coords').textContent = `${latStr} · ${lonStr}`;

  const meta = selected?.meta || {};
  const isGlobal = currentSpotMode === 'global';
  const footprint = isGlobal
    ? calculateFootprint(p.alt, 5)
    : calculateFootprint(p.alt, 5, meta.serviceSpotRadiusDeg || 26);

  $('#spot-mode-label').textContent = isGlobal ? 'Diamètre horizon 5°' : 'Diamètre indicatif';
  $('#coverage-note').textContent = isGlobal
    ? 'Visibilité théorique à partir de 5° d’élévation. La réception dépend du service et de l’antenne.'
    : 'Cercle régional illustratif. Ce contour ne représente pas les faisceaux commerciaux réels et ne garantit aucune réception.';
  $('#spot-diameter').textContent = `${footprint.diameterKm.toLocaleString('fr-FR')} km`;
  const areaMillion = (footprint.areaKm2 / 1000000).toFixed(1);
  $('#spot-area').textContent = `${areaMillion} M km² (${footprint.areaPctEarth}%)`;

  // Observateur / Mon Antenne
  updateObserverVerdict(p);
}

function updateObserverVerdict(satellitePos) {
  if (!currentObserver || !satellitePos) return;

  const look = calculateObserverLookAngles(
    currentObserver.lat,
    currentObserver.lon,
    satellitePos.lat,
    satellitePos.lon,
    satellitePos.alt,
    5
  );

  const verdictEl = $('#antenna-verdict');
  const verdictText = $('#verdict-text');
  const meta = selected?.meta;
  const inCoverage = isPointInCoverage(currentObserver.lat, currentObserver.lon, meta);

  if (look.inFootprint) {
    verdictEl.className = 'antenna-verdict in-coverage';
    const zone = currentSpotMode === 'service'
      ? ` · ${inCoverage ? 'Dans' : 'Hors de'} la zone indicative` : '';
    verdictText.textContent = `VISIBLE À 5° · ${currentObserver.name}${zone}. Réception non vérifiée.`;
  } else {
    verdictEl.className = 'antenna-verdict out-coverage';
    verdictText.textContent = look.elevationDeg > 0
      ? `SOUS LE SEUIL DE 5° · ${currentObserver.name} · Satellite au-dessus de l’horizon`
      : `SOUS L’HORIZON · ${currentObserver.name}`;
  }

  $('#antenna-elev').textContent = `${look.elevationDeg > 0 ? '+' : ''}${look.elevationDeg}°`;
  $('#antenna-azim').textContent = `${look.azimuthDeg}° (${look.compass})`;
  $('#antenna-range').textContent = `${look.slantRangeKm.toLocaleString('fr-FR')} km`;
  $('#antenna-rtt').textContent = `${look.rttMs} ms`;
}

// Bascule du mode de spot (Faisceau de service vs Horizon global 5°)
$('#spot-mode-service').onclick = () => {
  currentSpotMode = 'service';
  $('#spot-mode-service').classList.add('active');
  $('#spot-mode-global').classList.remove('active');
  $('#spot-mode-service').setAttribute('aria-pressed', 'true');
  $('#spot-mode-global').setAttribute('aria-pressed', 'false');
  if (spotVisualizer) spotVisualizer.setMode('service');
  if (worldMap2D) worldMap2D.setSpotMode('service');
  updateDetails();
  updateGlobe(new Date(clock.time));
};

$('#spot-mode-global').onclick = () => {
  currentSpotMode = 'global';
  $('#spot-mode-global').classList.add('active');
  $('#spot-mode-service').classList.remove('active');
  $('#spot-mode-global').setAttribute('aria-pressed', 'true');
  $('#spot-mode-service').setAttribute('aria-pressed', 'false');
  if (spotVisualizer) spotVisualizer.setMode('global');
  if (worldMap2D) worldMap2D.setSpotMode('global');
  updateDetails();
  updateGlobe(new Date(clock.time));
};

async function load() {
  const button = $('#refresh');
  button.disabled = true;
  $('#source-text').textContent = 'Téléchargement de la flotte Bande L…';

  try {
    let payload = null;
    try {
      const response = await fetch('/api/satellites', { signal: AbortSignal.timeout(8000) });
      if (response.ok) {
        payload = await response.json();
      }
    } catch {}

    if (!payload || !Array.isArray(payload.items) || !payload.items.length) {
      const fallbackUrl = `${cleanBase}data/fleet-viasat.json`;
      const fallbackRes = await fetch(fallbackUrl);
      if (!fallbackRes.ok) throw new Error('Impossible de charger les données orbitales');
      const rawFallback = await fallbackRes.json();
      payload = {
        items: rawFallback.map(item => ({ ...item, DATA_SOURCE: 'fallback' })),
        live: false,
        allLive: false,
        degraded: true,
        degradedSources: ['static'],
        liveSources: [],
        fetchedAt: null
      };
    }

    let valid = [];
    for (const data of payload.items) {
      if (!isOperationalLBandSatellite(data)) continue;
      try {
        const satrec = json2satrec(data);
        if (position({ satrec }, new Date(clock.time))) {
          valid.push({
            data,
            satrec,
            kind: 'satellite',
            meta: fleetInfo(data)
          });
        }
      } catch {}
    }

    if (!valid.length) throw new Error('Aucun satellite valide');

    const old = selected?.data.NORAD_CAT_ID;
    const wasFollowing = tracking.active;
    const wasFleetOverview = fleetOverview;

    records = valid.sort((a, b) => (a.meta?.order ?? 99) - (b.meta?.order ?? 99));
    if (worldMap2D) worldMap2D.setFleet(records);

    if (scene) {
      if (points) {
        scene.remove(points);
        disposeSatelliteModels(points);
      }
      points = new THREE.Group();
      records.forEach(record => points.add(createSatelliteModel(record.data.NORAD_CAT_ID, getSatelliteColor(record))));
      scene.add(points);
    }

    createLabels();

    // Au démarrage : aucun satellite sélectionné
    if (wasFleetOverview) {
      updateFleetOverviewUI();
      updateGlobe(new Date(clock.time));
      drawAllOrbits(new Date(clock.time));
      lastOrbit = clock.time;
    } else if (old) {
      const prev = records.find(r => r.data.NORAD_CAT_ID === old);
      if (prev) select(prev, { follow: false });
      else deselect();
    } else {
      deselect();
    }

    if (wasFollowing && selected?.current) {
      tracking.update(camera.position, selected.current.vector, controls.target);
      trackingUI();
    }

    const dataStatus = orbitalDataStatus(payload);
    $('#source-text').textContent = dataStatus.message;
    $('#status-label').textContent = dataStatus.label;
    $('.source-dot').classList.toggle('offline', dataStatus.level === 'offline');
    $('.source-dot').classList.toggle('degraded', dataStatus.level === 'degraded');

    if (!old && !wasFleetOverview) fitFleet();
  } catch (err) {
    console.error(err);
    $('#source-text').textContent = 'Données indisponibles · réessayez';
    $('#status-label').textContent = records.length ? 'Actualisation impossible · données précédentes' : 'Données orbitales indisponibles';
    $('.source-dot').classList.add('offline');
    $('.source-dot').classList.remove('degraded');
    if (!records.length) {
      $('#sat-list').innerHTML = '<div class="empty">Impossible de charger la flotte Bande L.<br>Vérifiez votre connexion.</div>';
    }
  } finally {
    button.disabled = false;
  }
}

function updateTime() {
  const date = new Date(clock.time);
  $('#sim-date').textContent = `${date.toLocaleString('fr-FR', {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })} UTC`;

  $('#mode').textContent = clock.paused ? 'EN PAUSE' : clock.live ? 'TEMPS RÉEL' : `SIMULATION ×${clock.speed.toLocaleString('fr-FR')}`;
  $('#mode').classList.toggle('simulation', !clock.live || clock.paused);

  const delta = (clock.time - Date.now()) / 60000;
  $('#seek').value = Math.max(-720, Math.min(720, delta));
  $('#offset').textContent = formatTimeOffset(delta);
}

// Filtres de catégorie
document.querySelectorAll('.cat-pill').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.toggle('active', b === btn));
    currentCategory = btn.dataset.cat;
    renderList();
  };
});

// Écouteurs de recherche
$('#sat-list').addEventListener('click', e => {
  const row = e.target.closest('[data-id]');
  if (row) select(records.find(r => r.data.NORAD_CAT_ID === Number(row.dataset.id)));
});

$('#search').addEventListener('input', e => {
  query = e.target.value.toLowerCase();
  renderList();
});

// Commande observateur
$('#obs-select').addEventListener('change', e => {
  const found = OBSERVER_PRESETS.find(p => p.id === e.target.value);
  if (found) {
    currentObserver = found;
    if (worldMap2D) worldMap2D.setObserver(currentObserver);
    if (selected?.current) updateObserverVerdict(selected.current);
  }
});

// Contrôles temporels
document.querySelectorAll('[data-speed]').forEach(b => {
  b.onclick = () => {
    clock.setSpeed(Number(b.dataset.speed));
    document.querySelectorAll('[data-speed]').forEach(x => x.classList.toggle('active', x === b));
    updateTime();
  };
});

function pauseUI() {
  $('#pause').innerHTML = icon(clock.paused ? 'play' : 'pause');
  $('#pause').setAttribute('aria-label', clock.paused ? 'Reprendre' : 'Mettre en pause');
  refreshIcons();
}

$('#pause').onclick = () => {
  clock.paused = !clock.paused;
  if (clock.paused) clock.live = false;
  pauseUI();
  updateTime();
};

$('#live').onclick = () => {
  clock.reset();
  pauseUI();
  document.querySelectorAll('[data-speed]').forEach(x => x.classList.toggle('active', x.dataset.speed === '1'));
  lastOrbit = 0;
  updateTime();
};

$('#seek').addEventListener('input', e => {
  clock.seek(Date.now() + Number(e.target.value) * 60000);
  lastOrbit = 0;
  updateTime();
});

$('#refresh').onclick = load;
$('#about').onclick = () => $('#info-dialog').showModal();
$('#close-info').onclick = () => $('#info-dialog').close();
$('#info-dialog').onclick = e => { if (e.target === $('#info-dialog')) $('#info-dialog').close(); };

function zoom(factor) {
  if (!camera) return;
  const offset = camera.position.clone().sub(controls.target);
  offset.setLength(THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance));
  camera.position.copy(controls.target).add(offset);
  controls.update();
}

$('#zoom-in').onclick = () => zoom(0.8);
$('#zoom-out').onclick = () => zoom(1.2);
$('#home-view').onclick = fitFleet;

// Centrer la vue sur la zone couverte (ou le spot au sol)
$('#center-spot').onclick = () => {
  if (currentViewMode === '2d' && selected?.current) {
    const zone = currentSpotMode === 'service' ? selected.meta?.coverageZone?.center : null;
    worldMap2D.centerAt(zone?.lat ?? selected.current.lat, zone?.lon ?? selected.current.lon);
    return;
  }
  if (!camera || !selected?.current || !earth) return;
  stopFollowing();

  const zone = currentSpotMode === 'service' ? selected.meta?.coverageZone : null;
  let targetPos, cameraPos;

  if (zone?.center) {
    const centerLocal = geoToEarthLocal(zone.center.lat, zone.center.lon, 1.0);
    const centerWorld = centerLocal.clone().applyMatrix4(earth.matrixWorld);
    targetPos = centerWorld;
    cameraPos = centerWorld.clone().normalize().multiplyScalar(2.65);
  } else {
    const nadir = selected.current.vector.clone().normalize();
    targetPos = nadir.clone().multiplyScalar(1.0);
    cameraPos = nadir.clone().multiplyScalar(2.85);
  }

  controls.target.copy(targetPos);
  camera.position.copy(cameraPos);
  controls.update();
};

$('#follow').onclick = () => {
  if (tracking.active) stopFollowing();
  else startFollowing();
};

function trackingUI() {
  $('#follow').innerHTML = icon('focus') + (tracking.active ? ' Arrêter le suivi' : ' Suivre le satellite');
  $('#follow').setAttribute('aria-pressed', String(tracking.active));
  $('.view-label').textContent = tracking.active ? `SUIVI · ${selected.meta?.name || 'SATELLITE'}` : (fleetOverview ? 'VUE FLOTTE' : 'VUE GLOBALE');
  $('.view-label').classList.toggle('tracking', tracking.active);
  $('#auto-view').disabled = tracking.active;
  refreshIcons();
}

function startFollowing() {
  if (!camera || !selected?.current) return;
  controls.autoRotate = false;
  controls.enableDamping = false;
  controls.update();
  const satellite = selected.current.vector;
  const radius = satellite.length();
  controls.target.copy(satellite);
  camera.position.copy(satellite).addScaledVector(satellite.clone().normalize(), Math.max(3, radius * 0.9)).add(new THREE.Vector3(0, Math.max(1, radius * 0.28), 0));
  controls.update();
  controls.enableDamping = true;
  tracking.start(satellite);
  trackingUI();
}

function stopFollowing() {
  tracking.stop();
  if (controls) {
    controls.target.set(0, 0, 0);
    controls.update();
  }
  trackingUI();
}

function createLabels() {
  $('#sat-labels').innerHTML = '<svg id="label-connectors" aria-hidden="true">' +
    records.map(r => `<line data-connector="${r.data.NORAD_CAT_ID}"/>`).join('') +
    '</svg>' +
    records.map(r => `<button class="sat-label ${r.meta?.category || ''}" data-satellite="${r.data.NORAD_CAT_ID}" aria-label="Sélectionner ${escapeHtml(r.meta?.name)}">${escapeHtml(r.meta?.name)}</button>`).join('');

  $('#sat-labels').querySelectorAll('button').forEach(b => {
    b.onclick = () => select(records.find(r => r.data.NORAD_CAT_ID === Number(b.dataset.satellite)));
  });
}

function updateLabels() {
  if (!camera || currentViewMode !== '3d') return;
  const rect = $('#globe').getBoundingClientRect();

  for (const r of records) {
    const el = $(`#sat-labels [data-satellite="${r.data.NORAD_CAT_ID}"]`);
    const line = $(`[data-connector="${r.data.NORAD_CAT_ID}"]`);
    if (!el) continue;

    const isChosen = (r === selected);
    const displayed = (isChosen || fleetOverview) && showLabels && r.current;
    el.hidden = !displayed;
    if (line) line.style.display = displayed ? '' : 'none';

    if (!el.hidden) {
      const p = r.current.vector.clone().project(camera);
      if (p.z > 1 || p.z < -1) {
        el.hidden = true;
        if (line) line.style.display = 'none';
        continue;
      }
      const px = ((p.x + 1) * rect.width) / 2;
      const py = ((1 - p.y) * rect.height) / 2;
      const w = el.offsetWidth || 80, h = el.offsetHeight || 25;
      const x = Math.max(4, Math.min(rect.width - w - 4, px + 9));
      const y = Math.max(70, Math.min(rect.height - h - 40, py - 12));
      el.style.transform = `translate(${x}px,${y}px)`;
      el.classList.toggle('chosen', isChosen);
      if (line) {
        line.setAttribute('x1', px);
        line.setAttribute('y1', py);
        line.setAttribute('x2', x);
        line.setAttribute('y2', y + h / 2);
        line.setAttribute('stroke', r.meta?.slide5Color || '#00ffcc');
      }
    }
  }
}

function fitFleet() {
  stopFollowing();
  if (!camera) return;
  controls.target.set(0, 0, 0);
  const maxRadius = Math.max(7, ...records.map(r => r.current?.vector.length() || 7));
  const angle = THREE.MathUtils.degToRad(20);
  const distance = Math.min(controls.maxDistance, Math.max(maxRadius / Math.sin(angle) * 1.1, maxRadius / (Math.tan(angle) * camera.aspect) * 1.15));
  camera.position.set(0, 0.8, 1).normalize().multiplyScalar(distance);
  controls.update();
}

function showFleet() {
  query = '';
  $('#search').value = '';
  currentCategory = 'all';
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  showOrbits = true;
  showLabels = true;
  showSpot = true;
  $('#show-spot').checked = true;
  $('#show-labels').checked = true;
  $('#show-orbits').checked = true;
  $('#show-fleet-lband').checked = true;
  deselect();
  fleetOverview = true;
  updateFleetOverviewUI();
  if (worldMap2D) {
    worldMap2D.toggleSpot(true);
    worldMap2D.toggleOrbits(true);
    worldMap2D.toggleLabels(true);
    worldMap2D.toggleFleetOverlay(true);
    worldMap2D.resetView();
  }
  fitFleet();
  lastOrbit = 0;
  updateGlobe(new Date(clock.time));
}

function updateFleetOverviewUI() {
  $('#show-fleet').setAttribute('aria-pressed', 'true');
  $('#sat-name').textContent = 'Toute la flotte';
  $('#sat-status-badge').textContent = `${records.length} SATELLITES AFFICHÉS`;
  $('#norad').textContent = 'Tous les satellites sont affichés ensemble. Cliquez sur un satellite pour retrouver ses détails et son suivi.';
  $('.view-label').textContent = 'VUE FLOTTE';
  renderList();
}
$('#show-all').onclick = showFleet;
$('#show-fleet').onclick = showFleet;

function setMenusHidden(hidden) {
  document.body.classList.toggle('menus-hidden', hidden);
  $('#toggle-menus').setAttribute('aria-pressed', String(hidden));
  $('#toggle-menus span').textContent = hidden ? 'Afficher les menus' : 'Masquer les menus';
  requestAnimationFrame(() => {
    worldMap2D?.handleResize();
    updateLabels();
  });
}
$('#toggle-menus').onclick = () => setMenusHidden(!document.body.classList.contains('menus-hidden'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.body.classList.contains('menus-hidden')) setMenusHidden(false);
});

$('#show-labels').onchange = e => {
  showLabels = e.target.checked;
  if (worldMap2D) worldMap2D.toggleLabels(showLabels);
};
$('#show-orbits').onchange = e => {
  showOrbits = e.target.checked;
  allOrbits.visible = showOrbits;
  if (orbitLine) orbitLine.visible = showOrbits;
  if (worldMap2D) worldMap2D.toggleOrbits(showOrbits);
};
$('#show-spot').onchange = e => {
  showSpot = e.target.checked;
  if (spotVisualizer) {
    if (showSpot && selected?.current) {
      spotVisualizer.updateSpot(selected.current.vector, selected.current.alt, {
        color: getSatelliteColor(selected),
        serviceColor: 0x00ff9d,
        serviceRadiusDeg: selected.meta?.serviceSpotRadiusDeg || 26
      });
    } else {
      spotVisualizer.hide();
    }
  }
  if (worldMap2D) worldMap2D.toggleSpot(showSpot);
};
$('#show-beam').onchange = e => {
  showBeam = e.target.checked;
  if (spotVisualizer) spotVisualizer.toggleBeam(showBeam);
};
$('#show-fleet-lband').onchange = e => {
  if (worldMap2D) worldMap2D.toggleFleetOverlay(e.target.checked);
};
$('#show-gateways').onchange = e => {
  if (worldMap2D) worldMap2D.toggleGateways(e.target.checked);
  if (spotVisualizer?.groundStationsGroup) spotVisualizer.groundStationsGroup.visible = e.target.checked;
};

// Bascule Vue 3D / Carte 2D
$('#view-mode-3d').onclick = () => switchViewMode('3d');
$('#view-mode-2d').onclick = () => switchViewMode('2d');

function switchViewMode(mode) {
  currentViewMode = mode;
  $('#view-mode-3d').classList.toggle('active', mode === '3d');
  $('#view-mode-2d').classList.toggle('active', mode === '2d');
  $('#view-mode-3d').setAttribute('aria-selected', String(mode === '3d'));
  $('#view-mode-2d').setAttribute('aria-selected', String(mode === '2d'));
  $('#globe').hidden = (mode !== '3d');
  $('#sat-labels').hidden = (mode !== '3d');
  $('#map2d-container').hidden = (mode !== '2d');

  // Ajuster l'affichage des contrôles spécifiques 3D
  const viewSettings = $('.view-settings');
  const globeTools = $('.globe-tools');
  const globeCaption = $('.globe-caption');
  if (viewSettings) viewSettings.style.display = (mode === '3d' ? 'flex' : 'none');
  if (globeTools) globeTools.style.display = (mode === '3d' ? 'flex' : 'none');
  if (globeCaption) globeCaption.style.display = (mode === '3d' ? 'flex' : 'none');
  $('#show-beam').closest('label').hidden = mode !== '3d';
  $('#show-fleet-lband').closest('label').hidden = mode !== '2d';
  $('#follow').hidden = mode !== '3d';

  if (mode === '2d' && worldMap2D) {
    worldMap2D.toggleSpot(showSpot);
    worldMap2D.toggleOrbits(showOrbits);
    worldMap2D.toggleLabels(showLabels);
    worldMap2D.setFleet(records);
    worldMap2D.handleResize();
    const track = selected ? calculateGroundTrack(selected, new Date(clock.time)) : [];
    worldMap2D.setSatellite(selected, track);
  } else if (mode === '3d') {
    updateGlobe(new Date(clock.time));
  }
}

document.querySelectorAll('[data-frame]').forEach(button => {
  button.onclick = () => {
    referenceFrame = button.dataset.frame;
    document.querySelectorAll('[data-frame]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    lastOrbit = 0;
    const date = new Date(clock.time);
    updateGlobe(date);
    drawOrbit(date);
    drawAllOrbits(date);
    if (tracking.active) tracking.update(camera.position, selected.current.vector, controls.target);
    updateLabels();
  };
});

$('#auto-view').onchange = e => { autoView = e.target.checked; };

// La carte 2D reste disponible même si WebGL ne peut pas démarrer.
worldMap2D = new WorldMapTracker2D($('#map2d-container'));
worldMap2D.setObserver(currentObserver);
worldMap2D.setSpotMode(currentSpotMode);
worldMap2D.onSelectSatellite = id => {
  const record = records.find(r => r.data.NORAD_CAT_ID === id);
  if (record) select(record);
};
initGlobe();
switchViewMode(currentViewMode);
load();
updateTime();
setInterval(load, 7200000);

let last = performance.now();
function animate(now) {
  const delta = now - last;
  clock.tick(delta);
  last = now;

  if (now - lastUpdate > 100) {
    lastUpdate = now;
    const simDate = new Date(clock.time);
    updateTime();
    updateGlobe(simDate);
    updateDetails();
  }

  // Animation continue du spot (pulsation radar)
  if (spotVisualizer) {
    spotVisualizer.animate(delta / 1000);
  }
  for (const visualizer of fleetSpots.values()) visualizer.animate(delta / 1000);

  if (renderer && currentViewMode === '3d') {
    earth.rotation.y = earthAngle(new Date(clock.time), referenceFrame);

    if (tracking.active && selected) {
      const p = position(selected, new Date(clock.time));
      if (p) {
        selected.current = p;
        tracking.update(camera.position, p.vector, controls.target);
      }
    }

    controls.autoRotate = autoView && !tracking.active && !clock.paused;
    controls.update(delta / 1000);
    const viewportHeight = renderer.domElement.clientHeight;
    points?.children.forEach((model, index) => {
      const record = records[index];
      updateSatelliteModel(model, record?.current?.vector, camera, viewportHeight, record === selected);
    });
    renderer.render(scene, camera);
    updateLabels();
  }

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
