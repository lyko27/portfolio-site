// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://perso.isima.fr',
  base: '/~nagadaix',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
});