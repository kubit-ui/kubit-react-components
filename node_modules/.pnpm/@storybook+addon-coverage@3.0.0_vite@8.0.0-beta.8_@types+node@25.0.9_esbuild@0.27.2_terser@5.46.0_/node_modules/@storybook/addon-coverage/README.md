# Storybook Addon Coverage

Tools to support code coverage in Storybook and the [Storybook test runner](https://github.com/storybookjs/test-runner). It supports Storybook projects that use **Webpack5** or **Vite**.

> [!WARNING]
> If you're using Storybook in a Vite-based project, you might want to use [Storybook's Vitest integration](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon?ref=test-runner-migration) instead. It's faster, provides code coverage out of the box (so you don't need this addon anymore), and integrates well with all Storybook's latest features.

## Requirements

- Storybook@>=10.0.0

### Version compatibility

| Addon coverage version | Storybook version |
| ---------------------- | ----------------- |
| ^3.0.0                 | ^10.0.0           |
| ^2.0.0                 | ^9.0.0            |
| ^2.0.0                 | ^8.0.0            |

### Installation

Install this addon by adding the `@storybook/addon-coverage` dependency:

```sh
yarn add -D @storybook/addon-coverage
```

And by registering it in your `.storybook/main.js`:

```js
export default {
  addons: ['@storybook/addon-coverage'],
};
```

### Configuring the addon

This addon instruments your code by using a custom wrapper around [istanbul-lib-instrument](https://www.npmjs.com/package/istanbul-lib-instrument) if your project uses Webpack5 or [vite-plugin-istanbul](https://github.com/iFaxity/vite-plugin-istanbul) if your project uses Vite. It provides some default configuration, but if you want to add yours, you can do so by setting the options in your `.storybook/main.js`:

```js
export default {
  addons: [
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          include: ['**/stories/**'],
        },
      },
    },
  ],
};
```

**The available options if your project uses Webpack5 are as follows:**

| Option name            | Description                                                                                                    | Type            | Default                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| `cwd`                  | Set the working directory                                                                                      | `String`        | `process.cwd()`                                                                              |
| `nycrcPath`            | Path to specific nyc config to use instead of automatically searching for a nycconfig.                         | `string`        | -                                                                                            |
| `include`              | Glob pattern to include files. It has precedence over the include definition from your nyc config              | `Array<String>` | -                                                                                            |
| `exclude`              | Glob pattern to exclude files. It has precedence over the exclude definition from your nyc config              | `Array<String>` | `defaultExclude` in https://github.com/storybookjs/addon-coverage/blob/main/src/constants.ts |
| `extension`            | List of supported extensions. It has precedence over the extension definition from your nyc config             | `Array<String>` | `['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue', '.svelte]`                           |
| `coverageVariable`     | The global variable name that Istanbul will use to store coverage results.                                     | `string`        | -                                                                                            |
| `preserveComments`     | Indicates whether comments in the code should be preserved during the instrumentation process.                 | `boolean`       | `true`                                                                                       |
| `compact`              | Controls whether the output of instrumented code is compacted. Useful for debugging when set to `false`.       | `boolean`       | `false`                                                                                      |
| `esModules`            | Determines whether the code to be instrumented uses ES Module syntax.                                          | `boolean`       | `true`                                                                                       |
| `autoWrap`             | When set to `true`, wraps program code in a function to enable top-level return statements.                    | `boolean`       | `true`                                                                                       |
| `produceSourceMap`     | If `true`, instructs Istanbul to produce a source map for the instrumented code.                               | `boolean`       | `true`                                                                                       |
| `sourceMapUrlCallback` | A callback function that gets invoked with the filename and the source map URL when a source map is generated. | `function`      | -                                                                                            |
| `debug`                | Enables the debug mode, providing additional logging information during the instrumentation process.           | `boolean`       | -                                                                                            |

> **Note:**
> If you're using TypeScript, you can import the type for the options like so:
>
> ```ts
> import type { AddonOptionsWebpack } from '@storybook/addon-coverage';
> ```

**The available options if your project uses Vite are as follows:**

| Option name             | Description                                                                                                                                                                                                                                                                                                 | Type                        | Default                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------- |
| `cwd`                   | Set the working directory                                                                                                                                                                                                                                                                                   | `String`                    | `process.cwd()`                                                                  |
| `include`               | See [here](https://github.com/istanbuljs/nyc#selecting-files-for-coverage) for more info                                                                                                                                                                                                                    | `Array<String>` or `string` | `['**']`                                                                         |
| `exclude`               | See [here](https://github.com/istanbuljs/nyc#selecting-files-for-coverage) for more info                                                                                                                                                                                                                    | `Array<String>` or `string` | [list](https://github.com/storybookjs/addon-coverage/blob/main/src/constants.ts) |
| `extension`             | List of extensions that nyc should attempt to handle in addition to `.js`                                                                                                                                                                                                                                   | `Array<String>` or `string` | `['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue', '.svelte]`               |
| `requireEnv `           | Optional boolean to require the environment variable (defaults to VITE_COVERAGE) to equal true in order to instrument the code. Otherwise it will instrument even if env variable is not set. However if requireEnv is not set the instrumentation will stop if the environment variable is equal to false. | `boolean`                   | `-`                                                                              |
| `cypress `              | Optional boolean to change the environment variable to CYPRESS_COVERAGE instead of VITE_COVERAGE. For ease of use with `@cypress/code-coverage` coverage                                                                                                                                                    | `boolean`                   | `-`                                                                              |
| `checkProd `            | Optional boolean to enforce the plugin to skip instrumentation for production environments. Looks at Vite's isProduction key from the ResolvedConfig.                                                                                                                                                       | `boolean`                   | `-`                                                                              |
| `forceBuildInstrument ` | Optional boolean to enforce the plugin to add instrumentation in build mode.                                                                                                                                                                                                                                | `boolean`                   | `false`                                                                          |
| `nycrcPath `            | Path to specific nyc config to use instead of automatically searching for a nycconfig. This parameter is just passed down to @istanbuljs/load-nyc-config.                                                                                                                                                   | `string`                    | `-`                                                                              |

> **Note:**
> If you're using TypeScript, you can import the type for the options like so:
>
> ```ts
> import type { AddonOptionsVite } from '@storybook/addon-coverage';
> ```

## Troubleshooting

### The coverage addon doesn't support optimized builds

The `--test` flag is designed to be as fast as possible, removing addons known to slow down the build and are not needed for functional testing. One of these addons is `@storybook/addon-coverage`, which is used in conjunction with the Storybook Test runner to collect coverage information for your stories.

If you are using `addon-coverage` **AND** running the test runner against your _built_ Storybook, the `--test` flag will strip out the coverage information. To configure the `--test` build to keep coverage information (at the expense of a slightly slower build), update your Storybook configuration file (i.e.,`.storybook/main.js|ts`) and include the [`disabledAddons`](https://storybook.js.org/docs/api/main-config-build#testdisabledaddons) option.

```js
// main.js

export default {
  // Your Storybook configuration goes here
  build: {
    test: {
      disabledAddons: ['@storybook/addon-docs', '@storybook/addon-essentials/docs'],
    },
  },
};
```

### Development scripts

- `yarn start` runs babel in watch mode
- `yarn build` build and package your addon code

To run the examples, choose one of the projects in the `examples` directory then run:

- `yarn` to install dependencies and link the addon locally
- `yarn storybook` to run Storybook
- `yarn test-storybook --coverage` to test coverage report generation

### License

[MIT](https://github.com/storybookjs/addon-coverage/blob/main/LICENSE)
