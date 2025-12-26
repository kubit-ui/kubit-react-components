import type { ArgTypes } from 'storybook/internal/types';

import { CheckboxBaseVariantType } from '@/lib/designSystem/kubit/components/checkboxBase/variants';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ['aria-hidden']: {
      control: 'boolean',
      description: 'Whether the checkbox is hidden from screen readers',
      name: 'aria-hidden',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'boolean',
        },
      },
    },
    ['aria-label']: {
      control: 'text',
      description: 'Aria label for accessibility',
      name: 'aria-label',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
    },
    ['aria-labelledby']: {
      control: 'text',
      description: 'ID of the element that labels this checkbox',
      name: 'aria-labelledby',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked or not',
      name: 'checked',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    checkedIcon: {
      control: 'object',
      description: 'Icon or element to display when the checkbox is checked',
      name: 'checkedIcon',
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled or not',
      name: 'disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the checkbox has an error state',
      name: 'error',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    id: {
      control: 'text',
      description: 'ID attribute of the input element',
      name: 'id',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    inputRef: {
      control: false,
      description: 'Reference for the input element',
      name: 'inputRef',
      table: {
        type: {
          summary: 'Ref<HTMLInputElement>',
        },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute of the input element',
      name: 'name',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onBlur: {
      control: false,
      description: 'Callback fired when the checkbox loses focus',
      name: 'onBlur',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: 'FocusEvent<HTMLInputElement>',
        },
      },
    },
    onChange: {
      control: false,
      description: 'Callback fired when the checkbox state changes',
      name: 'onChange',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: 'ChangeEventHandler<HTMLInputElement>',
        },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required or not',
      name: 'required',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for the input element',
      name: 'tabIndex',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    value: {
      control: 'text',
      description: 'Value attribute of the input element',
      name: 'value',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      control: { type: 'select' },
      description: 'CheckboxBase variant',
      options: Object.values(CheckboxBaseVariantType),

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
