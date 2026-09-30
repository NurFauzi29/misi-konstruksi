# Spesifikasi Teknis & Konten: Gim Edukasi Digital untuk SMK
*Dasar acuan pengembangan aplikasi — dirangkum dari Panduan Sayembara Pembuatan Bahan Ajar Digital Jenjang SMK Tahun 2026 (Direktorat SMK, Kemendikdasmen), khusus untuk kategori **Gim Edukasi**.*

> **Cara pakai dokumen ini:** Dokumen ini disusun agar bisa langsung dipakai sebagai *ground truth* / spesifikasi ketika AI (atau developer) membangun aplikasi SPA edu-game. Setiap ketentuan bersifat wajib (harus dipenuhi) kecuali disebutkan sebaliknya.

---

## 1. Definisi Gim Edukasi
Bahan ajar interaktif yang mengadopsi mekanika permainan (*rules*, *challenge*, sistem *reward*) untuk mencapai tujuan pembelajaran tertentu.

---

## 2. Kriteria Pedagogik (Wajib dipenuhi dalam desain gameplay)

1. **Tujuan pembelajaran eksplisit** — harus dinyatakan jelas di awal/pengantar gim, bukan tersirat.
2. **Aturan (rules) dan tantangan (challenge)** — gim harus punya aturan main yang jelas dan tantangan yang harus diselesaikan pemain.
3. **Umpan balik & sistem skor/reward** — harus ada mekanisme skor atau reward yang jelas sebagai bentuk apresiasi atas pencapaian pemain.
4. **Melatih soft skill dunia kerja** — desain gim harus mendorong:
   - Pengambilan keputusan
   - Pemecahan masalah (*problem-solving*)
   - Manajemen waktu
   - Kerja sama tim (jika multi-pemain)
   - Negosiasi
   - Adaptasi
5. **Gamifikasi kontekstual** — gunakan mekanisme berbasis peristiwa, tantangan, eksplorasi kontekstual, pemecahan masalah, simulasi tematik, atau penelusuran konsep (bukan kuis generik tanpa konteks).
6. **Motivasi intrinsik** — integrasikan unsur yang memicu rasa ingin tahu dan semangat kompetisi.
7. **Hasil akhir informatif** — skor/hasil akhir gim ditampilkan secara jelas dan mudah dipahami murid dalam konteks pembelajaran (bukan sekadar angka).

---

## 3. Kriteria Teknis (Wajib dipenuhi dalam implementasi aplikasi)

### 3.1 Struktur Aplikasi
- Komponen wajib minimal: **Laman Muka, Panduan, Aktivitas (misi/level)**.
- Harus ada **misi/pathway** yang jelas dengan **indikator progres** informatif (contoh: level, nyawa/lives, jumlah misi/skor tersisa).
- Navigasi bersifat **intuitif** — pemain harus bisa memahami dan menentukan langkah berikutnya secara mandiri tanpa instruksi eksternal.

### 3.2 Interaksi & Mekanisme Permainan
- Minimal **3 kali interaksi/tantangan** yang relevan dengan materi (misalnya: 3 level berbeda, atau 3 misi dalam satu rangkaian) melalui metode tantangan, eksplorasi, atau pemecahan masalah.
- Mekanisme permainan harus dinamis, dapat berupa kombinasi:
  - `drag & drop`
  - `fill in the blank`
  - mencocokkan (*matching*)
  - mengurutkan (*sequencing*)
  - menghubungkan (*connecting*)
  - memilih jawaban (*multiple choice*) yang terintegrasi dalam tantangan gim
- Setiap interaksi **wajib memberi respons/umpan balik langsung** dalam bentuk visual dan/atau audio (bukan silent action).

### 3.3 Visual & UI
- Elemen visual (tipografi, ilustrasi, tombol, karakter, latar) harus jelas, konsisten, dan punya tingkat kontras memadai.
- Animasi, efek visual, dan efek suara digunakan **secara proporsional** — tidak boleh mengganggu fokus pengguna.
- Tersedia indikator progres yang jelas: level, skor, jumlah misi tersisa, atau tahapan yang sedang dijalani.
- **Rasio layar wajib 16:9.**

### 3.4 Packaging & Format File (kritis untuk implementasi SPA)
- Seluruh aset dikemas dalam **satu file `.zip`**, mencakup:
  - Webpage konten interaktif dalam format `.html`
  - Semua aset (gambar, audio, video, font, dsb.) yang digunakan webpage tersebut — **harus tersimpan lokal/offline di dalam zip**
