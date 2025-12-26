import type { ArgTypes } from 'storybook/internal/types';

import { SkeletonShapeVariant } from '@/lib/designSystem/kubit/components/skeleton/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    duration: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'duration',
      name: 'skeleton',
    }),
    height: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'height',
      name: 'skeleton',
    }),
    shapeVariant: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'shapeVariant',
      name: 'skeleton',
      options: Object.keys(SkeletonShapeVariant).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'skeleton',
      variants: { alternative: 'alternative', default: 'default' },
    }),
    width: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'width',
      name: 'skeleton',
    }),
  };
};
