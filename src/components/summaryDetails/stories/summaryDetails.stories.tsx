import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { SummaryDetailsUnControlled as Story } from '../summaryDetailsUnControlled';
import { ISummaryDetailsUnControlled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/SummaryDetails',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ISummaryDetailsUnControlled = {
  variant: Object.values(
    variantsObject[themeSelected].SummaryDetailsVariantType || {}
  )[0] as string,
  title: { content: 'title' },
  description: { content: 'description' },
  icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Alt text icon' },
  leftIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Alt text left icon' },
};

export const SummaryDetails: Story = {
  args: {
    ...commonArgs,
    children: <ReplaceContent width="100%" />,
    themeArgs: themesObject[themeSelected][STYLES_NAME.SUMMARY_DETAILS],
  },
};

export const SummaryDetailsWithCtv: Story = {
  args: {
    ...commonArgs,
    children: <ReplaceContent width="100%" />,
    ctv: {
      header: {
        background_color: 'pink',
      },
    },
  },
};
