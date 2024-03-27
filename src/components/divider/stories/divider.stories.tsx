import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Divider as Story } from '../divider';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/Divider',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/divider',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3928-36815&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Divider: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DividerVariantType || {})[0] as string,
    leftLabel: { content: 'Divider left label' },
    rightLabel: { content: 'Divider right label' },
    leftSublabel: { content: 'Divider left sublabel' },
    rightSublabel: { content: 'Divider right sublabel' },
    icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'icon alt text' },
    iconTooltip: {
      title: { content: 'This is a tooltip title' },
      content: { content: 'This is a tooltip content' },
    },
    leftIcon: { icon: ICONS.ICON_PLACEHOLDER },
    themeArgs: themesObject[themeSelected][STYLES_NAME.DIVIDER],
  },
};

export const DividerWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DividerVariantType || {})[0] as string,
    leftLabel: { content: 'Divider left label' },
    rightLabel: { content: 'Divider right label' },
    leftSublabel: { content: 'Divider left sublabel' },
    rightSublabel: { content: 'Divider right sublabel' },
    icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'icon alt text' },
    leftIcon: { icon: ICONS.ICON_PLACEHOLDER },
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
