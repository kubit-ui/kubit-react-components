import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'DataTable variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].DataTableVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    columns: {
      description: 'DataTable columns',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DataTableColumnType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rows: {
      description: 'DataTable rows',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DataTableRowType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rowGroups: {
      description:
        'Datatable rows, when used, multiples tables will be shown, one for each row group',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DataTableRowGroupType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    activeRows: {
      description: 'DataTable active rows',
      type: { name: 'array' },
      control: { type: 'array' },
      table: {
        type: {
          summary: 'string[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hoverable: {
      description: 'DataTable hoverable',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hoverableRows: {
      description: 'When defined, only these rows will be hoverable',
      type: { name: 'array' },
      control: { type: 'array' },
      table: {
        type: {
          summary: 'string[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    nonHoverableRows: {
      description: 'When defined, these rows will not be hoverable',
      type: { name: 'array' },
      control: { type: 'array' },
      table: {
        type: {
          summary: 'string[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    stickyHead: {
      description: 'DataTable sticky head',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    caption: {
      description: 'Primary table caption',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DataTableTableCaptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    config: {
      description: 'Allow to configure table, tableHead, tableHeadRow and tableBody extra props',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DataTableConfigType',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
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
          summary: 'dataTable',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    ['aria-label']: {
      description: 'Only when it has scroll, scrollable container aria label',
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
      description: 'Only when it has scroll, scrollable container aria labelled by',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
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
  };
};
