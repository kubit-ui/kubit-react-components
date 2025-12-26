import type { ArgTypes } from 'storybook/internal/types';

import { PaginationVariantsTheme } from '@/lib/designSystem/kubit/components/pagination/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
