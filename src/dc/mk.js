// Helper global yang ada (identik) di setiap file mockup .dc.html, versi SPA.
// Perbedaan dari mockup hanya pada bagian yang bergantung pada iframe/halaman terpisah:
// tidak ada "hub" di window induk, jadi progres disimpan di sessionStorage (perilaku fallback mockup)
// dan navigasi memakai nav.js alih-alih window.location.
import { SCENE_FILES, __dcGo } from './nav.js';

export { __dcGo };

/** Di mockup: objek bersama di window induk (shell iframe). SPA tidak punya shell. */
export function __mkHub() {
  return null;
}

export var LS = (function () {
  try {
    var t = window.localStorage;
    t.setItem('__mk', '1');
    t.removeItem('__mk');
    return t;
  } catch (e) {
    var m = {};
    return {
      getItem: function (k) { return k in m ? m[k] : null; },
      setItem: function (k, v) { m[k] = String(v); },
      removeItem: function (k) { delete m[k]; },
      clear: function () { m = {}; },
    };
  }
})();

// Progres berlaku per sesi browser (hilang saat tab ditutup) — cocok untuk komputer sekolah yang dipakai bergantian.
var memoryStore = {};

export function __mkLoad(k) {
  var r = null;
  try {
    r = sessionStorage.getItem('mk_p_' + k);
  } catch (e) {
    r = memoryStore[k] ?? null;
  }
  try {
    return r ? JSON.parse(r) : null;
  } catch (e) {
    return null;
  }
}

export function __mkSave(k, v) {
  var s;
  try {
    s = JSON.stringify(v);
  } catch (e) {
    return;
  }
  memoryStore[k] = s;
  try {
    sessionStorage.setItem('mk_p_' + k, s);
  } catch (e) {
    /* memori saja */
  }
}

export function __mkTakeGo() {
  var g = __mkLoad('go');
  if (g) __mkSave('go', null);
  return g;
}

export var __MK_FILES = SCENE_FILES;
export var __MK_NAMES = ['Panduan', 'Eksplorasi 8 Profesi', 'Tebak Profesi', 'Pengalaman Kerja', 'Profesi Pertamaku', 'Evaluasi'];

export function __mkChecks() {
  var s1 = __mkLoad('s1') || {}, s2 = __mkLoad('s2') || {}, s3 = __mkLoad('s3') || {}, s4 = __mkLoad('s4') || {}, s5 = __mkLoad('s5') || {};
  return [
    !!s1.done,
    !!(s2.ever || (s2.learned && s2.learned.length >= 8)),
    !!s3.ever,
    !!(s4.ever || (s4.done && s4.done.length === 8 && s4.done.every(Boolean))),
    !!(s5.ever || (s5.xp || 0) >= 900),
  ];
}

export function __mkLevel() {
  var c = __mkChecks(), L = 0;
  while (L < 5 && c[L]) L++;
  return L;
}

export function __mkAlert(title, html) {
  var o = document.getElementById('__mkLock');
  if (o) o.remove();
  o = document.createElement('div');
  o.id = '__mkLock';
  o.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(8,14,22,.62);font-family:Trebuchet MS,sans-serif';
  o.innerHTML = '<div style="max-width:min(86vw,34em);padding:1.6em 1.9em;border-radius:1.2em;border:.25em solid #fff;background:linear-gradient(#ffd84a,#f5a406);box-shadow:0 .6em 1.6em rgba(0,0,0,.45);color:#1a1208;text-align:center;font-size:clamp(14px,1.6vw,22px)"><div style="font-weight:900;font-size:1.4em;margin-bottom:.4em">' + title + '</div><div style="line-height:1.6;margin-bottom:1em">' + html + '</div><button type="button" style="font:inherit;font-weight:900;padding:.5em 1.6em;border-radius:2em;border:.18em solid #fff;background:#2170cd;color:#fff;cursor:pointer">OKE</button></div>';
  o.addEventListener('click', function (e) {
    if (e.target === o || e.target.tagName === 'BUTTON') o.remove();
  });
  document.body.appendChild(o);
}

