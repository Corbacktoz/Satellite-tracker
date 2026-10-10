import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import https from 'node:https';
import { isViasatSatellite } from '../shared/catalogue.js';

const sources = [
  { key: 'viasat', query: 'NAME=VIASAT' },
  { key: 'wildblue', query: 'NAME=WILDBLUE' },
  { key: 'asbm', query: 'NAME=ASBM' },
  { key: 'inmarsat', query: 'NAME=INMARSAT' },
  { key: 'alphasat', query: 'NAME=ALPHASAT' },
  { key: 'hellas', query: 'NAME=HELLAS-SAT%203' }
];

const caches = new Map(), requests = new Map();

function fetchCelesTrak(query) {
  return new Promise((resolve, reject) => {
    const caPath = new URL('../.ca.pem', import.meta.url);
    const ca = existsSync(caPath) ? readFileSync(caPath) : undefined;
    const req = https.get(`https://celestrak.org/NORAD/elements/gp.php?${query}&FORMAT=json`, { ca, timeout: 12000 }, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let raw = '';
      res.on('error', reject);
      res.on('aborted', () => reject(new Error('Réponse interrompue')));
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try {
          const items = JSON.parse(raw);
          if (!Array.isArray(items) || !items.length || !items[0].EPOCH) {
            throw new Error('Données invalides');
          }
          resolve(items);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function parseEpoch(epoch) {
  if (!epoch) return 0;
  const str = String(epoch).endsWith('Z') ? String(epoch) : `${epoch}Z`;
  const t = Date.parse(str);
  return Number.isFinite(t) ? t : 0;
}

async function loadSource({ key, query }) {
  const cached = caches.get(key);
  // Après une panne, réessayer rapidement au lieu de figer le secours pendant deux heures.
  if (cached && Date.now() - cached.checkedAt < (cached.live ? 7200000 : 60000)) return cached;
  if (requests.has(key)) return requests.get(key);

  const pending = (async () => {
    let result;
    try {
      const items = await fetchCelesTrak(query);
      result = { items, fetchedAt: Date.now(), live: true, key };
    } catch {
      // Fallback local file
      let fallbackItems = [];
      try {
        const raw = await readFile(new URL(`../public/data/fleet-viasat.json`, import.meta.url), 'utf8');
        fallbackItems = JSON.parse(raw.replace(/^\uFEFF/, ''));
      } catch {
        fallbackItems = [];
      }
      result = { ...(cached || { items: fallbackItems, fetchedAt: null }), live: false, key };
    }
    result.checkedAt = Date.now();
    caches.set(key, result);
    return result;
  })();

  requests.set(key, pending);
  try {
    return await pending;
  } finally {
    requests.delete(key);
  }
}

export async function catalogue() {
  const results = await Promise.all(sources.map(loadSource));
  const unique = new Map();

  for (const r of results) {
    for (const item of r.items) {
      const id = item.NORAD_CAT_ID;
      const epoch = parseEpoch(item.EPOCH);
      if (!unique.has(id)) {
        unique.set(id, { item, live: r.live, epoch });
      } else {
        const existing = unique.get(id);
        // Priorité 1 : une donnée en direct l'emporte toujours sur un secours
        if (!existing.live && r.live) {
          unique.set(id, { item, live: r.live, epoch });
        } else if (existing.live && !r.live) {
          // Ne jamais écraser une donnée live par un secours stale
        } else if (epoch > existing.epoch) {
          // Si même statut live, l'époque la plus récente l'emporte
          unique.set(id, { item, live: r.live, epoch });
        }
      }
    }
  }

  const items = [...unique.values()].map(entry => ({
    ...entry.item,
    DATA_SOURCE: entry.live ? 'celestrak' : 'fallback'
  })).filter(isViasatSatellite);
  const degradedSources = results.filter(r => !r.live).map(r => r.key);
  const liveSources = results.filter(r => r.live).map(r => r.key);
  const allLive = results.length > 0 && results.every(r => r.live);
  const anyLive = results.some(r => r.live);

  // If live fetch returned nothing or failed, ensure we serve at least the cached fleet
  if (items.length === 0) {
    try {
      const raw = await readFile(new URL(`../public/data/fleet-viasat.json`, import.meta.url), 'utf8');
      const fallback = JSON.parse(raw.replace(/^\uFEFF/, '')).filter(isViasatSatellite)
        .map(item => ({ ...item, DATA_SOURCE: 'fallback' }));
      return {
        items: fallback,
        live: false,
        allLive: false,
        degraded: true,
        degradedSources: sources.map(s => s.key),
        liveSources: [],
        fetchedAt: null
      };
    } catch {
      return {
        items: [],
        live: false,
        allLive: false,
        degraded: true,
        degradedSources: sources.map(s => s.key),
        liveSources: [],
        fetchedAt: null
      };
    }
  }

  return {
    items,
    live: anyLive,
    allLive,
    degraded: degradedSources.length > 0,
    degradedSources,
    liveSources,
    fetchedAt: Math.max(...results.map(r => r.fetchedAt || 0)) || null
  };
}

export async function api(req, res, next) {
  if (req.url?.split('?')[0] !== '/api/satellites') return next?.();
  try {
    const data = await catalogue();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify(data));
  } catch {
    res.statusCode = 503;
    res.end(JSON.stringify({ error: 'Catalogue indisponible' }));
  }
}
