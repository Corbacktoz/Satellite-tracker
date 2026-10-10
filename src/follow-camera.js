import { Quaternion } from 'three';

// Move the camera with the satellite while retaining the user's zoom and offset.
export class SatelliteFollow {
  direction = null;
  start(position) { this.direction = position.clone().normalize(); }
  stop() { this.direction = null; }
  update(cameraPosition, satellitePosition, target) {
    if (!this.direction || satellitePosition.lengthSq() === 0) return;
    const next = satellitePosition.clone().normalize();
    const rotation = new Quaternion().setFromUnitVectors(this.direction, next);
    // OrbitControls revolves around target, so move both target and camera.
    cameraPosition.sub(target).applyQuaternion(rotation).add(satellitePosition);
    target.copy(satellitePosition);
    this.direction.copy(next);
  }
  get active() { return this.direction !== null; }
}
