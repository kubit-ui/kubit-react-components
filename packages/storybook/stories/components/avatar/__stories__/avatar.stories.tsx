import type { Meta, StoryObj } from '@storybook/react-vite';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Avatar as AvatarStory } from '@kubit-ui-web/react-components';

import { ICONS } from '@/stories/assets/icons/icons';
import { IMAGES } from '@/stories/assets/images/images';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: AvatarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['resources'],
  title: 'Components/Resources/Avatar',
} satisfies Meta<typeof AvatarStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const { AvatarSize, DotSizeType, DotVariantType } = KUBIT_VARIANTS;

/**
 * Avatar displaying initials.
 * This is the default way to show user identity when no image is available.
 */
export const WithInitials: Story = {
  args: {
    backgroundColor: 'color-default',
    initials: 'JD',
    maxLengthInitials: 2,
    size: AvatarSize.MEDIUM,
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize.MEDIUM}
  initials="JD"
  maxLengthInitials={2}
/>`,
      },
    },
  },
};

/**
 * Avatar displaying a user profile image.
 * Use this when user photos are available.
 */
export const WithImage: Story = {
  args: {
    image: IMAGES.IMAGE_1,
    size: AvatarSize.MEDIUM,
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize.MEDIUM}
  image="https://example.com/user-photo.jpg"
/>`,
      },
    },
  },
};

/**
 * Avatar displaying a placeholder icon.
 * Use this as a fallback when no user data is available.
 */
export const WithIcon: Story = {
  args: {
    backgroundColor: 'color-default',
    icon: { icon: ICONS.PLACEHOLDER },
    size: AvatarSize.MEDIUM,
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize.MEDIUM}
  icon={{ icon: ICONS.PLACEHOLDER }}
/>`,
      },
    },
  },
};

/**
 * Small size avatar for compact layouts.
 * Use in dense lists, tables, or inline with text.
 */
export const Small: Story = {
  args: {
    initials: 'JD',
    size: AvatarSize.SMALL,
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize.SMALL}
  initials="JD"
/>`,
      },
    },
  },
};

/**
 * Large size avatar for profile headers.
 * Use in detailed views or profile sections.
 */
export const Large: Story = {
  args: {
    initials: 'JD',
    size: AvatarSize.LARGE,
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize.LARGE}
  initials="JD"
/>`,
      },
    },
  },
};

/**
 * Extra large size avatar for profile pages.
 * Use in dedicated profile pages or empty states.
 */
export const ExtraLarge: Story = {
  args: {
    initials: 'JD',
    size: AvatarSize['EXTRA-LARGE'],
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize['EXTRA-LARGE']}
  initials="JD"
/>`,
      },
    },
  },
};

/**
 * Avatar with a status dot indicator.
 * Use to show online status, notifications, or counts.
 */
export const WithStatusDot: Story = {
  args: {
    dot: {
      maxNumber: 9,
      number: 5,
      size: DotSizeType.MEDIUM,
      variant: DotVariantType.WITHOUT_BORDER,
    },
    image: IMAGES.IMAGE_1,
    size: AvatarSize.MEDIUM,
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size={AvatarSize.MEDIUM}
  image="user-photo.jpg"
  dot={{
    variant: DotVariantType.WITHOUT_BORDER,
    size: DotSizeType.MEDIUM,
    number: 5,
    maxNumber: 9
  }}
/>`,
      },
    },
  },
};

/**
 * Multiple avatars displayed in a group.
 * Common pattern for showing team members or participants.
 */
export const AvatarGroup: Story = {
  args: {
    initials: 'JD',
    size: AvatarSize.MEDIUM,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '8px' }}>
  <Avatar size={AvatarSize.MEDIUM} image="user1.jpg" />
  <Avatar size={AvatarSize.MEDIUM} image="user2.jpg" />
  <Avatar size={AvatarSize.MEDIUM} initials="AB" />
  <Avatar size={AvatarSize.MEDIUM} initials="+3" />
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <AvatarStory image={IMAGES.IMAGE_1} size={AvatarSize.MEDIUM} />
      <AvatarStory image={IMAGES.IMAGE_2} size={AvatarSize.MEDIUM} />
      <AvatarStory initials="AB" size={AvatarSize.MEDIUM} />
      <AvatarStory initials="+3" size={AvatarSize.MEDIUM} />
    </div>
  ),
};
