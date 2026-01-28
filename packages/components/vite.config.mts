import react from '@vitejs/plugin-react';
import fs from 'fs';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// Constants for array indexing and string slicing
const EMPTY_LENGTH = 0;
const SECOND_INDEX = 1;
const THIRD_INDEX = 2;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Plugin to generate index.js files for each component folder
 * This enables subpath imports like '@kubit/web-ui-components/components/button'
 */
const generateComponentIndexPlugin = () => {
  const generateIndexFile = (
    sourceContent: string,
    format: 'cjs' | 'esm',
  ): string => {
    const lines: string[] = [];
    const exportWildcardPattern = /export\s+\*\s+from\s+['"]([^'"]+)['"]/g;
    const namedExportPattern = /export\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;

    // Process wildcard exports
    let match = exportWildcardPattern.exec(sourceContent);
    while (match !== null) {
      const importPath = match[SECOND_INDEX];
      const fileName = path.basename(importPath);
      const targetFile = `./${fileName}.js`;

      if (format === 'esm') {
        lines.push(`export * from '${targetFile}';`);
      } else {
        const reexport = `module.exports = { ...module.exports, ...require('${targetFile}') };`;
        lines.push(reexport);
      }
      match = exportWildcardPattern.exec(sourceContent);
    }

    // Process named exports
    let namedMatch = namedExportPattern.exec(sourceContent);
    while (namedMatch !== null) {
      const names = namedMatch[SECOND_INDEX];
      const importPath = namedMatch[THIRD_INDEX];
      const fileName = path.basename(importPath);
      const targetFile = `./${fileName}.js`;

      if (format === 'esm') {
        lines.push(`export { ${names} } from '${targetFile}';`);
      } else {
        const namedList = names.split(',').map((n) => n.trim());
        lines.push(
          `const { ${namedList.join(', ')} } = require('${targetFile}');`,
        );
        lines.push(
          `module.exports = { ...module.exports, ${namedList.join(', ')} };`,
        );
      }
      namedMatch = namedExportPattern.exec(sourceContent);
    }

    return lines.join('\n') + '\n';
  };

  return {
    closeBundle() {
      const srcComponents = path.resolve(__dirname, 'src/components');
      const outputDirs = [
        {
          dir: path.resolve(__dirname, 'dist/esm/components'),
          format: 'esm' as const,
        },
        {
          dir: path.resolve(__dirname, 'dist/cjs/components'),
          format: 'cjs' as const,
        },
      ];

      // Get all component directories
      const components = fs
        .readdirSync(srcComponents, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      components.forEach((component) => {
        const srcIndexPath = path.join(srcComponents, component, 'index.ts');

        // Only process if source index.ts exists
        if (!fs.existsSync(srcIndexPath)) {
          return;
        }

        outputDirs.forEach(({ dir, format }) => {
          const componentDir = path.join(dir, component);
          if (!fs.existsSync(componentDir)) {
            return;
          }

          // Read source index.ts to get exports
          const sourceContent = fs.readFileSync(srcIndexPath, 'utf-8');

          // Generate index.js with re-exports
          const content = generateIndexFile(sourceContent, format);

          if (content.trim().length > EMPTY_LENGTH) {
            const indexPath = path.join(componentDir, 'index.js');
            fs.writeFileSync(indexPath, content, 'utf-8');
          }
        });
      });

      // eslint-disable-next-line no-console
      console.log(
        '[generate-component-index] ✓ Generated index.js files for components',
      );
    },
    name: 'generate-component-index',
  };
};

/**
 * Plugin to remove storybook-related folders from dist
 */
const removeStorybookPlugin = () => {
  return {
    closeBundle() {
      const storybookDirs = [
        path.resolve(__dirname, 'dist/esm/lib/storybook'),
        path.resolve(__dirname, 'dist/cjs/lib/storybook'),
        path.resolve(__dirname, 'dist/types/lib/storybook'),
      ];

      storybookDirs.forEach((dir) => {
        if (fs.existsSync(dir)) {
          fs.rmSync(dir, { force: true, recursive: true });
          // eslint-disable-next-line no-console
          console.log(
            `[remove-storybook] ✓ Removed ${path.relative(__dirname, dir)}`,
          );
        }
      });
    },
    name: 'remove-storybook',
  };
};

/**
 * Plugin to remove unnecessary folders from dist
 * Removes .storybook, assets, scripts, node_modules, and .DS_Store files
 */
const removeUnnecessaryFoldersPlugin = () => {
  return {
    closeBundle() {
      const dirsToRemove = [
        path.resolve(__dirname, 'dist/esm/.storybook'),
        path.resolve(__dirname, 'dist/cjs/.storybook'),
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
        path.resolve(__dirname, 'dist/esm/react-components.css'),
        path.resolve(__dirname, 'dist/cjs/react-components.css'),
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
 * Vite configuration for building the library
 * Optimized for production builds with Vite 8 Beta (Rolldown-powered)
 * Rolldown provides 10-30x faster builds than Rollup with native Rust performance
 */
export default defineConfig(({ mode }) => ({
  build: {
    // Improved chunk size warnings with better defaults
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'KubitUI',
    },
    // Rolldown uses Oxc minifier (faster than terser)
    minify: true,
    // Enhanced module preloading for better performance
    modulePreload: {
      polyfill: false, // Disable polyfill for smaller bundles
    },
    outDir: 'dist',
    // Report compressed size to see gzipped bundle sizes
    reportCompressedSize: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@floating-ui/dom',
      ],
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
      // Enhanced treeshaking with better defaults (Rolldown + Oxc semantic analysis)
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    // Disable sourcemaps to prevent Vite from resolving back to source files
    sourcemap: false,
  },
  // Enhanced caching for faster rebuilds (Rolldown module-level persistent cache)
  cacheDir: 'node_modules/.vite',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  // Optimized dependency pre-bundling with Rolldown
  optimizeDeps: {
    include: [],
    // Disable discovery for library builds
    noDiscovery: true,
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
    dts({
      exclude: [
        'src/**/*.test.*',
        'src/**/__tests__',
        'src/**/__mocks__',
        'src/**/__fixtures__',
        'src/**/stories',
        'src/**/*.stories.*',
        'src/**/storybook/**',
        'src/lib/storybook/**',
      ],
      insertTypesEntry: true,
      outDir: 'dist/types',
      rollupTypes: true,
      tsconfigPath: './tsconfig.build.json',
    }),
    generateComponentIndexPlugin(),
    removeStorybookPlugin(),
    removeUnnecessaryFoldersPlugin(),
  ],
  // Improved resolve options with native tsconfig paths support (Vite 8)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
    },
    // Better defaults for library builds
    dedupe: ['react', 'react-dom'],
    // Enable native tsconfig paths support (Vite 8 feature)
    tsconfigPaths: true,
  },
}));
