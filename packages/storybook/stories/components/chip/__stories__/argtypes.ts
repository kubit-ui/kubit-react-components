import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { ChipVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'closeIcon',
      'errorIcon',
      'errorMessage',
      'label',
      'leftIcon',
      'range',
      'rangeIcon',
      'rangeSeparator',
    ]),
    state: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'state',
      name: 'chip',
      options: { default: 'default', disabled: 'disabled', error: 'error' },
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'chip',
        variants: Object.keys(ChipVariantType).reduce(
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
