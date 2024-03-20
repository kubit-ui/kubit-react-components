import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { IconHighlighted as Story } from '../iconHighlighted';
import { IconHighlightedSizeType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/iconHighlighted',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const iconHighlighted: Story = {
  args: {
    icon: ICONS.ICON_PLACEHOLDER,
    variant: Object.keys(
      variantsObject[themeSelected].IconHighlightedVariantType || {}
    )[0] as string,
    color: '#ff0000',
    backgroundColor: '#e68c8c',
    altText: 'Icon Highlighted label',
    size: IconHighlightedSizeType.MEDIUM,
    themeArgs: themesObject[themeSelected][STYLES_NAME.ICON_HIGHLIGHTED],
  },
};

export const iconHighlightedWithCtv: Story = {
  args: {
    icon: ICONS.ICON_PLACEHOLDER,
    variant: Object.keys(
      variantsObject[themeSelected].IconHighlightedVariantType || {}
    )[0] as string,
    color: '#ff0000',
    backgroundColor: '#e68c8c',
    altText: 'Icon Highlighted label',
    size: IconHighlightedSizeType.MEDIUM,
    ctv: {
      MEDIUM: {
        container: {
          width: '100px',
          height: '100px',
        },
      },
    },
  },
};