export function __mkLocked(i) {
  var L = __mkLevel();
  __mkAlert('Misi ' + __MK_NAMES[i] + ' masih terkunci', 'Selesaikan dulu misi <b>' + __MK_NAMES[L] + '</b>' + (L > 0 ? ' dengan <b>skor maksimal</b>' : '') + ' untuk membuka misi berikutnya.');
}

export function __mkGoEval() {
  var c = __mkChecks(), m = [];
  c.forEach(function (v, i) { if (!v) m.push(__MK_NAMES[i]); });
  if (!m.length) {
    __dcGo(__MK_FILES[5]);
    return;
  }
  __mkAlert('Evaluasi masih terkunci', 'Selesaikan dulu misi berikut dengan skor maksimal:<br><b>' + m.join('<br>') + '</b>');
}

export function __mkGo(i, enter) {
  if (i >= 5) {
    __mkGoEval();
    return;
  }
  if (i > __mkLevel()) {
    __mkLocked(i);
    return;
  }
  __mkSave('go', enter ? 'enter' + i : null);
  __dcGo(__MK_FILES[i]);
}

export function __mkNav() {
  window.__mkReady = 1;
  var g = function (i) { return function () { __mkGo(i, true); }; };
  return { navPanduan: g(0), navEksplorasi: g(1), navTebak: g(2), navPengalaman: g(3), navProfesi: g(4), navEvaluasi: g(5) };
}

export function __mkMapUrl(p) {
  return p;
}

export var __MK_MAPS = [
  ['s2', 'p-maps-panduan', [[21.5, 66], [36, 49], [54.5, 36], [71.5, 55], [81, 33], [93.5, 28]]],
  ['s2', 'p-map-eksplorasi', [[19.5, 63], [34, 48], [50.5, 36], [65.5, 54], [78.5, 30], [92, 27]]],
  ['s3', 'p-maps-tebak', [[22, 62], [36, 49], [51, 38], [65, 49], [79.5, 34], [92, 28]]],
  ['s4', 'p-world', [[21, 66], [35.5, 51], [51, 40], [67, 54], [80.5, 35], [93, 28]]],
  ['s5', 'p-maps-profesi', [[21, 65], [35.5, 49], [51, 39.5], [67, 49], [81, 32], [93.5, 27]]],
];

/** Dipanggil setiap kali scene baru di-mount — di mockup flag ini hilang karena halaman dimuat ulang. */
export function __mkResetScene() {
  window.__mkEntered = 0;
}

export function __mkMapVals(own, fn) {
  if (own >= 0 && fn && !window.__mkEntered) {
    window.__mkEntered = 1;
    if (__mkLoad('go') === 'enter' + own) {
      __mkSave('go', null);
      setTimeout(function () {
        if (own === 0) __mkSave('s1', { done: true });
        fn();
      }, 0);
    }
  }
  var L = __mkLevel(), m = __MK_MAPS[Math.min(L, 4)], u = __mkMapUrl(['assets', m[0], m[1] + '.webp'].join('/'));
  return {
    mapSrc: u,
    mapBg: 'url("' + u + '")',
    mapAllDone: L >= 5,
    mapNodes: m[2].map(function (c, i) {
      var open = i <= L;
      return {
        left: c[0] - 6 + '%',
        top: c[1] - 10.5 + '%',
        title: __MK_NAMES[i] + (open ? '' : ' (terkunci)'),
        onClick: function () {
          if (!open) {
            __mkLocked(i);
            return;
          }
          if (i === own && fn) {
            if (i === 0) __mkSave('s1', { done: true });
            fn();
          } else __mkGo(i, true);
        },
      };
    }),
  };
}

export function __mkMuteGet() {
  try {
    return window.localStorage.getItem('mk_bgm_muted');
  } catch (e) {
    return null;
  }
}

export function __mkMuteSet(v) {
  try {
    window.localStorage.setItem('mk_bgm_muted', v);
  } catch (e) {
    /* abaikan */
  }
}

export function __mkBgmAudio() {
  var a = new Audio();
  a.src = 'assets/bgm.mp3';
  return a;
}
