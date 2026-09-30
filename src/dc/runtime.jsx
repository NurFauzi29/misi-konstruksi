// Pengganti minimal runtime Claude Design (mockup/support.js) untuk scene hasil konversi.
// Semantik sengaja disamakan: setState menggabungkan state, renderVals() digabung di atas props,
// error lifecycle hanya dicatat ke console agar satu kesalahan tidak mematikan halaman.
import { Component, isValidElement } from 'react';

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.__host = undefined;
  }
  setState(update, cb) {
    this.__host && this.__host.__setLogicState(update, cb);
  }
  forceUpdate() {
    this.__host && this.__host.forceUpdate();
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() {
    return {};
  }
}

const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/** String style inline → objek style React (identik dengan cssToObj di support.js). */
export function cssToObj(css) {
  const o = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    o[prop.startsWith('--') ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  return o;
}

/** Nilai {{ … }} di dalam teks. */
export function interp(v) {
  if (v === undefined || v === null || typeof v === 'boolean') return null;
  if (isValidElement(v) || Array.isArray(v)) return v;
  return <span className="sc-interp">{String(v)}</span>;
}

/** Bagian {{ … }} di dalam atribut campuran, mis. style="left:{{ x }}". */
export const str = (v) => v ?? '';

/** Daftar untuk sc-for; selain array dianggap kosong. */
export const arr = (v) => (Array.isArray(v) ? v : []);

/**
 * Bungkus class logika + template menjadi komponen React.
 * @param {{ name: string, Logic: typeof DCLogic, View: (p: { $v: any }) => any, css: string, defaults: object, onCreate?: () => void }} def
 */
export function defineScene({ name, Logic, View, css, defaults, onCreate }) {
  class Scene extends Component {
    constructor(props) {
      super(props);
      this.state = { __v: 0 };
      onCreate && onCreate();
      try {
        this.logic = new Logic({ ...defaults });
      } catch (e) {
        console.error(`[${name}]`, e);
        this.logic = new DCLogic({ ...defaults });
      }
      this.logic.__host = this;
    }
    __setLogicState(update, cb) {
      const prev = this.logic.state;
      const patch = typeof update === 'function' ? update(prev) : update;
      this.logic.state = { ...prev, ...patch };
      this.setState((s) => ({ __v: s.__v + 1 }), cb);
    }
    componentDidMount() {
      try {
        this.logic.componentDidMount();
      } catch (e) {
        console.error(`[${name}]`, e);
      }
    }
    componentDidUpdate(prevProps) {
      try {
        this.logic.componentDidUpdate(prevProps);
      } catch (e) {
        console.error(`[${name}]`, e);
      }
    }
    componentWillUnmount() {
      try {
        this.logic.componentWillUnmount();
      } catch (e) {
        console.error(`[${name}]`, e);
      }
    }
    render() {
      let vals = defaults;
      try {
        vals = { ...defaults, ...(this.logic.renderVals() || {}) };
      } catch (e) {
        console.error(`[${name}] renderVals()`, e);
      }
      return (
        <div className="sc-host" data-sc-name={name}>
          <style>{css}</style>
          <View $v={vals} />
        </div>
      );
    }
  }
  Scene.displayName = name;
  return Scene;
}
