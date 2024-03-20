import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Dot as Story } from '../dot';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/ActionBottomSheet',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Dot: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DotVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].DotSizeType || {})[0] as string,
    number: 2,
    themeArgs: themesObject[themeSelected][STYLES_NAME.DOT],
  },
};

export const DotWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DotVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].DotSizeType || {})[0] as string,
    number: 2,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
    cts: {
      container: {
        width: '50px',
      },
    },
  },
};
