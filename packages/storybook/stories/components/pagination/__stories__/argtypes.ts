import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { PaginationVariantsTheme } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onStepClick',
      'paginationLeftButtonControl',
      'paginationRightButtonControl',
    ]),
    currentStep: getNumbertArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'currentStep',
      name: 'pagination',
    }),
    maxCountersNumber: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxCountersNumber',
      name: 'pagination',
    }),
    maxStepsNumber: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxStepsNumber',
      name: 'pagination',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'pagination',
        variants: Object.keys(PaginationVariantsTheme).reduce(
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
