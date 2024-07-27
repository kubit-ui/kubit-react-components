import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { ButtonType, IconPositionType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Button variant',
      options: Object.keys(variants[themeSelected].ButtonVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    size: {
      description: 'Button size',
      options: Object.keys(variants[themeSelected].ButtonSizeType || {}),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Specifies if the button element is disabled or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      options: Object.keys(ButtonType),
      description: 'Define buttons type',
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ButtonType',
          detail: Object.keys(ButtonType).join(', '),
        },
        defaultValue: { summary: ButtonType.BUTTON },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: {
          summary: 'MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    children: {
      defaultValue: 'Content',
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'This will appear in your button',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Object with icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ['aria-label']: {
      description: 'Aria label of the button',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-expanded']: {
      description: 'Aria label when button can open a popover',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-controls']: {
      description: 'Aria label when button can open a popover an associated to a list',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-describedby']: {
      description: 'Aria text that should be read when the button is focused',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Aria labelledby',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-pressed']: {
      description: 'Aria for toggle buttons',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-disabled']: {
      description: 'Aria for disabled buttons',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    fullWidth: {
      description: 'Show full width',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    iconPosition: {
      description: 'Set icon position',
      options: Object.keys(IconPositionType),
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'IconPositionType',
          detail: Object.keys(IconPositionType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    loading: {
      description: 'Is fetching',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    loader: {
      description: 'Object with loader properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ILoader, ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    minWidth: {
      description: 'Set button min width size',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ghostText: {
      description: 'Aria label of the button',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description: 'To manage keyboard',
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 0 },
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
    form: {
      description: 'String used for forms',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ctv: {
      description: 'Object used for update variant styles',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    cts: {
      description: 'Object used for update size styles',
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
