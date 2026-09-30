// Navigasi antar scene SPA. Menggantikan pindah halaman `window.location` di mockup.
export const SCENE_FILES = [
  '1. Misi Konstruksi.dc.html',
  '2. Scene Eksplorasi.dc.html',
  '3. Tebak Profesi.dc.html',
  '4. Pengalaman Kerja.dc.html',
  '5. Profesi Pertama.dc.html',
  '6. Scene Evaluasi.dc.html',
];

let current = { index: 0, visit: 0 };
const subs = new Set();

export const nav = {
  get: () => current,
  subscribe: (fn) => {
    subs.add(fn);
    return () => subs.delete(fn);
  },
  go(index) {
    // `visit` selalu naik supaya navigasi ke scene yang sama tetap me-mount ulang, seperti reload halaman.
    current = { index, visit: current.visit + 1 };
    subs.forEach((fn) => fn());
  },
};

/** Pengganti window.__dcGo(path) di mockup: path berupa nama file .dc.html. */
export function __dcGo(path) {
  let name = String(path);
  try {
    name = decodeURIComponent(name);
  } catch {
    /* biarkan apa adanya */
  }
  const index = SCENE_FILES.indexOf(name.split('/').pop());
  if (index < 0) {
    console.warn('[nav] scene tidak dikenal:', path);
    return;
  }
  nav.go(index);
}
