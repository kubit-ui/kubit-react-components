import type { ArgTypes } from 'storybook/internal/types';

import { ListOptionsVariantType } from '@/lib/designSystem/kubit/components/listOptions/variants';
import { OptionVariantType } from '@/lib/designSystem/kubit/components/option/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onOptionClick',
      'options',
      'optionsContainerArias',
      'roveFocus',
      'title',
    ]),
    caseSensitive: getBooleanArgTypes({
      descriptionName: 'listOptions',
      name: 'caseSensitive',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    charsHighlighted: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'charsHighlighted',
      name: 'listOptions',
    }),
    checkedIcon: getIconArgTypes({
      isString: true,
      name: 'listOptions',
    }),
    content: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'content',
      name: 'listOptions',
    }),
    hightlightedOptionVariant: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'hightlightedOptionVariant',
      name: 'listOptions',
      options: Object.keys(OptionVariantType).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'listOptions',
    }),
    multiSelect: getBooleanArgTypes({
      descriptionName: 'listOptions',
      name: 'multiSelect',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    optionVariant: {
      ...getSelectorArgTypes({
        category: CATEGORY_CONTROL.MODIFIERS,
        keyName: 'optionVariant',
        name: 'listOptions',
        options: Object.keys(OptionVariantType).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      type: { name: 'string', required: true },
    },
    selectedValue: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'selectedValue',
      name: 'listOptions',
    }),
    type: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'type',
      name: 'listOptions',
      options: { navigation: 'navigation', selection: 'selection' },
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'listOptions',
        variants: Object.keys(ListOptionsVariantType).reduce(
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
