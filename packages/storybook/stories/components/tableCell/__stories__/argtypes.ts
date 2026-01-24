import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TableCellVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    alignItems: {
      control: { type: 'text' },
      description: 'Align items',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    ['aria-label']: {
      control: { type: 'text' },
      description: 'Aria label',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    ['aria-labelledby']: {
      control: { type: 'text' },
      description: 'Aria labelled by',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    bottom: {
      control: { type: 'text' },
      description: 'Bottom',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    children: {
      control: false,
      description: 'children',
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: { summary: 'ReactNode' },
      },
    },
    colSpan: {
      control: { type: 'number' },
      description: 'Col span',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'number',
        },
      },
      type: { name: 'number' },
    },
    component: {
      control: { type: 'text' },
      description: 'Component',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string | React.ComponentType<any>',
        },
      },
      type: { name: 'string' },
    },
    height: {
      control: { type: 'text' },
      description: 'Height',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    hidden: {
      control: { type: 'boolean' },
      description:
        'Hidden, when true the cell will be hidden but will be read by screen readers',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    id: {
      control: { type: 'text' },
      description: 'Id',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    justifyContent: {
      control: { type: 'text' },
      description: 'Justify content',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    left: {
      control: { type: 'text' },
      description: 'Left',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Max width',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Min width',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    onClick: {
      description: 'Click event',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: 'React.MouseEventHandler<HTMLTableCellElement>',
        },
      },
      type: { name: 'function' },
    },
    onMouseEnter: {
      description: 'Mouse enter event',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: 'React.MouseEventHandler<HTMLTableCellElement>',
        },
      },
      type: { name: 'function' },
    },
    onMouseLeave: {
      description: 'Mouse leave event',
      table: {
        category: CATEGORY_CONTROL.FUNCTIONS,
        type: {
          summary: 'React.MouseEventHandler<HTMLTableCellElement>',
        },
      },
      type: { name: 'function' },
    },
    right: {
      control: { type: 'text' },
      description: 'Right',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    rowSpan: {
      control: { type: 'number' },
      description: 'Row span',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'number',
        },
      },
      type: { name: 'number' },
    },
    scope: {
      control: { type: 'text' },
      description: 'Scope',
      table: {
        category: CATEGORY_CONTROL.ACCESIBILITY,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    sticky: {
      control: { type: 'select' },
      description:
        'It defines the sticky position (Avoid using boolean values for `sticky`, it is preferable to use `left` or `right` to define the sticky position)',
      options: ['true', 'left', 'right'],
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean | left | right',
        },
      },
    },
    textAlign: {
      control: { type: 'text' },
      description: 'Text align',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    th: {
      control: { type: 'boolean' },
      description: 'When true, the cell is a th',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean' },
    },
    top: {
      control: { type: 'text' },
      description: 'Top',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    variant: {
      control: { type: 'select' },
      description: 'TableCell variant',
      options: Object.values(TableCellVariantType),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    verticalAlign: {
      control: { type: 'text' },
      description: 'Vertical align',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
    width: {
      control: { type: 'text' },
      description: 'Width',
      table: {
        category: CATEGORY_CONTROL.CUSTOMIZATION,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string' },
    },
  };
};
