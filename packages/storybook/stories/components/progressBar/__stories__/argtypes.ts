import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { ProgressBarSizeType, ProgressBarVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['progressAnimation']),
    barAriaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'barAriaLabel',
      name: 'progressBar',
    }),
    percentProgressCompleted: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'percentProgressCompleted',
      name: 'progressBar',
    }),
    size: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'size',
      name: 'progressBar',
      options: Object.keys(ProgressBarSizeType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'progressBar',
        variants: Object.keys(ProgressBarVariantType).reduce(
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
