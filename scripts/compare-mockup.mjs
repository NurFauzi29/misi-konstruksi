// Bandingkan tampilan hasil build (dist/, dibuka lewat file://) dengan mockup asli (runtime support.js)
// secara piksel, untuk setiap skenario di bawah. Butuh Microsoft Edge terpasang dan koneksi internet
// (mockup memuat React dari unpkg). Hasil & gambar selisih: .compare/
//
//   npm run build && npm run compare [-- filter]
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright-core';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mockupDir = join(root, 'mockup');
const outDir = join(root, '.compare');
const filter = process.argv[2] || '';
const W = 1280, H = 720;
const THRESHOLD = 0.005; // maksimal 0,5% piksel berbeda

const F = [
  '1. Misi Konstruksi.dc.html',
  '2. Scene Eksplorasi.dc.html',
  '3. Tebak Profesi.dc.html',
  '4. Pengalaman Kerja.dc.html',
  '5. Profesi Pertama.dc.html',
  '6. Scene Evaluasi.dc.html',
];

// Setiap skenario: buka scene, jalankan langkah, bandingkan setelah tiap langkah.
//   { click: 'X' }  klik elemen pertama dengan title="X"      { sel: 'css' }  klik elemen pertama yang cocok
//   { wait: ms }    jeda tambahan setelah klik                 { skip: true }  jangan bandingkan (mis. frame video)
// `progress` mengisi sessionStorage (format mockup: mk_p_<key>) sebelum halaman dimuat.
const P1 = { s1: { done: true } };
const P2 = { ...P1, s2: { ever: true } };
const P3 = { ...P2, s3: { ever: true } };
const P4 = { ...P3, s4: { ever: true } };
const ALL_DONE = { ...P4, s5: { ever: true, xp: 900 } };
const SCENARIOS = [
  { name: 's1-home', file: F[0], steps: [{ click: 'Info Game' }, { click: 'Tutup' }, { click: 'Pengembang' }] },
  { name: 's1-panduan', file: F[0], steps: [{ click: 'Mulai', wait: 400 }, { click: 'Panduan' }] },
  { name: 's1-terkunci', file: F[0], steps: [{ click: 'Mulai', wait: 400 }, { click: 'Tebak Profesi (terkunci)' }] },
  { name: 's1-ke-s2', file: F[0], steps: [{ click: 'Mulai', wait: 400 }, { click: 'Panduan' }, { click: 'Selanjutnya — mulai misi profesi', wait: 1500 }] },
  { name: 's1-peta-selesai', file: F[0], progress: ALL_DONE, steps: [{ click: 'Mulai', wait: 400 }] },
  { name: 's2', file: F[1], progress: P1, steps: [{ click: 'Eksplorasi 8 Profesi', wait: 400 }, { click: 'Mandor', wait: 400 }, { click: 'Kembali ke rak profesi', wait: 400 }] },
  { name: 's3', file: F[2], progress: P2, steps: [{ click: 'Tebak Profesi', wait: 400 }, { drag: ['[title="PENGAWAS"]', '[title="Kotak jawaban"]'], wait: 300 }] },
  { name: 's4', file: F[3], progress: P3, steps: [{ click: 'Pengalaman Kerja', wait: 400 }, { click: 'Buka peti MANDOR', wait: 1500 }] },
  {
    name: 's4-drag',
    file: F[3],
    progress: { ...P3, s4: { done: [true, true, true, false, false, false, false, false] } },
    steps: [{ click: 'Pengalaman Kerja', wait: 400 }, { click: 'Buka peti LOGISTIK', wait: 1500 }, { drag: ['text=Semen', '[data-drop]'], wait: 300 }],
  },
  { name: 's5', file: F[4], progress: P4, steps: [{ click: 'Profesi Pertamaku', wait: 600, skip: true }, { click: 'Mulai permainan', wait: 400 }, { click: 'Coba profesi MANDOR', wait: 400 }, { click: 'Mulai misi profesi ini', wait: 400 }] },
  { name: 's6', file: F[5], progress: ALL_DONE, steps: [{ click: 'Mulai evaluasi', wait: 400 }, { click: 'Pilih jawaban A', wait: 300 }, { click: 'Soal berikutnya', wait: 300 }] },
];

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.webm': 'video/webm', '.mp4': 'video/mp4' };
const server = createServer((req, res) => {
  const p = join(mockupDir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!p.startsWith(mockupDir) || !existsSync(p)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' }).end(readFileSync(p));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/`;
const distUrl = pathToFileURL(join(root, 'dist', 'index.html')).href;

const initScript = (progress) => `
  (() => {
    let s = 42; Math.random = () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    try { if (!sessionStorage.getItem('__cmp')) { sessionStorage.clear(); localStorage.clear(); sessionStorage.setItem('__cmp','1');
      const p = ${JSON.stringify(progress || {})}; for (const k in p) sessionStorage.setItem('mk_p_' + k, JSON.stringify(p[k])); } } catch (e) {}
  })();`;

async function shoot(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((i) => (i.complete ? 0 : new Promise((r) => (i.onload = i.onerror = r)))));
  });
  await page.waitForTimeout(900);
  return PNG.sync.read(await page.screenshot({ animations: 'disabled' }));
}

