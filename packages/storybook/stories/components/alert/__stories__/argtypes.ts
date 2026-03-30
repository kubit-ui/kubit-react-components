import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { AlertVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ariaLive: getSelectorArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      defaultValue: 'off',
      keyName: 'ariaLive',
      name: 'alert',
      options: {
        assertive: 'assertive',
        off: 'off',
        polite: 'polite',
      },
    }),
    content: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'content',
      name: 'alert',
    }),
    dataTestId: getStringtArgTypes({
      category: CATEGORY_CONTROL.TESTING,
      keyName: 'dataTestId',
      name: 'alert',
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'alert',
        variants: { ...AlertVariantType },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'alert',
          variants: { ...AlertVariantType },
        }).table,
        category: 'MODIFIERS',
      },
    },
  };
};
