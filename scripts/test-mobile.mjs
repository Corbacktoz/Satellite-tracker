import { spawn } from 'node:child_process';

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--disable-gpu',
  '--no-sandbox',
  '--window-size=390,844',
  'http://127.0.0.1:5173/'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const versionRes = await fetch('http://127.0.0.1:9223/json/version');
  const version = await versionRes.json();
  const targetsRes = await fetch('http://127.0.0.1:9223/json');
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
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  await new Promise(r => setTimeout(r, 1500));

  const metrics = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('header');
      const globe = document.querySelector('#globe');
      const map2d = document.querySelector('#map2d-container');
      const detail = document.querySelector('.detail');
      const space = document.querySelector('.space');
      const toObj = r => r ? { w: r.width, h: r.height, top: r.top, bottom: r.bottom } : null;
      const getStyles = el => {
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return { height: cs.height, minHeight: cs.minHeight, maxHeight: cs.maxHeight, flex: cs.flex, display: cs.display, position: cs.position, top: cs.top, bottom: cs.bottom };
      };
      return {
        header: { clientWidth: header.clientWidth, scrollWidth: header.scrollWidth },
        mainStyles: getStyles(document.querySelector('main')),
        spaceStyles: getStyles(space),
        space: toObj(space?.getBoundingClientRect()),
        globe: toObj(globe?.getBoundingClientRect()),
        detail: toObj(detail?.getBoundingClientRect()),
        map2d: toObj(map2d?.getBoundingClientRect())
      };
    })()`,
    returnByValue: true
  });

  console.log('Mobile 390x844 metrics before 2D switch:');
  console.log(JSON.stringify(metrics.result.value, null, 2));

  // Switch to 2D
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#view-mode-2d')?.click()`
  });
  await new Promise(r => setTimeout(r, 600));

  const metrics2d = await send('Runtime.evaluate', {
    expression: `(() => {
      const map2d = document.querySelector('#map2d-container');
      const canvas = document.querySelector('.map2d-canvas');
      const toObj = r => r ? { w: r.width, h: r.height, top: r.top, bottom: r.bottom } : null;
      return {
        map2d: toObj(map2d?.getBoundingClientRect()),
        canvas: canvas ? { width: canvas.width, height: canvas.height, clientWidth: canvas.clientWidth, clientHeight: canvas.clientHeight } : null
      };
    })()`,
    returnByValue: true
  });

  console.log('Mobile 390x844 metrics after 2D switch:');
  console.log(JSON.stringify(metrics2d.result.value, null, 2));

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
  process.exit(0);
}
