import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@common', replacement: '/src/components/common' },
      { find: '@features', replacement: '/src/components/features' },
      { find: '@layer', replacement: '/src/components/layer' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@pages', replacement: '/src/pages' }
    ]
  }
});
