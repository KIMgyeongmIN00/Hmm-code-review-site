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
      { find: '@contexts', replacement: '/src/contexts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@hooks', replacement: '/src/libs/hooks' },
      { find: '@api', replacement: '/src/libs/api' },
      { find: '@utils', replacement: '/src/libs/utils' }
    ]
  }
});
