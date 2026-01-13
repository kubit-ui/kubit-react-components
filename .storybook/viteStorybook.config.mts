import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// Vite 8 beta: tsconfigPaths support is coming but not yet in stable API
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Vite 8: Enhanced caching for faster rebuilds
  cacheDir: '../node_modules/.vite-storybook',
  css: {
    devSourcemap: true,
  },
  // Vite 8: Optimized dependency pre-bundling for Storybook
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  plugins: [
    react({
      // Vite 8: Enhanced React plugin options
      babel: {
        babelrc: false,
        configFile: false,
      },
      jsxImportSource: 'react',
      jsxRuntime: 'automatic',
    }),
    // Vite 8 beta: Native tsconfigPaths support coming in resolve.tsconfigPaths
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/lib': path.resolve(__dirname, '../src/lib'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
    },
    // Vite 8: Better module resolution
    dedupe: ['react', 'react-dom'],
    // Vite 8 (future): Native tsconfig paths support
    // tsconfigPaths: true, // Coming soon in stable release
  },
  // Vite 8: Enhanced server configuration for development
  server: {
    fs: {
      strict: false,
    },
  },
});
