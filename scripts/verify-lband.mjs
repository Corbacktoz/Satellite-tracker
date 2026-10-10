import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9225',
  '--disable-gpu',
  '--no-sandbox',
  '--window-size=1600,900',
  'http://127.0.0.1:5173/'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9225/json/version');
  const version = await versionRes.json();
  const targetsRes = await fetch('http://127.0.0.1:9225/json');
  const targets = await targetsRes.json();
  const page = targets.find(t => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let msgId = 1;
  const pending = new Map();
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise(r => ws.onopen = r);
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await send('Runtime.enable');
  await send('Page.enable');

  console.log('Attente du chargement initial Bande L...');
  await new Promise(r => setTimeout(r, 2500));

  // TEST 1: Satellites chargés dans l'interface
  const testFleet = await send('Runtime.evaluate', {
    expression: `(() => {
      const rows = Array.from(document.querySelectorAll('.sat-row')).map(r => ({
        id: Number(r.dataset.id),
        title: r.querySelector('.sat-title')?.textContent?.trim(),
        sub: r.querySelector('.sat-sub')?.textContent?.trim()
      }));
      const count = document.querySelector('#count')?.textContent;
      const eyebrow = document.querySelector('.eyebrow')?.textContent;
      const brand = document.querySelector('.brand span')?.textContent;
      return { rows, count, eyebrow, brand };
    })()`,
    returnByValue: true
  });
  console.log('Test 1 (Constellation Bande L chargée) :', testFleet.result.value);

  const rows = testFleet.result.value.rows;
  assert.equal(rows.length, 5, 'Exactement 5 satellites affichés dans la liste');
  assert.equal(testFleet.result.value.count, '5 / 5', 'Compteur = 5 / 5');
  
  const expectedNames = ['I-6 F1', 'Alphasat', 'I-4 F2', 'I-4 F3', 'I-3 F5'];
  for (const name of expectedNames) {
    assert.ok(rows.some(r => r.title.includes(name)), `Satellite ${name} présent`);
  }

  // Vérifier qu'aucun Ka, S ou spare n'est affiché
  assert.equal(rows.some(r => r.title.includes('ViaSat')), false, 'Aucun ViaSat affiché');
  assert.equal(rows.some(r => r.title.includes('WildBlue')), false, 'Aucun WildBlue affiché');
  assert.equal(rows.some(r => r.title.includes('EAN')), false, 'Aucun EAN affiché');
  assert.equal(rows.some(r => r.title.includes('I-4 F1')), false, 'I-4 F1 (spare) absent');
  assert.equal(rows.some(r => r.title.includes('I-3 F1')), false, 'I-3 F1 (spare) absent');
  assert.equal(rows.some(r => r.title.includes('I-3 F2')), false, 'I-3 F2 (spare) absent');
  assert.equal(rows.some(r => r.title.includes('I-3 F3')), false, 'I-3 F3 (spare) absent');

  // TEST 2: Filtrage par région
  const testRegionFilter = await send('Runtime.evaluate', {
    expression: `(() => {
      const emeaBtn = Array.from(document.querySelectorAll('.cat-pill')).find(b => b.dataset.cat === 'emea');
      emeaBtn.click();
      const rowsEmea = Array.from(document.querySelectorAll('.sat-row')).map(r => r.querySelector('.sat-title')?.textContent?.trim());
      const countEmea = document.querySelector('#count')?.textContent;
      
      const allBtn = Array.from(document.querySelectorAll('.cat-pill')).find(b => b.dataset.cat === 'all');
      allBtn.click();
      const countAll = document.querySelector('#count')?.textContent;

      return { rowsEmea, countEmea, countAll };
    })()`,
    returnByValue: true
  });
  console.log('Test 2 (Filtres régionaux) :', testRegionFilter.result.value);
  assert.deepEqual(testRegionFilter.result.value.rowsEmea, ['Alphasat']);
  assert.equal(testRegionFilter.result.value.countEmea, '1 / 5');
  assert.equal(testRegionFilter.result.value.countAll, '5 / 5');

  // TEST 3: Sélection d'un satellite (I-6 F1)
  await send('Runtime.evaluate', {
    expression: `(() => {
      const row = Array.from(document.querySelectorAll('.sat-row')).find(r => r.textContent.includes('I-6 F1'));
      if (row) row.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  const testSelection = await send('Runtime.evaluate', {
    expression: `(() => {
      const name = document.querySelector('#sat-name')?.textContent;
      const badge = document.querySelector('#sat-status-badge')?.textContent;
      const datalink = document.querySelector('#satcom-datalink-block')?.hidden;
      const gateways = document.querySelector('#satcom-gateways')?.textContent;
      const coords = document.querySelector('#spot-coords')?.textContent;
      const diameter = document.querySelector('#spot-diameter')?.textContent;
      return { name, badge, datalinkHidden: datalink, gateways, coords, diameter };
    })()`,
    returnByValue: true
  });
  console.log('Test 3 (Sélection I-6 F1) :', testSelection.result.value);
  assert.equal(testSelection.result.value.name, 'I-6 F1');
  assert.ok(testSelection.result.value.badge.includes('EN SERVICE'));
  assert.equal(testSelection.result.value.datalinkHidden, false, 'Bloc datalink de sécurité affiché');
  assert.ok(testSelection.result.value.gateways.includes('Perth'), 'Passerelle primaire Perth');

  // Capture écran 3D
  const shot3d = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-lband-3d.png', Buffer.from(shot3d.data, 'base64'));

  // TEST 4: Bascule 2D
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#view-mode-2d')?.click()`
  });
  await new Promise(r => setTimeout(r, 600));

  const shot2d = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-lband-2d.png', Buffer.from(shot2d.data, 'base64'));
  console.log('Captures enregistrées : screenshot-lband-3d.png & screenshot-lband-2d.png');

  console.log('TOUS LES TESTS BANDE L SONT VALIDÉS AVEC SUCCÈS !');
  ws.close();
} catch (e) {
  console.error('Erreur test:', e);
  process.exit(1);
} finally {
  chrome.kill();
  process.exit(0);
}
