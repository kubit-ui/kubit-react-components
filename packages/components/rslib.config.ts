import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: {
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
      '@floating-ui/dom': '@floating-ui/dom',
      react: 'react',
      'react-dom': 'react-dom',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime',
      'react/jsx-runtime': 'react/jsx-runtime',
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
    pluginReact({
      swcReactOptions: {
        runtime: 'automatic',
      },
    }),
  ],
  source: {
    entry: {
      index: [
        './src/**/*.{ts,tsx}',
        '!./src/**/*.test.*',
        '!./src/**/*.stories.*',
        '!./src/**/__tests__',
        '!./src/**/__mocks__',
        '!./src/**/__fixtures__',
        '!./src/**/storybook',
        '!./src/lib/storybook/**',
      ],
    },
  },
});
