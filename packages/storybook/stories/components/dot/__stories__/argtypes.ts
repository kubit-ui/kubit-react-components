import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { DotSizeType, DotVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    'additionalSizeClasses.dot': {
      ...getAdditionalClassesArgTypes({
        name: 'dot',
        subCategory: 'additionalSizeClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalVariantClasses.dot': {
      ...getAdditionalClassesArgTypes({
        name: 'dot',
        subCategory: 'additionalVariantClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    height: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'height',
      name: 'dot',
    }),
    label: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'label',
      name: 'dot',
    }),
    maxNumber: getNumbertArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'maxNumber',
      name: 'dot',
    }),
    number: getNumbertArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'number',
      name: 'dot',
    }),
    size: {
      ...getVariantArgTypes({
        keyVariant: 'size',
        name: 'dot',
        variants: Object.keys(DotSizeType).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'dot',
        variants: Object.keys(DotVariantType).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    width: getNumbertArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'width',
      name: 'dot',
    }),
  };
};
