import { Icon as Story } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/icon',
    layout: 'centered',
  },
  tags: ['resources'],
  title: 'Components/Resources/Icon',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  complex: false,
  height: '48px',
  icon: ICONS.PLACEHOLDER,
  width: '48px',
};

export const Basic: Story = {
  args: {
    ...commonArgs,
    altText: 'Basic icon',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Basic icon"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const WithColor: Story = {
  args: {
    ...commonArgs,
    altText: 'Colored icon',
    color: '#FF6B6B',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Colored icon"
  color="#FF6B6B"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const WithFallback: Story = {
  args: {
    ...commonArgs,
    altText: 'Icon with fallback',
    fallbackIcon: ICONS.GHOST,
    icon: 'NonExistentIcon',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon="NonExistentIcon"
  fallbackIcon={ICONS.GHOST}
  altText="Icon with fallback"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    ...commonArgs,
    altText: 'Interactive icon',
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert('Icon clicked!');
    },
    screenReaderText: 'Click to perform action',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Interactive icon"
  onClick={() => alert('Icon clicked!')}
  screenReaderText="Click to perform action"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    ...commonArgs,
    altText: 'Small icon',
    height: '16px',
    width: '16px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Small icon"
  width="16px"
  height="16px"
/>`,
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    ...commonArgs,
    altText: 'Medium icon',
    height: '32px',
    width: '32px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Medium icon"
  width="32px"
  height="32px"
/>`,
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...commonArgs,
    altText: 'Large icon',
    height: '64px',
    width: '64px',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Large icon"
  width="64px"
  height="64px"
/>`,
      },
    },
  },
};

export const WithRotation: Story = {
  args: {
    ...commonArgs,
    altText: 'Rotated icon',
    rotate: '45deg',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Rotated icon"
  rotate="45deg"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const WithTransition: Story = {
  args: {
    ...commonArgs,
    altText: 'Icon with transition',
    rotate: '90deg',
    transitionDuration: '0.5s',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Icon with transition"
  rotate="90deg"
  transitionDuration="0.5s"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...commonArgs,
    altText: 'Disabled icon',
    disabled: true,
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert('This should not fire');
    },
    screenReaderText: 'Disabled action',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Disabled icon"
  disabled={true}
  onClick={() => alert('This should not fire')}
  screenReaderText="Disabled action"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const WithAriaLabel: Story = {
  args: {
    ...commonArgs,
    altText: 'Icon with aria label',
    ['aria-label']: 'Custom aria label',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Icon with aria label"
  aria-label="Custom aria label"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const WithAriaExpanded: Story = {
  args: {
    ...commonArgs,
    altText: 'Expandable menu icon',
    ['aria-controls']: 'menu-content',
    ['aria-expanded']: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Expandable menu icon"
  aria-expanded={true}
  aria-controls="menu-content"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const HiddenFromScreenReaders: Story = {
  args: {
    ...commonArgs,
    altText: 'Decorative icon',
    ['aria-hidden']: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Decorative icon"
  aria-hidden={true}
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const WithCustomId: Story = {
  args: {
    ...commonArgs,
    altText: 'Icon with custom ID',
    id: 'custom-icon-id',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Icon with custom ID"
  id="custom-icon-id"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const LazyLoading: Story = {
  args: {
    ...commonArgs,
    altText: 'Lazy loaded icon',
    loading: 'lazy',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon
  icon={ICONS.PLACEHOLDER}
  altText="Lazy loaded icon"
  loading="lazy"
  width="48px"
  height="48px"
/>`,
      },
    },
  },
};

export const MultipleIcons: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Icon
    icon={ICONS.PLACEHOLDER}
    altText="Icon 1"
    color="#FF6B6B"
    width="32px"
    height="32px"
  />
  <Icon
    icon={ICONS.PLACEHOLDER}
    altText="Icon 2"
    color="#4ECDC4"
    width="32px"
    height="32px"
  />
  <Icon
    icon={ICONS.PLACEHOLDER}
    altText="Icon 3"
    color="#45B7D1"
    width="32px"
    height="32px"
  />
  <Icon
    icon={ICONS.PLACEHOLDER}
    altText="Icon 4"
    color="#FFA07A"
    width="32px"
    height="32px"
  />
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '16px' }}>
      <Story
        altText="Icon 1"
        color="#FF6B6B"
        height="32px"
        icon={ICONS.PLACEHOLDER}
        width="32px"
      />
      <Story
        altText="Icon 2"
        color="#4ECDC4"
        height="32px"
        icon={ICONS.PLACEHOLDER}
        width="32px"
      />
      <Story
        altText="Icon 3"
        color="#45B7D1"
        height="32px"
        icon={ICONS.PLACEHOLDER}
        width="32px"
      />
      <Story
        altText="Icon 4"
        color="#FFA07A"
        height="32px"
        icon={ICONS.PLACEHOLDER}
        width="32px"
      />
    </div>
  ),
};

export const SizeComparison: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
  <Icon icon={ICONS.PLACEHOLDER} altText="Small" width="16px" height="16px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="Medium" width="24px" height="24px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="Large" width="32px" height="32px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="X-Large" width="48px" height="48px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="XX-Large" width="64px" height="64px" />
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="Small"
          height="16px"
          icon={ICONS.PLACEHOLDER}
          width="16px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>16px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="Medium"
          height="24px"
          icon={ICONS.PLACEHOLDER}
          width="24px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>24px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="Large"
          height="32px"
          icon={ICONS.PLACEHOLDER}
          width="32px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>32px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="X-Large"
          height="48px"
          icon={ICONS.PLACEHOLDER}
          width="48px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>48px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="XX-Large"
          height="64px"
          icon={ICONS.PLACEHOLDER}
          width="64px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>64px</div>
      </div>
    </div>
  ),
};

export const RotationExamples: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
  <Icon icon={ICONS.PLACEHOLDER} altText="0 degrees" rotate="0deg" width="32px" height="32px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="45 degrees" rotate="45deg" width="32px" height="32px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="90 degrees" rotate="90deg" width="32px" height="32px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="180 degrees" rotate="180deg" width="32px" height="32px" />
  <Icon icon={ICONS.PLACEHOLDER} altText="270 degrees" rotate="270deg" width="32px" height="32px" />
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="0 degrees"
          height="32px"
          icon={ICONS.PLACEHOLDER}
          rotate="0deg"
          width="32px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>0°</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="45 degrees"
          height="32px"
          icon={ICONS.PLACEHOLDER}
          rotate="45deg"
          width="32px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>45°</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="90 degrees"
          height="32px"
          icon={ICONS.PLACEHOLDER}
          rotate="90deg"
          width="32px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>90°</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="180 degrees"
          height="32px"
          icon={ICONS.PLACEHOLDER}
          rotate="180deg"
          width="32px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>180°</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Story
          altText="270 degrees"
          height="32px"
          icon={ICONS.PLACEHOLDER}
          rotate="270deg"
          width="32px"
        />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>270°</div>
      </div>
    </div>
  ),
};
