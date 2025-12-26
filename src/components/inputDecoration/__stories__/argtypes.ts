import type { ArgTypes } from 'storybook/internal/types';

import { InputDecorationVariantType } from '@/lib/designSystem/kubit/components/inputDecoration/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/lib/storybook/argtypes/htmlComponentArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['decoration']),
    component: getHtmlComponentArgTypes({
      name: 'inputDecoration',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'inputDecoration',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'inputDecoration',
      variants: Object.keys(InputDecorationVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
