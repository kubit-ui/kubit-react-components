import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/lib': path.resolve(__dirname, '../src/lib'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@': path.resolve(__dirname, '../src'),
    },
  },
  css: {
    devSourcemap: true,
  },
});
