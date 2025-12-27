import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { PaginationProps } from './types/pagination';

import { adjustMaxCountersNumber } from './helpers/adjustMaxCountersNumber';
import { buildstepsNumber } from './helpers/getMaxCountersNumber';
import { PaginationStandAlone } from './paginationStandAlone';

export const Pagination = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      currentStep,
      maxCountersNumber: propMaxCountersNumber,
      maxStepsNumber,
      variant,
      ...props
    }: PaginationProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'PAGINATION',
      variant,
    });

    const adjustedCurrentStep = Math.max(
      0,
      Math.min(currentStep, maxStepsNumber - 1),
    );
    const adjustedMaxCountersNumber = adjustMaxCountersNumber({
      maxStepsNumber,
      propMaxCountersNumber,
    });
    const stepsNumber = buildstepsNumber(
      adjustedCurrentStep,
      maxStepsNumber,
      adjustedMaxCountersNumber,
    );
    const stepActive = stepsNumber.indexOf(adjustedCurrentStep + 1);

    const leftDisabled = adjustedCurrentStep === 0;
    const rightDisabled = adjustedCurrentStep === maxStepsNumber - 1;

    return (
      <PaginationStandAlone
        ref={ref}
        cssClasses={cssClasses}
        leftDisabled={leftDisabled}
        rightDisabled={rightDisabled}
        stepActive={stepActive}
        stepsNumber={stepsNumber}
        {...props}
      />
    );
  },
);
