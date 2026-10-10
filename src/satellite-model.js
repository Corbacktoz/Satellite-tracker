import * as THREE from 'three';

// Représentation illustrative d'un satellite de télécommunications GEO.
// Dimensions amplifiées pour rester lisibles à l'échelle de la Terre.
export function createSatelliteModel(id, color) {
  const satellite = new THREE.Group();
  satellite.userData.satelliteId = id;
  const gold = new THREE.MeshStandardMaterial({ color: 0xc9a455, metalness: 0.65, roughness: 0.48 });
  const silver = new THREE.MeshStandardMaterial({ color: 0xbec8d4, metalness: 0.65, roughness: 0.35 });
  const solar = new THREE.MeshStandardMaterial({ color: 0x12366f, metalness: 0.45, roughness: 0.3 });
  const cellLines = new THREE.LineBasicMaterial({ color: 0x688cb9, transparent: true, opacity: 0.75 });
  const mesh = (geometry, material, x = 0, y = 0, z = 0) => {
    const part = new THREE.Mesh(geometry, material);
    part.position.set(x, y, z);
    satellite.add(part);
    return part;
  };
  mesh(new THREE.BoxGeometry(0.52, 0.66, 0.5), gold);
  mesh(new THREE.BoxGeometry(0.55, 0.06, 0.53), silver, 0, 0.35);
  mesh(new THREE.BoxGeometry(0.55, 0.06, 0.53), silver, 0, -0.35);
  for (const side of [-1, 1]) {
    mesh(new THREE.BoxGeometry(0.5, 0.035, 0.035), silver, side * 0.5);
    mesh(new THREE.BoxGeometry(1.08, 0.75, 0.035), solar, side * 1.26);
    const vertices = [];
    for (let col = 0; col <= 6; col++) {
      const x = side * 1.26 - 0.54 + col * 0.18;
      for (const z of [-0.019, 0.019]) vertices.push(x, -0.375, z, x, 0.375, z);
    }
    for (let row = 0; row <= 4; row++) {
      const y = -0.375 + row * 0.1875;
      for (const z of [-0.019, 0.019]) vertices.push(side * 1.26 - 0.54, y, z, side * 1.26 + 0.54, y, z);
    }
    const grid = new THREE.BufferGeometry();
    grid.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    satellite.add(new THREE.LineSegments(grid, cellLines));
  }
  const dishProfile = Array.from({ length: 13 }, (_, i) => {
    const radius = i / 12 * 0.3;
    return new THREE.Vector2(radius, radius * radius * 0.9);
  });
  const dishMaterial = silver.clone();
  dishMaterial.side = THREE.DoubleSide;
  const dish = mesh(new THREE.LatheGeometry(dishProfile, 24), dishMaterial, 0, 0.08, 0.3);
  dish.rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8), silver, 0, 0.19, 0.43).rotation.x = Math.PI / 2;
  mesh(new THREE.SphereGeometry(0.035, 8, 6), silver, 0, 0.19, 0.54);
  mesh(new THREE.BoxGeometry(0.16, 0.04, 0.06), new THREE.MeshBasicMaterial({ color }), 0, -0.3, 0.28);
  const selection = new THREE.Mesh(new THREE.RingGeometry(0.48, 0.5, 48),
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.8, depthWrite: false }));
  selection.visible = false;
  satellite.add(selection);
  satellite.userData.selection = selection;
  satellite.traverse(part => { part.userData.satelliteId = id; });
  return satellite;
}

export function updateSatelliteModel(model, position, camera, viewportHeight, selected) {
  model.visible = Boolean(position);
  if (!position) return;
  model.position.copy(position);
  model.lookAt(0, 0, 0); // Antenne orientée vers la Terre.
  const distance = camera.position.distanceTo(position);
  const pixels = selected ? 66 : 38;
  const scale = pixels * 2 * distance * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / (Math.max(1, viewportHeight) * 3.6);
  model.scale.setScalar(THREE.MathUtils.clamp(scale, 0.025, 0.55));
  const ring = model.userData.selection;
  ring.visible = selected;
  ring.quaternion.copy(model.quaternion).invert().multiply(camera.quaternion);
}

export function disposeSatelliteModels(group) {
  const geometries = new Set(), materials = new Set();
  group.traverse(part => {
    if (part.geometry) geometries.add(part.geometry);
    if (part.material) materials.add(part.material);
  });
  geometries.forEach(geometry => geometry.dispose());
  materials.forEach(material => material.dispose());
}
