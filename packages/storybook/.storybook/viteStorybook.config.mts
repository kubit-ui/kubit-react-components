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
    ],
    // Force workspace packages to be pre-bundled
    force: true,
    // Force these packages to be pre-bundled from their dist folders
    entries: ['../stories/**/*.stories.tsx'],
    // Exclude source files from being processed
    exclude: [],
    esbuildOptions: {
      // Prevent esbuild from following to source files
      preserveSymlinks: true,
    },
  },
  // Prevent Vite from following source maps back to source files
  build: {
    sourcemap: false,
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
    // Don't use tsconfigPaths - it resolves workspace packages to source code
    // Let Vite use node resolution which will find the built packages
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
      '@/stories': path.resolve(__dirname, '../stories'),
    },
    // Ensure Vite resolves to the built dist folders, not source
    conditions: ['import', 'module', 'browser', 'default'],
    // Force resolution to package.json "module" or "main" fields (the built files)
    mainFields: ['module', 'main'],
    // Preserve symlinks to force resolution to package.json exports
    preserveSymlinks: true,
    // Vite 8: Better module resolution
    dedupe: ['react', 'react-dom'],
    // Vite 8 (future): Native tsconfig paths support
    // tsconfigPaths: true, // Coming soon in stable release
  },
  // Vite 8: Enhanced server configuration for development
  server: {
    fs: {
      // Strict mode - only allow storybook and dist folders
      strict: true,
      allow: [
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../../components/dist'),
        path.resolve(__dirname, '../../design-system/dist'),
        path.resolve(__dirname, '../../components/node_modules'),
        path.resolve(__dirname, '../../design-system/node_modules'),
        path.resolve(__dirname, '../../../node_modules'),
      ],
      // Explicitly deny access to source code
      deny: [
        path.resolve(__dirname, '../../components/src'),
        path.resolve(__dirname, '../../design-system/src'),
      ],
    },
  },
});
