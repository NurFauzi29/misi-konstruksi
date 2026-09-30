// GENERATED oleh scripts/convert-mockup.mjs dari mockup/4. Pengalaman Kerja.dc.html — jangan diedit manual.
/* eslint-disable */
import { DCLogic } from '../../dc/runtime.jsx';
import { LS, __mkLoad, __mkSave, __mkGo, __mkNav, __mkMapVals, __mkMuteGet, __mkMuteSet, __mkBgmAudio, __dcGo } from '../../dc/mk.js';

const A=window.A||function(p){var r=window.__resources;return (r&&r[p])||p;};
const PROF = [
  { id:'mandor', name:'MANDOR', type:'mcq',
    about:'Mandor adalah pemimpin lapangan yang mengatur tenaga kerja, membagi tugas, dan memastikan pekerjaan berjalan sesuai rencana.',
    skills:['Kepemimpinan','Komunikasi','Manajemen Tim','Ketelitian'],
    title:'ATUR TIM, SELESAIKAN PEKERJAAN!',
    situasi:'Pekerjaan pondasi akan dimulai. Di proyek tersedia 2 tukang batu, 2 tukang besi, dan 1 tukang kayu. Hari ini tim harus mempersiapkan pekerjaan pondasi beton bertulang.',
    taskLabel:'Sebagai Mandor, tindakan yang paling tepat adalah ...',
    opts:['Membiarkan semua pekerja memilih pekerjaan sendiri.','Membagi pekerja sesuai keahlian dan mengarahkan urutan pekerjaan.','Meminta semua pekerja mengerjakan pekerjaan yang sama.','Menunggu sampai pekerja selesai menentukan tugasnya sendiri.'],
    ans:1, hint:'Pikirkan bagaimana pekerjaan bisa berjalan efektif dan sesuai rencana.',
    okTitle:'\uD83C\uDF89 MISI BERHASIL!', okBody:'Kamu berhasil bertindak seperti seorang Mandor. Mandor perlu mengatur tenaga kerja, membagi tugas, dan memastikan pekerjaan berjalan sesuai rencana.',
    noTitle:'\uD83D\uDD27 BELUM TEPAT!', noBody:'Mandor harus mampu mengatur dan mengarahkan pekerja sesuai kebutuhan pekerjaan. Coba pikirkan: bagaimana pekerjaan bisa berjalan efektif jika semua orang bekerja tanpa pembagian tugas?' },

  { id:'surveyor', name:'SURVEYOR', type:'mcq',
    about:'Surveyor bertugas melakukan pengukuran, pemetaan, dan menentukan posisi bangunan di lapangan sesuai gambar kerja. Data yang dikumpulkan menjadi dasar pekerjaan berikutnya.',
    skills:['Pengukuran','Pemetaan','Ketelitian','Analisis Data'],
    title:'TENTUKAN POSISI BANGUNAN!',
    situasi:'Sebelum pondasi dibuat, posisi bangunan harus ditentukan berdasarkan gambar kerja. Kamu sebagai Surveyor harus melakukan pengukuran di lapangan dengan alat yang tepat.',
    taskLabel:'Sebagai Surveyor, alat apa yang paling sesuai untuk membantu pekerjaan pengukuran?',
    opts:['Palu','Ember','Alat ukur surveying dan meteran','Gerobak'],
    ans:2, hint:'Pilih alat yang membantu mendapatkan data ukuran dan posisi secara akurat.',
    okTitle:'\uD83D\uDCD0 PENGUKURAN BERHASIL!', okBody:'Surveyor harus bekerja dengan teliti karena data pengukuran menjadi dasar pekerjaan konstruksi berikutnya.',
    noTitle:'\uD83D\uDCCF UKURAN HARUS TEPAT!', noBody:'Surveyor melakukan pengukuran dan pemetaan. Pilih alat yang dapat membantu memperoleh data ukuran dan posisi secara akurat. Coba lagi!' },

  { id:'estimator', name:'ESTIMATOR', type:'mcq',
    about:'Estimator bertugas menghitung dan memperkirakan biaya pekerjaan konstruksi berdasarkan gambar kerja, spesifikasi, dan harga satuan agar proyek berjalan sesuai anggaran.',
    skills:['Analisis Gambar Kerja','Perhitungan Volume','Analisis Harga Satuan','Penyusunan RAB'],
    title:'SELAMATKAN ANGGARAN PROYEK!',
    situasi:'Proyek membutuhkan 50 sak semen. Harga 1 sak semen = Rp65.000.',
    taskLabel:'Berapa biaya semen yang harus dimasukkan dalam perhitungan?',
    opts:['Rp2.500.000','Rp3.000.000','Rp3.250.000','Rp3.500.000'],
    ans:2, hint:'Gunakan informasi pada situasi: biaya total = jumlah material \u00D7 harga satuan.',
    okTitle:'\uD83D\uDCB0 ANGGARAN AMAN!', okBody:'Perhitunganmu tepat. Estimator harus teliti menghitung kebutuhan bahan dan biaya agar anggaran proyek dapat disusun dengan baik.',
    noTitle:'\uD83E\uDDEE HITUNGAN BELUM TEPAT!', noBody:'Ingat: biaya total = jumlah material \u00D7 harga satuan. Coba hitung kembali 50 \u00D7 Rp65.000.' },

  { id:'logistik', name:'LOGISTIK', type:'pick',
    about:'Logistik bertugas memastikan ketersediaan material, peralatan, dan perlengkapan di lokasi proyek sesuai kebutuhan, jumlah, dan waktu yang tepat.',
    skills:['Perencanaan Material','Manajemen Persediaan','Koordinasi Pengiriman','Ketelitian'],
    title:'KIRIM MATERIAL KE LOKASI YANG TEPAT!',
    situasi:'Tim pelaksana akan melakukan pekerjaan pengecoran. Kamu sebagai bagian logistik harus memastikan material yang dibutuhkan tersedia di lokasi proyek.',
    taskLabel:'Seret 4 material yang dibutuhkan untuk pengecoran ke AREA SIAP COR.',
    items:[{id:'semen',label:'Semen'},{id:'agregat',label:'Agregat / Pasir'},{id:'besi',label:'Besi tulangan'},{id:'kayu',label:'Kayu bekisting'},{id:'cat',label:'Cat'}],
    correct:['semen','agregat','besi','kayu'],
    hint:'Pilih material yang memang dibutuhkan untuk pekerjaan pengecoran.',
    okTitle:'\uD83D\uDCE6 PENGIRIMAN BERHASIL!', okBody:'Material yang dibutuhkan sudah tersedia di lokasi. Logistik harus memastikan bahan dan peralatan tersedia dalam jumlah dan waktu yang tepat.',
    noTitle:'\uD83D\uDE9B MATERIAL BELUM SESUAI!', noBody:'Tidak semua material dibutuhkan pada setiap tahap pekerjaan. Perhatikan pekerjaan yang akan dilakukan dan pilih material yang benar.' },

  { id:'pengawas', name:'PENGAWAS', type:'spot',
    about:'Pengawas memeriksa pelaksanaan pekerjaan di lapangan dan memastikan mutu, waktu, biaya, serta keselamatan kerja sesuai rencana.',
    skills:['Ketelitian','Pengendalian Mutu','K3 Konstruksi','Pelaporan'],
    title:'DETEKTIF PROYEK',
    situasi:'Tugasmu adalah memeriksa kondisi proyek dan menemukan masalah yang perlu diperbaiki.',
    taskLabel:'Klik 4 kondisi yang perlu diperbaiki!',
    spots:[
      {id:'apd', label:'Pekerja tidak menggunakan APD', bad:true},
      {id:'rapi', label:'Material tertata rapi di atas palet', bad:false},
      {id:'serak', label:'Material berserakan di jalur kerja', bad:true},
      {id:'helm', label:'Pekerja memakai helm dan rompi', bad:false},
      {id:'batas', label:'Area kerja tidak diberi pembatas', bad:true},
      {id:'rambu', label:'Area galian diberi pembatas dan rambu', bad:false},
      {id:'gambar', label:'Pekerjaan tidak sesuai gambar kerja', bad:true}
    ],
    hint:'Amati seluruh area proyek. Ada 4 kondisi yang harus ditemukan.',
    okTitle:'\uD83C\uDFC6 MISI PENGAWAS SELESAI!', okBody:'Matamu jeli! Kamu berhasil menemukan masalah di proyek. Pengawas harus memperhatikan mutu, waktu, biaya, dan pelaksanaan pekerjaan.',
    noTitle:'\uD83D\uDC40 BELUM TEPAT!', noBody:'Kondisi tersebut sudah sesuai. Coba periksa bagian proyek lainnya.' },

  { id:'pelaksana', name:'PELAKSANA', type:'order',
    about:'Pelaksana bertugas mengatur dan melaksanakan pekerjaan konstruksi sesuai rencana, gambar kerja, jadwal, dan standar mutu.',
    skills:['Manajemen Pelaksanaan','Membaca Gambar Kerja','Koordinasi Pekerja','Pengendalian Kualitas'],
    title:'SUSUN TAHAPAN PEKERJAAN!',
    situasi:'Sebagai Pelaksana, susun tahapan pekerjaan berdasarkan urutan yang logis.',
    taskLabel:'Seret kartu pekerjaan ke dalam urutan yang benar.',
    items:[{id:'atap',label:'Pemasangan atap'},{id:'dinding',label:'Pekerjaan dinding'},{id:'lahan',label:'Persiapan lahan'},{id:'pondasi',label:'Pekerjaan pondasi'}],
    correct:['lahan','pondasi','dinding','atap'],
    hint:'Pikirkan bagian mana yang harus dikerjakan lebih dahulu sebelum bagian berikutnya dibangun.',
    okTitle:'\uD83C\uDFD7\uFE0F URUTAN PEKERJAAN TEPAT!', okBody:'Kamu berhasil menyusun tahapan pekerjaan secara logis. Pelaksana harus memahami gambar kerja dan tahapan pelaksanaan konstruksi.',
    noTitle:'\uD83D\uDD27 URUTAN BELUM TEPAT!', noBody:'Pekerjaan konstruksi memiliki tahapan yang saling berkaitan. Pikirkan: bagian mana yang harus dikerjakan terlebih dahulu sebelum bagian berikutnya dapat dibangun?' },

  { id:'asisten', name:'ASISTEN', type:'mcq',
    about:'Asisten membantu mandor dan pelaksana dalam mencatat perkembangan pekerjaan, menyiapkan data, dan mengelola administrasi lapangan.',
    skills:['Pencatatan Data','Administrasi Proyek','Komunikasi Tim','Ketelitian'],
    title:'BANTU TIM MENYELESAIKAN PEKERJAAN!',
    situasi:'Mandor meminta kamu mencatat perkembangan pekerjaan hari ini dan menyiapkan informasi untuk laporan. Data hari ini: pondasi selesai 80%, dinding belum dimulai, 10 pekerja hadir, 2 pekerja tidak hadir.',
    taskLabel:'Informasi apa yang paling penting dicatat untuk laporan proyek?',
    opts:['Makanan favorit pekerja.','Warna helm pekerja.','Kemajuan pekerjaan dan kondisi tenaga kerja.','Merek sepatu pekerja.'],
    ans:2, hint:'Pilih jawaban yang paling tepat berdasarkan situasi dan data proyek.',
    okTitle:'\uD83D\uDCCB DATA BERHASIL DIKUMPULKAN!', okBody:'Kamu membantu tim dengan mengumpulkan informasi yang relevan untuk pekerjaan dan laporan. Asisten harus teliti, sigap, dan mampu membantu tim di lapangan.',
    noTitle:'\uD83D\uDCCB PILIH INFORMASI YANG RELEVAN!', noBody:'Informasi laporan harus berkaitan dengan kemajuan pekerjaan, tenaga kerja, dan kondisi proyek. Coba lagi!' },

  { id:'admin', name:'ADMIN TEKNIK', type:'doc',
    about:'Admin Teknik bertugas mengelola dokumen, data teknis, surat, laporan, dan arsip proyek agar mudah diakses dan mendukung kelancaran pekerjaan.',
    skills:['Administrasi','Pengelolaan Dokumen','Ketelitian','Penggunaan Teknologi'],
    title:'RAPIKAN DOKUMEN PROYEK!',
    situasi:'Dokumen proyek bercampur dan harus segera dirapikan agar mudah ditemukan oleh tim. Sebagai Admin Teknik, kamu perlu menempatkan setiap dokumen pada folder yang tepat.',
    taskLabel:'Seret setiap dokumen ke folder yang sesuai!',
    items:[{id:'surat',label:'Surat proyek'},{id:'gambar',label:'Gambar kerja'},{id:'laporan',label:'Laporan harian'},{id:'rab',label:'RAB'}],
    folders:[{key:'keuangan',name:'KEUANGAN',ans:'rab',bg:'#eaf7ea',border:'#2e9c3a',ink:'#1d5a26'},{key:'teknis',name:'TEKNIS',ans:'gambar',bg:'#e8f1fb',border:'#2170cd',ink:'#12539f'},{key:'laporan',name:'LAPORAN',ans:'laporan',bg:'#fff5dd',border:'#e0a400',ink:'#8a6a00'},{key:'surat',name:'SURAT',ans:'surat',bg:'#fdeaea',border:'#d63a34',ink:'#9c241f'}],
    hint:'Perhatikan jenis dokumen sebelum memasukkannya ke folder.',
    okTitle:'\uD83D\uDCBB DOKUMEN TERTATA!', okBody:'Semua dokumen berhasil ditempatkan pada folder yang tepat. Admin Teknik harus mampu mengelola dokumen, data teknis, surat, laporan, dan arsip proyek.',
    noTitle:'\uD83D\uDCC1 DOKUMEN BELUM PADA TEMPATNYA!', noBody:'Perhatikan jenis dokumen sebelum memasukkannya ke folder. Dokumen yang tertata akan memudahkan tim menemukan informasi saat dibutuhkan.' }
];

