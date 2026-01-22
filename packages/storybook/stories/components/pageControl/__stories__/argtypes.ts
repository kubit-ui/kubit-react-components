import type { ArgTypes } from 'storybook/internal/types';

import {
  ArrowsControlVariant,
  PageControlVariant,
} from '@/lib/designSystem/kubit/components/pageControl/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['leftControl', 'rightControl']),
    arrowsControlVariant: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'arrowsControlVariant',
      name: 'pageControl',
      options: Object.keys(ArrowsControlVariant).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    currentPosition: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'currentPosition',
      name: 'pageControl',
    }),
    maxDots: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxDots',
      name: 'pageControl',
    }),
    pages: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'pages',
      name: 'pageControl',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'pageControl',
        variants: Object.keys(PageControlVariant).reduce(
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
