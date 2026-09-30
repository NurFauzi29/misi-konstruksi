# Handoff: Misi Konstruksi — Menjelajah Profesi TKP

## Overview
Gim edukasi berbasis browser (16:9) untuk mengenalkan profesi Teknik Konstruksi dan Perumahan (TKP). Alur: Home → Panduan/Peta Misi → Eksplorasi → Tebak Profesi → Pengalaman Kerja → Profesi Pertama → Evaluasi.

## About the Design Files
File `.dc.html` di bundle ini adalah **referensi desain berbasis HTML** — prototipe yang menunjukkan tampilan dan perilaku yang dimaksud, bukan kode produksi. Tugasnya adalah **membangun ulang** desain ini di environment target (mis. React + Vite, Vue, Phaser, dll.) memakai pola dan library yang sesuai. Jika belum ada codebase, pilih framework yang paling cocok (rekomendasi: React + Vite, atau vanilla TS jika ingin ringan).

File dapat dibuka langsung di browser (butuh `support.js` di folder yang sama; jalankan lewat local server, mis. `npx serve .`, agar aset & navigasi antar file berfungsi). `Misi Konstruksi - Standalone.html` adalah versi satu-file untuk dilihat offline.

## Fidelity
**High-fidelity.** Warna, tipografi, posisi, dan animasi final. Aset visual utama berupa gambar (PNG/WebP) — hotspot tombol diposisikan dengan persentase di atas gambar latar.

## Arsitektur Layout (semua scene)
- Stage 16:9 di tengah viewport: `width:min(100vw,177.78vh); height:min(56.25vw,100vh)`, latar luar `#0c1116`.
- Unit skala: `font-size:min(1vw,1.7778vh)` pada stage → semua ukuran pakai `em` sehingga ikut skala.
- Elemen diposisikan `position:absolute` dengan `left/top/width/height` dalam %.
- Tombol berupa gambar (`assets/p-btn-*.webp`) atau hotspot transparan di atas gambar latar.

## Screens
1. **Home** (`1. Misi Konstruksi.dc.html`) — Background `assets/p-bg.webp`; judul "MISI KONSTRUKSI:" + "MENJELAJAH PROFESI TKP" (Impact italic, gradient kuning–oranye `#fff3a8→#ffc400→#f39200`, outline gelap `#1a1208` via drop-shadow); 4 tombol gambar (Mulai, Info Game, Pengembang, Referensi) di `left:22%; top:67.4%; height:21.6%; gap:1.1em`; tombol musik bulat biru kanan atas. Info/Pengembang membuka overlay gambar 16:9 dengan tombol tutup merah.
   File ini juga berisi scene **Panduan**: Peta misi (node hotspot 12%×25%, centang hijau `#2e9c3a` saat semua selesai) dan halaman Panduan Gim.
2. **Scene Eksplorasi** (`2. …`) — eksplorasi flashcard profesi.
3. **Tebak Profesi** (`3. …`) — kuis menebak profesi dari karakter/aset.
4. **Pengalaman Kerja** (`4. …`) — simulasi tugas/pengalaman kerja.
5. **Profesi Pertama** (`5. …`) — memilih profesi pertama.
6. **Scene Evaluasi** (`6. …`) — evaluasi/soal akhir dan sertifikat.

Lihat masing-masing file untuk posisi, copy, dan logika lengkap (logika ada di class `Component` pada `<script data-dc-script>` di tiap file; state di `state = {…}`, handler di `renderVals()`).

## Interactions & Behavior
- Tombol gambar: hover `translateY(-.5em) scale(1.03)` + `brightness(1.08)`; active `translateY(.1em) scale(.98)`; transisi `.16s ease`.
- Tombol bulat ikon: hover `scale(1.07–1.08)`, active `scale(.94–.95)`, `.15s ease`.
- Overlay: fade `.18s`, konten pop `.32s cubic-bezier(.2,1.3,.4,1)`; klik latar menutup.
- Judul masuk: `mkTitle .7s` (rotate -2deg, scale .94→1).
- Pulse highlight: box-shadow kuning `rgba(255,214,26,.85)` meluas 1.2em.
- Musik latar `assets/bgm.mp3`, toggle on/off (ikon gelombang vs silang).
- Navigasi antar scene: `window.__dcGo(path)` → di codebase baru, ganti dengan router/state scene.

## State Management
- Scene aktif (home / panduan / eksplorasi / …), overlay aktif, status musik.
- Progres misi (node peta yang selesai) — dipakai untuk centang di peta. Cek penyimpanan (localStorage) di logika tiap file.
- Skor/jawaban kuis & evaluasi per scene.

## Design Tokens
- Latar luar `#0c1116`, stage fallback `#7a5a2e`
- Kuning/oranye judul `#fff3a8 #ffc400 #f39200 #ffd98a #ff9d00 #e06a00`, outline `#1a1208`
- Link `#f4ab03` / hover `#ffd257`
- Tombol biru `#4aa3f0 → #1f6fc4 → #15539a`; oranye (home) `#ffb23e → #f57c00 → #cf5a00`; hijau (peta) `#7cd08a → #2e9c3a → #1d6a26`; merah (tutup) `#f0524b → #c9201a`
- Border tombol bulat putih `.22–.3em`; shadow `0 .3em .5em rgba(0,0,0,.45)` + inset `0 -.3em .5em rgba(0,0,0,.22)`
- Radius overlay `1.2em`
- Font: Impact / 'Arial Black' (judul), 'Arial Black' (tombol)

## Assets
Folder `assets/` (dan subfolder `s2`–`s6` per scene): latar, tombol, ikon, kartu profesi, peta, panduan, `bgm.mp3`. Versi `p-*.webp` adalah versi terkompresi yang dipakai. Semua aset disediakan pemilik proyek.

## Files
- `1. Misi Konstruksi.dc.html` … `6. Scene Evaluasi.dc.html` — desain per scene
- `support.js` — runtime untuk membuka file `.dc.html` di browser (tidak perlu dibawa ke produksi)
- `Misi Konstruksi - Standalone.html` — pratinjau satu file offline
- `assets/` — semua gambar & audio
