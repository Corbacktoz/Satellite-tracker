import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from 'three';
import { json2satrec, propagate, gstime, eciToGeodetic } from 'satellite.js';
import { isOperationalLBandSatellite, fleetInfo } from '../shared/catalogue.js';
import { SatelliteSpotVisualizer, calculateFootprint, geoToEarthLocal } from '../src/spot.js';

const rows = JSON.parse((await readFile(new URL('../public/data/fleet-viasat.json', import.meta.url), 'utf8')).replace(/^\uFEFF/, ''));
const satellites = rows.filter(isOperationalLBandSatellite);
assert.equal(satellites.length, 5);
const scene = new THREE.Scene();
const visualizer = new SatelliteSpotVisualizer(scene, null, { includeGroundStations: false });
let checked = 0;
for (const data of satellites) {
  const meta = fleetInfo(data);
  for (const offset of [-12, 0, 12]) {
    const date = new Date(Date.UTC(2026, 9, 11, 12 + offset));
    const state = propagate(json2satrec(data), date);
    const geo = eciToGeodetic(state.position, gstime(date));
    for (const mode of ['global', 'service']) {
      const center = mode === 'global'
        ? { lat: geo.latitude * 180 / Math.PI, lon: geo.longitude * 180 / Math.PI }
        : meta.coverageZone.center;
      const theta = mode === 'global' ? calculateFootprint(geo.height, 5).thetaRad
        : THREE.MathUtils.degToRad(meta.serviceSpotRadiusDeg);
      const direction = geoToEarthLocal(center.lat, center.lon, 1).normalize();
      visualizer.createSphericalFootprint(direction, theta, new THREE.Color(meta.slide5Color).getHex());
      const geometry = visualizer.capMesh.geometry;
      const vertices = geometry.attributes.position, indices = geometry.index;
      const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
      const normal = new THREE.Vector3(), edge = new THREE.Vector3();
      for (let i = 0; i < indices.count; i += 3) {
        a.fromBufferAttribute(vertices, indices.getX(i));
        b.fromBufferAttribute(vertices, indices.getX(i + 1));
        c.fromBufferAttribute(vertices, indices.getX(i + 2));
        normal.subVectors(b, a).cross(edge.subVectors(c, a)).normalize();
        // Si le plan entier est au-dessus de la sphère, toute la face l'est aussi.
        assert.ok(Math.abs(normal.dot(a)) > 1.001,
          `${meta.name}, ${mode}, ${offset} h : face intersectant le globe`);
      }
      const rim = visualizer.rimLine.geometry.attributes.position;
      for (let i = 0; i < rim.count; i++) {
        a.fromBufferAttribute(rim, i);
        assert.ok(Math.abs(a.clone().normalize().angleTo(direction) - theta) < 1e-6,
          `${meta.name} : contour déformé`);
      }
      checked++;
    }
  }
}
scene.traverse(object => { object.geometry?.dispose(); object.material?.dispose(); });
console.log(`Spots 3D : ${checked} cas vérifiés (5 satellites, 2 modes, −12 h / 0 h / +12 h), faces hors du globe et contours conformes.`);
