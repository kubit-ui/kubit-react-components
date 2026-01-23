import fs from 'fs';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// Vite 8 beta: tsconfigPaths support is coming but not yet in stable API
// For now we keep using the plugin until the native support is finalized
import tsconfigPaths from 'vite-tsconfig-paths';

// Constants for array indexing
const EMPTY_LENGTH = 0;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Plugin to remove unnecessary folders from dist
 * Removes assets, scripts, node_modules, and .DS_Store files
 */
const removeUnnecessaryFoldersPlugin = () => {
  return {
    closeBundle() {
      const dirsToRemove = [
        path.resolve(__dirname, 'dist/esm/assets'),
        path.resolve(__dirname, 'dist/cjs/assets'),
        path.resolve(__dirname, 'dist/esm/scripts'),
        path.resolve(__dirname, 'dist/cjs/scripts'),
        path.resolve(__dirname, 'dist/esm/node_modules'),
        path.resolve(__dirname, 'dist/cjs/node_modules'),
        path.resolve(__dirname, 'dist/types/node_modules'),
      ];

      dirsToRemove.forEach((dir) => {
        if (fs.existsSync(dir)) {
          fs.rmSync(dir, { force: true, recursive: true });
          // eslint-disable-next-line no-console
          console.log(
            `[remove-unnecessary] ✓ Removed ${path.relative(__dirname, dir)}`,
          );
        }
      });

      // Remove .DS_Store files
      const removePattern = path.resolve(__dirname, 'dist/**/.DS_Store');
      const dsStoreFiles = glob.sync(removePattern);
      dsStoreFiles.forEach((file) => {
        if (fs.existsSync(file)) {
          fs.rmSync(file, { force: true });
        }
      });

      if (dsStoreFiles.length > EMPTY_LENGTH) {
        // eslint-disable-next-line no-console
        console.log(
          `[remove-unnecessary] ✓ Removed ${dsStoreFiles.length} .DS_Store files`,
        );
      }

      // Remove auto-generated CSS bundles
      const cssFilesToRemove = [
        path.resolve(__dirname, 'dist/esm/design-system.css'),
        path.resolve(__dirname, 'dist/cjs/design-system.css'),
        path.resolve(__dirname, 'dist/esm/style.css'),
        path.resolve(__dirname, 'dist/cjs/style.css'),
      ];

      cssFilesToRemove.forEach((file) => {
        if (fs.existsSync(file)) {
          fs.rmSync(file, { force: true });
          // eslint-disable-next-line no-console
          console.log(
            `[remove-unnecessary] ✓ Removed auto-generated CSS: ${path.relative(__dirname, file)}`,
          );
        }
      });
    },
    name: 'remove-unnecessary-folders',
  };
};

/**
 * Vite configuration for building the design system library
 * Optimized for production builds with Vite 7 stable
 */
export default defineConfig(({ mode }) => ({
  // Allow .js files from Bernova to be processed
  assetsInclude: [],
  build: {
    // Improved chunk size warnings with better defaults
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: false,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        provider: path.resolve(__dirname, 'src/provider/index.ts'),
      },
      name: 'KubitDesignSystem',
    },
    minify: 'terser',
    // Enhanced module preloading for better performance
    modulePreload: {
      polyfill: false, // Disable polyfill for smaller bundles
    },
    outDir: 'dist',
    // Report compressed size to see gzipped bundle sizes
    reportCompressedSize: true,
    rollupOptions: {
      external: ['bernova'],
      output: [
        // ESM with individual modules
        {
          dir: 'dist/esm',
          entryFileNames: '[name].js',
          exports: 'named',
          format: 'es',
          // Improved hoisting for smaller bundles
          hoistTransitiveImports: false,
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        // CJS with individual modules
        {
          dir: 'dist/cjs',
          entryFileNames: '[name].js',
          exports: 'named',
          format: 'cjs',
          // Improved hoisting for smaller bundles
          hoistTransitiveImports: false,
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
      // Enhanced treeshaking with better defaults
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    sourcemap: mode !== 'production',
    terserOptions: {
      compress: {
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        // Enhanced compression options
        passes: 2, // Multiple passes for better compression
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        unsafe_arrows: true, // Convert functions to arrow functions
        unsafe_methods: true, // Optimize method calls
      },
      format: {
        comments: false,
      },
      mangle: {
        properties: false, // Don't mangle properties to maintain compatibility
      },
      // Module optimization
      module: true,
    },
  },
  // Enhanced caching for faster rebuilds
  cacheDir: 'node_modules/.vite',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  // Optimized dependency pre-bundling
  optimizeDeps: {
    include: [],
    // Disable discovery for library builds
    noDiscovery: true,
  },
  plugins: [
    // tsconfigPaths plugin for path resolution
    tsconfigPaths({ projects: ['./tsconfig.build.json'] }),
    // Generate TypeScript declaration files
    dts({
      compilerOptions: {
        declaration: true,
        declarationMap: true,
        emitDeclarationOnly: true,
        skipLibCheck: true,
      },
      exclude: [
        'src/**/*.test.*',
        'src/**/__mocks__',
        'src/**/__fixtures__',
        'src/**/__tests__',
        'src/**/*.js',
        'src/**/*.d.ts',
        'src/provider/Provider.js',
        'src/provider/Provider.d.ts',
        'src/provider/stats/**',
        '../components/**/*',
        '**/*.test.*',
        '**/__tests__/**',
        'node_modules/**',
      ],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      insertTypesEntry: true,
      outDir: 'dist/types',
      rollupTypes: false,
      tsconfigPath: './tsconfig.build.json',
    }),
    removeUnnecessaryFoldersPlugin(),
  ],
  // Improved resolve options
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
}));
