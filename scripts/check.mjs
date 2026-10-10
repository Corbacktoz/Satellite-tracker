import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { json2satrec, propagate, eciToGeodetic, gstime } from 'satellite.js';
import { SimulationClock } from '../src/time.js';
import { isInmarsatSatellite, fleetInfo, fleet } from '../shared/catalogue.js';
const clock=new SimulationClock(100000);clock.tick(1000,101000);assert.equal(clock.time,101000);clock.setSpeed(100);clock.tick(1000);assert.equal(clock.time,201000);clock.paused=true;clock.tick(1000);assert.equal(clock.time,201000);clock.seek(500000);assert.equal(clock.time,500000);clock.reset();assert.equal(clock.live,true);assert.equal(clock.speed,1);assert.equal(clock.paused,false);
const raw=JSON.parse((await readFile(new URL('../public/data/fleet-active.json',import.meta.url),'utf8')).replace(/^\uFEFF/,''));const satellites=raw.filter(isInmarsatSatellite);assert.equal(satellites.length,17);assert.equal(new Set(satellites.map(x=>x.NORAD_CAT_ID)).size,17);assert.ok(satellites.some(x=>x.NORAD_CAT_ID===50319),'I-6 F1 présent');assert.ok(satellites.some(x=>fleetInfo(x).name==='Alphasat'));assert.ok(satellites.some(x=>fleetInfo(x).name==='GX10A'));assert.ok(satellites.some(x=>fleetInfo(x).name==='GX10B'));assert.equal(isInmarsatSatellite({NORAD_CAT_ID:55683,OBJECT_NAME:'INMARSAT 6-F2'}),false,'I-6 F2 en panne exclu');assert.equal(isInmarsatSatellite({NORAD_CAT_ID:20918,OBJECT_NAME:'INMARSAT 2-F1'}),false,'I-2 historique exclu');
for(const item of satellites){const date=new Date(item.EPOCH+'Z'),satrec=json2satrec(item),state=propagate(satrec,date),geo=eciToGeodetic(state.position,gstime(date));assert.ok(geo.height>0&&Number.isFinite(geo.height));assert.ok(Object.values(state.velocity).every(Number.isFinite));assert.notDeepEqual(state.position,propagate(satrec,new Date(+date+60000)).position);}
assert.equal(fleet.find(x=>x.id===28628).status,'reserve');console.log('Vérification réussie : horloge, 17 objets opérationnels, I-6 F1, Alphasat et GX10, exclusions et propagation.');
import { earthAngle, scenePosition } from '../src/reference-frame.js';
const date0=new Date('2026-10-08T00:00:00Z'),date6=new Date(+date0+21600000);
const turn=(earthAngle(date6)-earthAngle(date0)+Math.PI*2)%(Math.PI*2);
assert.ok(Math.abs(turn-Math.PI/2)<.01,'La Terre tourne vers l’est d’environ 90 degrés en six heures');
assert.equal(earthAngle(date6,'earth'),0,'La vue terrestre conserve le globe fixe');
const testEci={x:7000,y:1000,z:500};assert.deepEqual(scenePosition(testEci,date0,'space'),scenePosition(testEci,date6,'space'),'Un point inertiel fixe ne tourne pas artificiellement');assert.notDeepEqual(scenePosition(testEci,date0,'earth'),scenePosition(testEci,date6,'earth'),'Le repère terrestre change avec le temps');
const i6=satellites.find(x=>x.NORAD_CAT_ID===50319),i6rec=json2satrec(i6);
for(const date of [date0,date6]){const state=propagate(i6rec,date),p=scenePosition(state.position,date,'space'),angle=earthAngle(date);const bodyX=Math.cos(angle)*p.x-Math.sin(angle)*p.z,bodyZ=Math.sin(angle)*p.x+Math.cos(angle)*p.z;const longitude=Math.atan2(-bodyZ,bodyX);const geo=eciToGeodetic(state.position,gstime(date));assert.ok(Math.abs(longitude-geo.longitude)<1e-10,'Satellite et Terre utilisent le même repère');}
const pauseClock=new SimulationClock(+date0);pauseClock.setSpeed(1000);pauseClock.tick(1000);const angleBeforePause=earthAngle(new Date(pauseClock.time));pauseClock.paused=true;pauseClock.tick(5000);assert.equal(earthAngle(new Date(pauseClock.time)),angleBeforePause,'La pause arrête la rotation physique');
console.log('Rotation terrestre vérifiée : sens, rythme sidéral, cohérence Terre / I-6, repères et pause.');
import { Vector3, PerspectiveCamera } from 'three';
import { SatelliteFollow } from '../src/follow-camera.js';
const follow=new SatelliteFollow(),initial=new Vector3(7,0,0),target=initial.clone(),view=new PerspectiveCamera(40,1,.01,100);
view.position.set(13,3,0);follow.start(initial);
const distance=view.position.distanceTo(target),bearing=view.position.clone().sub(target).normalize().dot(initial.clone().normalize());
for(const frame of ['space','earth'])for(const date of [date0,date6,new Date(+date0+43200000)]){
  const p=scenePosition(propagate(i6rec,date).position,date,frame),satellite=new Vector3(p.x,p.y,p.z);
  follow.update(view.position,satellite,target);view.lookAt(target);view.updateMatrixWorld();
  assert.deepEqual(target,satellite,'La caméra vise la position actuelle du satellite');
  assert.ok(Math.abs(view.position.distanceTo(target)-distance)<1e-10,'Le suivi conserve la distance de zoom autour du satellite');
  assert.ok(Math.abs(view.position.clone().sub(target).normalize().dot(satellite.clone().normalize())-bearing)<1e-10,'La caméra accompagne la rotation orbitale');
  const projected=satellite.clone().project(view);assert.ok(Math.abs(projected.x)<1e-10&&Math.abs(projected.y)<1e-10,'Le satellite reste au centre de l’écran après 6 et 12 heures, dans les deux repères');
}
const stationary=view.position.clone();follow.update(view.position,target.clone(),target);assert.ok(view.position.distanceTo(stationary)<1e-10,'La pause garde la vue fixe');
follow.stop();const frozen=view.position.clone();follow.update(view.position,new Vector3(-7,0,0),target);assert.deepEqual(view.position,frozen,'Arrêter le suivi libère la caméra');
follow.start(new Vector3(-1,0,.001));target.set(-1,0,.001);const crossing=new Vector3(-10,0,.01);follow.update(crossing,new Vector3(-1,0,-.001),target);assert.ok(crossing.z<0,'Le suivi traverse le méridien sans saut');
console.log('Suivi vérifié : cible mobile, cadrage au centre à +6 h / +12 h, deux repères, zoom, pause et arrêt.');

