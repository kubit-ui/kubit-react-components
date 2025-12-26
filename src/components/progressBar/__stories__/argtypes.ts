import type { ArgTypes } from 'storybook/internal/types';

import {
  ProgressBarSizeType,
  ProgressBarVariantType,
} from '@/lib/designSystem/kubit/components/progressBar/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onChange',
      'onDragEnd',
      'onDragStart',
      'progressAnimation',
      'tooltip',
    ]),
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
