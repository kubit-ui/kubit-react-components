import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { StepperNumberVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'completedStepIcon',
      'screenReaderCompletedStep',
      'screenReaderTextBuilder',
      'screenReaderTitle',
      'steps',
    ]),
    currentStep: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'currentStep',
      name: 'stepperNumber',
    }),
    horizontalOrientationWidth: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'horizontalOrientationWidth',
      name: 'stepperNumber',
    }),
    orientation: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'orientation',
      name: 'stepperNumber',
      options: { horizontal: 'horizontal', vertical: 'vertical' },
    }),
    stepMaxTruncatedLines: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'stepMaxTruncatedLines',
      name: 'stepperNumber',
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'stepperNumber',
        variants: Object.keys(StepperNumberVariantType).reduce(
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
