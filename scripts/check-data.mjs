import assert from 'node:assert/strict';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { readFile } from 'node:fs/promises';
import { orbitalDataStatus } from '../src/data-status.js';
import { isOperationalLBandSatellite } from '../shared/catalogue.js';

const fixture = JSON.parse((await readFile(new URL('../public/data/fleet-viasat.json', import.meta.url), 'utf8')).replace(/^\uFEFF/, ''));
const displayed = fixture.filter(isOperationalLBandSatellite);
assert.equal(displayed.length, 5);
const originalGet = https.get, originalNow = Date.now;
let mode = 'offline', attempts = 0, now = originalNow();
https.get = (url, options, callback) => {
  attempts++;
  const req = new EventEmitter();
  req.destroy = () => {};
  queueMicrotask(() => {
    const live = mode === 'all' && (url.includes('NAME=INMARSAT') || url.includes('NAME=ALPHASAT'))
      || mode === 'partial' && url.includes('NAME=INMARSAT');
    if (!live) return req.emit('error', new Error('Panne simulée'));
    const response = new EventEmitter();
    response.statusCode = 200;
    callback(response);
    const data = mode === 'partial' ? displayed.filter(s => s.NORAD_CAT_ID === 50319) : displayed;
    response.emit('data', JSON.stringify(data.map(item => ({ ...item, EPOCH: '2026-10-10T12:00:00.000000' }))));
    response.emit('end');
  });
  return req;
};
Date.now = () => now;
try {
  const { catalogue } = await import('../server/data.mjs');
  const offline = await catalogue();
  assert.equal(offline.live, false);
  assert.equal(orbitalDataStatus(offline).level, 'offline');
  assert.ok(offline.items.every(s => s.DATA_SOURCE === 'fallback'));
  const firstAttempts = attempts;
  await catalogue();
  assert.equal(attempts, firstAttempts, 'Le secours est brièvement mis en cache');
  now += 60001;
  mode = 'partial';
  const partial = await catalogue();
  assert.ok(attempts > firstAttempts, 'Les sources en échec sont réessayées après une minute');
  assert.equal(orbitalDataStatus(partial).level, 'degraded');
  assert.ok(orbitalDataStatus(partial).message.includes('1 / 5'));
  assert.equal(partial.items.find(s => s.NORAD_CAT_ID === 50319).EPOCH, '2026-10-10T12:00:00.000000');
  now += 7200001;
  mode = 'all';
  const all = await catalogue();
  assert.equal(orbitalDataStatus(all).level, 'live', 'Les pannes de sources Ka ne dégradent pas une flotte L entièrement actualisée');
  assert.equal(orbitalDataStatus({ items: displayed, live: false, degraded: true }).level, 'offline');
} finally {
  https.get = originalGet;
  Date.now = originalNow;
}
console.log('Provenance, secours total/partiel, fusion et reprise après panne vérifiés sans accès réseau.');
