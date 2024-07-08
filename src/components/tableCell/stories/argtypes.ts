import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'TableCell variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TableCellVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: 'Id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    scope: {
      description: 'Scope',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    th: {
      description: 'When true, the cell is a th',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    colSpan: {
      description: 'Col span',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    rowSpan: {
      description: 'Row span',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    height: {
      description: 'Height',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    width: {
      description: 'Width',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    minWidth: {
      description: 'Min width',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    maxWidth: {
      description: 'Max width',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    textAlign: {
      description: 'Text align',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    top: {
      description: 'Top',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    left: {
      description: 'Left',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    right: {
      description: 'Right',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    bottom: {
      description: 'Bottom',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    sticky: {
      description: 'Sticky, when true the cell will be sticky',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hidden: {
      description: 'Hidden, when true the cell will be hidden but will be read by screen readers',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    component: {
      description: 'Component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string | React.ComponentType<any>',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    onClick: {
      description: 'Click event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLTableCellElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseEnter: {
      description: 'Mouse enter event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLTableCellElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseLeave: {
      description: 'Mouse leave event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLTableCellElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    ['aria-label']: {
      description: 'Aria label',
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
      description: 'Aria labelled by',
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
      description: 'Test id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'tableCell',
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
