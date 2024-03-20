const { resolve } = require('path');
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = () => ({
  displayName: 'MBCli',
  preset: 'ts-jest',
  rootDir: resolve(),

  testEnvironment: 'jsdom',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/tests/setupTests.ts',
  ],

  // // The glob patterns Jest uses to detect test files
  // testMatch: ['**/*.(spec|test).[tj]s'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['node_modules', 'dist', '__reports__', 'jest-test-results.json'],

  // Stop running tests after `n` failures
  bail: 0,

  // A list of reporter names that Jest uses when writing coverage reports
  reporters: ['default', 'jest-junit'],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.types.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/constants/**',
    '!**/types/**',
    '!src/index*.{ts,jsx,tsx}',
    '!src/**/*.tests.js',
    '!**/stories/**',
    '!**/styleguide/**',
    '!**/designSystem/**',
    '!**/mixins/**',
    '!**/storybook/**',
    '!src/**/*.styled.{js,ts,tsx}',
    '!src/**/*.styles.{js,ts,tsx}',
    '!src/**/*.sample.{js,ts,tsx}',
    '!src/**/*.style.{js,ts,tsx}',
    '!src/**/index.{js,ts,tsx}',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: '__reports__/test-coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },

  transform: {
    ...tsjPreset.transform,
  },

  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', 'src', '.storybook'],

  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^fixtures/(.*)': '<rootDir>/src/__fixtures__/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/assetMock.js',
  },

  roots: ['<rootDir>/src'],
});