const POS = [
  { left:'17.8%', top:'49.5%', width:'13.6%', height:'20.5%' },
  { left:'33.6%', top:'43.6%', width:'13.6%', height:'26.4%' },
  { left:'49.6%', top:'49.5%', width:'13.6%', height:'20.5%' },
  { left:'65.6%', top:'49.5%', width:'13.6%', height:'20.5%' },
  { left:'13.4%', top:'70.5%', width:'16.2%', height:'25%' },
  { left:'31.8%', top:'70.5%', width:'16.2%', height:'25%' },
  { left:'50.2%', top:'70.5%', width:'16.2%', height:'25%' },
  { left:'68.6%', top:'70.5%', width:'16.2%', height:'25%' }
];
const CHIP = ['#d5ebff','#dbf3dc','#ffe7b0','#e4dcfb'];
const ICONS = {
  semen:'\uD83C\uDFD7\uFE0F', agregat:'\uD83E\uDEA8', besi:'\u26D3\uFE0F', kayu:'\uD83E\uDEB5', cat:'\uD83C\uDFA8',
  lahan:'\uD83D\uDEA7', pondasi:'\uD83D\uDE9C', dinding:'\uD83E\uDDF1', atap:'\uD83C\uDFE0',
  rab:'\uD83D\uDCB0', gambar:'\uD83D\uDCD0', laporan:'\uD83D\uDCC4', surat:'\u2709\uFE0F'
};
const ICON = (id) => ICONS[id] || '\uD83D\uDCE6';

