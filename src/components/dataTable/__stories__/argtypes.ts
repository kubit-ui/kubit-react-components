import type { ArgTypes } from 'storybook/internal/types';

import { DataTableVariantType } from '@/lib/designSystem/kubit/components/dataTable/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
