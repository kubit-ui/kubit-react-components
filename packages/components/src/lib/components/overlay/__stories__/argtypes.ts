import type { ArgTypes } from 'storybook/internal/types';

import { OverlayVariantType } from '@/lib/designSystem/kubit/components/overlay/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'overlay',
      variants: Object.keys(OverlayVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
