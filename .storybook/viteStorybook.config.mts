import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@/lib': '/src/lib',
      '@/styles': '/src/styles',
    },
  },
});
