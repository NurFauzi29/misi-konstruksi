// GENERATED oleh scripts/convert-mockup.mjs dari mockup/3. Tebak Profesi.dc.html — jangan diedit manual.
/* eslint-disable */
import { DCLogic } from '../../dc/runtime.jsx';
import { LS, __mkLoad, __mkSave, __mkGo, __mkNav, __mkMapVals, __mkMuteGet, __mkMuteSet, __mkBgmAudio, __dcGo } from '../../dc/mk.js';

const A=window.A||function(p){var r=window.__resources;return (r&&r[p])||p;};
const PROFESI = [
  { id: 'pengawas', name: 'PENGAWAS', color: '#e23b30', img: 'assets/s3/p-card3-pengawas.webp' },
  { id: 'surveyor', name: 'SURVEYOR', color: '#4caf50', img: 'assets/s3/p-card3-surveyor.webp' },
  { id: 'admin', name: 'ADMIN TEKNIK', color: '#8a5cd6', img: 'assets/s3/p-card3-admin.webp' },
  { id: 'estimator', name: 'ESTIMATOR', color: '#f0b400', img: 'assets/s3/p-card3-estimator.webp' },
  { id: 'logistik', name: 'LOGISTIK', color: '#2b8fe0', img: 'assets/s3/p-card3-logistik.webp' },
  { id: 'mandor', name: 'MANDOR', color: '#f0872a', img: 'assets/s3/p-card3-mandor.webp' },
  { id: 'pelaksana', name: 'PELAKSANA', color: '#8a5a33', img: 'assets/s3/p-card3-pelaksana.webp' },
  { id: 'asisten', name: 'ASISTEN', color: '#24c4b8', img: 'assets/s3/p-card3-asisten.webp' }
];
const JOBS = [
  { n: 1, ans: 'admin', l1: 'Mengelola dokumen dan data teknis proyek', l2: 'Membuat surat, laporan, dan arsip proyek' },
  { n: 2, ans: 'pelaksana', l1: 'Melaksanakan pekerjaan konstruksi sesuai gambar kerja', l2: 'Mengerjakan tugas teknis di lapangan' },
  { n: 3, ans: 'pengawas', l1: 'Mengawasi jalannya pekerjaan di lapangan', l2: 'Memastikan mutu, waktu, dan biaya sesuai rencana' },
  { n: 4, ans: 'estimator', l1: 'Menghitung kebutuhan biaya, bahan, dan tenaga kerja', l2: 'Membuat RAB (Rencana Anggaran Biaya) proyek' },
  { n: 5, ans: 'mandor', l1: 'Memimpin dan mengarahkan pekerja di lapangan', l2: 'Memastikan pekerjaan sesuai rencana dan target' },
  { n: 6, ans: 'surveyor', l1: 'Melakukan pengukuran dan pemetaan di lapangan', l2: 'Menyediakan data untuk perencanaan dan pelaksanaan' },
  { n: 7, ans: 'asisten', l1: 'Membantu pelaksana dan pengawas di lapangan', l2: 'Membuat laporan harian dan dokumentasi proyek' },
  { n: 8, ans: 'logistik', l1: 'Mengatur pengadaan dan distribusi bahan & peralatan', l2: 'Memastikan ketersediaan logistik tepat waktu' }
];
const prof = id => PROFESI.find(p => p.id === id);

class Component extends DCLogic {
  zones = {};
  state = { view: 'map', place: (__mkLoad('s3') || {}).place || {}, selected: null, drag: null, checked: !!(__mkLoad('s3') || {}).checked, result: null, hoverZone: null, muted: false, toast: null };

  componentDidUpdate() { __mkSave('s3', { place: this.state.place, checked: this.state.checked, ever: !!((__mkLoad('s3') || {}).ever || (this.state.result && this.state.result.right === 8)) }); }
  componentDidMount() {
    const stored = __mkMuteGet();
    const muted = stored === null ? !!this.props.startMuted : stored === '1';
    const a = __mkBgmAudio();
    a.loop = true;
    a.volume = (this.props.bgmVolume ?? 45) / 100;
    const t = parseFloat(LS.getItem('mk_bgm_time') || '0');
    if (t > 0) a.currentTime = t;
    this.audio = a;
    this.saver = setInterval(() => { if (!a.paused) LS.setItem('mk_bgm_time', String(a.currentTime)); }, 2000);
    this.setState({ muted });
    if (!muted) a.play().catch(() => {
      const kick = () => { if (!this.state.muted) a.play().catch(() => {}); window.removeEventListener('pointerdown', kick); window.removeEventListener('keydown', kick); };
      window.addEventListener('pointerdown', kick); window.addEventListener('keydown', kick);
    });
    this.zones = {};
    this.onKey = (e) => { if (e.key === 'Escape') { if (this.state.result) this.setState({ result: null }); else if (this.state.view === 'game') this.setState({ view: 'map' }); } };
    window.addEventListener('keydown', this.onKey);
    PROFESI.forEach(p => { const im = new Image(); im.src = A(p.img); });
  }

