import type { ArgTypes } from 'storybook/internal/types';

import { DropdownSelectedVariantType } from '@/lib/designSystem/kubit/components/dropdownSelected/variants';
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
      descriptionName: 'dropdownSelected',
      name: 'closePopoverOnScroll',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    defaultOpen: getBooleanArgTypes({
      descriptionName: 'dropdownSelected',
      name: 'defaultOpen',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    openAndCloseOnHover: getBooleanArgTypes({
      descriptionName: 'dropdownSelected',
      name: 'openAndCloseOnHover',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'dropdownSelected',
    }),
    urlTarget: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'urlTarget',
      name: 'dropdownSelected',
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'dropdownSelected',
      variants: Object.keys(DropdownSelectedVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
  };
};
