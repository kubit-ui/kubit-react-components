// ESLint flat config doesn't require defineConfig import for module exports

// Core ESLint and TypeScript
const eslintParser = require("@typescript-eslint/parser");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

// React plugins
const react = require("eslint-plugin-react");
const reactHooksEslint = require("eslint-plugin-react-hooks");
const jsxAccessibilityEslint = require("eslint-plugin-jsx-a11y");

// Import and code quality plugins
const importEslint = require("eslint-plugin-import");
const prettier = require("eslint-plugin-prettier");
const unusedImportsEslint = require("eslint-plugin-unused-imports");
const jest = require("eslint-plugin-jest");

// Kubit and custom plugins
const noIndexImportEslint = require("@kubit-ui-web/eslint-plugin-no-index-import");
const noRelativeImportPathsEslint = require("eslint-plugin-no-relative-import-paths");

// Additional plugins
const compatEslint = require("eslint-plugin-compat");
const perfectionist = require("eslint-plugin-perfectionist");

// Default configuration constants
const DEFAULT_BROWSER_LIST = ["> 1%", "last 2 versions", "not ie <= 11"];
const DEFAULT_ECMA_VERSION = "latest";
const DEFAULT_SOURCE_TYPE = "module";

// Default file extensions for TypeScript and JavaScript
const SUPPORTED_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

/**
 * Kubit ESLint Configuration Factory
 *
 * @param {Object} config - Configuration options
 * @param {Object} config.noIndexImportConfig - Configuration for no-index-import rule
 * @param {Object} config.noRestrictedImportsConfig - Configuration for restricted imports
 * @param {string} config.tsConfigPath - Path to TypeScript configuration file
 * @param {Array} config.overrides - Additional ESLint configuration overrides
 * @param {boolean} config.checkBrowserCompatibility - Enable browser compatibility checks
 * @param {Array} config.browserList - List of supported browsers for compatibility checks
 * @param {Object} config.globals - Additional global variables
 * @param {boolean} config.isReact - Enable React-specific rules and plugins
 * @param {Object} config.additionalPlugins - Additional ESLint plugins to include
 * @param {Array} config.ignores - Files, patterns, or directories to ignore
 * @returns {Object} ESLint configuration object
 */
