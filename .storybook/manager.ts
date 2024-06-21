// ./storybook/manager.ts
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light', // this will inherit the base properties of Storybook's dark theme
  brandTitle: `React components by Kubit`,
  brandUrl: 'https://kubit-ui.com/',

  // colors
  colorPrimary: '#ff2855',
  colorSecondary: '#000000',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#000000',
  appBorderRadius: 0,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#000000',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#000000',
  inputTextColor: '#000000',
  inputBorderRadius: 0,
});

addons.setConfig({
  theme,
});
