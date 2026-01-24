import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { DataTableVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'activeRows',
      'caption',
      'columns',
      'config',
      'hoverableRows',
      'nonHoverableRows',
      'rowGroups',
      'rows',
    ]),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'dataTable',
    }),
    ['aria-labelledby']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-labelledby',
      name: 'dataTable',
    }),
    hoverable: getBooleanArgTypes({
      descriptionName: 'dataTable',
      name: 'hoverable',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    stickyHead: getBooleanArgTypes({
      descriptionName: 'dataTable',
      name: 'stickyHead',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'dataTable',
        variants: Object.keys(DataTableVariantType).reduce(
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
