import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Current variant of Pill',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].PillVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    size: {
      description: 'Size of Pill defined in the theme file',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.PillSizeType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'Children of the Pill',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    label: {
      description: 'Label outside of the pill',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    initialState: {
      description: 'Boolean to indicate if Pill is selected initially',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    focus: {
      description: 'Boolean to indicate if Pill has the focus initially',
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
      description: 'Boolean to indicate if Pill is selected',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onPillChange: {
      description: 'Funtion to change selected option',
      control: false,
      table: {
        type: {
          summary: '(checked: boolean, value: string) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    selectedIcon: {
      description: 'Object with selectedIcon properties. Icon showed when pill is selected',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    decorativeIcon: {
      description: 'Object with decorativeIcon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onFocus: {
      description: 'Function called when Pill takes the focus',
      control: false,
      table: {
        type: {
          summary: 'React.FocusEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    disabled: {
      description: 'Boolean to indicate if Pill is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    multiSelect: {
      description: 'Boolean to indicate if Pill has multiselect option',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'Text applied to name property of input component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-label']: {
      description: 'Text applied to aria-label property of input component',
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
      description: 'Text applied to aria-labelledby property of input component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-describedby']: {
      description: 'Text applied to aria-describedby property of input component',
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
      description: 'Text applied to aria-describedby property of input component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-disabled']: {
      description: 'Text applied to aria-describedby property of input component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description:
        'Value associated to tabIndex property of parent pill container. It is used to make possible to take focus',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
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
