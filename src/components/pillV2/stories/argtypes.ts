import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { PillType } from '../types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].PillVariantTypeV2 || {}),
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
      options: Object.keys(variantsObject[themeSelected].PillSizeTypeV2 || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftIcon: {
      description: 'Left icon',
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
      description: 'Label',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'PillLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightIcon: {
      description: 'Right icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    selected: {
      description: 'Indicates the pill is selected',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Indicates the pill is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      description: 'Indicates whether the pill behaves as a button, selector or tab.',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(PillType),
      table: {
        type: {
          summary: 'PillType',
        },
        defaultValue: {
          summary: PillType.BUTTON,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'When type selector, input name',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    value: {
      description: 'When type selector, input value',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string | number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-controls']: {
      description: 'aria-controls',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onClick: {
      description: 'On click event function',
      control: false,
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.MouseEventHandler',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onChange: {
      description: 'When type selector, on change event function',
      control: false,
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.ChangeEventHandler',
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
        defaultValue: { summary: 'pill' },
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
