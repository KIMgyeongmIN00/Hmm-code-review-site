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
      { find: '@layouts', replacement: '/src/components/layouts' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@libs', replacement: '/src/libs' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' }
    ]
  }
});