class Component extends DCLogic {
  state = { view:'world', cur:0, done:(__mkLoad('s4') || {}).done || [false,false,false,false,false,false,false,false], sel:null, cor:[], slots:{}, picks:[], fb:null, toast:'', drag:null, muted:false, opening:null };

  componentDidUpdate() { __mkSave('s4', { done: this.state.done, ever: !!((__mkLoad('s4') || {}).ever || this.state.done.every(Boolean)) }); }
  componentDidMount() {
    const stored = __mkMuteGet();
    const muted = stored === '1';
    const a = __mkBgmAudio();
    a.loop = true;
    a.volume = (this.props.bgmVolume ?? 45) / 100;
    const t = parseFloat(LS.getItem('mk_bgm_time') || '0');
    if (t > 0) a.currentTime = t;
    this.audio = a;
    this.saver = setInterval(() => { if (!a.paused) LS.setItem('mk_bgm_time', String(a.currentTime)); }, 2000);
    this.setState({ muted });
    if (!muted) a.play().catch(() => {
      const kick = () => { a.play().catch(() => {}); window.removeEventListener('pointerdown', kick); };
      window.addEventListener('pointerdown', kick);
    });
  }

  componentWillUnmount() {
    clearInterval(this.saver);
    clearTimeout(this._toast);
    clearTimeout(this._open);
    if (this.audio) { this.audio.pause(); this.audio.src = ''; }
  }

