import type { Meta, StoryObj } from '@storybook/react-vite';

import { useId, useState } from 'react';

import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { ToggleVariant } from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { NOTE_COLORS, Note } from '@/lib/storybook/components/note/note';

import { ToggleControlled } from '../toggleControlled';
import { argtypes } from './argtypesControlled';

const meta = {
  argTypes: argtypes(),
  component: ToggleControlled,
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrations of how to compose the atomic Toggle with labels to create clickable areas. These patterns can be implemented in product-specific component libraries.',
      },
      source: {
        code: `// Template component for demonstration
const ToggleWithLabel: React.FC<ToggleWithLabelProps> = ({
  label,
  description,
  checked,
  disabled = false,
  variant = ToggleVariant.REGULAR,
  rightIcon,
  leftIcon,
  onToggle,
}) => {
  const toggleId = React.useId();
  const labelId = React.useId();
  const descriptionId = React.useId();

  const handleContainerClick = (): void => {
    if (!disabled) {
      onToggle?.(!checked);
    }
  };

  const handleContainerKeyDown = (event: React.KeyboardEvent): void => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onToggle?.(!checked);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    userSelect: 'none',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
  };

  const labelSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
    pointerEvents: 'none', // Prevent label from interfering with container clicks
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    lineHeight: '1.3',
    color: disabled ? '#999' : '#666',
    pointerEvents: 'none',
  };

  return (
    <div
      style={containerStyle}
      onClick={handleContainerClick}
      onKeyDown={handleContainerKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={checked}
      aria-disabled={disabled}
      aria-labelledby={labelId}
      aria-describedby={description ? descriptionId : undefined}
      onMouseEnter={e => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      onFocus={e => {
        e.currentTarget.style.outline = '2px solid #0066cc';
        e.currentTarget.style.outlineOffset = '2px';
        e.currentTarget.style.backgroundColor = '#f0f8ff';
      }}
      onBlur={e => {
        e.currentTarget.style.outline = 'none';
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div style={labelSectionStyle}>
        <Label
          id={labelId}
          inputId={toggleId}
          weight={600}
          color={disabled ? '#666' : '#333'}
        >
          {label}
        </Label>
        {description && (
          <span id={descriptionId} style={descriptionStyle}>
            {description}
          </span>
        )}
      </div>

      <ToggleControlled
        id={toggleId}
        variant={variant}
        checked={checked}
        disabled={disabled}
        onToggle={onToggle}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        component="span"
        tabIndex={-1} // Remove from tab order since container is focusable
        aria-labelledby={labelId}
        aria-describedby={description ? descriptionId : undefined}
      />
    </div>
  );
};`,
      },
    },
    figmaUrl: '<URL FOR THE COMPONENT DESIGN>',
    githubUrl: '<URL FOR THE COMPONENT SOURCE>',
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Forms/Toggle/Compositions/WithLabel',
} satisfies Meta<typeof ToggleControlled>;

export default meta;
type Story = StoryObj<typeof meta>;

interface ToggleWithLabelProps {
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
  variant?: Parameters<typeof ToggleControlled>[0]['variant'];
  rightIcon?: Parameters<typeof ToggleControlled>[0]['rightIcon'];
  leftIcon?: Parameters<typeof ToggleControlled>[0]['leftIcon'];
  onToggle?: (checked: boolean) => void;
}

