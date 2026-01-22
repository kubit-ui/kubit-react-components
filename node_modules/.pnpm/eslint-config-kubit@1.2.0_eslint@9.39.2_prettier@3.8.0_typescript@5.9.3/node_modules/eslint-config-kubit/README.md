# Kubit ESLint Configuration

[![npm version](https://badge.fury.io/js/eslint-config-kubit.svg)](https://badge.fury.io/js/eslint-config-kubit)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


**Requirements:**

- Node.js >= 18.0.0
- npm >= 8.0.0

**Contributing:**

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes to the ESLint configuration in `index.js`
4. Test your changes with a sample project
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Requests://github.com/kubit-ui/eslint-config-kubit/actions)

A comprehensive and opinionated ESLint configuration package for TypeScript and React projects, designed to enforce best practices, code quality, and accessibility standards.

## ✨ Features

- **🔧 Zero Configuration**: Works out of the box with sensible defaults
- **⚛️ React Support**: Complete React and JSX rules with accessibility (a11y) checks
- **🔷 TypeScript First**: Full TypeScript support with strict type checking
- **🎨 Prettier Integration**: Seamless integration with Prettier for code formatting
- **🧪 Jest Integration**: Pre-configured Jest rules for testing environments
- **♿ Accessibility**: Comprehensive a11y rules for inclusive web development
- **🌐 Browser Compatibility**: Optional browser compatibility checking
- **📦 Import Management**: Smart import sorting and organization
- **🔍 Code Quality**: Advanced rules for code complexity and best practices

## 🚀 Quick Start

### Installation

Install the package and its peer dependencies:

```bash
npm install --save-dev eslint eslint-config-kubit
```

**Using Yarn:**

```bash
yarn add --dev eslint eslint-config-kubit
```

**Using pnpm:**

```bash
pnpm add -D eslint eslint-config-kubit
```

### Basic Usage

Create an `eslint.config.js` file in your project root:

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit();
```

### Advanced Configuration

For more control over the configuration:

```js
const eslintConfigKubit = require("eslint-config-kubit");
const path = require("path");

module.exports = eslintConfigKubit({
  // TypeScript configuration
  tsConfigPath: path.resolve(__dirname, "./tsconfig.json"),

  // Enable browser compatibility checks
  checkBrowserCompatibility: true,
  browserList: [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead",
    "iOS >= 10",
    "Safari >= 10",
    "Edge >= 15",
  ],

  // Custom import rules
  noIndexImportConfig: {
    aliases: {
      "@/types": "./src/types/*",
      "@/components": "./src/components/*",
      "@/utils": "./src/utils/*",
    },
  },

  // Restrict specific imports
  noRestrictedImportsConfig: {
    paths: ["lodash", "moment"],
  },

  // Additional global variables
  globals: {
    myGlobalVar: "readonly",
  },
});
```

## ⚙️ Configuration Options

| Option                      | Type       | Default                                       | Description                             |
| --------------------------- | ---------- | --------------------------------------------- | --------------------------------------- |
| `isReact`                   | `boolean`  | `true`                                        | Enable React-specific rules and plugins |
| `tsConfigPath`              | `string`   | `''`                                          | Path to TypeScript configuration file   |
| `checkBrowserCompatibility` | `boolean`  | `false`                                       | Enable browser compatibility checking   |
| `browserList`               | `string[]` | `['> 1%', 'last 2 versions', 'not ie <= 11']` | Supported browsers list                 |
| `noIndexImportConfig`       | `object`   | `{}`                                          | Configuration for index import rules    |
| `noRestrictedImportsConfig` | `object`   | `undefined`                                   | Restricted imports configuration        |
| `globals`                   | `object`   | `undefined`                                   | Additional global variables             |
| `additionalPlugins`         | `object`   | `{}`                                          | Extra ESLint plugins to include         |
| `overrides`                 | `array`    | `[]`                                          | Configuration overrides                 |

## Configuration Examples

### Basic TypeScript Project

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  tsConfigPath: "./tsconfig.json",
});
```

### React TypeScript Project

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  isReact: true,
  tsConfigPath: "./tsconfig.json",
  noIndexImportConfig: {
    aliases: {
      "@/components": "./src/components/*",
      "@/utils": "./src/utils/*",
      "@/hooks": "./src/hooks/*",
    },
  },
});
```

### Node.js Project (No React)

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  isReact: false,
  tsConfigPath: "./tsconfig.json",
});
```

### With Browser Compatibility Checks

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  checkBrowserCompatibility: true,
  browserList: [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead",
    "iOS >= 10",
    "Safari >= 10",
  ],
  tsConfigPath: "./tsconfig.json",
});
```

### Restricted Imports Configuration

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  noRestrictedImportsConfig: {
    paths: [
      "lodash", // Use lodash-es instead
      "moment", // Use date-fns instead
      {
        name: "react",
        importNames: ["default"],
        message: 'Import React as named import: import { React } from "react"',
      },
    ],
  },
});
```

