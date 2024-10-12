import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Badge as Story } from '../badge';
import { IBadge } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/BadgeV2',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IBadge = {
  variant: Object.values(variantsObject[themeSelected].BadgeVariant || {})[0] as string,
  size: Object.values(variantsObject[themeSelected].BadgeSize || {})[0] as string,
  dot: {
    variant: Object.values(variantsObject[themeSelected].DotVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].DotSizeType || {})[0] as string,
    number: 5,
    maxNumber: 5,
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
        color: 'blue',
      },
      icon: {
        color: 'green',
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