  componentWillUnmount() {
    clearInterval(this.saver);
    clearTimeout(this._toast);
    window.removeEventListener('keydown', this.onKey);
    if (this.audio) { this.audio.pause(); this.audio.src = ''; }
  }

  ctx() {
    if (!this._ctx) { const AC = window.AudioContext || window.webkitAudioContext; this._ctx = new AC(); }
    if (this._ctx.state === 'suspended') this._ctx.resume();
    return this._ctx;
  }

  sfx(kind) {
    const c = this.ctx(), t = c.currentTime, g = c.createGain();
    g.connect(c.destination);
    const vol = 0.16 * ((this.props.sfxVolume ?? 70) / 100);
    if (kind === 'drop') {
      const o = c.createOscillator(); o.type = 'triangle';
      o.frequency.setValueAtTime(300, t); o.frequency.exponentialRampToValueAtTime(520, t + 0.09);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      o.connect(g); o.start(t); o.stop(t + 0.16);
    } else if (kind === 'close') {
      const o = c.createOscillator(); o.type = 'triangle';
      o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(200, t + 0.16);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g); o.start(t); o.stop(t + 0.2);
    } else if (kind === 'done') {
      [523, 659, 784, 1047].forEach((f, i) => {
        const o = c.createOscillator(), gg = c.createGain();
        o.type = 'triangle'; o.frequency.value = f;
        const s = t + i * 0.11;
        gg.gain.setValueAtTime(0.0001, s); gg.gain.exponentialRampToValueAtTime(vol, s + 0.02);
        gg.gain.exponentialRampToValueAtTime(0.0001, s + 0.32);
        o.connect(gg); gg.connect(c.destination); o.start(s); o.stop(s + 0.34);
      });
    } else {
      const o = c.createOscillator(), o2 = c.createOscillator();
      o.type = 'square'; o2.type = 'sine';
      o.frequency.setValueAtTime(660, t); o.frequency.exponentialRampToValueAtTime(880, t + 0.07);
      o2.frequency.setValueAtTime(1320, t);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      o.connect(g); o2.connect(g);
      o.start(t); o2.start(t); o.stop(t + 0.15); o2.stop(t + 0.1);
    }
  }

  showToast(msg) {
    this.setState({ toast: msg });
    clearTimeout(this._toast);
    this._toast = setTimeout(() => this.setState({ toast: null }), 2400);
  }

  placedZoneOf(id) {
    const p = this.state.place;
    return Object.keys(p).find(k => p[k] === id) || null;
  }

  put(zoneN, id) {
    if (!id || this.state.checked) return;
    const place = Object.assign({}, this.state.place);
    const prev = this.placedZoneOf(id);
    if (prev) delete place[prev];
    place[zoneN] = id;
    this.sfx('drop');
    this.setState({ place, selected: null, drag: null, hoverZone: null });
  }

  zoneAt(x, y) {
    let hit = null;
    Object.keys(this.zones).forEach(n => {
      const el = this.zones[n];
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) hit = n;
    });
    return hit;
  }

  renderVals(){ const r = this._rv(); return Object.assign(__mkNav(), r, __mkMapVals(2, r.onPlay)); }
  _rv() {
    const s = this.state;
    const placedCount = Object.keys(s.place).length;
    const rows = JOBS.map(j => {
      const id = s.place[j.n];
      const p = id ? prof(id) : null;
      const ok = s.checked && p && j.ans === id;
      const bad = s.checked && p && j.ans !== id;
      return {
        n: j.n, l1: j.l1, l2: j.l2, color: prof(j.ans).color,
        hasCard: !!p,
        cardImg: p ? A(p.img) : '', cardBg: p ? 'url("'+A(p.img)+'")' : 'none',
        cardName: p ? p.name : '',
        cardColor: p ? p.color : '#2b3a4a',
        zoneBorder: ok ? '#4f9b1b' : bad ? '#c1272d' : (s.hoverZone === String(j.n) ? '#f5a406' : 'rgba(18,58,107,.3)'),
        zoneBg: ok ? '#eaf8e2' : bad ? '#fdecec' : (s.hoverZone === String(j.n) ? 'rgba(245,164,6,.14)' : 'rgba(18,58,107,.04)'),
        statusShow: ok || bad,
        statusText: ok ? '✓ BENAR' : '✕ SALAH',
        statusColor: ok ? '#3d7a12' : '#c1272d',
        zoneRef: (el) => { this.zones[j.n] = el; },
        onZone: () => {
          if (s.checked) return;
          if (s.selected) { this.put(j.n, s.selected); return; }
          if (s.place[j.n]) {
            const place = Object.assign({}, s.place);
            delete place[j.n];
            this.sfx('close');
            this.setState({ place });
          }
        }
      };
    });
    const cards = PROFESI.map((p, pi) => {
      const used = !!this.placedZoneOf(p.id);
      return {
        n: pi + 1, name: p.name, img: A(p.img), bg: 'url("'+A(p.img)+'")', color: p.color,
        border: s.selected === p.id ? '#f5a406' : 'transparent',
        opacity: used ? 0 : 1,
        vis: used ? 'hidden' : 'visible',
        onDown: (e) => {
          if (used || s.checked) return;
          this._down = { x: e.clientX, y: e.clientY, id: p.id, moved: false };
          this.setState({ drag: { id: p.id, x: e.clientX, y: e.clientY } });
        },
        onClick: () => {
          if (used || s.checked) return;
          if (this._down && this._down.moved) return;
          this.sfx('click');
          this.setState({ selected: s.selected === p.id ? null : p.id });
        }
      };
    });
    return {
      isMap: s.view === 'map',
      isGame: s.view === 'game',
      rows, cards,
      progressText: placedCount + '/8',
      checkFilter: placedCount === 8 ? 'none' : 'grayscale(.55) opacity(.8)',
      dragImg: s.drag ? A(prof(s.drag.id).img) : null, dragBg: s.drag ? 'url("'+A(prof(s.drag.id).img)+'")' : 'none',
      dragX: s.drag ? s.drag.x + 'px' : '0px',
      dragY: s.drag ? s.drag.y + 'px' : '0px',
      result: s.result,
      toast: s.toast,
      waveOpacity: s.muted ? 0 : 1,
      muteOpacity: s.muted ? 1 : 0,
      onMove: (e) => {
        if (!this._down) return;
        if (Math.abs(e.clientX - this._down.x) > 5 || Math.abs(e.clientY - this._down.y) > 5) this._down.moved = true;
        const hz = this.zoneAt(e.clientX, e.clientY);
        this.setState({ drag: { id: this._down.id, x: e.clientX, y: e.clientY }, hoverZone: hz });
      },
      onUp: (e) => {
        if (!this._down) return;
        const d = this._down;
        this._down = null;
        const hz = this.zoneAt(e.clientX, e.clientY);
        if (d.moved && hz) this.put(hz, d.id);
        else this.setState({ drag: null, hoverZone: null });
      },
      onPlay: () => { this.sfx('click'); this.setState({ view: 'game' }); },
      goPanduan: () => { this.sfx('click'); __mkNav().navPanduan(); },
      goEksplorasi: () => { this.sfx('click'); __dcGo('2. Scene Eksplorasi.dc.html'); },
      onHome: () => { this.sfx('click'); __dcGo('1. Misi Konstruksi.dc.html'); },
      onReset: () => {
        this.sfx('close');
        this.setState({ place: {}, selected: null, drag: null, checked: false, result: null, hoverZone: null });
        this.showToast('Permainan direset — Progres: 0/8');
      },
      onCheck: () => {
        if (placedCount < 8) {
          this.sfx('close');
          this.showToast('Lengkapi semua pasangan profesi terlebih dahulu! Progres: ' + placedCount + '/8');
          return;
        }
        let right = 0;
        JOBS.forEach(j => { if (s.place[j.n] === j.ans) right++; });
        const wrong = 8 - right;
        const score = Math.round(right / 8 * 100);
        this.sfx('done');
        this.setState({
          checked: true,
          result: {
            right, wrong, score,
            note: right === 8 ? 'Luar biasa! Semua jobdesk cocok dengan profesinya.' : 'Periksa kembali kotak bertanda ✕, lalu coba lagi.'
          }
        });
      },
      onRetry: () => {
        this.sfx('click');
        this.setState({ place: {}, selected: null, drag: null, checked: false, result: null, hoverZone: null });
      },
      onNext: () => { this.sfx('click'); __mkGo(3); },
      toggleMusic: () => {
        this.sfx('click');
        const muted = !s.muted;
        this.setState({ muted });
        __mkMuteSet(muted ? '1' : '0');
        if (this.audio) { if (muted) this.audio.pause(); else this.audio.play().catch(() => {}); }
        this.showToast(muted ? 'Musik latar: nonaktif' : 'Musik latar: aktif');
      }
    };
  }
}

export default Component;
