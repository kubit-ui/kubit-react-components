import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    clearMocks: true,
    coverage: {
      exclude: [
        'node_modules/',
        'dist/',
        'coverage/',
        'src/**/types/**',
        'src/**/__mocks__/**',
        'src/**/*.d.ts',
        'src/**/index.ts',
        'src/**/index.tsx',
        'src/**/*.styled.ts',
        'src/**/*.styles.ts',
        'src/**/constants/**',
        'vitest.setup.ts',
        'vitest.config.ts',
        'vite.config.mts',
      ],
      provider: 'v8',
      reporter: ['text', 'json', 'lcov', 'html'],
      reportsDirectory: '__reports__/test-coverage',
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    css: false,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
