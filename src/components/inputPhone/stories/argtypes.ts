import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { argtypes as inputArgTypes } from '../../input/stories/argtypes';
import { prefixOptions } from '../fixture/prefixOptions';

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
      description: 'InputPhone variant',
      options: Object.keys(variants[themeSelected].InputPhoneVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputPhone',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    flag: {
      description: 'Object with flag properties. Country flag to show into prefix container',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      defaultValue: prefixOptions.flag,
      table: {
        type: {
          summary: 'InputPhoneFlagType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    prefix: {
      description:
        'Object with prefix properties. Country prefix number to show into prefix container',
      control: { type: 'object' },
      type: { name: 'object' },
      defaultValue: prefixOptions.prefix,
      table: {
        type: {
          summary: 'InputPhonePrefixType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    prefixNode: {
      description:
        'Node to show into prefix container. If this prop is passed, the prefix prop will be ignored',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
  };
};
