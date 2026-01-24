import type { Meta, StoryObj } from '@storybook/react-vite';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Badge as BadgeStory } from '@kubit-ui-web/react-components';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const { BadgeSize, BadgeVariant, DotSizeType, DotVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: BadgeStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['resources'],
  title: 'Components/Resources/Badge',
} satisfies Meta<typeof BadgeStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

/**
 * Basic badge with icon only.
 * Use this for simple status indicators or action buttons.
 */
export const WithIcon: Story = {
  args: {
    ['aria-label']: 'Notifications',
    icon: ICONS.PLACEHOLDER,
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.PRIMARY}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  aria-label="Notifications"
/>`,
      },
    },
  },
};

/**
 * Badge with label text.
 * Use this to provide clear context with descriptive text.
 */
export const WithLabel: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Messages',
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.PRIMARY}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  label="Messages"
/>`,
      },
    },
  },
};

/**
 * Badge with label and additional icon.
 * Use this for dropdown triggers or expandable actions.
 */
export const WithLabelAndIcon: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Filters',
    labelIcon: ICONS.CHEVRON_DOWN,
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.PRIMARY}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  label="Filters"
  labelIcon={ICONS.CHEVRON_DOWN}
/>`,
      },
    },
  },
};

/**
 * Badge with notification dot.
 * Use this to indicate unread items or pending notifications.
 */
export const WithNotificationDot: Story = {
  args: {
    dot: {
      maxNumber: 9,
      number: 5,
      size: DotSizeType.MEDIUM,
      variant: DotVariantType.WITHOUT_BORDER,
    },
    hasDot: true,
    icon: ICONS.PLACEHOLDER,
    label: 'Notifications',
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.PRIMARY}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  label="Notifications"
  hasDot={true}
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
 * Alternative badge variant.
 * Use this for secondary actions or less prominent badges.
 */
export const Alternative: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Alternative',
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.ALTERNATIVE,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.ALTERNATIVE}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  label="Alternative"
/>`,
      },
    },
  },
};

/**
 * Disabled badge state.
 * Use this when the badge action is temporarily unavailable.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    icon: ICONS.PLACEHOLDER,
    label: 'Disabled',
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.PRIMARY}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  label="Disabled"
  disabled={true}
/>`,
      },
    },
  },
};

/**
 * Badge with custom CSS classes.
 * Use this to override default styling for specific use cases.
 */
export const WithCustomClasses: Story = {
  args: {
    additionalVariantClasses: {
      badge: 'custom-background',
      button: 'custom-border',
      icon: 'custom-text-color',
      label: 'custom-font-size',
    },
    icon: ICONS.PLACEHOLDER,
    label: 'Custom Styled',
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge
  variant={BadgeVariant.PRIMARY}
  size={BadgeSize.DEFAULT}
  icon={ICONS.PLACEHOLDER}
  label="Custom Styled"
  additionalVariantClasses={{
    badge: 'custom-background',
    button: 'custom-border',
    icon: 'custom-text-color',
    label: 'custom-font-size'
  }}
/>`,
      },
    },
  },
};

/**
 * Multiple badges in a group.
 * Common pattern for filter chips or category tags.
 */
export const BadgeGroup: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Category',
    size: BadgeSize.DEFAULT,
    variant: BadgeVariant.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
  <Badge
    variant={BadgeVariant.PRIMARY}
    icon={ICONS.PLACEHOLDER}
    label="Active"
  />
  <Badge
    variant={BadgeVariant.ALTERNATIVE}
    icon={ICONS.PLACEHOLDER}
    label="Pending"
  />
  <Badge
    variant={BadgeVariant.PRIMARY}
    icon={ICONS.PLACEHOLDER}
    label="Completed"
  />
  <Badge
    variant={BadgeVariant.ALTERNATIVE}
    icon={ICONS.PLACEHOLDER}
    label="Archived"
  />
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <BadgeStory
        icon={ICONS.PLACEHOLDER}
        label="Active"
        size={BadgeSize.DEFAULT}
        variant={BadgeVariant.PRIMARY}
      />
      <BadgeStory
        icon={ICONS.PLACEHOLDER}
        label="Pending"
        size={BadgeSize.DEFAULT}
        variant={BadgeVariant.ALTERNATIVE}
      />
      <BadgeStory
        icon={ICONS.PLACEHOLDER}
        label="Completed"
        size={BadgeSize.DEFAULT}
        variant={BadgeVariant.PRIMARY}
      />
      <BadgeStory
        icon={ICONS.PLACEHOLDER}
        label="Archived"
        size={BadgeSize.DEFAULT}
        variant={BadgeVariant.ALTERNATIVE}
      />
    </div>
  ),
};
