import type { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentName } from '../componentName';
import type { ComponentNameProps } from '../types/componentName';
import { argtypes } from './argtypes';

/**
 * ComponentName provides [brief description of what the component does].
 *
 * ## Features
 * - Feature 1
 * - Feature 2
 * - Feature 3
 *
 * ## Accessibility
 * - ARIA attributes are properly set
 * - Keyboard navigation is fully supported
 * - Screen reader compatible
 */
const meta = {
  argTypes: argtypes(),
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Detailed description of the component and its use cases.',
      },
    },
    // Add custom backgrounds for this component if needed
    // backgrounds: {
    //   values: [
    //     { name: 'custom', value: '#f0f0f0' },
    //   ],
    // },
  },
  render: ({ ...args }) => {
    return <ComponentName {...args} />;
  },
  tags: ['autodocs', 'resources'], // Adjust tags based on component type
  title: 'Components/Resources/ComponentName', // Adjust path
} satisfies Meta<typeof ComponentName>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ComponentNameProps = {
  // Common default props
  prop1: 'value1',
  prop2: false,
};

/**
 * Default story showing the component in its most common state.
 */
export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

/**
 * Example with custom styling using additionalVariantClasses.
 */
export const WithCustomClasses: Story = {
  args: {
    ...commonArgs,
    additionalVariantClasses: {
      container: 'custom-background',
      element: 'custom-border',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to apply custom CSS classes to component parts.',
      },
    },
  },
};

/**
 * Disabled state of the component.
 */
export const Disabled: Story = {
  args: {
    ...commonArgs,
    disabled: true,
  },
};

/**
 * Component in different sizes (if applicable).
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ComponentName {...commonArgs} size="small" />
      <ComponentName {...commonArgs} size="medium" />
      <ComponentName {...commonArgs} size="large" />
    </div>
  ),
};

/**
 * Component in different variants (if applicable).
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ComponentName {...commonArgs} variant="primary" />
      <ComponentName {...commonArgs} variant="secondary" />
      <ComponentName {...commonArgs} variant="tertiary" />
    </div>
  ),
};

/**
 * Interactive example for testing user interactions.
 */
export const Interactive: Story = {
  args: {
    ...commonArgs,
    onClick: () => alert('Clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Try clicking the component to see the interaction.',
      },
    },
  },
};

/**
 * Responsive example showing behavior at different viewports.
 */
export const Responsive: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    docs: {
      description: {
        story:
          'Use the viewport toolbar to see how the component adapts to different screen sizes.',
      },
    },
  },
};

/**
 * Accessibility example with specific a11y checks.
 */
export const AccessibilityExample: Story = {
  args: {
    ...commonArgs,
    'aria-label': 'Descriptive label for screen readers',
  },
  parameters: {
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};
