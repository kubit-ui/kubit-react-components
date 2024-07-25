import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Checkbox variant',
      options: Object.keys(variants[themeSelected].CheckboxVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Disable checkbox',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    checked: {
      description: 'Is checked?',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    error: {
      description: 'Show error message',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    required: {
      description: 'Show required symbol',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Object with label properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'CheckboxLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    value: {
      description: 'Checkbox value',
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    name: {
      description: 'Checkbox name',
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorMessage: {
      description: 'Object with error text properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'CheckboxHelperAndErrorTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    checkedIcon: {
      description: 'Object with checked icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorIcon: {
      description: 'Object with error icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorAriaLiveType: {
      description: 'Error message aria-live type',
      options: Object.values(AriaLiveOptionType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaLiveOptionType',
          detail: Object.keys(AriaLiveOptionType).join(', '),
        },
        defaultValue: { summary: AriaLiveOptionType.ASSERTIVE },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    helperText: {
      description: 'Object with helper text properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'CheckboxHelperAndErrorTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    helperContent: {
      description: 'Object with helper content properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'CheckboxHelpContentType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    extraAriaDescribedBy: {
      description: 'Allow to extend input "aria-describedby"',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    screenReaderText: {
      description:
        'String used for screen reader. In the case of context change put message for screen readers',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description: 'Tab index',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-label']: {
      description: 'Input aria-label',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Input aria-labelledby',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-hidden']: {
      description: 'Hide element from screen readers',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    dataTestId: {
      description: 'String used for testing',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    ctv: {
      description: 'Object used for update variant styles',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
