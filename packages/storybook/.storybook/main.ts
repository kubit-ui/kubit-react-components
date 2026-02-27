import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook-addon-deep-controls',
    'storybook-addon-pseudo-states',
    './addons/bundle-size/preset.ts',
    './addons/source-code/preset.ts',
  ],
  docs: {
    defaultName: 'Documentation',
  },

  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },

  staticDirs: ['./assets'],

  // Stories solo desde el package storybook
  stories: [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './overview/**/*.mdx',
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
};
export default config;
