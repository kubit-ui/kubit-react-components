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
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Primary tabs variant',
      options: Object.keys(variants[themeSelected].TabsVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultSelectedTab: {
      description: 'Default tab selected',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 0,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    selectedTab: {
      description: 'Tab selected (Controlled)',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    tabs: {
      description: 'List of tabs',
      type: { name: 'array' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'PrimaryTabTabType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    content: {
      description: 'Content',
      type: { name: 'array' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    leftControlAriaLabel: {
      description: 'Aria label of the left control',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    leftIcon: {
      description: 'Left icon of the tab',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightControlAriaLabel: {
      description: 'Aria label of the right control',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    rightIcon: {
      description: 'Right icon of the tab',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    allowFocusTabPanel: {
      description: 'When true, the tabpanel has tabIndex 0 in order to allow focus on it',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    autoWidth: {
      description: 'Indicates if width is auto or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minTabsInView: {
      description: 'Min tabs in view',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 2,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxTabsInView: {
      description: 'Max tabs in view',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 3,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hideLabelForSingleTab: {
      description:
        'When dont want to show label when there is only one tab, but want to be accessible through headings',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
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
    onSelectTab: {
      description: 'Exexuted when select a tab',
      control: false,
      table: {
        type: {
          summary: '(tab: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
