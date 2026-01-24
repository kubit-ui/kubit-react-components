import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { SliderVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'decrementButton',
      'defaultValue',
      'incrementButton',
      'label',
      'onChange',
      'onDragEnd',
      'onDragStart',
      'rightThumbIcon',
      'rightTooltip',
      'thumbIcon',
      'tooltip',
      'value',
    ]),
    ariaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'ariaLabel',
      name: 'slider',
    }),
    ariaLabelBy: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'ariaLabelBy',
      name: 'slider',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'slider',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'slider',
    }),
    initialStepOffset: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'initialStepOffset',
      name: 'slider',
    }),
    leftHelperText: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'leftHelperText',
      name: 'slider',
    }),
    max: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'max',
      name: 'slider',
    }),
    min: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'min',
      name: 'slider',
    }),
    range: getBooleanArgTypes({
      descriptionName: 'slider',
      name: 'range',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    rightAriaLabel: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'rightAriaLabel',
      name: 'slider',
    }),
    rightAriaLabelBy: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'rightAriaLabelBy',
      name: 'slider',
    }),
    rightHelperText: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'rightHelperText',
      name: 'slider',
    }),
    step: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'step',
      name: 'slider',
    }),
    type: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'type',
      name: 'slider',
      options: { continuous: 'continuous', discrete: 'discrete' },
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'slider',
        variants: Object.keys(SliderVariantType).reduce(
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
