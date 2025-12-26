import type { ArgTypes } from 'storybook/internal/types';

import { TableVariantType } from '@/lib/designSystem/kubit/components/table/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/lib/storybook/argtypes/htmlComponentArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes(['children']),
    ['aria-hidden']: getBooleanArgTypes({
      descriptionName: 'table',
      name: 'aria-hidden',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    ['aria-label']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-label',
      name: 'table',
    }),
    ['aria-labelledby']: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'aria-labelledby',
      name: 'table',
    }),
    autoLeftStickyCalc: getBooleanArgTypes({
      descriptionName: 'table',
      name: 'autoLeftStickyCalc',
      subCategory: CATEGORY_CONTROL.CUSTOMIZATION,
    }),
    autoRightStickyCalc: getBooleanArgTypes({
      descriptionName: 'table',
      name: 'autoRightStickyCalc',
      subCategory: CATEGORY_CONTROL.CUSTOMIZATION,
    }),
    component: getHtmlComponentArgTypes({ name: 'table' }),
    disableShadowEffects: getBooleanArgTypes({
      descriptionName: 'table',
      name: 'disableShadowEffects',
      subCategory: CATEGORY_CONTROL.CUSTOMIZATION,
    }),
    hasScrollDisabled: getBooleanArgTypes({
      descriptionName: 'table',
      name: 'hasScrollDisabled',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    sticky: getBooleanArgTypes({
      descriptionName: 'table',
      name: 'sticky',
      subCategory: CATEGORY_CONTROL.CUSTOMIZATION,
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'table',
        variants: Object.keys(TableVariantType).reduce(
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
