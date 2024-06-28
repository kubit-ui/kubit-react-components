import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { QuickButton as Story } from '../quickButton';
import { IQuickButton } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Actions/QuickButton',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IQuickButton = {
  variant: Object.values(variantsObject[themeSelected].QuickButtonVariantType || {})[0] as string,
  icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Icon alternative text' },
  maxWidth: '100px',
  buttonId: 'quickButton',
};

export const QuickButton: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.QUICKBUTTON],
  },
};

export const QuickButtonWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      DEFAULT: {
        button: {
          background_color: 'pink',
          width: '100px',
        },
      },
    },
  },
};
