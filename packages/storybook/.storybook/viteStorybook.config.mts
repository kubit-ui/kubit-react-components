import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Vite 8: Enhanced caching for faster rebuilds
  cacheDir: '../node_modules/.vite-storybook',
  css: {
    devSourcemap: true,
  },
  // Vite 8: Optimized dependency pre-bundling for Storybook
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@kubit-ui-web/react-components',
      '@kubit-ui-web/design-system',
    ],
    entries: ['../stories/**/*.stories.tsx', '../overview/**/*.mdx'],
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
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
      '@/stories': path.resolve(__dirname, '../stories'),
    },
    // Vite 8: Better module resolution
    dedupe: ['react', 'react-dom'],
  },
  // Vite 8: Enhanced server configuration for development
  server: {
    fs: {
      // Permitir acceso a los workspaces necesarios
      strict: true,
      allow: [
        // Storybook package
        path.resolve(__dirname, '../'),
        // Components package (built dist)
        path.resolve(__dirname, '../../components'),
        // Design system package (built dist)
        path.resolve(__dirname, '../../design-system'),
        // Root node_modules
        path.resolve(__dirname, '../../../node_modules'),
      ],
    },
  },
});
