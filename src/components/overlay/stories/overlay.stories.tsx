import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Overlay as Story } from '../overlay';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Overlay',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Overlay: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].OverlayVariantType || {})[0] as string,
    themeArgs: themesObject[themeSelected][STYLES_NAME.OVERLAY],
  },
};

export const OverlayWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].OverlayVariantType || {})[0] as string,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
