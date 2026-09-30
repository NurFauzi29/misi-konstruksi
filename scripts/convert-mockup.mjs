// Konversi 6 file mockup/N. *.dc.html (export Claude Design) menjadi scene React di src/scenes/sN/.
//
//   view.jsx   template <x-dc> → JSX (style inline, sc-if, sc-for, {{ }} dipertahankan persis)
//   logic.js   class Component dari <script data-dc-script>, verbatim; helper global diimpor dari src/dc/mk.js
//   scene.css  <style> dari <helmet> + kelas :hover/:active dari atribut style-hover / style-active
//   index.js   penggabung (defineScene)
//
// Semantik meniru mockup/support.js (runtime Claude Design). Jalankan ulang setiap kali mockup diperbarui:
//   npm run convert
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment } from 'parse5';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mockup = join(root, 'mockup');
const outRoot = join(root, 'src', 'scenes');

const HEADER = '// GENERATED oleh scripts/convert-mockup.mjs dari mockup/{file} — jangan diedit manual.\n';

// Helper global yang disediakan src/dc/mk.js (definisinya dibuang dari logic hasil konversi).
const MK_EXPORTS = [
  'LS', '__mkHub', '__mkLoad', '__mkSave', '__mkTakeGo', '__MK_FILES', '__MK_NAMES', '__mkChecks', '__mkLevel',
  '__mkAlert', '__mkLocked', '__mkGoEval', '__mkGo', '__mkNav', '__mkMapUrl', '__MK_MAPS', '__mkMapVals',
  '__mkMuteGet', '__mkMuteSet', '__mkBgmAudio', '__dcGo',
];
const MK_DEF_LINE = /^(function __mk\w+\(|var __MK_\w+=|var LS=)/;

// ---------- encode.ts (support.js) ----------
const CAMEL_ATTR = 'sc-camel-';
const CAMEL_ATTR_RE = /(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g;
const encodeCase = (html) =>
  html
    .replace(/<helmet(\s|>)/gi, '<sc-helmet$1')
    .replace(/<\/helmet\s*>/gi, '</sc-helmet>')
    .replace(CAMEL_ATTR_RE, (_, sp, name, eq) => sp + CAMEL_ATTR + name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()) + eq);
const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const EVENT_MAP = {
  onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit', onkeydown: 'onKeyDown',
  onkeyup: 'onKeyUp', onmousedown: 'onMouseDown', onmouseup: 'onMouseUp', onmouseenter: 'onMouseEnter',
  onmouseleave: 'onMouseLeave', onmousemove: 'onMouseMove', onpointerdown: 'onPointerDown', onpointerup: 'onPointerUp',
  onpointermove: 'onPointerMove', onpointercancel: 'onPointerCancel', onfocus: 'onFocus', onblur: 'onBlur',
};
const cssToObj = (css) => {
  const o = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    o[prop.startsWith('--') ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  return o;
};

// ---------- pseudo.ts (support.js): deklarasi :hover/:active diberi !important ----------
function importantify(css) {
  const decls = [];
  let start = 0, depth = 0, quote = '';
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = '';
    } else if (c === "'" || c === '"') quote = c;
    else if (c === '(') depth++;
    else if (c === ')') depth = Math.max(0, depth - 1);
    else if (c === ';' && depth === 0) {
      decls.push(css.slice(start, i));
      start = i + 1;
    }
  }
  decls.push(css.slice(start));
  return decls.map((d) => d.trim()).filter(Boolean).map((d) => (/!\s*important$/i.test(d) ? d : d + ' !important')).join(';');
}

// ---------- expr.ts (support.js) → ekspresi JS ----------
const IDENT_RE = /^[A-Za-z_$][A-Za-z0-9_$]*/;
const NUMBER_RE = /^-?\d+(\.\d+)?$/;

