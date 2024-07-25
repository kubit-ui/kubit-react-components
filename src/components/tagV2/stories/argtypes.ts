import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Select tag variant type',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TagVariantTypeV2 || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    icon: {
      description: 'Object with the icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    label: {
      description: 'Object with the label properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'TagLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
    dataTestId: {
      description: 'Test id',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'tag' },
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
