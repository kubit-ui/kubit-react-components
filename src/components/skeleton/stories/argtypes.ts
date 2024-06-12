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
      control: { type: 'select' },
      description: 'Skeleton variant',
      type: { name: 'string', required: true },
      options: Object.keys(variants[themeSelected].SkeletonVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Set the shape width',
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    height: {
      control: { type: 'text' },
      type: { name: 'string', required: true },
      description: 'Set the shape height',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    duration: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Set the shape animation duration',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '1.2s' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    shapeVariant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      options: Object.keys(variants[themeSelected].SkeletonShapeVariant || {}),
      description: 'Set the shape type',
      table: {
        type: {
          summary: 'string',
        },
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
