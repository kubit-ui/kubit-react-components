import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,

    // Internal props - not exposed in uncontrolled component
    canvasRef: {
      control: false,
      table: {
        disable: true,
      },
    },
    // Public props
    disabled: {
      control: { type: 'boolean' },
      description: 'Prop to disable the component',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Prop to set the error state',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    errorText: {
      control: { type: 'object' },
      description: 'Text to show when the signature is invalid',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'CommonTextProps',
        },
      },
      type: { name: 'string' },
    },
    onBlurContainer: {
      control: false,
      table: {
        disable: true,
      },
    },

    onChange: {
      control: false,
      description: 'Function that is called when drawing on the component',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: '(value: string) => void',
        },
      },
    },
    onClickContainer: {
      control: false,
      table: {
        disable: true,
      },
    },
    placeholder: {
      control: { type: 'object' },
      description: 'Text to show when the signature is empty',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'CommonTextProps',
        },
      },
      type: { name: 'string', required: true },
    },
    setSignatureStyles: {
      control: false,
      table: {
        disable: true,
      },
    },
    state: {
      control: false,
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'text' },
      description: 'Variant of the component',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
  };
};
