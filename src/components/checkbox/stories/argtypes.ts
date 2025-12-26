import type { ArgTypes } from 'storybook/internal/types';

import { CheckboxVariantType } from '@/lib/designSystem/kubit/components/checkbox/variants';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is checked',
      name: 'checked',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is disabled',
      name: 'disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean' },
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is in an error state',
      name: 'error',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean' },
    },
    errorMessage: {
      control: {
        type: 'object',
      },
      description: 'The error message of the checkbox',
      name: 'errorMessage',
      table: {
        type: { summary: 'object' },
      },
      type: { name: 'object', value: {} },
    },
    label: {
      control: {
        type: 'object',
      },
      description: 'The label content of the checkbox',
      name: 'label',
      table: {
        type: { summary: 'object' },
      },
      type: { name: 'object', value: {} },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback when the checkbox is changed',
      name: 'onChange',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function' },
    },
    required: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is required',
      name: 'required',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      description: 'Checkbox variant',
      options: Object.values(CheckboxVariantType),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  };
};