import { isViasatSatellite, isPointInCoverage, isOperationalLBandSatellite } from '../shared/catalogue.js';
import { calculateFootprint, calculateObserverLookAngles } from '../src/spot.js';
const rawViasat = JSON.parse((await readFile(new URL('../public/data/fleet-viasat.json', import.meta.url), 'utf8')).replace(/^\uFEFF/, ''));
assert.equal(rawViasat.length, 23, 'Catalogue complet Viasat comporte 23 satellites');
assert.ok(rawViasat.some(x => x.NORAD_CAT_ID === 37843), 'ViaSat-1 présent');
assert.ok(rawViasat.some(x => x.NORAD_CAT_ID === 42740), 'ViaSat-2 présent');
assert.ok(rawViasat.some(x => x.NORAD_CAT_ID === 56370), 'ViaSat-3 Americas présent');
assert.ok(rawViasat.some(x => x.NORAD_CAT_ID === 29643), 'WildBlue-1 présent');
assert.equal(fleetInfo({ NORAD_CAT_ID: 37843 }).name, 'ViaSat-1');
assert.equal(fleetInfo({ NORAD_CAT_ID: 42740 }).name, 'ViaSat-2');

// Vérification de la constellation opérationnelle Bande L (5 satellites principaux, hors spares)
const opLBand = rawViasat.filter(isOperationalLBandSatellite);
assert.equal(opLBand.length, 5, 'Exactement 5 satellites bande L opérationnels');
const opLBandIds = new Set(opLBand.map(x => x.NORAD_CAT_ID));
assert.deepEqual(opLBandIds, new Set([50319, 39215, 28899, 33278, 25153]), 'I-6 F1, Alphasat, I-4 F2, I-4 F3, I-3 F5');

