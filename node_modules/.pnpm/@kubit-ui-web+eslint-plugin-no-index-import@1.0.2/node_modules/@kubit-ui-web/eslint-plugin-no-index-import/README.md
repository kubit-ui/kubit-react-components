# eslint-plugin-no-index-import

This ESLint plugin disallows imports from index files to enforce better module structure and avoid potential issues with circular dependencies.

## Installation

To install the plugin, you need to have ESLint already installed in your project. If you don't have ESLint installed, you can install it using npm or yarn:

```bash
npm install eslint --save-dev
# or
yarn add eslint --dev
```

Then, install the eslint-plugin-no-index-import plugin:

```bash
npm install @kubit-ui-web/eslint-plugin-no-index-import --save-dev
# or
yarn add @kubit-ui-web/eslint-plugin-no-index-import --dev
```

## Usage

To use the plugin, you need to add it to your ESLint configuration file (e.g., `.eslintrc.js`).

### Basic Configuration

Add `no-index-import` to the `plugins` array and configure the rule in the `rules` section:

```js
module.exports = {
  // Other ESLint configurations...
  plugins: ['@kubit-ui-web/no-index-import'],
  rules: {
    '@kubit-ui-web/no-index-import/no-index-import': 'error',
  },
};
```

### Advanced Configuration

You can also configure aliases and ignore specific imports:

```js
module.exports = {
  // Other ESLint configurations...
  plugins: ['@kubit-ui-web/no-index-import'],
  rules: {
    '@kubit-ui-web/no-index-import/no-index-import': [
      'error',
      {
        aliases: {
          '@components': './src/components',
          '@utils': './src/utils',
        },
        ignoreImports: ['@/components/loader', '@/types/customToken'],
      },
    ],
  },
};
```

### Example Configuration

Here is an example of a complete ESLint configuration file with the no-index-import plugin:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@kubit-ui-web/no-index-import/no-index-import',
  ],
  rules: {
    '@kubit-ui-web/no-index-import/no-index-import': [
      'error',
      {
        aliases: {
          '@components': './src/components',
          '@utils': './src/utils',
        },
        ignoreImports: ['@/components/loader', '@/types/customToken'],
      },
    ],
  },
};
```

## Rule Details

This rule disallows importing from index files or directories containing an index file. It helps to enforce better module structure and avoid potential issues with circular dependencies.

### Options

- `aliases`: An object where keys are alias names and values are the corresponding paths.
- `ignoreImports`: An array of import paths to ignore.

### Example

Given the following project structure:

```plaintext
src/
  components/
    index.ts
    button.ts
  utils/
    index.ts
    logger.ts
  index.ts
```

The following imports would be disallowed:

```js
import { Button } from '@/components'; // Disallowed
import { Logger } from '@/utils'; // Disallowed
```

But the following imports would be allowed:

```js
import { Button } from '@/components/button'; // Allowed
import { Logger } from '@/utils/logger'; // Allowed
```

## Contributing

If you have any ideas, bug reports, or feature requests, feel free to open an issue or submit a pull request. We welcome contributions from the community and are happy to help with any questions you may have.
