export const baseConfig = {
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
      '@/lib': './src/lib/*',
      '@/styles': './src/styles/*',
    },
  },
  baseRules: {
    '@/no-restricted-syntax': [
      'error',
      {
        message: "Enums are not allowed. Use 'as const' objects instead.",
        selector: 'TSEnumDeclaration',
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'compat/compat': 'off',
    complexity: 'off',
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
    'import/order': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            importNames: ['default'],
            message:
              'Import only the necessary functions from React, such as useState or forwardRef.',
            name: 'react',
          },
        ],
      },
    ],
    'no-undef': 'off',
    'prettier/prettier': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'ignore', props: 'never' },
    ],
    'react/no-multi-comp': 'off',
    'sort-imports': 'off',
    'unused-imports/no-unused-imports': 'off',
  },
};
