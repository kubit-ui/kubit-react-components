import { useState } from 'react';

import {
  ToggleControlled,
  type ToggleProps,
  ToggleUncontrolled,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';

const meta = {
  component: ToggleControlled,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Forms/Toggle',
} satisfies Meta<typeof ToggleControlled>;

export default meta;

type Story = StoryObj<typeof meta>;

// Helper component for controlled examples
const StoryWithHooks = (args: ToggleProps): JSX.Element => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleToggle = (newChecked: boolean): void => {
    setChecked(newChecked);
    args.onToggle?.(newChecked);
  };

  return (
    <ToggleControlled {...args} checked={checked} onToggle={handleToggle} />
  );
};

export const Basic: Story = {
  args: {
    'aria-label': 'Basic toggle',
    checked: false,
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic toggle switch in its default state.',
      },
      source: {
        code: `const [checked, setChecked] = useState(false);

<ToggleControlled
  variant='REGULAR'
  checked={checked}
  onToggle={setChecked}
  aria-label='Basic toggle'
/>`,
      },
    },
  },
  render: StoryWithHooks,
};

export const WithIcons: Story = {
  args: {
    'aria-label': 'Toggle with icons',
    checked: false,
    leftIcon: { icon: ICONS.CLOSE },
    rightIcon: { icon: ICONS.CHECKMARK_THICK },
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle with custom icons for on and off states.',
      },
      source: {
        code: `const [checked, setChecked] = useState(false);

<ToggleControlled
  variant='REGULAR'
  checked={checked}
  onToggle={setChecked}
  leftIcon={{ icon: ICONS.CLOSE }}
  rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
  aria-label='Toggle with icons'
/>`,
      },
    },
  },
  render: StoryWithHooks,
};

export const Checked: Story = {
  args: {
    'aria-label': 'Checked toggle',
    checked: true,
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle in checked state.',
      },
      source: {
        code: `const [checked, setChecked] = useState(true);

<ToggleControlled
  variant='REGULAR'
  checked={checked}
  onToggle={setChecked}
  aria-label='Checked toggle'
/>`,
      },
    },
  },
  render: StoryWithHooks,
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled toggle',
    checked: false,
    disabled: true,
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle in disabled state prevents user interaction.',
      },
      source: {
        code: `<ToggleControlled
  variant='REGULAR'
  checked={false}
  disabled={true}
  aria-label='Disabled toggle'
/>`,
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    'aria-label': 'Disabled checked toggle',
    checked: true,
    disabled: true,
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle in disabled and checked state.',
      },
      source: {
        code: `<ToggleControlled
  variant='REGULAR'
  checked={true}
  disabled={true}
  aria-label='Disabled checked toggle'
/>`,
      },
    },
  },
};

export const UncontrolledVersion: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled version manages its own state internally.',
      },
      source: {
        code: `<ToggleUncontrolled
  variant='REGULAR'
  defaultChecked={false}
  onChange={(checked) => console.log('Changed:', checked)}
  aria-label='Uncontrolled toggle'
/>`,
      },
    },
  },
  render: () => (
    <ToggleUncontrolled
      aria-label="Uncontrolled toggle"
      defaultChecked={false}
      variant="REGULAR"
      onToggle={(checked: boolean) => {
        // eslint-disable-next-line no-console
        console.log('Changed:', checked);
      }}
    />
  ),
};

export const UncontrolledWithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled toggle with custom icons.',
      },
      source: {
        code: `<ToggleUncontrolled
  variant='REGULAR'
  defaultChecked={false}
  leftIcon={{ icon: ICONS.CLOSE }}
  rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
  onChange={(checked) => console.log('Changed:', checked)}
  aria-label='Uncontrolled toggle with icons'
/>`,
      },
    },
  },
  render: () => (
    <ToggleUncontrolled
      aria-label="Uncontrolled toggle with icons"
      defaultChecked={false}
      leftIcon={{ icon: ICONS.CLOSE }}
      rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
      variant="REGULAR"
      onToggle={(checked: boolean) => {
        // eslint-disable-next-line no-console
        console.log('Changed:', checked);
      }}
    />
  ),
};

