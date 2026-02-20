import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'; // <--- ISPRAVLJENO IME
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      ...prerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          // Početna
          '/',
          
          // --- SRPSKI ---
          '/sr', '/sr/rafting', '/sr/planinarenje', '/sr/kampovanje', 
          '/sr/visednevni', '/sr/o-nama', '/sr/motociklisti', '/sr/faq',

          // --- ENGLESKI ---
          '/en', '/en/rafting', '/en/hiking', '/en/camping', 
          '/en/multiday', '/en/aboutus', '/en/bikerhub', '/en/faq',

          // --- NJEMAČKI ---
          '/de', '/de/rafting', '/de/wandern', '/de/camping', 
          '/de/mehrtagestouren', '/de/ueber-uns', '/de/motorrad', '/de/faq'
        ],
        renderer: new PuppeteerRenderer({
          // Dajemo Reactu 1.5 sekundu vremena da povuče jezik i naslove prije slikanja
          renderAfterTime: 1500,
        })
      }),
      apply: 'build' // Radi samo kada pokrenemo npm run build
    }
  ],
});