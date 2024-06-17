import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../.storybook/**/*.@(mdx|stories.@(js|jsx|ts|tjx|tdx|tsx))',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../.storybook/**/*.@(mdx|stories.@(js|jsx|ts|tjx|tdx|tsx))',
  ],
  staticDirs: ['./assets', '../assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    './addons/tokensAddons/register.tsx',
    './addons/figmaAddon/register.tsx',
    './addons/githubAddon/register.tsx',
    './addons/statusAddon/register.tsx',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
