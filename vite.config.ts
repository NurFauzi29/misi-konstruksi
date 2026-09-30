import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// JS/CSS di-inline ke index.html agar bisa dibuka dari file:// (module script eksternal diblokir CORS).
// Aset gim ada di public/assets/ dan dirujuk lewat path string, sehingga disalin apa adanya (tidak di-inline).
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'es2020',
    // Hindari bentrok dengan public/assets/ bila ada file build yang tidak ter-inline.
    assetsDir: '_build',
  },
});
