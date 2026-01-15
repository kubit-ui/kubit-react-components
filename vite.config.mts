import react from '@vitejs/plugin-react';
import cssnano from 'cssnano';
import fs from 'fs';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'path';
import postcss from 'postcss';
import { minify } from 'terser';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// Vite 8 beta: tsconfigPaths support is coming but not yet in stable API
// For now we keep using the plugin until the native support is finalized
import tsconfigPaths from 'vite-tsconfig-paths';

// Constants for array indexing and string slicing
const EMPTY_LENGTH = 0;
const SECOND_INDEX = 1;
const THIRD_INDEX = 2;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Plugin to copy CSS assets to dist/styles directory
 */
const copyCSSPlugin = () => {
  return {
    closeBundle() {
      const stylesPattern = path.resolve(
        __dirname,
        'src/lib/designSystem/**/*.{css,scss}',
      );
      const stylesOut = path.resolve(__dirname, 'dist/styles');

      const files = glob.sync(stylesPattern);

      if (files.length > EMPTY_LENGTH) {
        fs.mkdirSync(stylesOut, { recursive: true });
        for (const file of files) {
          const relPath = path.relative(
            path.resolve(__dirname, 'src/lib/designSystem'),
            file,
          );
          const destPath = path.join(stylesOut, relPath);
          fs.mkdirSync(path.dirname(destPath), { recursive: true });
          fs.copyFileSync(file, destPath);
        }
        // eslint-disable-next-line no-console
        console.log(
          '[copy-css-assets] ✓ Copied CSS/SCSS files to ./dist/styles/',
        );
      } else {
        // eslint-disable-next-line no-console
        console.warn('[copy-css-assets] ⚠ No CSS/SCSS files found');
      }
    },
    name: 'copy-css-assets',
  };
};

/**
 * Plugin to copy cssProvider JavaScript files and minify them
 */
const copyCSSProviderPlugin = () => {
  return {
    async closeBundle() {
      const cssProviderDir = path.resolve(
        __dirname,
        'src/lib/provider/cssProvider',
      );

      const filesToCopy = [
        { dest: 'provider.js', src: 'provider.js' },
        { dest: 'stats/stats.js', src: 'stats/stats.js' },
      ];

      const outputDirs = [
        path.resolve(__dirname, 'dist/esm/lib/provider/cssProvider'),
        path.resolve(__dirname, 'dist/cjs/lib/provider/cssProvider'),
      ];

      for (const outputDir of outputDirs) {
        fs.mkdirSync(outputDir, { recursive: true });
        fs.mkdirSync(path.join(outputDir, 'stats'), { recursive: true });

        for (const { dest, src } of filesToCopy) {
          const srcPath = path.join(cssProviderDir, src);
          const destPath = path.join(outputDir, dest);

          if (fs.existsSync(srcPath)) {
            // Read the source file
            const code = fs.readFileSync(srcPath, 'utf-8');

            // Minify the JavaScript code
            const minified = await minify(code, {
              compress: {
                dead_code: true,
                drop_console: false, // Keep console for this file
                drop_debugger: true,
              },
              format: {
                comments: false,
              },
              mangle: {
                properties: false,
              },
            });

            // Write the minified code
            fs.writeFileSync(destPath, minified.code || code);
          } else {
            // eslint-disable-next-line no-console
            console.warn(
              `[copy-css-provider-assets] ⚠ File not found: ${srcPath}`,
            );
          }
        }
      }

      // eslint-disable-next-line no-console
      console.log(
        '[copy-css-provider-assets] ✓ Copied and minified cssProvider JS files',
      );
    },
    name: 'copy-css-provider-assets',
  };
};

/**
 * Plugin to copy static assets (svg, fonts, images, css) to ESM and CJS directories
 * CSS files are minified during the copy process
 */
