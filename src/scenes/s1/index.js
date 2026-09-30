// GENERATED oleh scripts/convert-mockup.mjs dari mockup/1. Misi Konstruksi.dc.html — jangan diedit manual.
import { defineScene } from '../../dc/runtime.jsx';
import { __mkResetScene } from '../../dc/mk.js';
import Logic from './logic.js';
import View from './view.jsx';
import css from './scene.css?raw';

export default defineScene({
  name: "1. Misi Konstruksi",
  Logic,
  View,
  css,
  defaults: {"bgmVolume":45,"sfxVolume":70,"startMuted":false},
  onCreate: __mkResetScene,
});
