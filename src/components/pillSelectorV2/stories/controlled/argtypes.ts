import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { PillSelectorType } from '../../types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].PillSelectorVariantTypeV2 || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    size: {
      description: 'Size',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].PillSelectorSizeTypeV2 || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      description: 'Indicates whether the pills behaves as a input radio or checkbox',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(PillSelectorType),
      table: {
        type: {
          summary: 'PillSelectorType',
        },
        defaultValue: {
          summary: PillSelectorType.SELECTOR_MULTIPLE,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    pills: {
      description: 'Pills',
      type: { name: 'array' },
      table: {
        type: {
          summary: 'PillSelectorPillType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    selectedIcon: {
      description: 'Icon to show when the pill is selected',
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    value: {
      description:
        'When type PillSelectorType.SELECTOR_SIMPLE, should be an array of string | number, when type PillSelectorType.SELECTOR_MULTIPLE should be a string | number',
      type: { name: 'object' },
      table: {
        type: {
          summary: 'PillSelectorValueType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'Name of the inner inputs',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Indicates all the pills are disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onChange: {
      description:
        'On change function, when type PillSelectorType.SELECTOR_SIMPLE, should return an array of string | number, when type PillSelectorType.SELECTOR_MULTIPLE should return a string | number',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(value: PillSelectorValueType) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestId: {
      description: 'Test id',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'segmentedControl' },
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
