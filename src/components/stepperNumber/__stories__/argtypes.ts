import type { ArgTypes } from 'storybook/internal/types';

import { StepperNumberVariantType } from '@/lib/designSystem/kubit/components/stepperNumber/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

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
