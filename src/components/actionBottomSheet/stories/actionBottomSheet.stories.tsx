import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ActionBottomSheetControlled as Story } from '../actionBottomSheetControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/ActionBottomSheet',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const ActionBottomSheet: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].ActionBottomSheetVariantType || {}
    )[0] as string,
    title: { content: 'Title' },
    closeIcon: {
      icon: ICONS.ICON_CHEVRON_UP,
      altText: 'Close alt text',
      ['aria-label']: 'ariaLabelButton',
    },
    headerContent: <ReplaceContent />,
    children: <ReplaceContent />,
    open: true,
    themeArgs: themesObject[themeSelected][STYLES_NAME.ACTION_BOTTOM_SHEET],
  },
};

export const ActionBottomSheetWithCtv: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].ActionBottomSheetVariantType || {}
    )[0] as string,
    title: { content: 'Title' },
    closeIcon: {
      icon: ICONS.ICON_CHEVRON_UP,
      altText: 'Close alt text',
      ['aria-label']: 'ariaLabelButton',
    },
    headerContent: <ReplaceContent />,
    children: <ReplaceContent />,
    open: true,
    ctv: {
      title: {
        color: 'red',
      },
    },
  },
};