## �🔧 Customization

### Overriding Rules

You can override specific rules for your project needs:

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      rules: {
        // Disable magic number warnings for constants
        "@typescript-eslint/no-magic-numbers": "off",

        // Allow multiple components per file in specific cases
        "react/no-multi-comp": "off",

        // Relax complexity requirements for legacy code
        complexity: ["warn", { max: 10 }],
      },
    },
    {
      files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
      rules: {
        // Allow any types in test files
        "@typescript-eslint/no-explicit-any": "off",

        // Allow console.log in tests
        "no-console": "off",
      },
    },
  ],
});
```

### Non-React Projects

For pure TypeScript/JavaScript projects without React:

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  isReact: false,
  tsConfigPath: "./tsconfig.json",
});
```

## �️ Development Setup

### Usage in Your Project

Add linting scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

### VS Code Integration

Create `.vscode/settings.json` for better integration:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.experimental.useFlatConfig": true
}
```

### GitHub Actions Workflow

Add ESLint checking to your CI/CD:

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
```

## �📋 Included Rules

This configuration includes rules from the following ESLint plugins:

- **[@typescript-eslint](https://typescript-eslint.io/)** - TypeScript-specific linting rules
- **[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)** - React specific linting rules
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** - Rules of Hooks
- **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)** - Accessibility rules
- **[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)** - Import/export syntax rules
- **[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)** - Prettier integration
- **[eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)** - Jest testing rules
- **[eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)** - Sorting and organization rules

## Migration Guide

### From v0.x to v1.0.0

Version 1.0.0 introduces several breaking changes:

#### ESLint Flat Config

- **Required**: ESLint 9.x with flat config format
- **Change**: Update your `eslint.config.js` file format

**Before (v0.x):**

```js
module.exports = {
  extends: ["eslint-config-kubit"],
};
```

**After (v1.0.0):**

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit();
```

#### Dependency Updates

- **Node.js**: Minimum version is now 18.0.0
- **TypeScript**: Support for TypeScript 5.x
- **React**: Support for React 18+

#### Configuration Changes

- Parameter structure has been simplified
- Better default values for all options
- Improved TypeScript integration

## �🛠️ Development

### Requirements

- Node.js >= 18.0.0
- npm >= 8.0.0

### Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📖 Related Packages

- [eslint](https://eslint.org/) - The core ESLint linting library
- [typescript](https://www.typescriptlang.org/) - TypeScript compiler
- [prettier](https://prettier.io/) - Code formatter

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## ❓ Troubleshooting

### Common Issues

#### "Cannot find module 'eslint-config-kubit'"

Make sure you've installed the package:

```bash
npm install --save-dev eslint-config-kubit
```

#### "Parsing error" with TypeScript files

Ensure you've set the correct `tsConfigPath`:

```js
module.exports = eslintConfigKubit({
  tsConfigPath: "./tsconfig.json", // Path relative to your project root
});
```

#### Rules are too strict

You can override specific rules:

```js
module.exports = eslintConfigKubit({
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      rules: {
        complexity: ["warn", { max: 10 }], // Increase complexity limit
        "@typescript-eslint/no-magic-numbers": "off", // Disable magic numbers
      },
    },
  ],
});
```

### Performance Tips

- **Use `.eslintignore`**: Exclude `node_modules`, `dist`, and other build folders
- **Limit file patterns**: Only lint files you need to check
- **Use caching**: Add `--cache` flag to ESLint commands

## 🎯 Roadmap

- [ ] **ESLint 10.x** compatibility when released
- [ ] **Additional framework support** (Vue, Svelte)
- [ ] **Custom rule presets** for different project types
- [ ] **IDE extensions** for better integration
- [ ] **Performance optimizations** for large codebases

## 🤝 Support

- 📖 [Documentation](https://www.kubit-ui.com/)
- 🐛 [Report Issues](https://github.com/kubit-ui/eslint-config-kubit/issues)
- 💬 [Discussions](https://github.com/kubit-ui/eslint-config-kubit/discussions)
- ⭐ [Give us a star](https://github.com/kubit-ui/eslint-config-kubit) if this project helped you!

## 📈 Stats

![npm](https://img.shields.io/npm/dt/eslint-config-kubit)
![GitHub stars](https://img.shields.io/github/stars/kubit-ui/eslint-config-kubit)
![GitHub forks](https://img.shields.io/github/forks/kubit-ui/eslint-config-kubit)

---

**Made with ❤️ by the [Kubit Team](https://www.kubit-ui.com/)**
