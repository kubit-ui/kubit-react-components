// ./storybook/manager.ts
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  // UI
  appBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',

  barBg: '#ffffff',
  barHoverColor: '#ff2855',

  barSelectedColor: '#ff2855',
  // Toolbar default and active colors
  barTextColor: '#000000',
  base: 'light',
  brandImage: undefined, // Add your logo here if available
  brandTarget: '_blank',

  brandTitle: 'Kubit Design System',
  brandUrl: 'https://kubit-ui.com/',
  // Colors
  colorPrimary: '#ff2855',

  colorSecondary: '#000000',
  // Font
  fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
  // Form colors
  inputBg: '#ffffff',

  inputBorder: '#000000',
  inputBorderRadius: 4,
  inputTextColor: '#000000',
  // Text colors
  textColor: '#000000',

  textInverseColor: '#ffffff',
  textMutedColor: '#666666',
});

addons.setConfig({
  sidebar: {
    collapsedRoots: ['Components', 'Hooks'],
    showRoots: true,
  },
  theme,
  toolbar: {
    copy: { hidden: false },
    eject: { hidden: false },
    fullscreen: { hidden: false },
    title: { hidden: false },
    zoom: { hidden: false },
  },
});
