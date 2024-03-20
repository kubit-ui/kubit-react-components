import { CATEGORY_CONTROL } from '@/constants';
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
      description: 'Header variant',
      options: Object.keys(variants[themeSelected].HeaderVariantType || {}),
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
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CrumbType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    configBreadcrumbs: {
      description: 'Object with breadcrumbs configuration',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'HeaderBreadcrumbsType',
        },
        defaultValue: { summary: '' },
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
