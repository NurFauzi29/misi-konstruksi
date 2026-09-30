// GENERATED oleh scripts/convert-mockup.mjs dari mockup/2. Scene Eksplorasi.dc.html — jangan diedit manual.
/* eslint-disable */
import { DCLogic } from '../../dc/runtime.jsx';
import { LS, __mkLoad, __mkSave, __mkGo, __mkNav, __mkMapVals, __mkMuteGet, __mkMuteSet, __mkBgmAudio, __dcGo } from '../../dc/mk.js';

const A=window.A||function(p){var r=window.__resources;return (r&&r[p])||p;};
const PROFESI = [
  { id: 'mandor', title: 'Mandor', src: 'assets/s2/p-mandor.webp', col: 0, row: 0 },
  { id: 'surveyor', title: 'Surveyor', src: 'assets/s2/p-surveyor.webp', col: 1, row: 0 },
  { id: 'estimator', title: 'Estimator', src: 'assets/s2/p-estimator.webp', col: 2, row: 0 },
  { id: 'logistik', title: 'Logistik', src: 'assets/s2/p-logistik.webp', col: 3, row: 0 },
  { id: 'pengawas', title: 'Pengawas', src: 'assets/s2/p-pengawas.webp', col: 0, row: 1 },
  { id: 'pelaksana', title: 'Pelaksana', src: 'assets/s2/p-pelaksana.webp', col: 1, row: 1 },
  { id: 'asisten', title: 'Asisten', src: 'assets/s2/p-asisten.webp', col: 2, row: 1 },
  { id: 'admin', title: 'Admin Teknik', src: 'assets/s2/p-admin.webp', col: 3, row: 1 }
];
const COL_LEFT = ['12.9%', '27.6%', '42.4%', '57.1%'];
const ROW_TOP = ['32.4%', '60.8%'];

class Component extends DCLogic {
  state = { view: 'map', detail: null, learned: (__mkLoad('s2') || {}).learned || [], muted: false, toast: null };

  componentDidUpdate() { __mkSave('s2', { learned: this.state.learned, ever: !!((__mkLoad('s2') || {}).ever || this.state.learned.length >= 8) }); }
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
    this.onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (this.state.detail) this.back(); else if (this.state.view === 'shelf') this.goMaps();
    };
    window.addEventListener('keydown', this.onKey);
    PROFESI.forEach(p => { const im = new Image(); im.src = A(p.src); });
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
    if (kind === 'close') {
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
    this._toast = setTimeout(() => this.setState({ toast: null }), 2200);
  }

  back = () => {
    this.sfx('close');
    const id = this.state.detail;
    const learned = this.state.learned.includes(id) ? this.state.learned : this.state.learned.concat(id);
    const justFinished = learned.length === PROFESI.length && this.state.learned.length < PROFESI.length;
    this.setState({ detail: null, learned });
    if (justFinished) { setTimeout(() => this.sfx('done'), 250); this.showToast('Semua profesi dipelajari! Tombol Selanjutnya terbuka.'); }
  };

  goMaps = () => { this.sfx('close'); this.setState({ view: 'map', detail: null }); };

  renderVals(){ const r = this._rv(); return Object.assign(__mkNav(), r, __mkMapVals(1, r.onExplore)); }
  _rv() {
    const learned = this.state.learned;
    const allDone = learned.length === PROFESI.length;
    return {
      isMap: this.state.view === 'map' && !this.state.detail,
      isShelf: this.state.view === 'shelf' && !this.state.detail,
      detailSrc: this.state.detail ? A(PROFESI.find(p => p.id === this.state.detail).src) : null,
      detailCss: this.state.detail ? `url(${A(PROFESI.find(p => p.id === this.state.detail).src)})` : 'none',
      doneOpacity: allDone ? 1 : 0,
      allDone,
      progressLabel: learned.length + ' / ' + PROFESI.length + ' profesi dipelajari',
      toast: this.state.toast,
      waveOpacity: this.state.muted ? 0 : 1,
      muteOpacity: this.state.muted ? 1 : 0,
      speakerDisplay: 'none',
      speakerLeft: this.state.view === 'map' ? '84.6%' : '76.3%',
      speakerTop: this.state.view === 'map' ? '4.8%' : '5.6%',
      speakerWidth: this.state.view === 'map' ? '5.6%' : '6.2%',
      speakerHeight: this.state.view === 'map' ? '12%' : '9.3%',
      shelfBgCss: 'url(' + A(learned.length === PROFESI.length ? 'assets/s2/p-shelf-2.webp' : 'assets/s2/p-shelf-1.webp') + ')',
      cards: PROFESI.map(p => ({
        title: p.title,
        left: COL_LEFT[p.col],
        bg: `url(${A('assets/s2/card-'+p.id+'.webp')})`,
        top: ROW_TOP[p.row],
        checkDisplay: learned.includes(p.id) ? 'flex' : 'none',
        open: () => { this.sfx('click'); this.setState({ detail: p.id }); }
      })),
      onExplore: () => { this.sfx('click'); this.setState({ view: 'shelf' }); },
      onBackToShelf: this.back,
      onMaps: this.goMaps,
      onHome: () => { this.sfx('click'); __dcGo('1. Misi Konstruksi.dc.html'); },
      onNext: () => { this.sfx('click'); __mkGo(2); },
      toggleMusic: () => {
        this.sfx('click');
        const muted = !this.state.muted;
        this.setState({ muted });
        __mkMuteSet(muted ? '1' : '0');
        if (this.audio) { if (muted) this.audio.pause(); else this.audio.play().catch(() => {}); }
        this.showToast(muted ? 'Musik latar: nonaktif' : 'Musik latar: aktif');
      }
    };
  }
}

export default Component;
