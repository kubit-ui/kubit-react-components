// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import eslintFlatConfig from 'eslint-config-kubit';
import storybook from 'eslint-plugin-storybook';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default eslintFlatConfig({
  browserList: [
    '> 0.5%',
    'last 2 versions',
    'Firefox ESR',
    'not dead',
    'iOS >= 10',
    'Safari >= 10',
    'Edge >= 15',
  ],
  checkBrowserCompatibility: true,
  globals: {
    afterAll: 'readonly',
    afterEach: 'readonly',
    alert: 'readonly',
    beforeAll: 'readonly',
    beforeEach: 'readonly',
    clearTimeout: 'readonly',
    console: 'readonly',
    customElements: 'readonly',
    describe: 'readonly',
    document: 'readonly',
    expect: 'readonly',
    fetch: 'readonly',
    global: 'readonly',
    it: 'readonly',
    localStorage: 'readonly',
    module: 'readonly',
    navigator: 'readonly',
    self: 'readonly',
    sessionStorage: 'readonly',
    setTimeout: 'readonly',
    test: 'readonly',
    vi: 'readonly',
    window: 'readonly',
  },
  noIndexImportConfig: {
    aliases: {
      '@/components': './src/components/*',
      '@/styles': './src/styles/*',
      '@/lib': './src/lib/*',
    },
  },
  ignores: [
    'src/lib/provider/cssProvider/**/*',
    'src/lib/types/cssGenerator/**/*',
    'src/lib/designSystem/kubit/css/cssVars.js',
    'src/lib/tests/__mocks__/assetMock.js',
  ],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        '@/no-restricted-syntax': [
          'error',
          {
            message: "Enums are not allowed. Use 'as const' objects instead.",
            selector: 'TSEnumDeclaration',
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.test.{js,ts,jsx,tsx}',
              '**/*.figma.{js,ts,jsx,tsx}',
              '**/*.stories.{js,ts,jsx,tsx}',
              '**/tests/**',
            ],
          },
        ],
        'no-undef': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unused-vars': 'off', // fix
        'compat/compat': 'off', // fix
        complexity: 'off',
        'react/no-multi-comp': 'off',
        'unused-imports/no-unused-imports': 'off', // fix
        '@typescript-eslint/consistent-type-imports': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-boolean-value': 'off',
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'never', children: 'ignore' },
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                importNames: ['default'],
                message:
                  'Import only the necessary functions from React, such as useState or forwardRef.',
              },
            ],
          },
        ],
        // Disable prettier in ESLint - formatting is handled by Prettier directly
        'prettier/prettier': 'off',
        // Disable import sorting in ESLint - handled by Prettier plugin
        'sort-imports': 'off',
        'import/order': 'off',
      },
    },
  ],
  tsConfigPath: path.resolve(__dirname, './tsconfig.eslint.json'),
});
