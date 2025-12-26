import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../.storybook/**/*.@(mdx|stories.@(js|jsx|ts|tjx|tdx|tsx))',
  ],
  staticDirs: ['./assets'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-docs',
    'storybook-addon-deep-controls',
    'storybook-addon-pseudo-states',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/viteStorybook.config.mts',
      },
    },
  },

  docs: {
    defaultName: 'Documentation',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
