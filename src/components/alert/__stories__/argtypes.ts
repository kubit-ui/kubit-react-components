import type { ArgTypes } from 'storybook/internal/types';

import { AlertVariantType } from '@/lib/designSystem/kubit/components/alert/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
