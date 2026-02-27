import { mergeRsbuildConfig, rspack } from '@rsbuild/core';
import { dirname, resolve } from 'path';
import type { StorybookConfig } from 'storybook-react-rsbuild';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

  rsbuildFinal: (rsbuildConfig) =>
    mergeRsbuildConfig(rsbuildConfig, {
      tools: {
        rspack: {
          plugins: [
            new rspack.NormalModuleReplacementPlugin(
              /^@\/lib\/designSystem(.*)$/,
              (resource) => {
                resource.request = resource.request.replace(
                  /^@\/lib\/designSystem/,
                  resolve(__dirname, '../../design-system/src/designSystem'),
                );
              },
            ),
          ],
          resolve: {
            alias: {
              '@/components': resolve(
                __dirname,
                '../../components/src/components',
              ),
              '@/lib': resolve(__dirname, '../../components/src/lib'),
              '@/stories': resolve(__dirname, '../stories'),
            },
          },
        },
      },
    }),

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
