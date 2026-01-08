import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { StepperNumberProps } from './types/stepperNumber';

import { StepperNumberStandAlone } from './stepperNumberStandAlone';

const STEPPER_NUMBER = 'STEPPER_NUMBER';

/**
 * StepperNumber component for incrementing/decrementing numeric values.
 *
 * This component provides plus/minus buttons for adjusting numeric values with
 * configurable step intervals. Supports both horizontal and vertical orientations.
 *
 * @example
 * ```tsx
 * <StepperNumber
 *   value={5}
 *   min={0}
 *   max={10}
 *   step={1}
 *   onChange={(newValue) => console.log(newValue)}
 *   orientation="horizontal"
 * />
 * ```
 */
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
