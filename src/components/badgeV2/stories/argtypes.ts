import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

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
      description: 'Badge variant',
      options: Object.keys(variants[themeSelected].BadgeVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    size: {
      description: 'Badge size',
      options: Object.keys(variants[themeSelected].BadgeSize || {}),
      control: { type: 'select' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dot: {
      description: 'Object with dot properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IDot',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hasDot: {
      description: 'Show the notification dot',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    icon: {
      description: 'Object with icon properties. Add icon',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    label: {
      description: 'Object with label properties. Decorative text of the badge',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'BadgeLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    labelIcon: {
      description: 'Object with labelIcon properties. Add icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ariaLiveText: {
      description: 'String used to alert screen readers',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    customDotTranslate: {
      description: 'css translate value applied to dot',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    role: {
      description: 'Role of the badge',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    dataTestId: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'String used for testing',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    ['aria-label']: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Button aria-label',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-controls']: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Button aria-controls',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-expanded']: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Button aria-expanded',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-hidden']: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Button aria-hidden',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