function compileExpr(src, scope) {
  const expr = String(src).trim();
  if (!expr) return 'undefined';
  if (expr[0] === '(' && expr[expr.length - 1] === ')' && parensWrapWhole(expr)) return compileExpr(expr.slice(1, -1), scope);
  const eq = findTopLevelEquality(expr);
  if (eq) return `(${compileExpr(expr.slice(0, eq.index), scope)} ${eq.op} ${compileExpr(expr.slice(eq.index + eq.op.length), scope)})`;
  if (expr[0] === '!') return `!${wrap(compileExpr(expr.slice(1), scope))}`;
  if (['true', 'false', 'null', 'undefined'].includes(expr)) return expr;
  if (NUMBER_RE.test(expr)) return String(Number(expr));
  if (expr.length >= 2 && (expr[0] === '"' || expr[0] === "'") && expr[expr.length - 1] === expr[0]) return JSON.stringify(expr.slice(1, -1));
  return compilePath(expr, scope);
}
const wrap = (code) => (/^[\w$.?[\]"]+$/.test(code) ? code : `(${code})`);
function parensWrapWhole(expr) {
  let depth = 0;
  for (let i = 0; i < expr.length - 1; i++) {
    if (expr[i] === '(') depth++;
    else if (expr[i] === ')') {
      depth--;
      if (depth === 0) return false;
    }
  }
  return true;
}
function findTopLevelEquality(expr) {
  let depth = 0;
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (c === '[' || c === '(') depth++;
    else if (c === ']' || c === ')') depth--;
    else if (depth === 0 && (c === '=' || c === '!') && expr[i + 1] === '=') {
      if (i > 0 && (expr[i - 1] === '=' || expr[i - 1] === '!')) continue;
      if (!expr.slice(0, i).trim()) continue;
      return { index: i, op: expr[i + 2] === '=' ? c + '==' : c + '=' };
    }
  }
  return null;
}
const prop = (name) => (/^[A-Za-z_$][\w$]*$/.test(name) ? `.${name}` : `[${JSON.stringify(name)}]`);
function compilePath(expr, scope) {
  const head = expr.match(IDENT_RE);
  if (!head) return 'undefined';
  let code = scope[head[0]] ?? `$v${prop(head[0])}`;
  let i = head[0].length;
  while (i < expr.length) {
    if (expr[i] === '.') {
      const m = expr.slice(i + 1).match(IDENT_RE) || expr.slice(i + 1).match(/^\d+/);
      if (!m) return 'undefined';
      code += /^\d/.test(m[0]) ? `?.[${m[0]}]` : `?.${m[0]}`;
      i += 1 + m[0].length;
    } else if (expr[i] === '[') {
      let depth = 1, j = i + 1;
      while (j < expr.length && depth > 0) {
        if (expr[j] === '[') depth++;
        else if (expr[j] === ']' && --depth === 0) break;
        j++;
      }
      if (depth !== 0) return 'undefined';
      code += `?.[${compileExpr(expr.slice(i + 1, j), scope)}]`;
      i = j + 1;
    } else return 'undefined';
  }
  return code;
}

/** Nilai atribut → [kode JS, isDynamic]. Semantik compileAttr di support.js. */
function compileAttr(raw, scope) {
  const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return [compileExpr(whole[1], scope), true];
  if (raw.includes('{{')) {
    const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
    const code = parts.map((s, i) => (i & 1 ? `str(${compileExpr(s, scope)})` : JSON.stringify(s))).filter((s) => s !== '""');
    return [code.join(' + '), true];
  }
  return [JSON.stringify(raw), false];
}

// ---------- template → JSX ----------
function convertScene(file, n) {
  const html = readFileSync(join(mockup, file), 'utf8');
  const open = /<x-dc(?:\s[^>]*)?>/.exec(html);
  const close = html.lastIndexOf('</x-dc>');
  const template = html.slice(open.index + open[0].length, close);
  const frag = parseFragment(encodeCase(template));

  const pseudo = new Map(); // "hover|css" → className, urutan kemunculan dipertahankan
  const helmetCss = [];
  const prefix = `s${n}`;

  const pseudoClass = (kind, css) => {
    const key = kind + '|' + css;
    if (!pseudo.has(key)) pseudo.set(key, `${prefix}p${pseudo.size.toString(36)}`);
    return pseudo.get(key);
  };

  let loopDepth = 0;
  const pad = (d) => '  '.repeat(d);

  function children(node, scope, d) {
    return node.childNodes.map((c) => walk(c, scope, d)).filter((s) => s != null);
  }

  function walk(node, scope, d) {
    if (node.nodeName === '#text') return walkText(node.value, scope, d);
    if (!node.tagName) return null;
    const tag = node.tagName;
    if (tag === 'template' || tag === 'script') return null;
    if (tag === 'sc-helmet') {
      for (const c of node.childNodes) if (c.tagName === 'style') helmetCss.push(c.childNodes.map((t) => t.value).join(''));
      return null;
    }
    if (tag === 'sc-if') {
      const [cond] = compileAttr(attr(node, 'value') ?? '', scope);
      const kids = children(node, scope, d + 2);
      return `${pad(d)}{${cond} ? (\n${pad(d + 1)}<>\n${kids.join('\n')}\n${pad(d + 1)}</>\n${pad(d)}) : null}`;
    }
    if (tag === 'sc-for') {
      const [list] = compileAttr(attr(node, 'list') ?? '', scope);
      const as = attr(node, 'as') || 'item';
      loopDepth++;
      const itemVar = `${as.replace(/[^\w$]/g, '_')}${loopDepth > 1 ? loopDepth : ''}`;
      const idxVar = `$i${loopDepth}`;
      const sub = { ...scope, [as]: itemVar, $index: idxVar };
      const kids = children(node, sub, d + 2);
      loopDepth--;
      return `${pad(d)}{arr(${list}).map((${itemVar}, ${idxVar}) => (\n${pad(d + 1)}<Fragment key={${idxVar}}>\n${kids.join('\n')}\n${pad(d + 1)}</Fragment>\n${pad(d)}))}`;
    }
    return walkElement(node, tag, scope, d);
  }

  function walkText(txt, scope, d) {
    if (!txt.includes('{{')) {
      if (!txt.trim() && !txt.includes(' ')) return null;
      return `${pad(d)}{${JSON.stringify(txt)}}`;
    }
    const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
    return parts
      .map((p, i) => (i & 1 ? `${pad(d)}{interp(${compileExpr(p, scope)})}` : p ? `${pad(d)}{${JSON.stringify(p)}}` : null))
      .filter(Boolean)
      .join('\n');
  }

  function walkElement(node, tag, scope, d) {
    const props = [];
    const classes = [];
    let className = null;
    for (const { name, value } of node.attrs) {
      let key = name;
      if (key.startsWith(CAMEL_ATTR)) key = kebabToCamel(key.slice(CAMEL_ATTR.length));
      if (key.startsWith('style-')) {
        classes.push(pseudoClass(key.slice(6), value));
        continue;
      }
      if (key === 'class') key = 'className';
      else if (key === 'for') key = 'htmlFor';
      else if (key.startsWith('on')) key = EVENT_MAP[key] || 'on' + key[2].toUpperCase() + key.slice(3);
      else if (key.includes('-') && !key.startsWith('aria-') && !key.startsWith('data-')) key = kebabToCamel(key);

      let [code, dynamic] = compileAttr(value, scope);
      if (key === 'style') {
        code = dynamic ? `cssToObj(${code})` : JSON.stringify(cssToObj(value));
        dynamic = true;
      } else if ((key === 'value' || key === 'checked') && dynamic) {
        code = `${wrap(code)} ?? ${key === 'checked' ? 'false' : '""'}`;
      }
      if (key === 'className') {
        className = code;
        continue;
      }
      props.push(dynamic ? `${key}={${code}}` : `${key}=${code}`);
    }
    if (classes.length) {
      const joined = JSON.stringify(classes.join(' '));
      props.push(className ? `className={[${className}, ${joined}].filter(Boolean).join(" ")}` : `className=${joined}`);
    } else if (className) props.push(`className={${className}}`);

    const attrs = props.length ? ' ' + props.join(' ') : '';
    const kids = children(node, scope, d + 1);
    if (!kids.length) return `${pad(d)}<${tag}${attrs} />`;
    return `${pad(d)}<${tag}${attrs}>\n${kids.join('\n')}\n${pad(d)}</${tag}>`;
  }

  const body = children(frag, {}, 2).join('\n');
  const view =
    HEADER.replace('{file}', file) +
    "import { Fragment } from 'react';\n" +
    "import { arr, cssToObj, interp, str } from '../../dc/runtime.jsx';\n\n" +
    'export default function View({ $v }) {\n' +
    `  return (\n    <>\n${body}\n    </>\n  );\n}\n`;

  const pseudoCss = [...pseudo].map(([key, cls]) => {
    const [kind, css] = [key.slice(0, key.indexOf('|')), key.slice(key.indexOf('|') + 1)];
    const isEl = kind === 'before' || kind === 'after';
    return `.${cls}${isEl ? '::' : ':'}${kind}{${isEl ? css : importantify(css)}}`;
  });
  const css = `/* GENERATED dari mockup/${file} */\n${helmetCss.join('\n').trim()}\n${pseudoCss.join('\n')}\n`;

  // ----- logic -----
  const doc = parse(html);
  const script = findScript(doc);
  const rawProps = attr(script, 'data-props');
  const defaults = {};
  if (rawProps) {
    for (const [k, meta] of Object.entries(JSON.parse(rawProps))) {
      if (k[0] !== '$' && meta && meta.default !== undefined) defaults[k] = meta.default;
    }
  }
  const js = script.childNodes.map((c) => c.value).join('');
  const kept = js.split('\n').filter((line) => !MK_DEF_LINE.test(line)).join('\n').trim();
  const declared = (name) => new RegExp(`(?:function|var|let|const|class)\\s+${name.replace(/\$/g, '\\$')}\\b`).test(kept);
  const used = MK_EXPORTS.filter((name) => new RegExp(`(^|[^\\w$.])${name.replace(/\$/g, '\\$')}\\b`).test(kept) && !declared(name));
  const logic =
    HEADER.replace('{file}', file) +
    '/* eslint-disable */\n' +
    "import { DCLogic } from '../../dc/runtime.jsx';\n" +
    (used.length ? `import { ${used.join(', ')} } from '../../dc/mk.js';\n` : '') +
    '\n' + kept + '\n\nexport default Component;\n';

  const index =
    HEADER.replace('{file}', file) +
    "import { defineScene } from '../../dc/runtime.jsx';\n" +
    "import { __mkResetScene } from '../../dc/mk.js';\n" +
    "import Logic from './logic.js';\n" +
    "import View from './view.jsx';\n" +
    "import css from './scene.css?raw';\n\n" +
    `export default defineScene({\n  name: ${JSON.stringify(file.replace(/\.dc\.html$/, ''))},\n  Logic,\n  View,\n  css,\n  defaults: ${JSON.stringify(defaults)},\n  onCreate: __mkResetScene,\n});\n`;

  const dir = join(outRoot, `s${n}`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'view.jsx'), view);
  writeFileSync(join(dir, 'logic.js'), logic);
  writeFileSync(join(dir, 'scene.css'), css);
  writeFileSync(join(dir, 'index.js'), index);
  return { file, pseudo: pseudo.size, imports: used.length, defaults: Object.keys(defaults).length };
}

