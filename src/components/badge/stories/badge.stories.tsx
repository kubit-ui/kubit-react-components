import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { BadgeUnControlled as Story } from '../badgeUnControlled';
import { IBadgeUnControlled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Badge',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IBadgeUnControlled = {
  variant: 'PRIMARY',
  size: 'DEFAULT',
  dot: {
    variant: 'WITH_BORDER',
    size: 'MEDIUM',
    number: 8,
    maxNumber: 9,
  },
  popover: {
    variant: 'BADGE',
    content: <ReplaceContent>Expanded content</ReplaceContent>,
  },
  icon: { icon: ICONS.ICON_PLACEHOLDER },
  labelIcon: { icon: ICONS.ICON_CHEVRON_DOWN },
  ['aria-label']: 'You have 23 notifications',
  ariaLiveText: 'aria live example text',
  label: { content: 'Notifications' },
};

export const Badge: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.BADGE],
  },
};

export const BadgeWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      label: {
        color: 'red',
      },
      CLOSE: {
        labelFontColor: 'blue',
      },
    },
    cts: {
      icon: {
        width: '50px',
        height: '50px',
      },
    },
  },
};
