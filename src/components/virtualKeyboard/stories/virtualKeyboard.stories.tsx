import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { IVirtualKeyboard } from '../types';
import { VirtualKeyboard as Story } from '../virtualKeyboard';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/VirtualKeyboard',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IVirtualKeyboard = {
  variant: Object.values(
    variantsObject[themeSelected].VirtualKeyboardVariantType || {}
  )[0] as string,
  digits: ['0', '4', '2', '8', '7', '3', '9', '1', '6', '5'],
  icon: { icon: ICONS.ICON_PLACEHOLDER },
  onDigitButtonClick: () => {
    return null;
  },
  onRemoveButtonClick: () => {
    return null;
  },
};

export const VirtualKeyboard: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.VIRTUAL_KEYBOARD],
  },
};

export const VirtualKeyboardWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      INACTIVE: {
        digitButtons: {
          wrapper: {
            background_color: 'pink',
          },
        },
      },
    },
  },
};
