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
      description: 'Layout variant',
      options: Object.keys(variants[themeSelected].LayoutVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    asideContent: {
      description: 'Aside content',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    headerContent: {
      description: 'Header content',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    mainContent: {
      description: 'Main content',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    footerContent: {
      description: 'Footer content',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    backgroundColor: {
      description: 'Background color',
      type: { name: 'string', required: true },
      control: { type: 'color' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    columnsConfig: {
      description: 'Columns configuration',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    gridConfig: {
      description: 'Grid configuration',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
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
