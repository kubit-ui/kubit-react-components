import type { Meta, StoryObj } from '@storybook/react-vite';

import { AvatarSize } from '@/lib/designSystem/kubit/components/avatar/variants';
import {
  DotSizeType,
  DotVariantType,
} from '@/lib/designSystem/kubit/components/dot/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { IMAGES } from '@/lib/storybook/assets/images/images';

import { Avatar as AvatarStory } from '../avatar';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: AvatarStory,
  render: ({ ...args }) => {
    return <AvatarStory {...args} />;
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Avatar',
} satisfies Meta<typeof AvatarStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  backgroundColor: 'color-default' as const,
  size: AvatarSize.MEDIUM,
};

export const Avatar: Story = {
  args: {
    ...commonArgs,
    icon: { icon: ICONS.PLACEHOLDER },
  },
};

export const AvatarWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      avatar: 'custom-background',
      dot: 'custom-border',
      icon: 'custom-text-color',
    },
    icon: { icon: ICONS.PLACEHOLDER },
  },
};

export const AvatarWithImage: Story = {
  args: {
    ...commonArgs,
    image: IMAGES.IMAGE_1,
  },
};

export const AvatarWithInitials: Story = {
  args: {
    ...commonArgs,
    initials: { content: 'JD' },
    maxLengthInitials: 2,
  },
};

export const AvatarWithDot: Story = {
  args: {
    ...commonArgs,
    dot: {
      maxNumber: 5,
      number: 3,
      size: DotSizeType.MEDIUM,
      variant: DotVariantType.WITHOUT_BORDER,
    },
    icon: { icon: ICONS.PLACEHOLDER },
  },
};

export const AvatarLarge: Story = {
  args: {
    ...commonArgs,
    icon: { icon: ICONS.PLACEHOLDER },
    size: AvatarSize.LARGE,
  },
};

export const AvatarSmall: Story = {
  args: {
    ...commonArgs,
    icon: { icon: ICONS.PLACEHOLDER },
    size: AvatarSize.SMALL,
  },
};
