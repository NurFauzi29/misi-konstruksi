# Tech Stack — Misi Konstruksi: Menjelajah Profesi TKP

Acuan kebutuhan: [panduan.md](panduan.md). Acuan desain & logika: **6 file `mockup/N. *.dc.html` + `mockup/assets/`**.
`mockup/Misi Konstruksi - Standalone.html` adalah export lama — jangan dijadikan acuan.

## Prinsip

1. **Tampilan identik dengan mockup** — scene tidak ditulis ulang dengan tangan, melainkan dikonversi otomatis dari file mockup dan diverifikasi per piksel (`npm run compare`).
2. **Font sama dengan mockup** (Impact, Arial Black, Trebuchet MS — font sistem). Jangan diganti.
3. **Berjalan dari `file://`** (juri membuka `index.html` dengan klik ganda): tanpa `<script type="module" src>` eksternal, tanpa `fetch()`, tanpa router URL.
4. **SPA murni**, **offline total** (nol URL `http(s)://`), **zip ≤ 25 MB** dengan `index.html` di root, **stage 16:9**.

## Arsitektur

```
mockup/N. *.dc.html ──npm run convert──▶ src/scenes/sN/{view.jsx, logic.js, scene.css, index.js}
                                              │
src/dc/runtime.jsx  (pengganti support.js) ◀──┤  DCLogic, defineScene, cssToObj, interp
src/dc/mk.js        (helper global __mk*)  ◀──┘  progres misi, kunci misi, peta, musik
src/dc/nav.js       (navigasi SPA)              pengganti window.__dcGo / pindah halaman
src/App.tsx         menampilkan scene aktif
```

- **`view.jsx`** — template `<x-dc>` → JSX secara mekanis: style inline, `sc-if`, `sc-for`, `{{ … }}`, `style-hover` / `style-active` (jadi kelas CSS `!important`), spasi antar-elemen — semuanya dipertahankan.
- **`logic.js`** — class `Component` mockup **verbatim**. Hanya definisi helper global yang dibuang dan diganti `import` dari `src/dc/mk.js`.
- **`scene.css`** — `<style>` dari `<helmet>` (keyframes, dll.) + kelas hover/active. Disuntikkan hanya saat scene aktif, sama seperti halaman terpisah di mockup.
- **File hasil konversi jangan diedit manual.** Ubah di Claude Design → export ulang ke `mockup/` → `npm run convert`.

Penyesuaian skala agar proporsional di semua ukuran layar (di 1280×720 hasilnya tetap identik dengan mockup):
- `Nvw`/`Nvh` di template → `calc(var(--vw|--vh) * N)`; variabel diisi dari ukuran viewport yang benar-benar terlihat (`src/main.tsx`). Di HP, `vh` CSS dihitung seolah address bar tersembunyi sehingga stage terpotong.
- `Npx` literal di template → `calc(var(--u) * N / 12.8)` (`--u` = 1em stage; desain mockup berbasis stage 1280 px).
- `<button>`/`<input>` tidak mewarisi font-size (bawaan browser 13,333 px) dan punya padding/border bawaan dalam px — `src/global.css` membuatnya ikut skala stage.
- `text-size-adjust: 100%` mencegah Safari iOS memperbesar teks saat landscape.

Perbedaan perilaku yang disengaja dari mockup (karena satu halaman, bukan 6 file):
- Navigasi antar-scene tanpa reload (`nav.js`).
- Progres misi di `sessionStorage` (`mk_p_*`) — hilang saat tab ditutup, cocok untuk komputer sekolah yang dipakai bergantian. Status musik tetap di `localStorage` seperti mockup.

## Pilihan teknologi

| Lapisan | Pilihan | Catatan |
|---|---|---|
| Build | Vite + `vite-plugin-singlefile`, `base: './'` | JS & CSS di-inline ke `index.html`; aset di `public/assets/` disalin apa adanya |
| UI | React 19 | Mockup memakai React 18 lewat runtime Claude Design; semantik class logika dipertahankan oleh `defineScene` |
| Konversi | `parse5` (parser HTML standar) | Hasil parse sama dengan browser |
| Audio | `HTMLAudioElement` (BGM) + sintesis `AudioContext` (SFX) | Sama dengan mockup; aman di `file://` |
| Test | Vitest | `src/dc/mk.test.js` — logika progres & penguncian misi |
| Verifikasi visual | `playwright-core` (Microsoft Edge) + `pixelmatch` | `npm run compare` — mockup asli vs build, per piksel |
| Packaging | `fflate` | `npm run package` — build → validasi → `release/misi-konstruksi.zip` |

## Aset

- `npm run assets:sync` memindai 6 file `.dc.html` dan menyalin **hanya aset yang dirujuk** ke `public/assets/` (±11 MB dari 119 MB di `mockup/assets/`).
- Path aset di kode tetap relatif `assets/...` seperti mockup.

## Validasi build (`scripts/package.mjs`)

Gagal jika: `dist/index.html` tidak ada / masih memuat `<script src>` atau stylesheet eksternal; ada `http(s)://` di HTML/JS/CSS (kecuali namespace `w3.org`); ada aset yang dirujuk tapi tidak ada; zip > 25 MB.

## Perintah

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run convert` | Konversi ulang 6 scene dari `mockup/` + sinkron aset |
| `npm run assets:sync` | Sinkron aset saja |
| `npm test` | Vitest |
| `npm run build` | Build ke `dist/` |
| `npm run compare [-- filter]` | Bandingkan build dengan mockup (butuh Edge & internet). Hasil selisih di `.compare/` |
| `npm run package` | Build + validasi + zip ke `release/misi-konstruksi.zip` |