// Vérification exclusion des spares et satellites Ka/S
assert.equal(isOperationalLBandSatellite({ NORAD_CAT_ID: 28628 }), false, 'I-4 F1 (spare) exclu');
assert.equal(isOperationalLBandSatellite({ NORAD_CAT_ID: 23839 }), false, 'I-3 F1 (spare) exclu');
assert.equal(isOperationalLBandSatellite({ NORAD_CAT_ID: 24307 }), false, 'I-3 F2 (spare) exclu');
assert.equal(isOperationalLBandSatellite({ NORAD_CAT_ID: 24674 }), false, 'I-3 F3 (spare) exclu');
assert.equal(isOperationalLBandSatellite({ NORAD_CAT_ID: 37843 }), false, 'ViaSat-1 (Ka) exclu');
assert.equal(isOperationalLBandSatellite({ NORAD_CAT_ID: 42814 }), false, 'EAN (S) exclu');

// Vérification statuts ViaSat-3 et I-6 F1
assert.equal(fleetInfo({ NORAD_CAT_ID: 66454 }).status, 'service', 'ViaSat-3 F2 en service');
assert.equal(fleetInfo({ NORAD_CAT_ID: 68893 }).status, 'service', 'ViaSat-3 F3 en service');
assert.ok(fleetInfo({ NORAD_CAT_ID: 66454 }).region.includes('Amériques'), 'ViaSat-3 F2 couverture Amériques');
assert.equal(fleetInfo({ NORAD_CAT_ID: 50319 }).orbitalSlot, '83.7° E', 'I-6 F1 slot 83.7° E');

// Vérification du calcul du spot au sol et de l'empreinte
const fp = calculateFootprint(35786, 5);
assert.ok(fp.diameterKm > 16000 && fp.diameterKm < 18000, 'Diamètre du spot GEO conforme (~17 000 km)');
assert.ok(fp.thetaDeg > 70 && fp.thetaDeg < 80, 'Angle d’ouverture conforme');

// Vérification de la visibilité observateur (Washington DC vs ViaSat-1 à 115.1° O)
const lookUS = calculateObserverLookAngles(38.9, -77.0, 0.0, -115.1, 35786, 5);
assert.equal(lookUS.inFootprint, true, 'Washington est dans le champ géométrique de ViaSat-1');
assert.ok(lookUS.elevationDeg > 30, 'Élévation positive au-dessus de l’horizon');
assert.ok(lookUS.slantRangeKm > 35000 && lookUS.slantRangeKm < 42000, 'Portée directe cohérente');

// Tokyo ne doit pas être dans le spot de ViaSat-1
const lookTokyo = calculateObserverLookAngles(35.7, 139.7, 0.0, -115.1, 35786, 5);
assert.equal(lookTokyo.inFootprint, false, 'Tokyo est hors du spot de ViaSat-1');

// Vérification distinction Couverture Commerciale vs Visibilité Géométrique
const viasat1Meta = fleetInfo({ NORAD_CAT_ID: 37843 });
assert.equal(isPointInCoverage(38.9, -77.0, viasat1Meta), true, 'Washington est dans la couverture commerciale de ViaSat-1');
assert.equal(isPointInCoverage(5.16, -52.65, viasat1Meta), false, 'Kourou est hors de la couverture commerciale de ViaSat-1');

// Vérification de la cohérence de couverture (Londres vs Alphasat, P1)
const alphasatMeta = fleetInfo({ NORAD_CAT_ID: 39215 });
assert.equal(isPointInCoverage(51.5074, -0.1278, alphasatMeta), false, 'Londres (37.13°) est hors de la couverture commerciale d’Alphasat (36°)');
assert.equal(isPointInCoverage(41.9028, 12.4964, alphasatMeta), true, 'Rome est dans la couverture commerciale d’Alphasat (36°)');

