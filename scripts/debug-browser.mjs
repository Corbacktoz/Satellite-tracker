import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--no-sandbox',
  '--window-size=1600,900',
  'http://127.0.0.1:5173/'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const version = await versionRes.json();
  console.log('Chrome connected:', version.Browser);

  const targetsRes = await fetch('http://127.0.0.1:9222/json');
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
    if (data.method === 'Runtime.consoleAPICalled') {
      console.log('[BROWSER]', data.params.type, data.params.args.map(a => a.value || a.description || JSON.stringify(a)).join(' '));
    }
    if (data.method === 'Runtime.exceptionThrown') {
      console.error('[BROWSER EXCEPTION]', data.params.exceptionDetails.text, data.params.exceptionDetails.exception?.description);
    }
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await send('Runtime.enable');
  await send('Page.enable');

  console.log('Waiting 2s for page load...');
  await new Promise(r => setTimeout(r, 2000));

  // 1. État au démarrage : aucun satellite sélectionné, aucune étiquette visible
  const startupState = await send('Runtime.evaluate', {
    expression: `(() => {
      const satName = document.querySelector('#sat-name')?.textContent;
      const visibleLabels = Array.from(document.querySelectorAll('.sat-label')).filter(e => !e.hidden);
      return {
        satName,
        visibleLabelsCount: visibleLabels.length,
        selectedRowsCount: document.querySelectorAll('.sat-row.selected').length
      };
    })()`,
    returnByValue: true
  });
  console.log('1. Startup state (aucun satellite sélectionné) :', startupState.result.value);

  // Capture écran démarrage épuré 3D
  const shotStartup = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-startup-clean.png', Buffer.from(shotStartup.data, 'base64'));
  console.log('Screenshot startup saved: scripts/screenshot-startup-clean.png');

  // 2. Sélection d'un satellite (clic sur Alphasat)
  console.log('2. Clicking on Alphasat (NORAD 39215)...');
  const selectRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const row = Array.from(document.querySelectorAll('.sat-row')).find(r => r.textContent.includes('Alphasat'));
      if (row) row.click();
      return { clicked: !!row };
    })()`,
    returnByValue: true
  });
  console.log('Alphasat clicked:', selectRes.result.value);

  await new Promise(r => setTimeout(r, 800));

  const afterSelect = await send('Runtime.evaluate', {
    expression: `(() => {
      const satName = document.querySelector('#sat-name')?.textContent;
      const visibleLabels = Array.from(document.querySelectorAll('.sat-label')).filter(e => !e.hidden);
      return {
        satName,
        visibleLabelsCount: visibleLabels.length,
        visibleLabelText: visibleLabels[0]?.textContent
      };
    })()`,
    returnByValue: true
  });
  console.log('After selecting Alphasat:', afterSelect.result.value);

  // Capture écran satellite unique sélectionné 3D
  const shotSingle = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-selected-single.png', Buffer.from(shotSingle.data, 'base64'));
  console.log('Screenshot single selected saved: scripts/screenshot-selected-single.png');

  // 3. Bascule en vue 2D
  console.log('3. Switching to 2D view...');
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#view-mode-2d')?.click()`
  });
  await new Promise(r => setTimeout(r, 600));

  const shot2d = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile('scripts/screenshot-2d-clean.png', Buffer.from(shot2d.data, 'base64'));
  console.log('Screenshot 2D clean saved: scripts/screenshot-2d-clean.png');

  ws.close();
} catch (err) {
  console.error('Test error:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
