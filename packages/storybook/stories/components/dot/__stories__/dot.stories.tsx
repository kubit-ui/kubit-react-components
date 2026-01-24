import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Dot as Story } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type { DotProps } from '../types/dot';
import { argtypes } from './argtypes';

const { DotSizeType, DotVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['resources'],
  title: 'Components/Resources/Dot',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: DotProps = {
  size: DotSizeType.MEDIUM,
  variant: DotVariantType.ALTERNATIVE,
};

/**
 * Basic dot without number or label.
 * Simple status indicator or visual marker.
 */
export const Basic: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="MEDIUM"
/>`,
      },
    },
  },
};

/**
 * Dot with a numeric badge.
 * Common pattern for notification counts.
 */
export const WithNumber: Story = {
  args: {
    ...commonArgs,
    number: 5,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="MEDIUM"
  number={5}
/>`,
      },
    },
  },
};

/**
 * Dot with number overflow.
 * Displays "+maxNumber" when value exceeds maximum.
 */
export const WithOverflow: Story = {
  args: {
    ...commonArgs,
    maxNumber: 99,
    number: 150,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="MEDIUM"
  number={150}
  maxNumber={99}
/>
// Displays: "99+"`,
      },
    },
  },
};

/**
 * Dot with text label.
 * Useful for status badges like "New", "Hot", "Beta".
 */
export const WithLabel: Story = {
  args: {
    ...commonArgs,
    label: 'New',
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="MEDIUM"
  label="New"
/>`,
      },
    },
  },
};

/**
 * Small size variant.
 * Compact dot for inline or subtle indicators.
 */
export const SmallSize: Story = {
  args: {
    ...commonArgs,
    number: 3,
    size: DotSizeType.SMALL,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="SMALL"
  number={3}
/>`,
      },
    },
  },
};

/**
 * Large size variant.
 * Prominent dot for emphasis.
 */
export const LargeSize: Story = {
  args: {
    ...commonArgs,
    number: 10,
    size: DotSizeType.BIG,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="BIG"
  number={10}
/>`,
      },
    },
  },
};

/**
 * Big size variant.
 * Extra large dot for maximum visibility.
 */
export const BigSize: Story = {
  args: {
    ...commonArgs,
    number: 25,
    size: DotSizeType.BIG,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="BIG"
  number={25}
/>`,
      },
    },
  },
};

/**
 * Different border variants.
 * Shows available theme variants.
 */
export const Variants: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Dot variant="ALTERNATIVE" size="MEDIUM" number={5} />
  <Dot variant="WITH_BORDER" size="MEDIUM" number={8} />
  <Dot variant="WITHOUT_BORDER" size="MEDIUM" number={3} />
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Story {...args} number={5} variant={DotVariantType.ALTERNATIVE} />
      <Story {...args} number={8} variant={DotVariantType.WITH_BORDER} />
      <Story {...args} number={3} variant={DotVariantType.WITHOUT_BORDER} />
    </div>
  ),
};

/**
 * All size options comparison.
 * Shows relative sizes side by side.
 */
export const AllSizes: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Dot variant="ALTERNATIVE" size="SMALL" number={1} />
  <Dot variant="ALTERNATIVE" size="MEDIUM" number={5} />
  <Dot variant="ALTERNATIVE" size="BIG" number={99} />
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Story {...args} number={1} size={DotSizeType.SMALL} />
      <Story {...args} number={5} size={DotSizeType.MEDIUM} />
      <Story {...args} number={99} size={DotSizeType.BIG} />
    </div>
  ),
};

/**
 * Status indicator pattern.
 * Dots used as online/offline/busy indicators.
 */
export const StatusIndicators: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Dot variant="SUCCESS" size="SMALL" />
    <span>Online</span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Dot variant="WARNING" size="SMALL" />
    <span>Away</span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Dot variant="DANGER" size="SMALL" />
    <span>Busy</span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Dot variant="SECONDARY" size="SMALL" />
    <span>Offline</span>
  </div>
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Story
          {...args}
          size={DotSizeType.SMALL}
          variant={DotVariantType.SUCCESS}
        />
        <span>Online</span>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Story
          {...args}
          size={DotSizeType.SMALL}
          variant={DotVariantType.WARNING}
        />
        <span>Away</span>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Story
          {...args}
          size={DotSizeType.SMALL}
          variant={DotVariantType.DANGER}
        />
        <span>Busy</span>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Story
          {...args}
          size={DotSizeType.SMALL}
          variant={DotVariantType.SECONDARY}
        />
        <span>Offline</span>
      </div>
    </div>
  ),
};

/**
 * Notification badge on button.
 * Common pattern for UI notifications.
 */
export const NotificationBadge: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<button style={{ position: 'relative', padding: '8px 16px' }}>
  Messages
  <div style={{
    position: 'absolute',
    top: '-8px',
    right: '-8px'
  }}>
    <Dot
      variant="ALTERNATIVE"
      size="BIG"
      number={12}
      maxNumber={9}
    />
  </div>
