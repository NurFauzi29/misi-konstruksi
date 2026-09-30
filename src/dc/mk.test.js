import { beforeEach, describe, expect, it } from 'vitest';
import { __mkChecks, __mkLevel, __mkLoad, __mkMapVals, __mkSave } from './mk.js';

// sessionStorage tiruan untuk lingkungan Node.
const store = new Map();
globalThis.sessionStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
};
globalThis.window = globalThis;

describe('progres misi (helper __mk*)', () => {
  beforeEach(() => store.clear());

  it('awal permainan: hanya Panduan terbuka', () => {
    expect(__mkLevel()).toBe(0);
    const nodes = __mkMapVals(-1).mapNodes;
    expect(nodes.map((n) => n.title)).toEqual([
      'Panduan',
      'Eksplorasi 8 Profesi (terkunci)',
      'Tebak Profesi (terkunci)',
      'Pengalaman Kerja (terkunci)',
      'Profesi Pertamaku (terkunci)',
      'Evaluasi (terkunci)',
    ]);
  });

  it('misi terbuka berurutan — menyelesaikan misi lompatan tidak membuka level', () => {
    __mkSave('s3', { ever: true });
    expect(__mkLevel()).toBe(0);
    __mkSave('s1', { done: true });
    expect(__mkLevel()).toBe(1);
  });

  it('eksplorasi selesai setelah 8 profesi dipelajari', () => {
    __mkSave('s2', { learned: ['a', 'b', 'c', 'd', 'e', 'f', 'g'] });
    expect(__mkChecks()[1]).toBe(false);
    __mkSave('s2', { learned: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] });
    expect(__mkChecks()[1]).toBe(true);
  });

  it('pengalaman kerja butuh 8 tugas selesai semua', () => {
    __mkSave('s4', { done: [true, true, true, true, true, true, true, false] });
    expect(__mkChecks()[3]).toBe(false);
    __mkSave('s4', { done: Array(8).fill(true) });
    expect(__mkChecks()[3]).toBe(true);
  });

  it('semua misi selesai membuka Evaluasi dan peta menampilkan centang', () => {
    __mkSave('s1', { done: true });
    __mkSave('s2', { ever: true });
    __mkSave('s3', { ever: true });
    __mkSave('s4', { ever: true });
    __mkSave('s5', { xp: 900 });
    expect(__mkLevel()).toBe(5);
    expect(__mkMapVals(-1).mapAllDone).toBe(true);
  });

  it('peta memakai gambar sesuai level terbuka', () => {
    expect(__mkMapVals(-1).mapSrc).toBe('assets/s2/p-maps-panduan.webp');
    __mkSave('s1', { done: true });
    expect(__mkMapVals(-1).mapSrc).toBe('assets/s2/p-map-eksplorasi.webp');
  });

  it('data rusak di storage dianggap kosong', () => {
    sessionStorage.setItem('mk_p_s1', '{rusak');
    expect(__mkLoad('s1')).toBeNull();
  });
});
