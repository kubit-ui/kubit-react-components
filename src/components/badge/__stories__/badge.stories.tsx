import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  BadgeSize,
  BadgeVariant,
} from '@/lib/designSystem/kubit/components/badge/variants';
import {
  DotSizeType,
  DotVariantType,
} from '@/lib/designSystem/kubit/components/dot/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Badge as BadgeStory } from '../badge';
import type { BadgeProps } from '../types/badge';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: BadgeStory,
  render: ({ ...args }) => {
    return <BadgeStory {...args} />;
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Badge',
} satisfies Meta<typeof BadgeStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: BadgeProps = {
  ['aria-label']: 'You have notifications',
  ariaLiveText: 'aria live example text',
  disabled: false,
  icon: { icon: ICONS.PLACEHOLDER },
  size: BadgeSize.DEFAULT,
  variant: BadgeVariant.PRIMARY,
};

export const Badge: Story = {
  args: {
    ...commonArgs,
  },
};

export const BadgeWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalVariantClasses: {
      badge: 'custom-background',
      button: 'custom-border',
      icon: 'custom-text-color',
      label: 'custom-font-size',
    },
    label: { content: 'Custom Badge' },
  },
};

export const BadgeWithDot: Story = {
  args: {
    ...commonArgs,
    dot: {
      maxNumber: 9,
      number: 5,
      size: DotSizeType.MEDIUM,
      variant: DotVariantType.WITHOUT_BORDER,
    },
    hasDot: true,
    label: { content: 'Notifications' },
  },
};

export const BadgeWithLabel: Story = {
  args: {
    ...commonArgs,
    label: { content: 'Messages' },
    labelIcon: { icon: ICONS.CHEVRON_DOWN },
  },
};

export const BadgeAlternative: Story = {
  args: {
    ...commonArgs,
    label: { content: 'Alternative' },
    variant: BadgeVariant.ALTERNATIVE,
  },
};

export const BadgeDisabled: Story = {
  args: {
    ...commonArgs,
    disabled: true,
    label: { content: 'Disabled Badge' },
  },
};

export const BadgeWithSizeClasses: Story = {
  args: {
    ...commonArgs,
    additionalSizeClasses: {
      badge: 'custom-padding',
      icon: 'custom-border-radius',
    },
    label: { content: 'Size Classes' },
    size: BadgeSize.DEFAULT,
  },
};
