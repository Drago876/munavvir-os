import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Keep Vite's React transform enabled; Pages base paths can be added after the repo exists.
export default defineConfig({
  base: '/munavvir-os/',
  plugins: [react()],
});
