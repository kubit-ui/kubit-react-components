import { CATEGORY_CONTROL } from '@/constants/categoryControl';
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
      description: 'InputCounter variant',
      options: Object.keys(variants[themeSelected].InputCounterVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    screenReaderTextCount: {
      type: { name: 'string', required: true },
      description:
        'When necessary, counter information has to be announce to screen reader users in the less intrusive way',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxLength: {
      type: { name: 'string', required: true },
      description:
        'Defines the maximum number of characters the user can enter into an input. This must be an integer value 0 or higher',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputDate',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    textCount: {
      description:
        'Object with TextCount properties. This object is used to customize the TextCount component',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'InputCounterTextCountType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
  };
};
