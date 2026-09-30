import { createRoot } from 'react-dom/client';
import { __dcGo } from './dc/nav.js';
import { App } from './App';
import './global.css';

// Mockup mendefinisikan window.__dcGo di setiap scene; sebagian logika memanggilnya lewat window.
(window as unknown as { __dcGo: typeof __dcGo }).__dcGo = __dcGo;

// Ukuran viewport yang terlihat → --vw / --vh (lihat global.css). clientWidth/Height pada <html>
// = viewport tata letak tanpa address bar dan tidak terpengaruh pinch-zoom.
const syncViewport = () => {
  const el = document.documentElement;
  el.style.setProperty('--vw', `${el.clientWidth / 100}px`);
  el.style.setProperty('--vh', `${el.clientHeight / 100}px`);
};
syncViewport();
window.addEventListener('resize', syncViewport);
window.addEventListener('orientationchange', () => setTimeout(syncViewport, 150));

// Tanpa StrictMode: logika scene (hasil konversi) tidak dirancang untuk mount ganda.
createRoot(document.getElementById('root')!).render(<App />);
