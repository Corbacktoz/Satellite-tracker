import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9224',
  '--disable-gpu',
  '--no-sandbox',
  '--window-size=1600,900',
  'http://127.0.0.1:5173/'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9224/json/version');
  const version = await versionRes.json();
  const targetsRes = await fetch('http://127.0.0.1:9224/json');
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

  console.log('Attente du chargement initial...');
  await new Promise(r => setTimeout(r, 2500));

  // TEST 1: Startup clean state
  const testStartup = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        satName: document.querySelector('#sat-name')?.textContent,
        selectedRows: document.querySelectorAll('.sat-row.selected').length,
        visibleLabels: Array.from(document.querySelectorAll('.sat-label')).filter(e => !e.hidden).length,
        emptySelectionClass: document.querySelector('#detail')?.classList.contains('empty-selection')
      };
    })()`,
    returnByValue: true
  });
  console.log('Test 1 (Démarrage épuré) :', testStartup.result.value);
  assert.equal(testStartup.result.value.satName, 'Aucun satellite');
  assert.equal(testStartup.result.value.selectedRows, 0);
  assert.equal(testStartup.result.value.visibleLabels, 0);
  assert.equal(testStartup.result.value.emptySelectionClass, true);

  // TEST 2: Sélection de ViaSat-1 et vérification de "Mon Antenne" (Washington vs Kourou)
  await send('Runtime.evaluate', {
    expression: `(() => {
      const row = Array.from(document.querySelectorAll('.sat-row')).find(r => r.textContent.includes('ViaSat-1'));
      if (row) row.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  // Vérifier Washington D.C.
  const testViasat1DC = await send('Runtime.evaluate', {
    expression: `(() => {
      const sel = document.querySelector('#obs-select');
      sel.value = 'washington';
      sel.dispatchEvent(new Event('change'));
      const verdict = document.querySelector('#antenna-verdict')?.textContent;
      const diameter = document.querySelector('#spot-diameter')?.textContent;
      return { verdict, diameter };
    })()`,
    returnByValue: true
  });
  console.log('Test 2a (ViaSat-1 @ Washington) :', testViasat1DC.result.value);
  assert.ok(testViasat1DC.result.value.verdict.includes('DANS LE SPOT'), 'Washington est dans le spot de ViaSat-1');

  // Vérifier Kourou
  const testViasat1Kourou = await send('Runtime.evaluate', {
    expression: `(() => {
      const sel = document.querySelector('#obs-select');
      sel.value = 'kourou';
      sel.dispatchEvent(new Event('change'));
      const verdict = document.querySelector('#antenna-verdict')?.textContent;
      const isPartial = document.querySelector('#antenna-verdict')?.classList.contains('partial-coverage');
      return { verdict, isPartial };
    })()`,
    returnByValue: true
  });
  console.log('Test 2b (ViaSat-1 @ Kourou - P1 fixé) :', testViasat1Kourou.result.value);
  assert.ok(testViasat1Kourou.result.value.verdict.includes('EN VUE GÉOMÉTRIQUE'), 'Kourou est en vue géométrique');
  assert.ok(testViasat1Kourou.result.value.verdict.includes('Hors zone de service'), 'Kourou est hors zone de service');
  assert.equal(testViasat1Kourou.result.value.isPartial, true);

  // TEST 3: Modes de Spot (Faisceau utile vs Horizon 5°)
  const testSpotModes = await send('Runtime.evaluate', {
    expression: `(() => {
      const dService = document.querySelector('#spot-diameter')?.textContent;
      document.querySelector('#spot-mode-global')?.click();
      const dGlobal = document.querySelector('#spot-diameter')?.textContent;
      document.querySelector('#spot-mode-service')?.click();
      const dBack = document.querySelector('#spot-diameter')?.textContent;
      return { dService, dGlobal, dBack };
    })()`,
    returnByValue: true
  });
  console.log('Test 3 (Modes de Spot) :', testSpotModes.result.value);
  assert.ok(testSpotModes.result.value.dService.includes('5\u202f337') || testSpotModes.result.value.dService.includes('5 337'), 'Mode Faisceau utile = ~5 337 km');
  assert.ok(testSpotModes.result.value.dGlobal.includes('16') && testSpotModes.result.value.dGlobal.includes('km'), 'Mode Horizon 5° = ~16 978 km');

  // TEST 4: Bascule 2D et synchronisation aria-selected
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#view-mode-2d')?.click()`
  });
  await new Promise(r => setTimeout(r, 600));

  const test2DTabs = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn3d = document.querySelector('#view-mode-3d');
      const btn2d = document.querySelector('#view-mode-2d');
      const container2d = document.querySelector('#map2d-container');
      const canvas = document.querySelector('.map2d-canvas');
      return {
        aria3d: btn3d.getAttribute('aria-selected'),
        aria2d: btn2d.getAttribute('aria-selected'),
        containerHidden: container2d.hidden,
        canvasWidth: canvas.clientWidth,
        canvasHeight: canvas.clientHeight
      };
    })()`,
    returnByValue: true
  });
  console.log('Test 4 (Bascule 2D et accessibilité aria-selected) :', test2DTabs.result.value);
  assert.equal(test2DTabs.result.value.aria3d, 'false');
  assert.equal(test2DTabs.result.value.aria2d, 'true');
  assert.equal(test2DTabs.result.value.containerHidden, false);
  assert.ok(test2DTabs.result.value.canvasHeight > 300, 'Hauteur du canvas 2D > 300px');

  // TEST 5: Responsive mobile (390 x 844)
  console.log('Test 5 (Émulation mobile 390x844)...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 800));

  const testMobile = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('header');
      const map2d = document.querySelector('#map2d-container');
      const canvas = document.querySelector('.map2d-canvas');
      return {
        headerClientWidth: header.clientWidth,
        headerScrollWidth: header.scrollWidth,
        map2dHeight: map2d.clientHeight,
        canvasHeight: canvas.clientHeight
      };
    })()`,
    returnByValue: true
  });
  console.log('Test 5 (Résultats mobile 390x844) :', testMobile.result.value);
  assert.equal(testMobile.result.value.headerClientWidth, testMobile.result.value.headerScrollWidth, 'En-tête sans débordement horizontal');
  assert.equal(testMobile.result.value.map2dHeight, 390, 'Hauteur de la carte 2D = 390px');
  assert.equal(testMobile.result.value.canvasHeight, 390, 'Hauteur du canvas 2D = 390px');

  // Capture écran de confirmation mobile 2D
  const mobileShot = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-mobile-390x844.png', Buffer.from(mobileShot.data, 'base64'));
  console.log('Capture mobile enregistrée : scripts/screenshot-mobile-390x844.png');

  console.log('TOUS LES TESTS D’AUDIT SONT VALIDÉS AVEC SUCCÈS !');
  ws.close();
} catch (e) {
  console.error('Erreur test:', e);
  process.exit(1);
} finally {
  chrome.kill();
  process.exit(0);
}
