import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Current variant of PillSelector',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.PillSelectorVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultSelected: {
      description: 'Array of pills selected by default',
      control: { type: 'object' },
      type: { name: 'array' },
      table: {
        type: {
          summary: '(string | number)[]',
        },
        defaultValue: {
          summary: '[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    pills: {
      description: 'Array of pills',
      control: { type: 'object' },
      type: { name: 'array', required: true },
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxPills: {
      description: 'Max of pills that can be show',
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 0 },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    pillVariant: {
      description: 'Variant for each Pill',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.PillVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    pillSize: {
      description: 'Size for each Pill',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.PillSizeType || {}),
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    multiSelect: {
      description: 'Boolean to indicate if PillSelector is multiselect',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'Vale associated to property name of each input component',
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
