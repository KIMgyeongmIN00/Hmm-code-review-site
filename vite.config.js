import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@commons', replacement: '/src/components/commons' },
      { find: '@features', replacement: '/src/components/features' },
      { find: '@layers', replacement: '/src/components/layers' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@pages', replacement: '/src/pages' }
    ]
  }
});
