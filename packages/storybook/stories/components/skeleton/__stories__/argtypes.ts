import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { SkeletonShapeVariant } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    borderRadius: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'borderRadius',
      name: 'skeleton',
    }),
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
