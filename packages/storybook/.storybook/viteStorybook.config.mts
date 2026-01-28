import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

/**
 * Vite configuration for Storybook
 * Optimized for Vite 8 Beta (Rolldown-powered)
 * Rolldown provides 10-30x faster builds and improved HMR performance
 */
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  // eslint-disable-next-line no-console
  console.log(`[Vite 8 Rolldown Config] Mode: ${mode}, isDev: ${isDev}`);

  return {
    // Enhanced caching for faster rebuilds (Rolldown module-level persistent cache)
    cacheDir: '../node_modules/.vite-storybook',
    css: {
      devSourcemap: true,
    },
    // Optimized dependency pre-bundling for Storybook with Rolldown
    optimizeDeps: {
      entries: ['../stories/**/*.stories.tsx', '../overview/**/*.mdx'],
      // In development, exclude workspace packages to use source files directly
      exclude: isDev
        ? ['@kubit-ui-web/react-components', '@kubit-ui-web/design-system']
        : [],
      include: ['react', 'react-dom', 'react/jsx-runtime', '@floating-ui/dom'],
      // Disable discovery for better performance
      noDiscovery: false,
    },
    plugins: [
      react({
        // Enhanced React plugin options for Vite 8
        babel: {
          babelrc: false,
          configFile: false,
        },
        jsxImportSource: 'react',
        jsxRuntime: 'automatic',
      }),
    ],
    resolve: {
      alias: [
        // In development, configure internal components aliases FIRST (more specific)
        ...(isDev
          ? [
              {
                find: /^@\/components/,
                replacement: path.resolve(
                  __dirname,
                  '../../components/src/components',
                ),
              },
              {
                find: /^@\/lib/,
                replacement: path.resolve(
                  __dirname,
                  '../../components/src/lib',
                ),
              },
              {
                find: '@kubit-ui-web/design-system',
                replacement: path.resolve(__dirname, '../../design-system/src'),
              },
              {
                find: '@kubit-ui-web/react-components',
                replacement: path.resolve(__dirname, '../../components/src'),
              },
            ]
          : []),
        // Alias de Storybook (menos específicos, van después)
        {
          find: '@/stories',
          replacement: path.resolve(__dirname, '../stories'),
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, '../'),
        },
      ],
      // Better module resolution
      dedupe: ['react', 'react-dom'],
      // Extensions to resolve
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      // Enable native tsconfig paths support (Vite 8 feature)
      tsconfigPaths: true,
    },
    // Enhanced server configuration for development with Rolldown HMR
    server: {
      fs: {
        allow: [
          // Storybook package
          path.resolve(__dirname, '../'),
          // Components package SOURCE (not dist)
          path.resolve(__dirname, '../../components/src'),
          path.resolve(__dirname, '../../components'),
          // Design system package SOURCE (not dist)
          path.resolve(__dirname, '../../design-system/src'),
          path.resolve(__dirname, '../../design-system'),
          // Root node_modules
          path.resolve(__dirname, '../../../node_modules'),
          // Monorepo root
          path.resolve(__dirname, '../../..'),
        ],
        // Allow access to necessary workspaces
        strict: false,
      },
      // Optimize HMR (Rolldown provides faster HMR)
      hmr: {
        overlay: true,
      },
      // Optimized watch for monorepo
      watch: {
        // Ignore node_modules except workspace packages
        ignored: [
          '**/node_modules/**',
          '!**/node_modules/@kubit-ui-web/**',
          '**/dist/**',
          '**/.git/**',
        ],
        // Use polling if there are issues with file watchers
        // usePolling: false,
      },
    },
  };
});
