import type { ArgTypes } from 'storybook/internal/types';

import { ChipVariantType } from '@/lib/designSystem/kubit/components/chip/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