  ctx() {
    if (!this._ctx) { const AC = window.AudioContext || window.webkitAudioContext; this._ctx = new AC(); }
    if (this._ctx.state === 'suspended') this._ctx.resume();
    return this._ctx;
  }

  tone(freq, dur, type, vol) {
    try {
      const c = this.ctx(), o = c.createOscillator(), g = c.createGain();
      o.type = type || 'triangle'; o.frequency.value = freq;
      g.gain.value = vol || 0.08;
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
      o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + dur);
    } catch (e) {}
  }

  sfx(kind) {
    if (kind === 'click') this.tone(520, 0.09, 'square', 0.05);
    else if (kind === 'open') { this.tone(420, 0.14, 'triangle', 0.07); setTimeout(() => this.tone(660, 0.2, 'triangle', 0.07), 110); }
    else if (kind === 'win') { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => this.tone(f, 0.22, 'triangle', 0.07), i * 110)); }
    else if (kind === 'nope') this.tone(200, 0.22, 'sawtooth', 0.05);
    else if (kind === 'found') this.tone(880, 0.12, 'triangle', 0.06);
  }

  toast(text) {
    clearTimeout(this._toast);
    this.setState({ toast: text });
    this._toast = setTimeout(() => this.setState({ toast: '' }), 2400);
  }

  activeIndex() { const d = this.state.done; for (let i = 0; i < 8; i++) if (!d[i]) return i; return 8; }

  openChest(i) {
    this.sfx('open');
    this.setState({ opening: i });
    clearTimeout(this._open);
    this._open = setTimeout(() => this.setState({ opening: null, view: 'mission', cur: i, sel: null, cor: [], slots: {}, picks: [], fb: null }), 520);
  }

  startDrag(id) {
    return (e) => {
      e.preventDefault();
      const move = (ev) => this.setState({ drag: { id, x: ev.clientX, y: ev.clientY } });
      const up = (ev) => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        this.setState({ drag: null });
        const el = document.elementFromPoint(ev.clientX, ev.clientY);
        const tgt = el && el.closest ? el.closest('[data-drop]') : null;
        if (tgt) this.place(id, tgt.getAttribute('data-drop'));
        else this.setState({ sel: id });
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      this.setState({ drag: { id, x: e.clientX, y: e.clientY }, sel: id });
    };
  }

  place(id, slot) {
    const p = PROF[this.state.cur];
    this.sfx('click');
    if (p.type === 'pick') {
      this.setState(s => {
        if (s.cor.indexOf(id) >= 0) return { sel: null };
        const arr = s.cor.slice();
        if (arr.length >= 4) arr.shift();
        arr.push(id);
        return { cor: arr, sel: null };
      });
    } else {
      this.setState(s => {
        const next = {};
        Object.keys(s.slots).forEach(k => { if (s.slots[k] !== id) next[k] = s.slots[k]; });
        next[slot] = id;
        return { slots: next, sel: null };
      });
    }
  }

  clearSlot(slot) {
    this.setState(s => {
      const next = {};
      Object.keys(s.slots).forEach(k => { if (k !== slot) next[k] = s.slots[k]; });
      return { slots: next, sel: null };
    });
  }

  succeed() {
    const i = this.state.cur, p = PROF[i];
    this.sfx('win');
    this.setState(s => {
      const done = s.done.slice(); done[i] = true;
      return { done, fb: { ok: true, title: p.okTitle, body: p.okBody } };
    });
  }

  fail(title, body) {
    this.sfx('nope');
    this.setState({ fb: { ok: false, title: title, body: body } });
  }

  check() {
    const p = PROF[this.state.cur], s = this.state;
    let ok = false;
    if (p.type === 'mcq') { if (s.sel === null) { this.toast('Pilih salah satu jawaban dulu'); return; } ok = s.sel === p.ans; }
    else if (p.type === 'pick') { if (s.cor.length < 4) { this.toast('Letakkan 4 material ke AREA SIAP COR'); return; } ok = p.correct.every(c => s.cor.indexOf(c) >= 0); }
    else if (p.type === 'order') { const keys = ['1','2','3','4']; if (keys.some(k => !s.slots[k])) { this.toast('Isi keempat urutan pekerjaan'); return; } ok = keys.every((k, i) => s.slots[k] === p.correct[i]); }
    else if (p.type === 'doc') { if (p.folders.some(f => !s.slots[f.key])) { this.toast('Tempatkan semua dokumen ke folder'); return; } ok = p.folders.every(f => s.slots[f.key] === f.ans); }
    else if (p.type === 'spot') { if (s.picks.length < 4) { this.toast('Pilih 4 kondisi yang perlu diperbaiki'); return; } ok = s.picks.every(id => { const sp = p.spots.find(x => x.id === id); return sp && sp.bad; }); }
    if (ok) this.succeed(); else this.fail(p.noTitle, p.noBody);
  }

  continueMission() {
    const i = this.state.cur;
    this.setState({ fb: null, view: 'map', sel: null, cor: [], slots: {}, picks: [] });
    const all = this.state.done.every(Boolean);
    if (all) { setTimeout(() => this.setState({ view: 'done' }), 350); return; }
    if (i + 1 < 8) setTimeout(() => this.toast('\uD83D\uDD13 PROFESI BARU TERBUKA: ' + PROF[i + 1].name), 250);
  }

  renderVals(){ const r = this._rv(); return Object.assign(__mkNav(), r, __mkMapVals(3, r.onEnterPeti)); }
  _rv() {
    const st = this.state, p = PROF[st.cur], act = this.activeIndex();
    const doneCount = st.done.filter(Boolean).length;
    const label = (id) => { const it = (p.items || []).find(x => x.id === id); return it ? it.label : ''; };
    const usedIds = p.type === 'pick' ? st.cor : Object.keys(st.slots).map(k => st.slots[k]);

    const mkItem = (it) => ({
      label: it.label,
      icon: ICONS[it.id] || '\uD83D\uDCE6',
      onDown: this.startDrag(it.id),
      opacity: usedIds.indexOf(it.id) >= 0 ? 0.35 : 1,
      bg: st.sel === it.id ? '#fff3d0' : '#f4f8fd',
      border: st.sel === it.id ? '#f5a406' : '#9dbcdc'
    });

    return {
      hintOn: this.props.showHint !== false,
      showTopBtns: st.view !== 'mission',
      isWorld: st.view === 'world',
      onEnterPeti: () => { this.sfx('open'); this.setState({ view: 'map' }); },
      onBackToWorld: () => { this.sfx('click'); this.setState({ view: 'world' }); },
      isMap: st.view === 'map',
      isMission: st.view === 'mission',
      isDone: st.view === 'done',
      progressLabel: 'PROGRES MISI: ' + doneCount + '/8',
      progressCount: doneCount + '/8',
      allDone: doneCount === 8,
      onNextDone: () => { this.sfx('win'); this.setState({ view: 'done' }); },
      xpLabel: (doneCount * 100) + ' / 800',
      segs: PROF.map((x, i) => ({ bg: i < doneCount ? '#4caf50' : '#c3ccd6' })),
      doneList: PROF.map(x => ({ name: x.name })),

      chests: PROF.map((x, i) => ({
        left: POS[i].left, top: POS[i].top, width: POS[i].width, height: POS[i].height,
        title: st.done[i] ? x.name + ' — sudah selesai, klik untuk buka lagi' : 'Buka peti ' + x.name,
        imgCss: 'url(' + A('assets/s4/p-peti-' + x.id + '.webp') + ')',
        dim: st.done[i] ? 0 : 0.4,
        pulse: i === act ? 's4Pulse 2s ease-out infinite' : 'none',
        badge: st.done[i] ? '\uD83D\uDD13' : '\uD83D\uDD12',
        badgeBg: st.done[i] ? '#2e9c3a' : '#8a929c',
        hintOpacity: st.hover === i ? 1 : 0,
        hintText: st.done[i] ? 'BUKA LAGI' : 'BUKA PETI',
        onEnter: () => this.setState({ hover: i }),
        onLeave: () => this.setState({ hover: null }),
        badgeTop: i < 4 ? '19%' : '8%',
        onClick: () => {
          this.openChest(i);
        }
      })),
      openingShow: st.opening !== null,
      openingLeft: st.opening !== null ? (parseFloat(POS[st.opening].left) + 3.6) + '%' : '0%',
      openingTop: st.opening !== null ? (parseFloat(POS[st.opening].top) + 10) + '%' : '0%',

      cur: {
        badge: 'PROFESI ' + (st.cur + 1),
        name: p.name,
        imgCss: 'url(' + A('assets/s4/p-char-' + p.id + '.webp') + ')',
        about: p.about,
        skills: p.skills.map((s, i) => ({ label: s, bg: CHIP[i % 4] })),
        title: p.title,
        situasi: p.situasi,
        taskLabel: p.taskLabel,
        taskKind: p.type === 'mcq' ? 'PERTANYAAN' : 'TUGAS',
        hint: p.hint,
        isMcq: p.type === 'mcq',
        isPick: p.type === 'pick',
        isSpot: p.type === 'spot',
        isOrder: p.type === 'order',
        isDoc: p.type === 'doc'
      },

      mcq: (p.opts || []).map((t, i) => ({
        letter: 'ABCD'[i], text: t,
        bg: st.sel === i ? '#e6f3ff' : '#f7fafd',
        border: st.sel === i ? '#2170cd' : 'rgba(18,58,107,.18)',
        dotBg: st.sel === i ? '#2170cd' : '#123a6b',
        onClick: () => { this.sfx('click'); this.setState({ sel: i }); }
      })),

      pickItems: p.type === 'pick' ? p.items.map(mkItem) : [],
      corSlots: [0, 1, 2, 3].map(i => {
        const id = st.cor[i];
        return {
          label: id ? label(id) : 'seret ke sini',
          icon: id ? ICON(id) : '\u2795',
          bg: id ? '#dff3df' : 'rgba(255,255,255,.7)',
          onClick: () => { if (id) { this.sfx('click'); this.setState(s => ({ cor: s.cor.filter(x => x !== id) })); } else if (st.sel) this.place(st.sel, 'cor'); }
        };
      }),

      spots: p.type === 'spot' ? p.spots.map(sp => {
        const found = st.picks.indexOf(sp.id) >= 0;
        return {
          label: sp.label, mark: found ? '\u2713' : '?',
          bg: found ? '#e8f1fb' : '#f7fafd',
          border: found ? '#2170cd' : 'rgba(18,58,107,.18)',
          dotBg: found ? '#123a6b' : '#7d8a99',
          onClick: () => {
            this.sfx('click');
            this.setState(s => ({
              picks: found ? s.picks.filter(x => x !== sp.id)
                           : (s.picks.length >= 4 ? s.picks : s.picks.concat([sp.id]))
            }));
          }
        };
      }) : [],

      orderItems: p.type === 'order' ? p.items.map(mkItem) : [],
      orderSlots: ['1', '2', '3', '4'].map(k => {
        const id = st.slots[k];
        return {
          key: k, n: k,
          label: id ? label(id) : 'seret ke sini',
          icon: id ? ICON(id) : '\u2795',
          bg: id ? '#e6f3ff' : 'rgba(255,255,255,.7)',
          onClick: () => { if (id) { this.sfx('click'); this.clearSlot(k); } else if (st.sel) this.place(st.sel, k); }
        };
      }),

      docItems: p.type === 'doc' ? p.items.map(mkItem) : [],
      docFolders: p.type === 'doc' ? p.folders.map(f => {
        const id = st.slots[f.key];
        return {
          key: f.key, name: f.name, bg: f.bg, border: f.border, ink: f.ink,
          imgCss: 'url(' + A('assets/s4/p-folder-' + f.key + '.webp') + ')',
          label: id ? label(id) : 'seret ke sini',
          onClick: () => { if (id) { this.sfx('click'); this.clearSlot(f.key); } else if (st.sel) this.place(st.sel, f.key); }
        };
      }) : [],

      checkLabel: 'PERIKSA JAWABAN',
      checkBg: 'linear-gradient(#5aa9f2,#2170cd 62%,#12539f)',
      checkBorder: '#0d3f7d',
      checkInk: '#fff',
      checkCursor: 'pointer',
      onCheck: () => this.check(),

      fbShow: !!st.fb,
      fb: {
        ok: st.fb ? st.fb.ok : false,
        title: st.fb ? st.fb.title : '',
        body: st.fb ? st.fb.body : '',
        accent: st.fb && st.fb.ok ? '#2e9c3a' : '#d98704',
        btn: st.fb && st.fb.ok ? 'LANJUTKAN MISI' : 'COBA LAGI',
        btnBg: st.fb && st.fb.ok ? 'linear-gradient(#6fd07a,#2e9c3a)' : 'linear-gradient(#ffd75e,#f5a406)',
        btnBorder: st.fb && st.fb.ok ? '#1d6a26' : '#b07708',
        btnInk: st.fb && st.fb.ok ? '#fff' : '#3a2a06',
        onBtn: () => { this.sfx('click'); if (st.fb && st.fb.ok) this.continueMission(); else this.setState({ fb: null }); }
      },

      dragShow: !!st.drag,
      dragX: st.drag ? st.drag.x + 'px' : '0px',
      dragY: st.drag ? st.drag.y + 'px' : '0px',
      dragLabel: st.drag ? label(st.drag.id) : '',

      toastShow: !!st.toast,
      toastText: st.toast,
      waveOpacity: st.muted ? 0 : 1,
      muteOpacity: st.muted ? 1 : 0,

      onBackToMap: () => { this.sfx('click'); this.setState({ view: 'map', fb: null, sel: null, cor: [], slots: {}, picks: [] }); },
      onReset: () => { this.sfx('click'); this.setState({ view: 'map', cur: 0, done: [false, false, false, false, false, false, false, false], sel: null, cor: [], slots: {}, picks: [], fb: null }); this.toast('Progres misi direset'); },
      onNextMisi: () => { this.sfx('click'); __mkGo(4); },
      onHome: () => { this.sfx('click'); __dcGo('1. Misi Konstruksi.dc.html'); },
      onDropClick: () => { if (st.sel) this.place(st.sel, 'cor'); },
      toggleMusic: () => {
        this.sfx('click');
        const muted = !st.muted;
        this.setState({ muted });
        __mkMuteSet(muted ? '1' : '0');
        if (this.audio) { if (muted) this.audio.pause(); else this.audio.play().catch(() => {}); }
        this.toast(muted ? 'Musik latar: nonaktif' : 'Musik latar: aktif');
      }
    };
  }
}

export default Component;
