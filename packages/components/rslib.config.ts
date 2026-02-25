import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      bundle: false,
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
      dts: {
        bundle: false,
        distPath: './dist/types',
      },
    },
    {
      format: 'cjs',
      bundle: false,
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
      dts: false,
    },
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
  output: {
    target: 'web',
    minify: true,
    sourceMap: false,
    cleanDistPath: true,
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'react/jsx-runtime': 'react/jsx-runtime',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime',
      '@floating-ui/dom': '@floating-ui/dom',
    },
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'automatic',
      },
    }),
  ],
});
