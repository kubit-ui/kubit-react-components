import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { ArrowsControlVariant, PageControlVariant } = KUBIT_VARIANTS;

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
