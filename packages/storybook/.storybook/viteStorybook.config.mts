import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Enhanced caching for faster rebuilds
  cacheDir: '../node_modules/.vite-storybook',
  css: {
    devSourcemap: true,
  },
  // Optimized dependency pre-bundling for Storybook
  optimizeDeps: {
    entries: ['../stories/**/*.stories.tsx', '../overview/**/*.mdx'],
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@kubit-ui-web/react-components',
      '@kubit-ui-web/design-system',
    ],
  },
  plugins: [
    react({
      // Enhanced React plugin options
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
    // Better module resolution
    dedupe: ['react', 'react-dom'],
  },
  // Enhanced server configuration for development
  server: {
    fs: {
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
      // Permitir acceso a los workspaces necesarios
      strict: true,
    },
  },
});
