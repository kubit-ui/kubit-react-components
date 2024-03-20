import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@/assets': '/src/assets',
      '@/components': '/src/components',
      '@/utils': '/src/utils',
      '@/hooks': '/src/hooks',
      '@/types': '/src/types',
      '@/constants': '/src/constants',
      '@/provider': '/src/provider',
      '@/tests': '/src/tests',
      '@/theme': '/src/theme',
      '@/styles': '/src/styles',
    },
  },
});
