import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { argtypes as inputArgTypes } from '../../input/stories/argtypes';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    // EXTENDED properties from Input Basic
    ...inputArgTypes(variants, themeSelected),
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Input variant',
      options: Object.keys(variants[themeSelected].InputPasswordVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputPassword',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    activeIcon: {
      description: 'Object with active icon properties. Set icon when active',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'InputPasswordIconType',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    disabledIcon: {
      description: ' Object with disabled icon properties. Set icon when active',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'InputPasswordIconType',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onChangeInputType: {
      description: 'Function that is called when hte type of the input changes',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onIconClick: {
      description: 'Click Icon',
      control: false,
      table: {
        type: {
          summary: '(value: OnIconClickValueType) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  };
};