- **Tidak diperkenankan** mencantumkan aset atau URL eksternal (termasuk CDN eksternal untuk font/library, kecuali sudah di-bundle offline).
- **Tidak boleh melakukan *redirecting*** ke halaman HTML lain — aplikasi wajib berupa **Single Page Application (SPA)** murni (satu halaman, semua state dikelola via JavaScript, tanpa reload/redirect antar file HTML).
- File utama **wajib diberi nama `index.html`** dan diletakkan di **root directory** dari file `.zip` (bukan di dalam subfolder).
- **Rekomendasi ukuran file `.zip` tidak lebih dari 25 MB** (kecuali menyertakan video offline, lihat 3.5).

### 3.5 Ketentuan Video (jika gim menyertakan video)
Jika ada elemen video, wajib melengkapi **2 versi aset**:
1. **Aset pertama**: video menggunakan *embed link* dari YouTube — rekomendasi ukuran `.zip` total tidak lebih dari **25 MB**.
2. **Aset kedua**: video offline (bersumber dari file lokal di dalam zip yang sama), minimal resolusi **720p (1280x720)** — rekomendasi ukuran `.zip` tidak lebih dari **250 MB**.

---

## 4. Ketentuan Umum Konten (berlaku untuk semua jenis bahan ajar, termasuk Gim Edukasi)

1. Bahasa komunikatif, santun, sesuai konteks murid SMK, mengikuti kaidah kebahasaan (termasuk ragam cakapan/kasual yang tervalidasi KBBI), dilengkapi visual yang mudah dipahami murid secara mandiri.
2. Materi dirancang mendukung konsentrasi keahlian secara spesifik (dalam kasus ini: Teknik Ketenagalistrikan).
3. Materi relevan dengan kurikulum yang berlaku.
4. Isi materi (visual, ilustrasi, audio) harus berisi informasi yang **akurat** secara teknis/keilmuan.
5. Materi disusun sistematis sesuai perkembangan kompetensi (bertahap, tidak melompat).
6. Tingkat kesulitan materi sesuai jenjang pendidikan (SMK Kelas X / Fase E).
7. Materi memuat asesmen untuk mengukur pemahaman murid (dapat berupa pertanyaan reflektif, kuis singkat, latihan, dsb).
8. Materi harus mewakili kompetensi dari bidang keahlian terkait.

### Larangan konten (hard constraints):
9. **Bebas radikalisme, ekstremisme, terorisme** — dalam bentuk nama, simbol, logo, bendera, slogan, seragam, foto, atau objek apa pun.
10. **Bebas pelanggaran kesusilaan/pornografi** yang tidak sesuai konteks/kebutuhan materi.
11. **Bebas perundungan, ejekan, diskriminasi**, dan bebas dari ajakan *self-harm*.
12. **Bebas promosi/iklan komersial** — entitas komersial yang muncul harus punya kerjasama/MOU dengan sekolah; jika tidak, logo/identitas harus diburamkan.
13. **Bebas SARA** dan bias gender/sosial/ekonomi/budaya.
14. **Privasi murid** — mengikuti UU PDP dan prinsip keamanan anak di ruang digital (tidak menampilkan nama/foto/identitas anak nyata tanpa izin).

