import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TooltipUnControlled as Story } from '../tooltipUnControlled';
import { TooltipAlignType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Feedback/Tooltip',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Tooltip: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TooltipVariantType || {})[0] as string,
    title: { content: 'Tootltip title' },
    content: { content: 'Tooltip content' },
    children: 'Hover me',
    align: TooltipAlignType.TOP,
    closeIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Close icon' },
    tooltipAsModal: false,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TOOLTIP],
  },
};

export const TooltipWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TooltipVariantType || {})[0] as string,
    title: { content: 'Tootltip title' },
    content: { content: 'Tooltip content' },
    children: 'Hover me',
    align: TooltipAlignType.TOP,
    closeIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Close icon' },
    tooltipAsModal: false,
    ctv: {
      tooltipInternalContainer: {
        background_color: 'pink',
      },
    },
  },
};
