import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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
    content: {
      content: (
        <div style={{ color: '#fff' }}>
          <div>content first line</div>
          <div>content second line</div>
        </div>
      ),
    },
    children: 'Hover me',
    align: TooltipAlignType.TOP,
    closeIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Close icon', title: 'Close' },
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