export const WithOnChangeCallback: Story = {
  args: {
    'aria-label': 'Toggle with callback',
    checked: false,
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle with onChange callback to handle state changes.',
      },
      source: {
        code: `const [checked, setChecked] = useState(false);

const handleToggle = (newChecked: boolean): void => {
  setChecked(newChecked);
  console.log('Toggle changed to:', newChecked);
};

<ToggleControlled
  variant='REGULAR'
  checked={checked}
  onToggle={handleToggle}
  aria-label='Toggle with callback'
/>`,
      },
    },
  },
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(args.checked || false);

    const handleToggle = (newChecked: boolean): void => {
      setChecked(newChecked);
      // eslint-disable-next-line no-console
      console.log('Toggle changed to:', newChecked);
    };

    return (
      <ToggleControlled {...args} checked={checked} onToggle={handleToggle} />
    );
  },
};

export const MultipleToggles: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Multiple toggle switches managing different states.',
      },
      source: {
        code: `const [settings, setSettings] = useState({
  notifications: false,
  darkMode: true,
  autoSave: false,
});

<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <ToggleControlled
    variant='REGULAR'
    checked={settings.notifications}
    onToggle={(checked) => setSettings({ ...settings, notifications: checked })}
    aria-label='Enable notifications'
  />
  <ToggleControlled
    variant='REGULAR'
    checked={settings.darkMode}
    onToggle={(checked) => setSettings({ ...settings, darkMode: checked })}
    aria-label='Dark mode'
  />
  <ToggleControlled
    variant='REGULAR'
    checked={settings.autoSave}
    onToggle={(checked) => setSettings({ ...settings, autoSave: checked })}
    aria-label='Auto save'
  />
</div>`,
      },
    },
  },
  render: () => {
    const [settings, setSettings] = useState({
      autoSave: false,
      darkMode: true,
      notifications: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ToggleControlled
          aria-label="Enable notifications"
          checked={settings.notifications}
          variant="REGULAR"
          onToggle={(checked: boolean) =>
            setSettings({ ...settings, notifications: checked })
          }
        />
        <ToggleControlled
          aria-label="Dark mode"
          checked={settings.darkMode}
          variant="REGULAR"
          onToggle={(checked: boolean) =>
            setSettings({ ...settings, darkMode: checked })
          }
        />
        <ToggleControlled
          aria-label="Auto save"
          checked={settings.autoSave}
          variant="REGULAR"
          onToggle={(checked: boolean) =>
            setSettings({ ...settings, autoSave: checked })
          }
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Showcase of all toggle states: unchecked, checked, disabled unchecked, disabled checked.',
      },
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <ToggleControlled
    variant='REGULAR'
    checked={false}
    aria-label='Unchecked'
  />
  <ToggleControlled
    variant='REGULAR'
    checked={true}
    aria-label='Checked'
  />
  <ToggleControlled
    variant='REGULAR'
    checked={false}
    disabled={true}
    aria-label='Disabled unchecked'
  />
  <ToggleControlled
    variant='REGULAR'
    checked={true}
    disabled={true}
    aria-label='Disabled checked'
  />
</div>`,
      },
    },
  },
  render: () => {
    const [unchecked, setUnchecked] = useState(false);
    const [checked, setChecked] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ToggleControlled
          aria-label="Unchecked"
          checked={unchecked}
          variant="REGULAR"
          onToggle={setUnchecked}
        />
        <ToggleControlled
          aria-label="Checked"
          checked={checked}
          variant="REGULAR"
          onToggle={setChecked}
        />
        <ToggleControlled
          aria-label="Disabled unchecked"
          checked={false}
          disabled={true}
          variant="REGULAR"
        />
        <ToggleControlled
          aria-label="Disabled checked"
          checked={true}
          disabled={true}
          variant="REGULAR"
        />
      </div>
    );
  },
};

export const Toggle: Story = {
  args: {
    'aria-label': 'Toggle',
    checked: false,
    leftIcon: { icon: ICONS.CLOSE },
    rightIcon: { icon: ICONS.CHECKMARK_THICK },
    variant: 'REGULAR',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete toggle example with all features.',
      },
      source: {
        code: `const [checked, setChecked] = useState(false);

<ToggleControlled
  variant='REGULAR'
  checked={checked}
  onToggle={setChecked}
  leftIcon={{ icon: ICONS.CLOSE }}
  rightIcon={{ icon: ICONS.CHECKMARK_THICK }}
  aria-label='Toggle'
/>`,
      },
    },
  },
  render: StoryWithHooks,
};
