import type { ArgTypes } from 'storybook/internal/types';

import { TooltipVariantType } from '@/lib/designSystem/kubit/components/tooltip/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
    closeIcon: getIconArgTypes({
      name: 'close icon',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'tooltip',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    title: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'title',
      name: 'tooltip',
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
