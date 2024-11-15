import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { TooltipUnControlled as Story } from '../tooltipUnControlled';
import { TooltipAlignType } from '../types/tooltipAlign';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Feedback/Tooltip',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/tooltip',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-25713&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Tooltip: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TooltipVariantType || {})[0] as string,
    title: { content: 'Tootltip title' },
    content: { content: 'Tooltip content' },
    contentScrollArias: {
      'aria-label': 'Tooltip content scroll',
    },
    children: 'Hover me',
    triggerAsButton: {
      'aria-label': 'Tooltip trigger',
    },
    align: TooltipAlignType.TOP,
    tooltipAsModal: false,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TOOLTIP],
  },
};

export const TooltipComplex: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TooltipVariantType || {})[0] as string,
    title: { content: 'Tootltip title' },
    content: { content: 'Tooltip content' },
    children: 'Hover me',
    triggerAsButton: {
      'aria-label': 'Tooltip trigger',
    },
    align: TooltipAlignType.TOP,
    closeIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Close icon' },
    tooltipAsModal: true,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TOOLTIP],
  },
};

export const TooltipWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TooltipVariantType || {})[0] as string,
    title: { content: 'Tootltip title' },
    content: { content: 'Tooltip content' },
    children: 'Hover me',
    triggerAsButton: {
      'aria-label': 'Tooltip trigger',
    },
    align: TooltipAlignType.TOP,
    tooltipAsModal: false,
    ctv: {
      tooltipInternalContainer: {
        background_color: 'pink',
      },
    },
  },
};
