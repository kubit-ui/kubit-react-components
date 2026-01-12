import type { Meta, StoryObj } from '@storybook/react';

import { type ChangeEvent, useState } from 'react';

import { CheckboxVariantType } from '@/lib/designSystem/kubit/components/checkbox/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { CheckboxUnControlledProps } from '../types/checkbox';

import { CheckboxControlled } from '../checkboxControlled';
import { CheckboxUnControlled as Story } from '../checkboxUnControlled';
import { argtypes } from './argtypes';

const meta: Meta<typeof Story> = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['forms'],
  title: 'Components/Forms/Checkbox',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: CheckboxUnControlledProps = {
  checkboxBase: {
    variant: 'DEFAULT',
  },
  checkedIcon: ICONS.CHECKMARK_THICK,
  variant: CheckboxVariantType.DEFAULT,
};

/**
 * Basic uncontrolled checkbox with label.
 * Default configuration for simple checkbox usage.
 */
export const Basic: Story = {
  args: {
    ...commonArgs,
    label: 'I accept the terms and conditions',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  label="I accept the terms and conditions"
  checkedIcon={ICONS.CHECKMARK_THICK}
/>`,
      },
    },
  },
};

/**
 * Checkbox in checked state.
 */
export const Checked: Story = {
  args: {
    ...commonArgs,
    checked: true,
    label: 'Checked checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  checked={true}
  label="Checked checkbox"
  checkedIcon={ICONS.CHECKMARK_THICK}
/>`,
      },
    },
  },
};

/**
 * Disabled checkbox state.
 * Cannot be interacted with.
 */
export const Disabled: Story = {
  args: {
    ...commonArgs,
    disabled: true,
    label: 'Disabled checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  disabled={true}
  label="Disabled checkbox"
/>`,
      },
    },
  },
};

/**
 * Disabled and checked state.
 */
export const DisabledChecked: Story = {
  args: {
    ...commonArgs,
    checked: true,
    disabled: true,
    label: 'Disabled checked checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  checked={true}
  disabled={true}
  label="Disabled checked checkbox"
/>`,
      },
    },
  },
};

/**
 * Checkbox with error state.
 * Shows visual error feedback.
 */
export const WithError: Story = {
  args: {
    ...commonArgs,
    error: true,
    errorMessage: {
      icon: ICONS.ERROR,
      message: 'This field is required',
    },
    label: 'Accept terms',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  error={true}
  errorMessage={{
    message: 'This field is required',
    icon: ICONS.ERROR
  }}
  label="Accept terms"
/>`,
      },
    },
  },
};

/**
 * Required checkbox.
 * Marked as required for form validation.
 */
export const Required: Story = {
  args: {
    ...commonArgs,
    label: 'I agree to the privacy policy *',
    required: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  required={true}
  label="I agree to the privacy policy *"
/>`,
      },
    },
  },
};

/**
 * Checkbox with screen reader text.
 * Additional context for assistive technologies.
 */
export const WithScreenReaderText: Story = {
  args: {
    ...commonArgs,
    label: 'Subscribe to newsletter',
    screenReaderText: 'Subscribe to receive weekly updates via email',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  label="Subscribe to newsletter"
  screenReaderText="Subscribe to receive weekly updates via email"
/>`,
      },
    },
  },
};

/**
 * Checkbox without label.
 * Use aria-label for accessibility.
 */
export const WithoutLabel: Story = {
  args: {
    ...commonArgs,
    ['aria-label']: 'Accept terms',
  },
  parameters: {
    docs: {
      source: {
        code: `<CheckboxUnControlled
  variant="DEFAULT"
  aria-label="Accept terms"
/>`,
      },
    },
  },
};

/**
 * Controlled checkbox with state management.
 * Demonstrates interactive checkbox behavior.
 */
export const Controlled: Story = {
  args: {
    ...commonArgs,
    label: 'Toggle me',
  },
  parameters: {
    docs: {
      source: {
        code: `const [checked, setChecked] = useState(false);

<CheckboxControlled
  variant="DEFAULT"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Toggle me"
/>`,
      },
    },
  },
  render: (args: CheckboxUnControlledProps) => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckboxControlled
        {...args}
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChecked(e.target.checked)
        }
      />
    );
  },
};

/**
 * Multiple checkboxes in a group.
 * Common pattern for option selection.
 */
export const CheckboxGroup: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <CheckboxUnControlled
    variant="DEFAULT"
    label="Option 1"
  />
  <CheckboxUnControlled
    variant="DEFAULT"
    label="Option 2"
  />
  <CheckboxUnControlled
    variant="DEFAULT"
    label="Option 3"
  />
</div>`,
      },
    },
  },
  render: (args: CheckboxUnControlledProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Story {...args} label={{ content: 'Option 1' }} />
      <Story {...args} label={{ content: 'Option 2' }} />
      <Story {...args} label={{ content: 'Option 3' }} />
    </div>
  ),
};

/**
 * Select all pattern with controlled checkboxes.
 * Demonstrates parent-child checkbox relationship.
 */
export const SelectAll: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `const [items, setItems] = useState([
  { id: 1, checked: false, label: 'Item 1' },
  { id: 2, checked: false, label: 'Item 2' },
  { id: 3, checked: false, label: 'Item 3' },
]);

const allChecked = items.every(item => item.checked);

<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <CheckboxControlled
    variant="DEFAULT"
    checked={allChecked}
    onChange={(e) => {
      setItems(items.map(item => ({ ...item, checked: e.target.checked })));
    }}
    label="Select All"
  />
  <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {items.map(item => (
      <CheckboxControlled
        key={item.id}
        variant="DEFAULT"
        checked={item.checked}
        onChange={(e) => {
          setItems(items.map(i =>
            i.id === item.id ? { ...i, checked: e.target.checked } : i
          ));
        }}
        label={item.label}
      />
    ))}
  </div>
</div>`,
      },
    },
  },
  render: (args) => {
    const [items, setItems] = useState([
      { checked: false, id: 1, label: 'Item 1' },
      { checked: false, id: 2, label: 'Item 2' },
      { checked: false, id: 3, label: 'Item 3' },
    ]);

    const allChecked = items.every((item) => item.checked);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <CheckboxControlled
          {...args}
          checked={allChecked}
          label="Select All"
          onChange={(e) => {
            setItems(
              items.map((item) => ({ ...item, checked: e.target.checked })),
            );
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingLeft: '24px',
          }}
        >
          {items.map((item) => (
            <CheckboxControlled
              key={item.id}
              {...args}
              checked={item.checked}
              label={item.label}
              onChange={(e) => {
                setItems(
                  items.map((i) =>
                    i.id === item.id ? { ...i, checked: e.target.checked } : i,
                  ),
                );
              }}
            />
          ))}
        </div>
      </div>
    );
  },
};
