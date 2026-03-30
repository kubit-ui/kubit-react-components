import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { SelectVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['icon', 'label', 'options']),
    closePopoverOnScroll: getBooleanArgTypes({
      descriptionName: 'select',
      name: 'closePopoverOnScroll',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    defaultOpen: getBooleanArgTypes({
      descriptionName: 'select',
      name: 'defaultOpen',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    openAndCloseOnHover: getBooleanArgTypes({
      descriptionName: 'select',
      name: 'openAndCloseOnHover',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'select',
    }),
    urlTarget: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'urlTarget',
      name: 'select',
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'select',
      variants: Object.keys(SelectVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
