import type { ArgTypes } from 'storybook/internal/types';

import { OptionVariantType } from '@/lib/designSystem/kubit/components/option/variants';
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
      'as',
      'checkedIcon',
      'extraContent',
      'icon',
      'onClick',
      'onFocus',
      'role',
      'tabIndex',
      'toggle',
    ]),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'option',
    }),
    ['aria-selected']: getBooleanArgTypes({
      descriptionName: 'option',
      name: 'aria-selected',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'option',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    focus: getBooleanArgTypes({
      descriptionName: 'option',
      name: 'focus',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    label: {
      ...getStringtArgTypes({
        category: CATEGORY_CONTROL.CONTENT,
        keyName: 'label',
        name: 'option',
      }),
      type: { name: 'string', required: true },
    },
    labelCharsHighlighted: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'labelCharsHighlighted',
      name: 'option',
    }),
    multiSelect: getBooleanArgTypes({
      descriptionName: 'option',
      name: 'multiSelect',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    selected: getBooleanArgTypes({
      descriptionName: 'option',
      name: 'selected',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    sublabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'sublabel',
      name: 'option',
    }),
    url: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'url',
      name: 'option',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'option',
        variants: Object.keys(OptionVariantType).reduce(
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
