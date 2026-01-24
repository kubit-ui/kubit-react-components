import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/lib/storybook/argtypes/htmlComponentArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['leftIcon', 'rightIcon']),
    'aria-describedby': getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-describedby',
      name: 'toggle',
    }),
    'aria-label': getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'toggle',
    }),
    'aria-labelledby': getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-labelledby',
      name: 'toggle',
    }),
    component: getHtmlComponentArgTypes({
      name: 'toggle',
    }),
    'data-*': getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'data-*',
      name: 'toggle',
    }),
    dataTestId: getStringtArgTypes({
      category: CATEGORY_CONTROL.TESTING,
      keyName: 'dataTestId',
      name: 'toggle',
    }),
    defaultChecked: getBooleanArgTypes({
      descriptionName: 'toggle',
      name: 'defaultChecked',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'toggle',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'id',
      name: 'toggle',
    }),
    name: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'name',
      name: 'toggle',
    }),
    tabIndex: getNumbertArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'tabIndex',
      name: 'toggle',
    }),
    value: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'value',
      name: 'toggle',
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'toggle',
      variants: { REGULAR: 'REGULAR' },
    }),
  };
};
