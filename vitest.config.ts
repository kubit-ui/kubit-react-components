import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environmentMatchGlobs: [
      ['src/components/**/*', 'jsdom'],
    ],
    silent: false,
    coverage: {
      all: true,
      exclude: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        'bundle/',
        'reports/',
        '__reports__/',
        '.storybook/',
        'src/**/types/**',
        'src/**/stories/**',
        'src/**/storybook/**',
        'src/**/designSystem/**',
        './vitest.setup.ts',
        'src/**/*.d.ts',
        'src/**/index.ts',
        'src/**/index.tsx',
        'src/**/*.styled.ts',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        '.prettierrc.js',
        'stylelint.config.js',
        'vite.config.ts',
        'vitest.config.ts',
        'app/__reports__/test-coverage/lcov-report',
        'prettify.js',
      ],
      reporter: ['json', 'lcov'],
      reportsDirectory: '__reports__/test-coverage',
      thresholds: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
      },
    },
    css: false,
    environment: 'jsdom',
    globals: true,
    include: [
      './src/**/*test.ts',
      './src/**/*test.tsx',
    ],
    outputFile: {
      html: '__reports__/report.html',
    },
    reporters: ['default', 'html'],
    setupFiles: './vitest.setup.ts',
  },
});
