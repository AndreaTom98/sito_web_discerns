import { defineConfig } from 'astro/config';

// Sito statico: nessuna dipendenza runtime, deploy ovunque.
export default defineConfig({
  site: 'https://discerns.ai',
  output: 'static',
  compressHTML: true,
});
