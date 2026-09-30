// Validasi dist/ terhadap ketentuan panduan §3.4, lalu zip ke release/misi-konstruksi.zip.
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { zipSync } from 'fflate';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const zipPath = join(root, 'release', 'misi-konstruksi.zip');
const MAX_ZIP = 25 * 1024 * 1024;
const MEDIA = /["'`]((?:\.\/)?(?:assets\/)?[\w\-/]+\.(?:webp|png|jpe?g|svg|mp3|ogg|wav|webm|mp4))["'`]/g;

const errors = [];
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

if (!existsSync(join(dist, 'index.html'))) {
  console.error('dist/index.html tidak ada — jalankan `npm run build` dulu.');
  process.exit(1);
}

const files = walk(dist);
const html = readFileSync(join(dist, 'index.html'), 'utf8');

if (/<script[^>]+\bsrc=/i.test(html)) errors.push('index.html masih memuat <script src> eksternal (gagal di file://).');
if (/<link[^>]+rel=["']?stylesheet[^>]+href=/i.test(html)) errors.push('index.html masih memuat stylesheet eksternal.');

for (const f of files.filter((f) => ['.html', '.js', '.css'].includes(extname(f)))) {
  const text = readFileSync(f, 'utf8');
  const urls = [...text.matchAll(/https?:\/\/[^\s"'`)<>]+/g)]
    .map((m) => m[0])
    .filter((u) => !/^https?:\/\/www\.w3\.org\//.test(u) && !/^https?:\/\/(react\.dev|reactjs\.org)\/errors/.test(u));
  for (const u of new Set(urls)) errors.push(`URL eksternal di ${relative(dist, f)}: ${u}`);

  for (const m of text.matchAll(MEDIA)) {
    const rel = m[1].replace(/^\.\//, '').replace(/^assets\//, '');
    if (!existsSync(join(dist, 'assets', rel))) errors.push(`Aset dirujuk tapi tidak ada: assets/${rel}`);
  }
}

if (errors.length) {
  console.error(`Validasi gagal:\n  - ${[...new Set(errors)].join('\n  - ')}`);
  process.exit(1);
}

const entries = {};
for (const f of files) entries[relative(dist, f).replace(/\\/g, '/')] = [readFileSync(f), { level: 9 }];
const zip = zipSync(entries);
mkdirSync(dirname(zipPath), { recursive: true });
writeFileSync(zipPath, zip);

const mb = (n) => (n / 1024 / 1024).toFixed(2);
const raw = files.reduce((n, f) => n + statSync(f).size, 0);
console.log(`OK — ${files.length} file, ${mb(raw)} MB mentah → ${relative(root, zipPath)} ${mb(zip.length)} MB`);
if (zip.length > MAX_ZIP) {
  console.error(`Zip melebihi 25 MB (${mb(zip.length)} MB).`);
  process.exit(1);
}
