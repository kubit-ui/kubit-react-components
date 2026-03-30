import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { InputDecorationVariantType } = KUBIT_VARIANTS;

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
