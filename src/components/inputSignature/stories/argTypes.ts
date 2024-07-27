import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Input Signature theme variant',
      options: Object.keys(variants[themeSelected].InputDigitPasswordVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    placeholder: {
      type: { name: 'string', required: true },
      control: { type: 'object' },
      description: 'Text to show when the signature is empty',
      table: {
        type: {
          summary: 'InputSignatureText',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorText: {
      type: { name: 'string' },
      control: { type: 'object' },
      description: 'Text to show when the signature is invalid',
      table: {
        type: {
          summary: 'InputSignatureText',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onChange: {
      description: 'Function that is called when drawed on the component',
      control: false,
      table: {
        type: {
          summary: '(value: string) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    disabled: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: 'Prop to disable the component',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    error: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: 'Prop to set the error state',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      control: { type: 'text' },
      type: { name: 'string' },
      description:
        'Test id of the component. Internal components will concatenate from this test id',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
  };
};
