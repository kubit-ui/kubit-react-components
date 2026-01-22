import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { POSITIONS } from '@kubit-ui-web/react-components';
import { Button as ButtonStory } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';
import { LoaderStory as Loader } from '@/stories/assets/loader/loader';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: ButtonStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['actions'],
  title: 'Components/Actions/Button',
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const { ButtonSizeType, ButtonVariantType } = KUBIT_VARIANTS;

/**
 * Primary button - main call-to-action.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
>
  Primary Button
</Button>`,
      },
    },
  },
};

/**
 * Secondary button - alternative actions.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.SECONDARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.SECONDARY}
  size={ButtonSizeType.LARGE}
>
  Secondary Button
</Button>`,
      },
    },
  },
};

/**
 * Small size button.
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: ButtonSizeType.SMALL,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.SMALL}
>
  Small Button
</Button>`,
      },
    },
  },
};

/**
 * Medium size button.
 */
export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: ButtonSizeType.MEDIUM,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.MEDIUM}
>
  Medium Button
</Button>`,
      },
    },
  },
};

/**
 * Large size button.
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
>
  Large Button
</Button>`,
      },
    },
  },
};

/**
 * Button with icon on the left.
 */
export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    icon: ICONS.PLACEHOLDER,
    iconPosition: POSITIONS.LEFT,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  icon={ICONS.PLACEHOLDER}
  iconPosition={POSITIONS.LEFT}
>
  Button with Icon
</Button>`,
      },
    },
  },
};

/**
 * Button with icon on the right.
 */
export const WithIconRight: Story = {
  args: {
    children: 'Button with Icon',
    icon: ICONS.PLACEHOLDER,
    iconPosition: POSITIONS.RIGHT,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  icon={ICONS.PLACEHOLDER}
  iconPosition={POSITIONS.RIGHT}
>
  Button with Icon
</Button>`,
      },
    },
  },
};

/**
 * Icon-only button without text.
 * Always provide aria-label for accessibility.
 */
export const IconOnly: Story = {
  args: {
    ['aria-label']: 'Settings',
    icon: ICONS.PLACEHOLDER,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  icon={ICONS.PLACEHOLDER}
  aria-label="Settings"
/>`,
      },
    },
  },
};

/**
 * Full width button.
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  fullWidth={true}
>
  Full Width Button
</Button>`,
      },
    },
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <ButtonStory {...args} loader={<Loader />} />
    </div>
  ),
};

/**
 * Disabled button state.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  disabled={true}
>
  Disabled Button
</Button>`,
      },
    },
  },
};

/**
 * Button with loading state.
 */
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  loading={true}
  loader={<Loader />}
>
  Loading...
</Button>`,
      },
    },
  },
  render: (args) => <ButtonStory {...args} loader={<Loader />} />,
};

/**
 * Button with custom CSS classes.
 */
export const WithCustomClasses: Story = {
  args: {
    additionalVariantClasses: {
      button: 'custom-button-style',
      icon: 'custom-icon-style',
      loader: 'custom-loader-style',
    },
    children: 'Custom Styled',
    icon: ICONS.PLACEHOLDER,
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  variant={ButtonVariantType.PRIMARY}
  size={ButtonSizeType.LARGE}
  icon={ICONS.PLACEHOLDER}
  additionalVariantClasses={{
    button: 'custom-button-style',
    icon: 'custom-icon-style',
    loader: 'custom-loader-style'
  }}
>
  Custom Styled
</Button>`,
      },
    },
  },
};

/**
 * Button group showing multiple variants together.
 */
export const ButtonGroup: Story = {
  args: {
    children: 'Primary',
    size: ButtonSizeType.LARGE,
    variant: ButtonVariantType.PRIMARY,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.LARGE}>
    Confirm
  </Button>
  <Button variant={ButtonVariantType.SECONDARY} size={ButtonSizeType.LARGE}>
    Cancel
  </Button>
  <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.LARGE} icon={ICONS.PLACEHOLDER}>
    Save
  </Button>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <ButtonStory
        size={ButtonSizeType.LARGE}
        variant={ButtonVariantType.PRIMARY}
      >
        Confirm
      </ButtonStory>
      <ButtonStory
        size={ButtonSizeType.LARGE}
        variant={ButtonVariantType.SECONDARY}
      >
        Cancel
      </ButtonStory>
      <ButtonStory
        icon={ICONS.PLACEHOLDER}
        size={ButtonSizeType.LARGE}
        variant={ButtonVariantType.PRIMARY}
      >
        Save
      </ButtonStory>
    </div>
  ),
};