const copyStaticAssetsPlugin = () => {
  // Initialize postcss with cssnano for CSS minification
  const cssProcessor = postcss([
    cssnano({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          minifyFontValues: true,
          minifyGradients: true,
          normalizeWhitespace: true,
          reduceTransforms: true,
        },
      ],
    }),
  ]);

  /**
   * Minify CSS content
   */
  const minifyCSS = async (
    srcPath: string,
    destPath: string,
    relativePath: string,
  ): Promise<void> => {
    try {
      const cssContent = fs.readFileSync(srcPath, 'utf-8');
      const result = await cssProcessor.process(cssContent, {
        from: srcPath,
        to: destPath,
      });
      fs.writeFileSync(destPath, result.css);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(
        `[copy-static-assets] ⚠ Error minifying ${relativePath}:`,
        error,
      );
      // Fallback to copying without minification
      fs.copyFileSync(srcPath, destPath);
    }
  };

  /**
   * Copy file to destination, minifying if CSS
   */
  const copyFile = async (
    srcPath: string,
    relativePath: string,
    ext: string,
    outputDirs: string[],
  ): Promise<void> => {
    for (const outDir of outputDirs) {
      const destPath = path.join(outDir, relativePath);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });

      if (ext === 'css') {
        await minifyCSS(srcPath, destPath, relativePath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  return {
    async closeBundle() {
      const extensions = ['svg', 'ttf', 'eot', 'css', 'png', 'jpg', 'otf'];
      const srcDir = path.resolve(__dirname, 'src');
      const outputDirs = [
        path.resolve(__dirname, 'dist/esm'),
        path.resolve(__dirname, 'dist/cjs'),
      ];

      const copyRecursive = async (src: string): Promise<void> => {
        for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
          const srcPath = path.join(src, entry.name);
          const relativePath = path.relative(srcDir, srcPath);

          if (entry.isDirectory()) {
            // Skip test directories and unnecessary folders
            if (
              [
                '__tests__',
                '__mocks__',
                '__fixtures__',
                'stories',
                '__stories__',
                '.storybook',
                'assets',
                'scripts',
              ].includes(entry.name)
            ) {
              continue;
            }
            await copyRecursive(srcPath);
          } else {
            const ext = path.extname(entry.name).slice(SECOND_INDEX);
            if (extensions.includes(ext)) {
              await copyFile(srcPath, relativePath, ext, outputDirs);
            }
          }
        }
      };

      await copyRecursive(srcDir);
      // eslint-disable-next-line no-console
      console.log(
        '[copy-static-assets] ✓ Copied and minified static assets to ESM and CJS',
      );
    },
    name: 'copy-static-assets',
  };
};

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
 * Optimized for Vite 8 with improved build performance
 */
export default defineConfig(({ mode }) => ({
  build: {
    // Vite 8: Improved chunk size warnings with better defaults
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'KubitUI',
    },
    minify: 'terser',
    // Vite 8: Enhanced module preloading for better performance
    modulePreload: {
      polyfill: false, // Disable polyfill for smaller bundles
    },
    outDir: 'dist',
    // Vite 8: reportCompressedSize default changed to false for faster builds
    reportCompressedSize: false,
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
          // Vite 8: Improved hoisting for smaller bundles
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
          // Vite 8: Improved hoisting for smaller bundles
          hoistTransitiveImports: false,
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
      // Vite 8: Enhanced treeshaking with better defaults
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
        // Vite 8: Enhanced compression options
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
      // Vite 8: Module optimization
      module: true,
    },
  },
  // Vite 8: Enhanced caching for faster rebuilds
  cacheDir: 'node_modules/.vite',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  // Vite 8: Optimized dependency pre-bundling
  optimizeDeps: {
    include: [],
    // Disable discovery for library builds
    noDiscovery: true,
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
    // For now we keep the plugin until the API is stable
    tsconfigPaths({ projects: ['./tsconfig.build.json'] }),
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
    copyCSSPlugin(),
    copyCSSProviderPlugin(),
    copyStaticAssetsPlugin(),
    generateComponentIndexPlugin(),
    removeStorybookPlugin(),
    removeUnnecessaryFoldersPlugin(),
  ],
  // Vite 8: Improved resolve options
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // Better defaults for library builds
    dedupe: ['react', 'react-dom'],
    // Vite 8 (future): Native tsconfig paths support
    // tsconfigPaths: true, // Coming soon in stable release
  },
}));
