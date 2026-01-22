import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
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
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/viteStorybook.config.mts',
      },
    },
  },

  staticDirs: ['./assets'],

  stories: [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.mdx',
    '../overview/**/*.mdx',
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
