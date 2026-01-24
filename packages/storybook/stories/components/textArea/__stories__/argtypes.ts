import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TextAreaVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'additionalInfo',
      'errorIcon',
      'errorMessage',
      'helpMessage',
      'label',
      'onBlur',
      'onChange',
      'onFocus',
      'title',
    ]),
    disabled: getBooleanArgTypes({
      descriptionName: 'textArea',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    error: getBooleanArgTypes({
      descriptionName: 'textArea',
      name: 'error',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    errorAriaLiveType: getSelectorArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'errorAriaLiveType',
      name: 'textArea',
      options: { assertive: 'assertive', off: 'off', polite: 'polite' },
    }),
    height: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'height',
      name: 'textArea',
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'textArea',
    }),
    maxLength: {
      ...getNumbertArgTypes({
        category: CATEGORY_CONTROL.CONTENT,
        keyName: 'maxLength',
        name: 'textArea',
      }),
      type: { name: 'number', required: true },
    },
    placeholder: {
      ...getStringtArgTypes({
        category: CATEGORY_CONTROL.CONTENT,
        keyName: 'placeholder',
        name: 'textArea',
      }),
      type: { name: 'string', required: true },
    },
    required: getBooleanArgTypes({
      descriptionName: 'textArea',
      name: 'required',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    screenReaderTextCount: {
      ...getStringtArgTypes({
        category: CATEGORY_CONTROL.ACCESIBILITY,
        keyName: 'screenReaderTextCount',
        name: 'textArea',
      }),
      type: { name: 'string', required: true },
    },
    spellCheck: getBooleanArgTypes({
      descriptionName: 'textArea',
      name: 'spellCheck',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    value: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'value',
      name: 'textArea',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'textArea',
        variants: Object.keys(TextAreaVariantType).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
  };
};