// Import et vérification des fonctions réelles de map2d.js et time.js (P3)
import { computeSubSolarCoordinates, isPointAtNight, calculateZoomPan } from '../src/map2d.js';
import { formatTimeOffset } from '../src/time.js';

// Vérification terminateur solaire à midi UTC (méridien 0°) via le code réel
const noonDate = new Date('2026-10-09T12:00:00Z');
const { subSolarLon } = computeSubSolarCoordinates(noonDate);
assert.equal(subSolarLon, 0, 'À 12:00 UTC, le point sous-solaire est au méridien de Greenwich (0°)');

// Vérification ombre nocturne : points équatoriaux à ±120° et ±170° sont bien dans la nuit à 12:00 UTC
assert.equal(isPointAtNight(0, -120, noonDate), true, 'Équateur -120° est dans la nuit à 12:00 UTC');
assert.equal(isPointAtNight(0, -170, noonDate), true, 'Équateur -170° est dans la nuit à 12:00 UTC');
assert.equal(isPointAtNight(0, 120, noonDate), true, 'Équateur +120° est dans la nuit à 12:00 UTC');
assert.equal(isPointAtNight(0, 170, noonDate), true, 'Équateur +170° est dans la nuit à 12:00 UTC');
assert.equal(isPointAtNight(0, 0, noonDate), false, 'Équateur 0° est en plein jour à 12:00 UTC');

// Vérification zoom 2D centré via calculateZoomPan
const zoomResult = calculateZoomPan(1.0, 0, 0, 1.4, 500, 250, 1000, 500);
assert.equal(zoomResult.panX, 0, 'Le panX reste à 0 lors d’un zoom centré');
assert.equal(zoomResult.panY, 0, 'Le panY reste à 0 lors d’un zoom centré');
assert.equal(zoomResult.zoom, 1.4, 'Le niveau de zoom passe à 1.4');

// Vérification formatage décalage temporel sans artefact « 5 h 60 min » via formatTimeOffset
assert.equal(formatTimeOffset(359.8), '+6 h 0 min', '359.8 min s’arrondit proprement à +6 h 0 min');
assert.equal(formatTimeOffset(0), 'Maintenant');
assert.equal(formatTimeOffset(-125), '−2 h 5 min');

console.log('Constellation Viasat, statuts 2026, couverture commerciale, terminateur solaire et calculs 2D réels vérifiés avec succès.');

// Vérifier le rendu réel d'une empreinte à travers l'antiméridien.
import { WorldMapTracker2D, SLIDE5_SATELLITES } from '../src/map2d.js';
const map = Object.create(WorldMapTracker2D.prototype);
Object.assign(map, { width: 390, height: 390, zoom: 1, panX: 0, panY: 0, spotMode: 'global', showSpot: true });
const rectangles = [];
const canvas = {
  save() {}, restore() {}, beginPath() {}, roundRect() {}, rect() {}, stroke() {}, fill() {}, arc() {}, fillText() {},
  fillRect(x, y, w, h) { rectangles.push({ x, y, w, h }); }
};
map.fillSphericalFootprint(canvas, 0, 143.5, 76.3);
const covered = (lat, lon) => {
  const p = map.toXY(lat, lon);
  return rectangles.some(r => p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h);
};
assert.equal(covered(0, 170), true);
assert.equal(covered(0, -170), true);
assert.equal(covered(0, 0), false);
map.drawSlide5Legend(canvas);
assert.equal(map.legendBoxes.length, SLIDE5_SATELLITES.length, 'Les cinq satellites restent dans la légende mobile');
assert.ok(map.legendBoxes.every(b => b.x >= 0 && b.x + b.w <= map.width && b.y + b.h <= map.height));
map.render = () => {};
map.centerAt(20, 70);
assert.ok(Math.abs(map.toXY(20, 70).x - map.width / 2) < 1e-8);
assert.equal(map.toXY(90, 0).y, 0, 'Le pôle Nord reste visible après centrage');
assert.equal(map.toXY(-90, 0).y, map.height, 'Le pôle Sud reste visible après centrage');
map.zoom = 3;
map.centerAt(0.04, 143.5);
assert.equal(map.zoom, 1, 'Centrer restaure la carte complète, même après un zoom');
assert.ok(Math.abs(map.fromXY(map.width / 2, map.height / 2).lon - 143.5) < 1e-8);
const wrappedSatellite = { data: { NORAD_CAT_ID: 33278 }, current: { lat: 0, lon: -98 } };
map.fleetRecords = [wrappedSatellite];
const wrappedPoint = map.toXY(0, -98);
assert.equal(map.findSatelliteAt(wrappedPoint.x + map.width, wrappedPoint.y), wrappedSatellite,
  'Le satellite reste cliquable sur la partie raccordée de la carte');
