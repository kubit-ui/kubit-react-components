import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TableVariantType } = KUBIT_VARIANTS;

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
