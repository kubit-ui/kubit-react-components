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
  ],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: baseConfig.baseRules,
    },
  ],
  tsConfigPath: path.resolve(__dirname, './tsconfig.eslint.json'),
});