assert.ok(Math.abs(map.fromXY(wrappedPoint.x + map.width, wrappedPoint.y).lon + 98) < 1e-8);
const tiles = [];
map.ctx = { clearRect() {}, fillRect() {}, save() {}, restore() {}, beginPath() {}, rect() {}, clip() {} };
map.drawWorld = () => tiles.push({ left: map.toXY(0, -180).x, right: map.toXY(0, 180).x });
map.drawSlide5Legend = () => {};
WorldMapTracker2D.prototype.render.call(map);
assert.equal(tiles.length, 2, 'Le centrage raccorde les deux portions visibles du monde');
assert.ok(tiles[0].left <= 0 && tiles.at(-1).right >= map.width);
assert.equal(tiles[0].right, tiles[1].left, 'Aucun trou entre les portions de carte');
assert.equal(map.drawingWorldOffset, 0, 'La projection de clic reste indépendante des copies de rendu');

// Les contours de flotte utilisent le même état orbital dynamique que les marqueurs.
const fleetMap = Object.create(WorldMapTracker2D.prototype);
const alphaRecord = { data: { NORAD_CAT_ID: 39215 }, meta: alphasatMeta,
  current: { lat: -2.01, lon: 24.83, alt: 35780 } };
Object.assign(fleetMap, { showSpot: true, showFleetOverlay: true, spotMode: 'global', fleetRecords: [alphaRecord] });
const footprintCalls = [];
fleetMap.computeFootprintPoints = (lat, lon, theta) => { footprintCalls.push({ lat, lon, theta }); return []; };
fleetMap.drawSlide5FleetCoverage(canvas);
assert.equal(footprintCalls.length, 1, 'Aucun contour inventé pour les satellites sans position valide');
assert.equal(footprintCalls[0].lat, -2.01);
assert.equal(footprintCalls[0].lon, 24.83);
assert.equal(footprintCalls[0].theta, calculateFootprint(alphaRecord.current.alt, 5).thetaDeg);
alphaRecord.current = { lat: 2.5, lon: 25.2, alt: 35820 };
fleetMap.drawSlide5FleetCoverage(canvas);
assert.equal(footprintCalls[1].lat, 2.5, 'Le contour évolue avec la simulation');
assert.equal(footprintCalls[1].lon, 25.2);
fleetMap.spotMode = 'service';
fleetMap.drawSlide5FleetCoverage(canvas);
assert.equal(footprintCalls[2].lat, alphasatMeta.coverageZone.center.lat);
assert.equal(footprintCalls[2].lon, alphasatMeta.coverageZone.center.lon);
assert.equal(footprintCalls[2].theta, alphasatMeta.serviceSpotRadiusDeg);
fleetMap.satellite = alphaRecord;
fleetMap.drawSlide5FleetCoverage(canvas);
assert.equal(footprintCalls.length, 3, 'Le spot sélectionné n’est pas dessiné deux fois');
console.log('Empreintes de flotte 2D : position propagée, altitude, évolution et zone indicative vérifiées.');
await import('./check-data.mjs');

