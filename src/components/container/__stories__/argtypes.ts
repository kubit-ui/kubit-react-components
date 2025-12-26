import type { ArgTypes } from 'storybook/internal/types';

import { ContainerVariants } from '@/lib/designSystem/kubit/components/container/variants';
import { getAdditionalClassesArgTypes } from '@/lib/storybook/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    'additionalClasses.container': {
      ...getAdditionalClassesArgTypes({
        name: 'container',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.header': {
      ...getAdditionalClassesArgTypes({
        name: 'header',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.parentContainer': {
      ...getAdditionalClassesArgTypes({
        name: 'parentContainer',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    'additionalClasses.title': {
      ...getAdditionalClassesArgTypes({
        name: 'title',
        subCategory: 'additionalClasses',
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'container',
    }),
    title: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'title',
      name: 'container',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'container',
        variants: Object.keys(ContainerVariants).reduce(
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
