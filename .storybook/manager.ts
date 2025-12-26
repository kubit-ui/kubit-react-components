// ./storybook/manager.ts
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Kubit Design System',
  brandUrl: 'https://kubit-ui.com/',
  brandImage: undefined, // Add your logo here if available
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#ff2855',
  colorSecondary: '#000000',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,
  appPreviewBg: '#ffffff',

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#ff2855',
  barHoverColor: '#ff2855',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#000000',
  inputTextColor: '#000000',
  inputBorderRadius: 4,

  // Font
  fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['Components', 'Hooks'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
