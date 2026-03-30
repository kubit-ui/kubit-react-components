import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TableHeadVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['children']),
    component: getHtmlComponentArgTypes({
      name: 'tableHead',
    }),
    hidden: getBooleanArgTypes({
      descriptionName: 'tableHead',
      name: 'hidden',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'id',
      name: 'tableHead',
    }),
    sticky: getBooleanArgTypes({
      descriptionName: 'tableHead',
      name: 'sticky',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'tableHead',
      variants: Object.keys(TableHeadVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
