import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';

import { DESIGN_SYSTEM_INFO } from '../src/designSystem/themesInfo';
import { themesObject } from '../src/designSystem/themesObject';
import { ThemeProvider } from './provider/themeProvider';

const getGlobalThemeOptions = () => {
  const themeList = [];
  DESIGN_SYSTEM_INFO.forEach(designSystem => {
    if (designSystem.themes.length > 0) {
      designSystem.themes.forEach(theme => {
        themeList.push({
          value: theme.value,
          title: theme.name,
          right: <span>{designSystem.designSystemName}</span>,
        } as never);
      });
    }
  });

  return themeList;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'kubit',
      toolbar: {
        title: 'Theme',
        dynamicTitle: true,
        icon: 'paintbrush',
        items: getGlobalThemeOptions(),
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Getting Started', ['Introduction'], 'Components'],
      },
    },
  },

  decorators: [
    (Story, context) => {
      useEffect(() => {
        const theme = context.globals.theme || 'kubit';
        if (theme !== localStorage.getItem('themeSelected')) {
          localStorage.setItem('themeSelected', theme);
          window.location.reload();
        }
      }, [context.globals.theme]);

      return (
        <ThemeProvider
          theme={themesObject[context.globals.theme]}
          themeName={context.globals.theme}
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
