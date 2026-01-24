import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { RadioButtonVariantType } = KUBIT_VARIANTS;

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
