import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject/themesObject';
import { ArgTypesReturn } from '@/types/type/type';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'TableRow variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TableRowVariantTypeV2 || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'children',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY_CONTROL.CONTENT,
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
    active: {
      description: 'Active',
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    hoverable: {
      description: 'When true, the row will change its styles when hovered',
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    role: {
      description: 'Role',
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
      description: 'Tab index',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onClick: {
      description: 'Click event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLTableRowElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onKeyDown: {
      description: 'Key down event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.KeyboardEventHandler<HTMLTableRowElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseEnter: {
      description: 'Mouse enter event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLTableRowElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseLeave: {
      description: 'Mouse leave event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLTableRowElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
          summary: 'tableRow',
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
