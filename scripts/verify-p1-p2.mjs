import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9226',
  '--disable-gpu',
  '--no-sandbox',
  '--window-size=1280,720',
  'http://127.0.0.1:5173/'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9226/json/version');
  const version = await versionRes.json();
  const targetsRes = await fetch('http://127.0.0.1:9226/json');
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

  console.log('Attente du chargement initial (1280x720)...');
  await new Promise(r => setTimeout(r, 2500));

  // --- VÉRIFICATION P1 : Alphasat & Londres (Hors service) vs Paris (Dans le spot) ---
  console.log('\n--- Test P1 : Verdict de couverture pour Alphasat ---');
  // Sélectionner Alphasat
  await send('Runtime.evaluate', {
    expression: `(() => {
      const row = Array.from(document.querySelectorAll('.sat-row')).find(r => r.textContent.includes('Alphasat'));
      if (row) row.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  // Régler observateur sur Londres
  const testLondon = await send('Runtime.evaluate', {
    expression: `(() => {
      const sel = document.querySelector('#obs-select');
      sel.value = 'london';
      sel.dispatchEvent(new Event('change'));
      const verdict = document.querySelector('#antenna-verdict')?.textContent;
      const isPartial = document.querySelector('#antenna-verdict')?.classList.contains('partial-coverage');
      const diameter = document.querySelector('#spot-diameter')?.textContent;
      return { verdict, isPartial, diameter };
    })()`,
    returnByValue: true
  });
  console.log('Alphasat @ Londres :', testLondon.result.value);
  assert.equal(testLondon.result.value.isPartial, true, 'Londres est en couverture partielle (vue géométrique, hors service commercial)');
  assert.ok(testLondon.result.value.verdict.includes('EN VUE GÉOMÉTRIQUE'), 'Verdict contient EN VUE GÉOMÉTRIQUE');
  assert.ok(testLondon.result.value.verdict.includes('Hors zone de service commercial'), 'Verdict contient Hors zone de service');
  assert.ok(!testLondon.result.value.verdict.includes('DANS LE SPOT'), 'Verdict ne dit PAS Dans le spot pour Londres');
  assert.ok(testLondon.result.value.diameter.includes('8\u202f006') || testLondon.result.value.diameter.includes('8 006'), 'Diamètre utile = 8 006 km');

  // Régler observateur sur Paris (dans le faisceau)
  const testParis = await send('Runtime.evaluate', {
    expression: `(() => {
      const sel = document.querySelector('#obs-select');
      sel.value = 'paris';
      sel.dispatchEvent(new Event('change'));
      const verdict = document.querySelector('#antenna-verdict')?.textContent;
      const inCoverage = document.querySelector('#antenna-verdict')?.classList.contains('in-coverage');
      return { verdict, inCoverage };
    })()`,
    returnByValue: true
  });
  console.log('Alphasat @ Paris :', testParis.result.value);
  assert.equal(testParis.result.value.inCoverage, true, 'Paris est dans le spot');
  assert.ok(testParis.result.value.verdict.includes('DANS LE SPOT'), 'Verdict Paris contient DANS LE SPOT');

  // --- VÉRIFICATION P2 : Non-recouvrement à 1280x720 et cliquabilité ---
  console.log('\n--- Test P2 : Chevauchement et cliquabilité à 1280x720 ---');
  const testOverlap = await send('Runtime.evaluate', {
    expression: `(() => {
      const detail = document.querySelector('#detail').getBoundingClientRect();
      const showLabels = document.querySelector('#show-labels');
      const showOrbits = document.querySelector('#show-orbits');
      const showSpot = document.querySelector('#show-spot');
      
      const rLabels = showLabels.getBoundingClientRect();
      const rOrbits = showOrbits.getBoundingClientRect();
      const rSpot = showSpot.getBoundingClientRect();

      // Clics via elementFromPoint
      const elAtLabels = document.elementFromPoint(rLabels.left + rLabels.width / 2, rLabels.top + rLabels.height / 2);
      const elAtOrbits = document.elementFromPoint(rOrbits.left + rOrbits.width / 2, rOrbits.top + rOrbits.height / 2);

      return {
        detailLeft: detail.left,
        labelsRight: rLabels.right,
        orbitsRight: rOrbits.right,
        spotRight: rSpot.right,
        clickableLabels: elAtLabels === showLabels,
        clickableOrbits: elAtOrbits === showOrbits
      };
    })()`,
    returnByValue: true
  });
  console.log('Géométrie à 1280x720 :', testOverlap.result.value);
  assert.ok(testOverlap.result.value.labelsRight < testOverlap.result.value.detailLeft, 'Case Noms à gauche de la fiche');
  assert.ok(testOverlap.result.value.orbitsRight < testOverlap.result.value.detailLeft, 'Case Orbites à gauche de la fiche');
  assert.equal(testOverlap.result.value.clickableLabels, true, 'Case Noms cliquable directement sans obstruction');
  assert.equal(testOverlap.result.value.clickableOrbits, true, 'Case Orbites cliquable directement sans obstruction');

  // Capture 1280x720 en 3D
  const shot12803d = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-1280-3d.png', Buffer.from(shot12803d.data, 'base64'));

  // --- VÉRIFICATION P2 : Carte 2D et pilotage par les commandes ---
  console.log('\n--- Test P2 : Contrôles Spot au sol, Orbites et Noms en 2D ---');
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#view-mode-2d')?.click()`
  });
  await new Promise(r => setTimeout(r, 600));

  const test2DControls = await send('Runtime.evaluate', {
    expression: `(() => {
      // Tester toggle Spot
      const spotCheck = document.querySelector('#show-spot');
      spotCheck.checked = false;
      spotCheck.dispatchEvent(new Event('change'));
      const spotOff = window.worldMap2D.showSpot;

      spotCheck.checked = true;
      spotCheck.dispatchEvent(new Event('change'));
      const spotOn = window.worldMap2D.showSpot;

      // Tester toggle Orbits
      const orbitsCheck = document.querySelector('#show-orbits');
      orbitsCheck.checked = false;
      orbitsCheck.dispatchEvent(new Event('change'));
      const orbitsOff = window.worldMap2D.showOrbits;

      orbitsCheck.checked = true;
      orbitsCheck.dispatchEvent(new Event('change'));
      const orbitsOn = window.worldMap2D.showOrbits;

      // Tester toggle Labels
      const labelsCheck = document.querySelector('#show-labels');
      labelsCheck.checked = false;
      labelsCheck.dispatchEvent(new Event('change'));
      const labelsOff = window.worldMap2D.showLabels;

      labelsCheck.checked = true;
      labelsCheck.dispatchEvent(new Event('change'));
      const labelsOn = window.worldMap2D.showLabels;

      // Mode spot en 2D
      const dService = document.querySelector('#spot-diameter')?.textContent;
      const spotMode2D = window.worldMap2D.spotMode;

      return {
        spotOff, spotOn,
        orbitsOff, orbitsOn,
        labelsOff, labelsOn,
        dService, spotMode2D
      };
    })()`,
    returnByValue: true
  });
  console.log('Résultats pilotage 2D :', test2DControls.result.value);
  assert.equal(test2DControls.result.value.spotOff, false, 'toggleSpot désactive showSpot');
  assert.equal(test2DControls.result.value.spotOn, true, 'toggleSpot active showSpot');
  assert.equal(test2DControls.result.value.orbitsOff, false, 'toggleOrbits désactive showOrbits');
  assert.equal(test2DControls.result.value.orbitsOn, true, 'toggleOrbits active showOrbits');
  assert.equal(test2DControls.result.value.labelsOff, false, 'toggleLabels désactive showLabels');
  assert.equal(test2DControls.result.value.labelsOn, true, 'toggleLabels active showLabels');
  assert.equal(test2DControls.result.value.spotMode2D, 'service', 'Mode utile en 2D par défaut');

  // Capture 1280x720 en 2D
  const shot12802d = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-1280-2d.png', Buffer.from(shot12802d.data, 'base64'));

  console.log('\nCaptures enregistrées :');
  console.log('- scripts/screenshot-1280-3d.png');
  console.log('- scripts/screenshot-1280-2d.png');
  console.log('\nTOUTES LES VÉRIFICATIONS P1 ET P2 SONT CONFIRMÉES ET VALIDÉES !');

  ws.close();
} catch (e) {
  console.error('Erreur test:', e);
  process.exit(1);
} finally {
  chrome.kill();
  process.exit(0);
}
