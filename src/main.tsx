import { createRoot } from 'react-dom/client';
import { __dcGo } from './dc/nav.js';
import { App } from './App';
import './global.css';

// Mockup mendefinisikan window.__dcGo di setiap scene; sebagian logika memanggilnya lewat window.
(window as unknown as { __dcGo: typeof __dcGo }).__dcGo = __dcGo;

// Tanpa StrictMode: logika scene (hasil konversi) tidak dirancang untuk mount ganda.
createRoot(document.getElementById('root')!).render(<App />);
