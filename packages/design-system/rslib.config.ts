import { defineConfig } from '@rslib/core';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  lib: [
    {
      autoExtension: false,
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
        filename: {
          js: '[name].js',
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
    cleanDistPath: false,
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
      name: 'copy-provider-types',
      setup(api) {
        api.onAfterBuild(() => {
          const src = path.resolve(
            process.cwd(),
            'dist/esm/provider/provider.d.ts',
          );
          const dest = path.resolve(
            process.cwd(),
            'dist/types/provider/provider.d.ts',
          );
          const indexPath = path.resolve(
            process.cwd(),
            'dist/types/provider/index.d.ts',
          );

          if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
            fs.writeFileSync(indexPath, 'export * from "./provider";\n');
          }
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
        '!./src/provider/**',
        '!./src/types/**',
        '!./src/designSystem/common/**',
        '!./src/designSystem/kubit/foundations/**',
        '!./src/designSystem/kubit/globalStyles/**',
        '!./src/designSystem/kubit/index.js',
        '!./src/designSystem/kubit/components/**/styles.*',
      ],
    },
  },
});
