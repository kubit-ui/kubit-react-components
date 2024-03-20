import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { PillUnControlled as Story } from '../pillUnControlled';
import { IPillUnControlled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Pill',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IPillUnControlled = {
  variant: Object.values(variantsObject[themeSelected].PillVariantType || {})[0] as string,
  size: Object.values(variantsObject[themeSelected].PillSizeType || {})[0] as string,
  children: 'Pill',
  decorativeIcon: { icon: ICONS.ICON_PLACEHOLDER },
  selectedIcon: { icon: ICONS.ICON_PLACEHOLDER },
};

export const Pill: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PILL],
  },
};

const size = Object.values(variantsObject[themeSelected].PillSizeType || {})[0];

export const PillWithCts: Story = {
  args: {
    ...commonArgs,
    size: size as string,
    ctv: {
      ['DEFAULT']: {
        ['DEFAULT']: {
          container: {
            background_color: 'pink',
            margin: '10px',
          },
        },
      },
    },
  },
};
