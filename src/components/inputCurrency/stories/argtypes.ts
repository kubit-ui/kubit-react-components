import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, POSITIONS } from '@/types';

import { argtypes as inputArgTypes } from '../../input/stories/argtypes';

const optionsCurrencyPosition = [POSITIONS.LEFT, POSITIONS.RIGHT];

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
      description: 'Inputcurrency variant',
      options: Object.keys(variants[themeSelected].InputCurrencyVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currencyPosition: {
      options: optionsCurrencyPosition,
      type: { name: 'string' },
      description: 'Set currency position',
      control: { type: 'select' },
      table: {
        type: {
          summary: 'POSITIONS',
          detail: optionsCurrencyPosition.join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currencyName: {
      description: 'Object with currency name props. Currency abbreviation text.',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'InputCurrencyNameType',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxDecimals: {
      control: { type: 'number' },
      type: { name: 'number' },
      description: 'Specifies the max number of decimal places',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 2 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    screenReaderCurrencyName: {
      defaultValue: 'Dólares',
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Text that will be read by screen readers',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    truncate: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Indicates if text value is truncated when is too big',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ignoreKeys: {
      description: 'Keys ignores in the onKeyDown function',
      control: { type: 'object' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: { summary: ['+', '-', 'e'] },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currencyNameContainerPosition: {
      description: 'Container position for currency name',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'InputContentPosition',
        },
        defaultValue: { summary: ['+', '-', 'e'] },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    helpMessagePosition: {
      description: 'Position for help message',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'InputHelpMessagePosition',
        },
        defaultValue: { summary: ['+', '-', 'e'] },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputCurrency',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  };
};
