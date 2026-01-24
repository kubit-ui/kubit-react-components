import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { InputBaseVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onBlur',
      'onCopy',
      'onFocus',
      'onKeyDown',
      'onPaste',
      'role',
    ]),
    autoCapitalize: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'autoCapitalize',
      name: 'inputBase',
    }),
    autoFocus: getBooleanArgTypes({
      descriptionName: 'inputBase',
      name: 'autoFocus',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    defaultValue: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'defaultValue',
      name: 'inputBase',
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'inputBase',
    }),
    inputMode: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'inputMode',
      name: 'inputBase',
    }),
    placeholder: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'placeholder',
      name: 'inputBase',
    }),
    popoverTarget: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'popoverTarget',
      name: 'inputBase',
    }),
    popoverTargetAction: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'popoverTargetAction',
      name: 'inputBase',
    }),
    truncate: getBooleanArgTypes({
      descriptionName: 'inputBase',
      name: 'truncate',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    type: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'type',
      name: 'inputBase',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'inputBase',
        variants: Object.keys(InputBaseVariantType).reduce(
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
