import { gstime, eciToEcf } from 'satellite.js';
const EARTH_RADIUS_KM = 6371;
export function earthAngle(date, frame = 'space') {
  return frame === 'earth' ? 0 : gstime(date);
}
export function scenePosition(eci, referenceDate, frame = 'space') {
  const p = frame === 'earth' ? eciToEcf(eci, gstime(referenceDate)) : eci;
  return { x: p.x / EARTH_RADIUS_KM, y: p.z / EARTH_RADIUS_KM, z: -p.y / EARTH_RADIUS_KM };
}
