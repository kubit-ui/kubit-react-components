import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import react from 'eslint-plugin-react';

import jest from 'eslint-plugin-jest';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['dist/**/*', 'node_modules/**/*', 'src/**/*.scss', '**/vite.config.ts'],
  },
  ...fixupConfigRules(
    compat.extends('./node_modules/gts/', 'eslint:recommended', 'plugin:import/recommended')
  ),
  {
    plugins: {
      'unused-imports': unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
      },

      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      'react': {
        version: 'detect',
      },

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          project: 'app/tsconfig.json',
        },
      },

      'import/ignore': ['react'],
    },

    rules: {
      'prettier/prettier': ['error', {}],
      'curly': [2, 'multi-line'],
      'comma-dangle': 0,
      'jsx-quotes': 1,
      'import/no-named-as-default': 0,
      'no-cond-assign': 2,
      'no-console': 2,
      'no-constant-condition': 0,
      'no-debugger': 2,
      'no-useless-escape': 0,
      'no-case-declarations': 0,
      'no-extra-boolean-cast': 0,
      'no-extra-semi': 2,
      'no-fallthrough': 0,
      'no-func-assign': 2,
      'no-inner-declarations': 2,
      'no-undef': 2,
      'no-unreachable': 2,

      'no-unused-vars': [
        2,
        {
          args: 'after-used',
        },
      ],

      'no-use-before-define': 1,
    },
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:jest/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended'
    )
  ).map(config => ({
    ...config,
    files: ['src/**/*.ts', 'src/**/*.tsx'],
  })),
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],

    plugins: {
      'jest': fixupPluginRules(jest),
      'react': fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'unused-imports/no-unused-imports': 'error',
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',

      'react/jsx-sort-props': [
        'error',
        {
          reservedFirst: true,
          shorthandFirst: true,
          callbacksLast: true,
          ignoreCase: false,
          noSortAlphabetically: false,
        },
      ],

      '@typescript-eslint/no-unused-vars': ['off'],

      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        {
          allowArgumentsExplicitlyTypedAsAny: true,
        },
      ],

      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
        },
      ],

      '@typescript-eslint/no-empty-function': 'error',
      'node/no-unpublished-import': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      'import/no-named-as-default': 'off',
      'curly': ['error', 'multi-line', 'consistent'],
      'no-unused-vars': 'off',
      'jest/no-test-prefixes': 'off',
      'jest/no-focused-tests': 'off',

      'comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          objects: 'only-multiline',
          imports: 'only-multiline',
          exports: 'only-multiline',
          functions: 'never',
        },
      ],

      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'eqeqeq': ['error', 'always'],

      'no-constant-binary-expression': 'off',
      'n/no-unsupported-features/es-builtins': 'warn',

      'complexity': [
        'error',
        {
          max: 100,
        },
      ],

      'block-scoped-var': 'error',

      'no-else-return': [
        'error',
        {
          allowElseIf: true,
        },
      ],

      'no-eval': 'error',
      'no-lone-blocks': 'error',
      'no-multi-spaces': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'react-hooks/exhaustive-deps': 'off',

      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-throw-literal': 'error',

      'newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 4,
        },
      ],

      'no-extra-boolean-cast': [
        'error',
        {
          enforceForLogicalOperands: true,
        },
      ],

      'no-fallthrough': 'error',
      'no-use-before-define': 'off',
      'no-case-declarations': 'off',

      'import/no-cycle': [
        2,
        {
          maxDepth: 4,
        },
      ],
    },
  },
];
