import type { ArgTypes } from 'storybook/internal/types';

import { SelectVariantType } from '@/lib/designSystem/kubit/components/select/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
