import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../../dist/apps/astro-crash',
  integrations: [react(), tailwind()],
});
