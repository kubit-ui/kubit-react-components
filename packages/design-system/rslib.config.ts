import { defineConfig } from '@rslib/core';
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';

const EMPTY_LENGTH = 0;

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: {
        abortOnError: false,
        bundle: false,
        distPath: './dist/types',
      },
      format: 'esm',
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
    },
    {
      bundle: false,
      dts: false,
      format: 'cjs',
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
  ],
  output: {
    cleanDistPath: true,
    externals: {
      bernova: 'bernova',
    },
    minify: {
      css: false,
      js: true,
      jsOptions: {
        minimizerOptions: {
          compress: {
            dead_code: true,
            defaults: false,
            directives: false,
            drop_debugger: true,
            passes: 2,
            pure_funcs: ['console.log', 'console.debug'],
            toplevel: true,
            unused: true,
          },
          format: {
            comments: false,
            preserve_annotations: true,
          },
          mangle: true,
          minify: true,
        },
      },
    },
    sourceMap: false,
    target: 'web',
  },
  plugins: [
    {
      name: 'copy-bernova-files',
      setup(api) {
        const bernovaFiles = new Map<string, string>();

        api.onBeforeBuild(() => {
          const filesToPreserve = [
            'dist/esm/provider/provider.js',
            'dist/cjs/provider/provider.js',
            'dist/esm/provider/stats/stats.js',
            'dist/cjs/provider/stats/stats.js',
            'dist/esm/provider/provider.d.ts',
            'dist/cjs/provider/provider.d.ts',
            'dist/esm/provider/stats/stats.d.ts',
            'dist/cjs/provider/stats/stats.d.ts',
          ];

          filesToPreserve.forEach((file) => {
            const fullPath = path.resolve(process.cwd(), file);
            if (fs.existsSync(fullPath)) {
              bernovaFiles.set(file, fs.readFileSync(fullPath, 'utf-8'));
            }
          });
        });

        api.onAfterBuild(() => {
          bernovaFiles.forEach((content, file) => {
            const fullPath = path.resolve(process.cwd(), file);
            const dir = path.dirname(fullPath);

            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(fullPath, content, 'utf-8');
          });

          const esmIndexPath = path.resolve(
            process.cwd(),
            'dist/esm/provider/index.js',
          );
          const cjsIndexPath = path.resolve(
            process.cwd(),
            'dist/cjs/provider/index.js',
          );
          const typesIndexPath = path.resolve(
            process.cwd(),
            'dist/types/provider/index.d.ts',
          );

          fs.writeFileSync(
            esmIndexPath,
            'export * from "./provider.js";\n',
            'utf-8',
          );

          fs.writeFileSync(
            cjsIndexPath,
            '"use strict";Object.defineProperty(exports,"__esModule",{value:true});var provider=require("./provider.js");Object.keys(provider).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function(){return provider[key];}});});\n',
            'utf-8',
          );

          fs.writeFileSync(
            typesIndexPath,
            'export * from "./provider";\n',
            'utf-8',
          );

          const esmProviderDts = path.resolve(
            process.cwd(),
            'dist/esm/provider/provider.d.ts',
          );
          const typesProviderDts = path.resolve(
            process.cwd(),
            'dist/types/provider/provider.d.ts',
          );

          if (fs.existsSync(esmProviderDts)) {
            fs.copyFileSync(esmProviderDts, typesProviderDts);
          }

          const esmStatsDts = path.resolve(
            process.cwd(),
            'dist/esm/provider/stats/stats.d.ts',
          );
          const typesStatsDts = path.resolve(
            process.cwd(),
            'dist/types/provider/stats/stats.d.ts',
          );
          const typesStatsDir = path.dirname(typesStatsDts);

          if (!fs.existsSync(typesStatsDir)) {
            fs.mkdirSync(typesStatsDir, { recursive: true });
          }

          if (fs.existsSync(esmStatsDts)) {
            fs.copyFileSync(esmStatsDts, typesStatsDts);
          }

          const INDEX_FILES_COUNT = 5;
          const filesCount = bernovaFiles.size + INDEX_FILES_COUNT;
          console.log(
            `[copy-bernova] ✓ Restored ${filesCount} Bernova generated files`,
          );
        });
      },
    },
    {
      name: 'remove-unnecessary-folders',
      setup(api) {
        api.onAfterBuild(() => {
          const dirsToRemove = [
            path.resolve(process.cwd(), 'dist/esm/assets'),
            path.resolve(process.cwd(), 'dist/cjs/assets'),
            path.resolve(process.cwd(), 'dist/esm/scripts'),
            path.resolve(process.cwd(), 'dist/cjs/scripts'),
            path.resolve(process.cwd(), 'dist/esm/node_modules'),
            path.resolve(process.cwd(), 'dist/cjs/node_modules'),
            path.resolve(process.cwd(), 'dist/types/node_modules'),
          ];

          dirsToRemove.forEach((dir) => {
            if (fs.existsSync(dir)) {
              fs.rmSync(dir, { force: true, recursive: true });
              console.log(
                `[remove-unnecessary] ✓ Removed ${path.relative(process.cwd(), dir)}`,
              );
            }
          });

          const removePattern = path.resolve(
            process.cwd(),
            'dist/**/.DS_Store',
          );
          const dsStoreFiles = glob.sync(removePattern);
          dsStoreFiles.forEach((file) => {
            if (fs.existsSync(file)) {
              fs.rmSync(file, { force: true });
            }
          });

          if (dsStoreFiles.length > EMPTY_LENGTH) {
            console.log(
              `[remove-unnecessary] ✓ Removed ${dsStoreFiles.length} .DS_Store files`,
            );
          }

          const cssFilesToRemove = [
            path.resolve(process.cwd(), 'dist/esm/design-system.css'),
            path.resolve(process.cwd(), 'dist/cjs/design-system.css'),
            path.resolve(process.cwd(), 'dist/esm/style.css'),
            path.resolve(process.cwd(), 'dist/cjs/style.css'),
          ];

          cssFilesToRemove.forEach((file) => {
            if (fs.existsSync(file)) {
              fs.rmSync(file, { force: true });
              console.log(
                `[remove-unnecessary] ✓ Removed auto-generated CSS: ${path.relative(process.cwd(), file)}`,
              );
            }
          });
        });
      },
    },
  ],
  source: {
    entry: {
      index: [
        './src/**/*.{ts,tsx}',
        '!./src/**/*.test.*',
        '!./src/**/__tests__',
        '!./src/**/__mocks__',
        '!./src/**/__fixtures__',
        '!./src/provider/Provider.js',
        '!./src/provider/Provider.d.ts',
        '!./src/provider/stats/**',
      ],
    },
  },
});