module.exports = (options = {}) => {
  const {
    noIndexImportConfig = {},
    noRestrictedImportsConfig,
    tsConfigPath = "",
    overrides = [],
    checkBrowserCompatibility = false,
    browserList = DEFAULT_BROWSER_LIST,
    globals,
    isReact = true,
    additionalPlugins = {},
    ignores = [],
  } = options;
  /**
   * Get TypeScript-specific ESLint rules
   * @returns {Object} TypeScript rules configuration
   */
  const getTypeScriptRules = () => ({
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      { ignoreTypeIndexes: true },
    ],
  });

  /**
   * Get React-specific ESLint rules
   * @returns {Object} React rules configuration
   */
  const getReactRules = () => ({
    // React component rules
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    "react/no-multi-comp": "error",
    "react/no-unused-state": "error",
    "react/no-unstable-nested-components": "error",
    "react/sort-comp": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error",

    // JSX formatting rules
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-max-props-per-line": ["error", { when: "multiline" }],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
    "jsx-quotes": ["error", "prefer-double"],
  });

  /**
   * Get accessibility (a11y) rules for JSX
   * @returns {Object} Accessibility rules configuration
   */
  const getAccessibilityRules = () => ({
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
  });

  /**
   * Get general JavaScript/ES6 rules
   * @returns {Object} General JavaScript rules configuration
   */
  const getGeneralRules = () => ({
    // Code quality rules
    "prettier/prettier": ["error"],
    curly: ["error", "all"],
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-useless-escape": "error",
    "no-case-declarations": "warn",
    "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-use-before-define": "off",
    "no-undef": "error",
    "no-unreachable": "error",

    // Style rules
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    semi: ["error", "always"],
    eqeqeq: ["error", "always", { null: "ignore" }],

    // Complexity and best practices
    complexity: ["error", { max: 5 }],
    "block-scoped-var": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-eval": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "no-useless-return": "error",
    "no-var": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-duplicate-imports": "error",
    "no-param-reassign": "error",
    "prefer-const": "error",
    "consistent-return": "error",
    "no-unneeded-ternary": "error",
    "no-throw-literal": "error",
  });

  /**
   * Get custom and plugin-specific rules
   * @returns {Object} Custom rules configuration
   */
  const getCustomRules = () => ({
    // Kubit specific rules
    "@kubit-ui-web/no-index-import/no-index-import":
      noIndexImportConfig && Object.keys(noIndexImportConfig).length > 0
        ? [
            "error",
            {
              aliases: noIndexImportConfig?.aliases || {},
              ignoreImports: noIndexImportConfig?.ignoreImports || [],
            },
          ]
        : "off",

    // Import rules
    "unused-imports/no-unused-imports": "error",
    "import/no-cycle": ["error", { maxDepth: 4 }],
    "import/no-unresolved": "off",
    "no-restricted-imports": [
      "error",
      {
        paths: noRestrictedImportsConfig?.paths || [],
      },
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      {
        allowSameFolder: true,
        allowedDepth: 2,
        rootDir: "app/src",
        prefix: "@",
      },
    ],

    // Testing rules
    "jest/no-test-prefixes": "off",
    "jest/no-focused-tests": "error",

    // Code organization rules
    "perfectionist/sort-objects": ["error", { type: "natural" }],
    "perfectionist/sort-imports": [
      "error",
      {
        order: "asc",
        type: "natural",
      },
    ],
    "perfectionist/sort-exports": ["error", { order: "asc", type: "natural" }],

    // Disabled rules
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "node/no-unpublished-import": "off",

    // Browser compatibility
    ...(checkBrowserCompatibility && {
      "compat/compat": "error",
    }),
  });

  return [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    // Global ignores configuration
    ...(ignores.length > 0 ? [{ ignores }] : []),
    {
      languageOptions: {
        ecmaVersion: DEFAULT_ECMA_VERSION,
        sourceType: DEFAULT_SOURCE_TYPE,
        globals: {
          ...(isReact && {
            JSX: true,
            React: "writable",
          }),
          NodeJS: "writable",
          ...globals,
        },
        parser: eslintParser,
        parserOptions: {
          project: tsConfigPath,
          tsconfigRootDir: __dirname,
        },
      },
      plugins: {
        typescriptEslint,
        ...(isReact && {
          react,
          reactHooksEslint,
          "jsx-a11y": jsxAccessibilityEslint,
        }),
        import: importEslint,
        prettier,
        "unused-imports": unusedImportsEslint,
        jest,
        "@kubit-ui-web/no-index-import": noIndexImportEslint,
        "no-relative-import-paths": noRelativeImportPathsEslint,
        compat: compatEslint,
        perfectionist,
        ...(additionalPlugins || {}),
      },
      settings: {
        ...(isReact && {
          react: {
            version: "detect",
          },
        }),
        "import/resolver": {
          node: {
            extensions: SUPPORTED_EXTENSIONS,
          },
          typescript: {
            project: tsConfigPath,
          },
        },
        ...(checkBrowserCompatibility && {
          browsers: browserList, // List of browsers to check compatibility against
        }),
      },
      rules: {
        // Core TypeScript rules
        ...getTypeScriptRules(),

        // React-specific rules (only when React is enabled)
        ...(isReact && {
          ...getReactRules(),
          ...getAccessibilityRules(),
        }),

        // General JavaScript/ES6 rules
        ...getGeneralRules(),

        // Custom and plugin-specific rules
        ...getCustomRules(),
      },
    },
    ...overrides,
  ];
};
