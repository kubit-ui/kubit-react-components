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
    labelVariant: {
      description: 'Line separator label variant',
      options: Object.keys(variants[themeSelected].LineSeparatorLabelVariantType || {}),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    lineVariant: {
      description: 'Line separator line variant',
      options: Object.keys(variants[themeSelected].LineSeparatorLineVariantType || {}),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Object with label properties. Label section name',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'LineSeparatorLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    externalNodeTag: {
      description: 'External node tag',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'React.ElementType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    internalNodeTag: {
      description: 'Internal node tag',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'React.ElementType',
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
      description: 'Object used for update variant label styles',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    extraCt: {
      description: 'Object used for update variant line styles',
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