// Template component for demonstration
const ToggleWithLabel: React.FC<ToggleWithLabelProps> = ({
  checked,
  description,
  disabled = false,
  label,
  leftIcon,
  onToggle,
  rightIcon,
  variant = ToggleVariant.REGULAR,
}) => {
  const toggleId = useId();
  const labelId = useId();
  const descriptionId = useId();

  const handleContainerClick = (): void => {
    if (!disabled) {
      onToggle?.(!checked);
    }
  };

  const handleContainerKeyDown = (event: React.KeyboardEvent): void => {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onToggle?.(!checked);
    }
  };

  const containerStyle: React.CSSProperties = {
    alignItems: 'center',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    gap: '12px',
    opacity: disabled ? 0.6 : 1,
    padding: '8px',
    transition: 'background-color 0.2s ease',
    userSelect: 'none',
  };

  const labelSectionStyle: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '4px',
    pointerEvents: 'none', // Prevent label from interfering with container clicks
  };

  const descriptionStyle: React.CSSProperties = {
    color: disabled ? '#999' : '#666',
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    lineHeight: '1.3',
    pointerEvents: 'none',
  };

  return (
    <div
      aria-describedby={description ? descriptionId : undefined}
      aria-disabled={disabled}
      aria-labelledby={labelId}
      aria-pressed={checked}
      role="button"
      style={containerStyle}
      tabIndex={0}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      onClick={handleContainerClick}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #0066cc';
        e.currentTarget.style.outlineOffset = '2px';
        e.currentTarget.style.backgroundColor = '#f0f8ff';
      }}
      onKeyDown={handleContainerKeyDown}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div style={labelSectionStyle}>
        <Label
          color={disabled ? '#666' : '#333'}
          id={labelId}
          inputId={toggleId}
          weight={600}
        >
          {label}
        </Label>
        {description && (
          <span id={descriptionId} style={descriptionStyle}>
            {description}
          </span>
        )}
      </div>

      <ToggleControlled
        aria-describedby={description ? descriptionId : undefined}
        aria-labelledby={labelId}
        checked={checked}
        component="span"
        disabled={disabled}
        id={toggleId}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        tabIndex={-1} // Remove from tab order since container is focusable
        variant={variant}
        onToggle={
          onToggle ||
          (() => {
            // no-op
          })
        }
      />
    </div>
  );
};

const commonArgs = {
  checked: false,
  onToggle: (checked: boolean) => {
    // eslint-disable-next-line no-console
    console.log('Toggle changed:', checked);
  },
  variant: ToggleVariant.REGULAR,
};

export const BasicLabelComposition: Story = {
  args: {
    ...commonArgs,
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement => (
      <>
        <Note
          heading="Basic Label Composition"
          text={[
            'This example shows how to compose the atomic Toggle with the existing Label component.',
            'The entire label + toggle area is clickable and focusable.',
            '',
            '🔑 Key Recommendations:',
            '• Use component="span" ("or <div> or similar") to make the toggle decorative (aria-hidden=true)',
            '• Let the parent container handle all interaction and accessibility',
            '• Avoid nested interactive elements - this violates accessibility guidelines',
            '• This pattern is essential for ui-product-components integrations',
          ]}
          theme={NOTE_COLORS.ORANGE}
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Basic composition with a text label using the existing Label component. The entire container is clickable and focusable.',
      },
    },
  },
  render: function BasicLabelCompositionRender() {
    const [checked, setChecked] = useState(false);

    return (
      <ToggleWithLabel
        checked={checked}
        label="Enable notifications"
        leftIcon={{ icon: ICONS.CLOSE }}
        rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
        variant={ToggleVariant.REGULAR}
        onToggle={setChecked}
      />
    );
  },
};

export const WithDescription: Story = {
  args: {
    ...commonArgs,
    checked: true,
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement => (
      <>
        <Note
          heading="Label with Description"
          text={[
            'This example includes a description below the main label.',
            'Perfect for toggles that need additional context or explanation.',
          ]}
          theme={NOTE_COLORS.LIGHT_BLUE}
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Composition with label and description text.',
      },
    },
  },
  render: function WithDescriptionRender() {
    const [checked, setChecked] = useState(true);

    return (
      <ToggleWithLabel
        checked={checked}
        description="Switch to dark theme for better viewing in low light"
        label="Dark mode"
        variant={ToggleVariant.REGULAR}
        onToggle={setChecked}
      />
    );
  },
};

export const DisabledState: Story = {
  args: {
    ...commonArgs,
    disabled: true,
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement => (
      <>
        <Note
          heading="Disabled States"
          text={[
            'Both checked and unchecked disabled states are shown.',
            'The entire composition respects the disabled state with appropriate visual feedback.',
          ]}
          theme={NOTE_COLORS.LIGHT_BLUE}
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Examples of toggles with labels in disabled states.',
      },
    },
  },
  render: function DisabledStateRender() {
    const [, setChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ToggleWithLabel
          disabled
          checked={false}
          description="This toggle is disabled in the unchecked state"
          label="Disabled unchecked"
          variant={ToggleVariant.REGULAR}
          onToggle={setChecked}
        />
        <ToggleWithLabel
          checked
          disabled
          description="This toggle is disabled in the checked state"
          label="Disabled checked"
          variant={ToggleVariant.REGULAR}
          onToggle={setChecked}
        />
      </div>
    );
  },
};
