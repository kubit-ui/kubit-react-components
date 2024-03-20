import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { OperativePosition } from '../types';

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
      description: 'NavigationRow variant',
      options: Object.keys(variants[themeSelected].OperativeLayoutVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxWidthParentContainer: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Max-width for parent container applied for DESKTOP',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    contentBgColor: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Content background color',
      table: {
        type: {
          summary: 'string or IOperativeLayoutBiColor',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    contentPosition: {
      description: 'Sets the alignment of the component',
      control: { type: 'radio' },
      type: { name: 'string' },
      options: Object.keys(OperativePosition),
      table: {
        type: {
          summary: 'OperativePosition',
          detail: Object.keys(OperativePosition).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    contentOverflowColor: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Sets whether the color should overflow',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    contentHeight: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Set a custom component height',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    horizontalExternalMargin: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Set a custom margin',
      table: {
        type: {
          summary: 'string or IOperativeLayoutHorizontalMargin',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    asideContent: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Aside content',
      table: {
        type: {
          summary: 'JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    mainContent: {
      control: { type: 'text' },
      type: { name: 'string', required: true },
      description: 'Main content',
      table: {
        type: {
          summary: 'JSX.Element',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    minMarginRightAndLeft: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Min margin for paddings',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    columnsConfig: {
      control: { type: 'object' },
      type: { name: 'object' },
      description: 'Columns configuration',
      table: {
        type: {
          summary: 'IColumnsConfig',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    gridConfig: {
      control: { type: 'object' },
      type: { name: 'object' },
      description: 'Grid configuration',
      table: {
        type: {
          summary: 'IGridConfig',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
