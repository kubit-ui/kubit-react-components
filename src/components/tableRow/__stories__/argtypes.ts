import type { ArgTypes } from 'storybook/internal/types';

import { TableRowVariantType } from '@/lib/designSystem/kubit/components/tableRow/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/lib/storybook/argtypes/htmlComponentArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'children',
      'onClick',
      'onKeyDown',
      'onMouseEnter',
      'onMouseLeave',
    ]),
    active: getBooleanArgTypes({
      descriptionName: 'tableRow',
      name: 'active',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    component: getHtmlComponentArgTypes({
      name: 'tableRow',
    }),
    hoverable: getBooleanArgTypes({
      descriptionName: 'tableRow',
      name: 'hoverable',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'id',
      name: 'tableRow',
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'tableRow',
      variants: Object.keys(TableRowVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
