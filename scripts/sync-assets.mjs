// Salin hanya aset yang dirujuk 6 file mockup .dc.html ke public/assets/ (folder hasil generate).
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mockup = join(root, 'mockup');
const out = join(root, 'public', 'assets');

const sources = readdirSync(mockup).filter((f) => /^\d\. .*\.dc\.html$/.test(f));
if (sources.length !== 6) throw new Error(`Diharapkan 6 file .dc.html, ditemukan ${sources.length}`);

const refs = new Set();
for (const file of sources) {
  const html = readFileSync(join(mockup, file), 'utf8');
  // Rujukan langsung: "assets/s2/p-x.webp", A('assets/...'), <meta content="assets/...">
  for (const m of html.matchAll(/assets\/([\w\-/]+\.(?:webp|png|jpe?g|svg|mp3|ogg|wav|webm|mp4))/g)) refs.add(m[1]);
  // Latar peta misi yang disusun dinamis: __MK_MAPS = [['s2','p-maps-panduan',[[...]]], ...]
  for (const m of html.matchAll(/\['(s\d)','([\w-]+)',\[\[/g)) refs.add(`${m[1]}/${m[2]}.webp`);
}

rmSync(out, { recursive: true, force: true });
let total = 0;
const missing = [];
for (const rel of [...refs].sort()) {
  const src = join(mockup, 'assets', rel);
  if (!existsSync(src)) {
    missing.push(rel);
    continue;
  }
  const dest = join(out, rel);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest);
  total += statSync(src).size;
}

console.log(`${refs.size - missing.length} aset disalin ke public/assets/ (${(total / 1024 / 1024).toFixed(1)} MB)`);
if (missing.length) {
  console.error(`Tidak ditemukan di mockup/assets/:\n  ${missing.join('\n  ')}`);
  process.exitCode = 1;
}
