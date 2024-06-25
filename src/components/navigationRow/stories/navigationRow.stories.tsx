import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { NavigationRow as Story } from '../navigationRow';
import { INavigationRow } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/NavigationRow',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: INavigationRow = {
  variant: Object.values(variantsObject[themeSelected].NavigationRowVariantType || {})[0] as string,
  text: { content: 'Text' },
  description: { content: 'Lorem ipsum dolor sit amet lorem' },
  arrowIcon: { icon: ICONS.ICON_PLACEHOLDER },
  decorativeIcon: { icon: ICONS.ICON_PLACEHOLDER },
};

export const NavigationRow: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_ROW],
  },
};

export const NavigationRowWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
