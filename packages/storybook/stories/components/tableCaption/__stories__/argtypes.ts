import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TableCaptionVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['children']),
    component: getHtmlComponentArgTypes({
      name: 'tableCaption',
    }),
    hidden: getBooleanArgTypes({
      descriptionName: 'tableCaption',
      name: 'hidden',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'id',
      name: 'tableCaption',
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'tableCaption',
      variants: Object.keys(TableCaptionVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