function attr(node, name) {
  return node.attrs?.find((a) => a.name === name)?.value ?? null;
}
function findScript(node) {
  if (node.tagName === 'script' && attr(node, 'data-dc-script') !== null) return node;
  for (const c of node.childNodes || []) {
    const hit = findScript(c);
    if (hit) return hit;
  }
  if (node.content) return findScript(node.content);
  return null;
}

const files = readdirSync(mockup).filter((f) => /^\d\. .*\.dc\.html$/.test(f)).sort();
if (files.length !== 6) throw new Error(`Diharapkan 6 file .dc.html, ditemukan ${files.length}`);
rmSync(outRoot, { recursive: true, force: true });
const results = files.map((f, i) => convertScene(f, i + 1));
writeFileSync(
  join(outRoot, 'index.js'),
  '// GENERATED oleh scripts/convert-mockup.mjs — urutan sama dengan nav.js SCENE_FILES.\n' +
    results.map((_, i) => `import S${i + 1} from './s${i + 1}/index.js';`).join('\n') +
    `\n\nexport const SCENES = [${results.map((_, i) => `S${i + 1}`).join(', ')}];\n`,
);
for (const r of results) console.log(`${r.file}: ${r.pseudo} kelas hover/active, ${r.imports} helper, ${r.defaults} props`);