</button>`,
      },
    },
  },
  render: (args) => (
    <button style={{ padding: '8px 16px', position: 'relative' }}>
      Messages
      <div
        style={{
          position: 'absolute',
          right: '-8px',
          top: '-8px',
        }}
      >
        <Story
          {...args}
          maxNumber={9}
          number={12}
          size={DotSizeType.BIG}
          variant={DotVariantType.ALTERNATIVE}
        />
      </div>
    </button>
  ),
};

/**
 * Dot with custom dimensions.
 * Override default sizes with explicit values.
 */
export const CustomDimensions: Story = {
  args: {
    ...commonArgs,
    height: '40px',
    number: 7,
    width: '40px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  width="40px"
  height="40px"
  number={7}
/>`,
      },
    },
  },
};

/**
 * Dot with custom CSS classes.
 * Demonstrates style customization capabilities.
 */
export const WithCustomClasses: Story = {
  args: {
    ...commonArgs,
    additionalVariantClasses: {
      dot: 'custom-dot-class',
    },
    number: 5,
  },
  parameters: {
    docs: {
      source: {
        code: `<Dot
  variant="ALTERNATIVE"
  size="MEDIUM"
  number={5}
  additionalVariantClasses={{
    dot: 'custom-dot-class'
  }}
/>`,
      },
    },
  },
};

/**
 * Label badges with different variants.
 * Text labels instead of numbers.
 */
export const LabelBadges: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Dot variant="ALTERNATIVE" size="MEDIUM" label="New" />
  <Dot variant="WITH_BORDER" size="MEDIUM" label="Hot" />
  <Dot variant="WITHOUT_BORDER" size="MEDIUM" label="Sale" />
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Story {...args} label="New" variant={DotVariantType.ALTERNATIVE} />
      <Story {...args} label="Hot" variant={DotVariantType.WITH_BORDER} />
      <Story {...args} label="Sale" variant={DotVariantType.WITHOUT_BORDER} />
    </div>
  ),
};

/**
 * Status labels with different sizes.
 * Demonstrates label usage across size variants.
 */
export const StatusLabels: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Dot variant="ALTERNATIVE" size="SMALL" label="Beta" />
  <Dot variant="ALTERNATIVE" size="MEDIUM" label="Live" />
  <Dot variant="ALTERNATIVE" size="BIG" label="Pro" />
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Story {...args} label="Beta" size={DotSizeType.SMALL} />
      <Story {...args} label="Live" size={DotSizeType.MEDIUM} />
      <Story {...args} label="Pro" size={DotSizeType.BIG} />
    </div>
  ),
};

/**
 * Mixed content - numbers and labels.
 * Shows flexibility of the component.
 */
export const MixedContent: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Dot variant="ALTERNATIVE" size="MEDIUM" number={5} />
  <Dot variant="ALTERNATIVE" size="MEDIUM" label="New" />
  <Dot variant="ALTERNATIVE" size="MEDIUM" number={99} maxNumber={99} />
  <Dot variant="ALTERNATIVE" size="MEDIUM" label="VIP" />
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Story {...args} number={5} />
      <Story {...args} label="New" />
      <Story {...args} maxNumber={99} number={99} />
      <Story {...args} label="VIP" />
    </div>
  ),
};

/**
 * Feature badges on cards.
 * Real-world usage with labels.
 */
export const FeatureBadges: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <div style={{
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    position: 'relative',
    width: '200px'
  }}>
    <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
      <Dot variant="ALTERNATIVE" size="SMALL" label="New" />
    </div>
    <h3>Premium Feature</h3>
    <p>Latest addition</p>
  </div>

  <div style={{
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    position: 'relative',
    width: '200px'
  }}>
    <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
      <Dot variant="WITH_BORDER" size="SMALL" label="Hot" />
    </div>
    <h3>Popular Choice</h3>
    <p>Most used</p>
  </div>
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
          position: 'relative',
          width: '200px',
        }}
      >
        <div style={{ position: 'absolute', right: '8px', top: '8px' }}>
          <Story
            {...args}
            label="New"
            size={DotSizeType.SMALL}
            variant={DotVariantType.ALTERNATIVE}
          />
        </div>
        <h3 style={{ margin: '0 0 8px 0' }}>Premium Feature</h3>
        <p style={{ margin: 0 }}>Latest addition</p>
      </div>

      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
          position: 'relative',
          width: '200px',
        }}
      >
        <div style={{ position: 'absolute', right: '8px', top: '8px' }}>
          <Story
            {...args}
            label="Hot"
            size={DotSizeType.SMALL}
            variant={DotVariantType.WITH_BORDER}
          />
        </div>
        <h3 style={{ margin: '0 0 8px 0' }}>Popular Choice</h3>
        <p style={{ margin: 0 }}>Most used</p>
      </div>
    </div>
  ),
};
