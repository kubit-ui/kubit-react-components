import eslintFlatConfig from 'eslint-config-kubit';
import path from 'path';
import { fileURLToPath } from 'url';

import { baseConfig } from '../../eslint.config.base.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default eslintFlatConfig({
  ...baseConfig,
  ignores: ['src/provider/**/*', 'src/**/css/cssVars.js'],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: baseConfig.baseRules,
    },
  ],
  tsConfigPath: path.resolve(__dirname, './tsconfig.eslint.json'),
});