async function run(browser, sc, which) {
  const ctx = await browser.newContext({ viewport: { width: W, height: H } });
  await ctx.addInitScript(initScript(sc.progress));
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  if (which === 'mockup') await page.goto(base + encodeURIComponent(sc.file), { waitUntil: 'networkidle' });
  else {
    await page.goto(distUrl, { waitUntil: 'load' });
    if (sc.file !== F[0]) await page.evaluate((f) => window.__dcGo(f), sc.file);
  }
  const shots = [await shoot(page)];
  for (const step of sc.steps) {
    const target = step.drag ? step.drag.join(' → ') : step.sel ?? `[title="${step.click}"]`;
    try {
      if (step.drag) {
        const [from, to] = await Promise.all(step.drag.map((s) => page.locator(s).first().boundingBox({ timeout: 5000 })));
        await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
        await page.mouse.down();
        await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 12 });
        shots.push(step.skip ? null : await shoot(page)); // tangkapan saat masih menyeret
        await page.mouse.up();
      } else await page.locator(target).first().click({ timeout: 5000 });
    } catch (e) {
      errors.push(`gagal klik ${target}`);
      break;
    }
    if (step.wait) await page.waitForTimeout(step.wait);
    shots.push(step.skip ? null : await shoot(page));
  }
  await ctx.close();
  return { shots, errors };
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge' });
let failed = 0;
for (const sc of SCENARIOS.filter((s) => s.name.includes(filter))) {
  const [a, b] = [await run(browser, sc, 'mockup'), await run(browser, sc, 'build')];
  a.shots.forEach((shotA, i) => {
    const shotB = b.shots[i];
    const label0 = `${sc.name}#${i}`;
    if (!shotA || !shotB) {
      if (shotA || shotB || i >= b.shots.length) {
        failed++;
        console.log(`BEDA ${label0.padEnd(22)} langkah tidak tersedia di salah satu versi`);
      }
      return;
    }
    const diff = new PNG({ width: W, height: H });
    const n = pixelmatch(shotA.data, shotB.data, diff.data, W, H, { threshold: 0.1 });
    const ratio = n / (W * H);
    const label = `${sc.name}#${i}`;
    const ok = ratio <= THRESHOLD;
    if (!ok || process.env.SAVE) {
      if (!ok) failed++;
      writeFileSync(join(outDir, `${label}-mockup.png`), PNG.sync.write(shotA));
      writeFileSync(join(outDir, `${label}-build.png`), PNG.sync.write(shotB));
      writeFileSync(join(outDir, `${label}-diff.png`), PNG.sync.write(diff));
    }
    console.log(`${ok ? 'OK  ' : 'BEDA'} ${label.padEnd(22)} ${(ratio * 100).toFixed(3)}% piksel berbeda`);
  });
  if (a.shots.length !== b.shots.length) failed++;
  for (const e of a.errors) console.log(`     error mockup: ${e}`);
  for (const e of b.errors) console.log(`     error build: ${e}`);
}
await browser.close();
server.close();
if (failed) {
  console.log(`\n${failed} tangkapan berbeda — lihat .compare/`);
  process.exitCode = 1;
}
