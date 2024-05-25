import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, ROLES } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Option variant',
      options: Object.keys(variants[themeSelected].OptionVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Label',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    labelCharsHighlighted: {
      description: 'Hightlighted label chars',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    sublabel: {
      description: 'Sublabel',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Object with icon properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    checkedIcon: {
      description:
        'Object with checked icon props. When multiSelect, icon that indicates the element is selected',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    multiSelect: {
      description: 'Indicates the user is allow to select more that one option',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Indicates the option is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    selected: {
      description: 'Indicates the option is selected',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    focus: {
      description: 'When true, the element will focus',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    url: {
      description: 'When present, the element will behave like a link',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onClick: {
      control: false,
      description: 'Action called when click on the option',
      table: {
        type: {
          summary: '(event: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFocus: {
      control: false,
      description: 'Action called when focus on the option',
      table: {
        type: {
          summary: 'React.FocusEventHandler<HTMLElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    toggle: {
      description: 'Allow to add a toggle at the end of the option',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IToggleUnControlled',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    extraContent: {
      description: 'Allow to add a ReactNode at the end of the option',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    role: {
      description: 'Provide semantic meaning to the option',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ROLES',
          detail: Object.keys(ROLES).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-label']: {
      description: 'Aria label',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-selected']: {
      description: 'Aria selected',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description: 'To manage keyboard',
      type: { name: 'number' },
      control: false,
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    as: {
      description: 'Component type to transform option',
      control: false,
      table: {
        type: {
          summary: 'string | React.ElementType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
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
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
