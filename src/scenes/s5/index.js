// GENERATED oleh scripts/convert-mockup.mjs dari mockup/5. Profesi Pertama.dc.html — jangan diedit manual.
import { defineScene } from '../../dc/runtime.jsx';
import { __mkResetScene } from '../../dc/mk.js';
import Logic from './logic.js';
import View from './view.jsx';
import css from './scene.css?raw';

export default defineScene({
  name: "5. Profesi Pertama",
  Logic,
  View,
  css,
  defaults: {"soundOn":true,"showStatus":true,"maxProfesi":3},
  onCreate: __mkResetScene,
});
