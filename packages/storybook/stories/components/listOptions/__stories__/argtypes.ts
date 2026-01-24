import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/stories/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { ListOptionsVariantType, OptionVariantType } = KUBIT_VARIANTS;

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
