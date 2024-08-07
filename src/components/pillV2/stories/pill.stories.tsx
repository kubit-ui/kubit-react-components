import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { PillSizeTypeV2 } from '@/designSystem/kubit/components/variants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Pill as Story } from '../pill';
import { IPill, PillStateType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/PillV2',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonPillProps: IPill = {
  variant: Object.values(variantsObject[themeSelected].PillVariantTypeV2 || {})[0] as string,
  leftIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Left icon' },
  label: { content: 'LABEL' },
  rightIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Right icon' },
};

export const Pill: Story = {
  args: {
    ...commonPillProps,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PILL_V2],
  },
};

export const PillWithCtv: Story = {
  args: {
    ...commonPillProps,
    ctv: {
      [PillSizeTypeV2.LARGE]: {
        [PillStateType.DEFAULT]: {
          leftIcon: {
            color: 'blue',
          },
        },
      },
    },
  },
};
