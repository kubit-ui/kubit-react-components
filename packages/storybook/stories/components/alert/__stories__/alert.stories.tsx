import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Alert as Story } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['feedback'],
  title: 'Components/Feedback/Alert',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const { AlertVariantType } = KUBIT_VARIANTS;

/**
 * Basic informational alert displaying a simple message.
 * This is the default variant for neutral, informational content.
 */
export const Informative: Story = {
  args: {
    content: 'This is an informational message to provide context.',
    variant: AlertVariantType.INFORMATIVE,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.INFORMATIVE}
  content="This is an informational message to provide context."
/>`,
      },
    },
  },
};

/**
 * Success alert for confirming positive outcomes or completed actions.
 * Use this variant to communicate successful operations.
 */
export const Success: Story = {
  args: {
    content: 'Your changes have been saved successfully!',
    variant: AlertVariantType.SUCCESS,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.SUCCESS}
  content="Your changes have been saved successfully!"
/>`,
      },
    },
  },
};

/**
 * Warning alert for highlighting potential issues or important information.
 * Use this variant when user attention is needed but the situation is not critical.
 */
export const Warning: Story = {
  args: {
    content: 'Please review your information before proceeding.',
    variant: AlertVariantType.WARNING,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.WARNING}
  content="Please review your information before proceeding."
/>`,
      },
    },
  },
};

/**
 * Error alert for communicating failures or critical issues.
 * Use this variant for error messages that require user attention.
 */
export const Error: Story = {
  args: {
    content: 'An error occurred while processing your request.',
    variant: AlertVariantType.ERROR,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.ERROR}
  content="An error occurred while processing your request."
/>`,
      },
    },
  },
};

/**
 * Alert with rich content formatting.
 * You can customize text properties like weight for emphasis.
 */
export const WithRichContent: Story = {
  args: {
    content: {
      content: 'Your session will expire in 5 minutes. Please save your work.',
      weight: 700,
    },
    variant: AlertVariantType.INFORMATIVE,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.INFORMATIVE}
  content={{
    content: 'Your session will expire in 5 minutes. Please save your work.',
    weight: 700
  }}
/>`,
      },
    },
  },
};

/**
 * Alert with ARIA live region set to "polite".
 * Screen readers will announce the message when they finish current speech.
 * Use this for non-critical updates.
 */
export const WithAriaLivePolite: Story = {
  args: {
    ariaLive: 'polite',
    content: 'Your preferences have been updated.',
    variant: AlertVariantType.SUCCESS,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.SUCCESS}
  content="Your preferences have been updated."
  ariaLive="polite"
/>`,
      },
    },
  },
};

/**
 * Alert with ARIA live region set to "assertive".
 * Screen readers will interrupt current speech to announce this message immediately.
 * Use this only for critical errors or urgent information.
 */
export const WithAriaLiveAssertive: Story = {
  args: {
    ariaLive: 'assertive',
    content: 'Critical error: Your session has expired. Please log in again.',
    variant: AlertVariantType.ERROR,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert
  variant={AlertVariantType.ERROR}
  content="Critical error: Your session has expired. Please log in again."
  ariaLive="assertive"
/>`,
      },
    },
  },
};

/**
 * Multiple alerts displayed in a vertical stack.
 * Shows different alert variants used together for various message types.
 */
export const MultipleAlerts: Story = {
  args: {
    content: '',
    variant: AlertVariantType.INFORMATIVE,
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Alert
    variant={AlertVariantType.SUCCESS}
    content="File uploaded successfully"
  />
  <Alert
    variant={AlertVariantType.WARNING}
    content="Low disk space detected"
  />
  <Alert
    variant={AlertVariantType.ERROR}
    content="Connection to server lost"
  />
  <Alert
    variant={AlertVariantType.INFORMATIVE}
    content="System maintenance scheduled for tonight"
  />
</div>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '500px',
      }}
    >
      <Story
        content="File uploaded successfully"
        variant={AlertVariantType.SUCCESS}
      />
      <Story
        content="Low disk space detected"
        variant={AlertVariantType.WARNING}
      />
      <Story
        content="Connection to server lost"
        variant={AlertVariantType.ERROR}
      />
      <Story
        content="System maintenance scheduled for tonight"
        variant={AlertVariantType.INFORMATIVE}
      />
    </div>
  ),
};
