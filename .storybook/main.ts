import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-docs',
    'storybook-addon-deep-controls',
    'storybook-addon-pseudo-states',
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
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../.storybook/**/*.@(mdx|stories.@(js|jsx|ts|tjx|tdx|tsx))',
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
