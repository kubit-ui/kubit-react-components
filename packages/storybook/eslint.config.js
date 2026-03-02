/* eslint-disable import/no-extraneous-dependencies */
import eslintFlatConfig from 'eslint-config-kubit';
import path from 'path';
import { fileURLToPath } from 'url';

import { baseConfig } from '../../eslint.config.base.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default eslintFlatConfig({
  ...baseConfig,
  ignores: [
    'src/lib/provider/cssProvider/**/*',
    'src/lib/types/cssGenerator/**/*',
    'src/lib/designSystem/kubit/css/cssVars.js',
    'src/lib/tests/__mocks__/assetMock.js',
    'dist/**/*',
    '.storybook-cache/**/*',
    '**/*.json',
  ],
  overrides: [
    {
      files: ['.storybook/**/*.{js,jsx,ts,tsx,mts}'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'consistent-return': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-duplicate-imports': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/no-array-index-key': 'off',
      },
    },
    {
      files: ['*.{js,mjs,ts,mts}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: baseConfig.baseRules,
    },
  ],
  tsConfigPath: path.resolve(__dirname, './tsconfig.eslint.json'),
});
