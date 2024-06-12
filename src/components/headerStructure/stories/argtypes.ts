import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

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
      description: 'Header structure variant',
      options: Object.keys(variants[themeSelected].HeaderStructureVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'Children',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    crumbs: {
      description: 'Breadcrumbs',
      type: { name: 'array' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CrumbType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    configBreadcrumbs: {
      description: 'Configuration of the calendar',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'IBreadcrumbsControlled',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    containerHeight: {
      description: 'Set container height',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    breadcrumbsDataTestId: {
      description:
        'Test id of the Breadcrumbs. Internal components will concatenate from this test id',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    backgroundColor: {
      description: 'Background color of the container (overwrites the default color of the theme)',
      control: { type: 'color' },
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
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
