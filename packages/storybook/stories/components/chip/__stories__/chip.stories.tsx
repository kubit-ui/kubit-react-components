import type { Meta, StoryObj } from '@storybook/react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Chip as Story } from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { ICONS } from '@/stories/assets/icons/icons';

import type { ChipProps } from '../types/chip';

import { argtypes } from './argtypes';

const { ChipVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['forms'],
  title: 'Components/Forms/Chip',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ChipProps = {
  variant: ChipVariantType.DEFAULT,
};

/**
 * Basic chip with simple text label.
 * Default configuration for standard chip usage.
 */
export const Basic: Story = {
  args: {
    ...commonArgs,
    label: 'JavaScript',
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="JavaScript"
/>`,
      },
    },
  },
};

/**
 * Chip with left icon.
 * Commonly used for status indicators or categories.
 */
export const WithLeftIcon: Story = {
  args: {
    ...commonArgs,
    label: 'New Message',
    leftIcon: ICONS.PLACEHOLDER,
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="New Message"
  leftIcon={ICONS.MAIL}
/>`,
      },
    },
  },
};

/**
 * Dismissible chip with close button.
 * Used for removable tags or filters.
 */
export const WithCloseIcon: Story = {
  args: {
    ...commonArgs,
    closeIcon: ICONS.CLOSE,
    label: 'Removable Tag',
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="Removable Tag"
  closeIcon={ICONS.CLOSE}
/>`,
      },
    },
  },
};

/**
 * Chip with both left icon and close button.
 * Combines visual indicator with dismissible functionality.
 */
export const WithBothIcons: Story = {
  args: {
    ...commonArgs,
    closeIcon: ICONS.CLOSE,
    label: 'React',
    leftIcon: ICONS.PLACEHOLDER,
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="React"
  leftIcon={ICONS.STAR}
  closeIcon={ICONS.CLOSE}
/>`,
      },
    },
  },
};

/**
 * Range chip displaying value ranges.
 * Useful for price ranges, date ranges, or numeric intervals.
 */
export const WithRange: Story = {
  args: {
    ...commonArgs,
    range: [
      { key: 'min', label: '$100' },
      { key: 'max', label: '$500' },
    ],
    rangeIcon: ICONS.PLACEHOLDER,
    rangeSeparator: 'to',
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  range={[
    { label: '$100', key: 'min' },
    { label: '$500', key: 'max' }
  ]}
  rangeSeparator="to"
  rangeIcon={ICONS.ARROW_RIGHT}
/>`,
      },
    },
  },
};

/**
 * Chip in error state with error message.
 * Shows validation feedback or error conditions.
 */
export const ErrorState: Story = {
  args: {
    ...commonArgs,
    errorIcon: ICONS.CLOSE,
    errorMessage: 'This tag is not valid',
    label: 'Invalid Tag',
    state: 'error',
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="Invalid Tag"
  state="error"
  errorMessage="This tag is not valid"
  errorIcon={ICONS.ERROR}
/>`,
      },
    },
  },
};

/**
 * Disabled chip state.
 * Non-interactive chip for displaying read-only information.
 */
export const Disabled: Story = {
  args: {
    ...commonArgs,
    label: 'Disabled Chip',
    state: 'disabled',
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="Disabled Chip"
  state="disabled"
/>`,
      },
    },
  },
};

/**
 * Collection of removable tag chips.
 * Common pattern for tag management.
 */
export const TagCollection: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Storybook']);

const removeTag = (tagToRemove: string) => {
  setTags(tags.filter(tag => tag !== tagToRemove));
};

<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
  {tags.map(tag => (
    <Chip
      key={tag}
      variant="DEFAULT"
      label={tag}
      closeIcon={ICONS.CLOSE}
    />
  ))}
</div>`,
      },
    },
  },
  render: (args: ChipProps) => {
    const [tags, setTags] = useState([
      'React',
      'TypeScript',
      'Vite',
      'Storybook',
    ]);

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tags.map((tag) => (
          <Story key={tag} {...args} closeIcon={ICONS.CLOSE} label={tag} />
        ))}
      </div>
    );
  },
};

/**
 * Status chips with different visual variants.
 * Shows various chip states and colors.
 */
export const StatusChips: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
  <Chip
    variant="SUCCESS"
    label="Active"
    leftIcon={ICONS.CHECK_CIRCLE}
  />
  <Chip
    variant="WARNING"
    label="Pending"
    leftIcon={ICONS.CLOCK}
  />
  <Chip
    variant="ERROR"
    label="Inactive"
    leftIcon={ICONS.ERROR}
  />
  <Chip
    variant="DEFAULT"
    label="Draft"
    leftIcon={ICONS.EDIT}
  />
</div>`,
      },
    },
  },
  render: (args: ChipProps) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Story
        {...args}
        label="Active"
        leftIcon={ICONS.PLACEHOLDER}
        variant="SUCCESS"
      />
      <Story
        {...args}
        label="Pending"
        leftIcon={ICONS.PLACEHOLDER}
        variant="WARNING"
      />
      <Story
        {...args}
        label="Inactive"
        leftIcon={ICONS.PLACEHOLDER}
        variant="ERROR"
      />
      <Story {...args} label="Draft" leftIcon={ICONS.PLACEHOLDER} />
    </div>
  ),
};

/**
 * Multiple range chips displaying different value ranges.
 * Useful for filter displays or range selections.
 */
export const RangeChips: Story = {
  args: commonArgs,
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
  <Chip
    variant="DEFAULT"
    range={[
      { label: '$0', key: 'min' },
      { label: '$100', key: 'max' }
    ]}
    rangeSeparator="to"
  />
  <Chip
    variant="DEFAULT"
    range={[
      { label: '100', key: 'min' },
      { label: '500', key: 'max' }
    ]}
    rangeSeparator="to"
  />
  <Chip
    variant="DEFAULT"
    range={[
      { label: '01/01/2024', key: 'start' },
      { label: '31/12/2024', key: 'end' }
    ]}
    rangeSeparator="to"
    rangeIcon={ICONS.ARROW_RIGHT}
  />
</div>`,
      },
    },
  },
  render: (args: ChipProps) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Story
        {...args}
        range={[
          { key: 'min', label: '$0' },
          { key: 'max', label: '$100' },
        ]}
        rangeSeparator="to"
      />
      <Story
        {...args}
        range={[
          { key: 'min', label: '100' },
          { key: 'max', label: '500' },
        ]}
        rangeSeparator="to"
      />
      <Story
        {...args}
        range={[
          { key: 'start', label: '01/01/2024' },
          { key: 'end', label: '31/12/2024' },
        ]}
        rangeIcon={ICONS.PLACEHOLDER}
        rangeSeparator="to"
      />
    </div>
  ),
};

/**
 * Chip with custom CSS classes.
 * Demonstrates style customization capabilities.
 */
export const WithCustomClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      chip: 'custom-chip-class',
    },
    label: 'Custom Styled',
    leftIcon: ICONS.PLACEHOLDER,
  },
  parameters: {
    docs: {
      source: {
        code: `<Chip
  variant="DEFAULT"
  label="Custom Styled"
  leftIcon={ICONS.STAR}
  additionalClasses={{
    chip: 'custom-chip-class'
  }}
/>`,
      },
    },
  },
};
