import type { ArgTypes } from 'storybook/internal/types';

import { RadioButtonVariantType } from '@/lib/designSystem/kubit/components/radioButton/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'errorIcon',
      'label',
      'lastChild',
      'onBlur',
      'onChange',
      'state',
      'styles',
      'subTitle',
    ]),
    ['aria-hidden']: getBooleanArgTypes({
      descriptionName: 'radioButton',
      name: 'aria-hidden',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'radioButton',
    }),
    ['aria-labelledby']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-labelledby',
      name: 'radioButton',
    }),
    checked: getBooleanArgTypes({
      descriptionName: 'radioButton',
      name: 'checked',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'radioButton',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    error: getBooleanArgTypes({
      descriptionName: 'radioButton',
      name: 'error',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    errorAriaLiveType: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'errorAriaLiveType',
      name: 'radioButton',
    }),
    errorMessage: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'errorMessage',
      name: 'radioButton',
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'radioButton',
    }),
    name: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'name',
      name: 'radioButton',
    }),
    screenReaderId: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'screenReaderId',
      name: 'radioButton',
    }),
    tabIndex: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'tabIndex',
      name: 'radioButton',
    }),
    value: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'value',
      name: 'radioButton',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'radioButton',
        variants: Object.keys(RadioButtonVariantType).reduce(
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
