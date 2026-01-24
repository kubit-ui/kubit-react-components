import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { TooltipVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'onOpenClose',
      'content',
      'contentScrollArias',
      'popover',
    ]),
    align: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'align',
      name: 'tooltip',
      options: {
        bottom: 'bottom',
        left: 'left',
        right: 'right',
        top: 'top',
      },
    }),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'tooltip',
    }),
    childrenAsButton: getBooleanArgTypes({
      descriptionName: 'tooltip',
      name: 'childrenAsButton',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'tooltip',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    tooltipAriaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'tooltipAriaLabel',
      name: 'tooltip',
    }),
    tooltipAsModal: getBooleanArgTypes({
      descriptionName: 'tooltip',
      name: 'tooltipAsModal',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'tooltip',
        variants: { ...TooltipVariantType },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'tooltip',
          variants: { ...TooltipVariantType },
        }).table,
        category: 'MODIFIERS',
      },
    },
  };
};
