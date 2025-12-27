import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { StepperNumberProps } from './types/stepperNumber';

import { StepperNumberStandAlone } from './stepperNumberStandAlone';

const STEPPER_NUMBER = 'STEPPER_NUMBER';

export const StepperNumber = forwardRef<
  HTMLDivElement,
  StepperNumberProps<string>
>(
  (
    {
      additionalOrientationClasses,
      additionalVariantClasses,
      orientation = 'horizontal',
      variant,
      ...props
    },
    ref,
  ) => {
    const cssVariantClasses = useClassName({
      additionalClassNames: additionalVariantClasses,
      component: STEPPER_NUMBER,
      variant,
    });

    const cssOrientationClasses = useClassName({
      additionalClassNames: additionalOrientationClasses,
      component: STEPPER_NUMBER,
      variant: orientation,
    });

    return (
      <StepperNumberStandAlone
        {...props}
        ref={ref}
        cssOrientationClasses={cssOrientationClasses}
        cssVariantClasses={cssVariantClasses}
        orientation={orientation}
      />
    );
  },
);