### Hak Cipta Aset Digital:
15. Aset digital yang dipakai harus berasal dari salah satu sumber berikut:
    - Milik pribadi pengembang sepenuhnya
    - Milik kementerian/kreator lain yang sudah memberi izin (dijamin pakta integritas)
    - Aset eksternal *open source*/*royalty-free*
    - Aset berlisensi **CC BY-SA 4.0** (wajib dicantumkan sumbernya)
    - **Jika dibuat oleh AI, wajib diberi keterangan eksplisit** (contoh: "Gambar ini dibuat oleh AI")
    - Seluruh aset digital wajib mencantumkan sumber sesuai ketentuan hak cipta.
16. Penulis/kreator:
    - Jika dibuat 1 orang: cantumkan 1 Nama Kreator di Informasi Kreator.
    - Jika kolaborasi: cantumkan 1 nama kreator utama di Informasi Kreator, nama lain di isi materi.
    - **Halaman awal isi materi harus bersih dari nama kreator** — nama & organisasi kreator wajib diletakkan di **halaman paling belakang/akhir**, bukan di awal.

---

## 5. Ketentuan Penulisan Metadata Aplikasi

Bagian ini penting karena akan menentukan copy/teks yang perlu ditulis AI saat membangun aplikasi (deskripsi, judul, dsb).

| Elemen | Ketentuan | Contoh dari Panduan |
|---|---|---|
| **Judul** | Menggambarkan topik materi; kata kunci penting di awal; kapitalisasi sesuai kaidah; ringkas **40–55 karakter**; selaras istilah kurikulum/buku teks | "Kriya Kulit dari Sentuhan Tangan ke Presisi Mesin" |
| **Deskripsi** | Memuat tujuan belajar & manfaat (jawab: apa yang dipelajari, apa yang menarik, apa yang bisa diharapkan); bahasa persuasif dengan sapaan ke murid ("adik-adik", "kamu", "teman-teman"); **400–800 karakter**; tidak perlu info kelas | "Pernahkah kamu bertanya, kenapa adonan sama, tapi roti yang dihasilkan bisa berbeda rasa dan teksturnya? Dalam materi ini, kamu akan mempelajari proses lengkap pembuatan roti..." |
| **Pertanyaan Pemantik** | Gaya bahasa semi-formal, bentuk pertanyaan/kalimat lengkap, memancing rasa penasaran, sesuai bahasa materi, **60–80 karakter** | "Pernahkah kamu memperhatikan, kenapa ada furnitur yang awet dan ada yang cepat rusak? Kira-kira kayunya seperti apa, ya?" |
| **Gambar Sampul (Thumbnail)** | Judul tetap terbaca di layar kecil, kontras warna aman, ilustrasi merepresentasikan aktivitas interaktif secara akurat (tanpa *clickbait*), target audiens (SMK) terlihat jelas, visual dominan (minim teks), **rasio 16:9, resolusi 840x472px**, format JPG/PNG, ukuran file **±100 KB**, bebas logo lembaga/atribut berlebihan | — |

---

## 6. Ringkasan Checklist Implementasi untuk Gim Edukasi (ElectroQuest)

Gunakan checklist ini sebagai acuan validasi sebelum submit:

- [ ] Aplikasi berupa **SPA murni** — tidak ada reload/redirect antar file HTML
- [ ] File utama bernama `index.html`, berada di root `.zip`
- [ ] Semua aset (gambar, audio, video, font) ter-bundle offline di dalam zip — **tanpa URL/CDN eksternal**
- [ ] Ukuran `.zip` ≤ 25 MB (atau ≤250MB jika menyertakan video offline 720p+)
- [ ] Rasio layar 16:9 di seluruh scene
- [ ] Minimal 3 interaksi/tantangan bermakna (drag&drop, click, matching, dsb.)
- [ ] Ada sistem skor/nyawa/reward yang terlihat jelas
- [ ] Ada indikator progres (level/misi/langkah)
- [ ] Setiap aksi pemain memberi umpan balik visual/audio instan
- [ ] Navigasi intuitif, tombol/label konsisten
- [ ] Tujuan pembelajaran dinyatakan eksplisit di awal (Prolog/Panduan)
- [ ] Melatih minimal satu soft skill dunia kerja (decision making, problem solving, dll.)
- [ ] Konten bebas dari unsur SARA, radikalisme, pornografi, perundungan, promosi komersial tanpa izin
- [ ] Jika ada aset buatan AI, diberi keterangan sumber ("dibuat oleh AI")
- [ ] Nama kreator TIDAK muncul di halaman awal — hanya di halaman akhir/credit
- [ ] Judul, deskripsi, dan pertanyaan pemantik sesuai batas karakter & gaya bahasa yang ditentukan
- [ ] Thumbnail sesuai rasio 16:9 (840x472px), ≤100KB, tanpa clickbait

---

## 7. Info Administratif Sayembara (referensi, di luar aspek teknis aplikasi)
- Peserta: Guru SMK ber-NUPTK + Surat Keterangan Aktif Mengajar.
- Pendaftaran: 5–30 Juni 2026 di `https://s.id/SAYEMBARASMK2026`.
- Masa pembuatan bahan ajar: **5 Agustus – 18 September 2026**.
- Penghargaan Gim Edukasi: **Rp 12.000.000** (dipotong pajak) + e-sertifikat.
- Dokumen wajib: Proposal + Storyboard (pendaftaran), Surat Pernyataan Penyelesaian Pekerjaan (bimtek), Surat Pernyataan Keaslian + Serah Terima Kepemilikan + Laporan Administratif (penyerahan akhir).
