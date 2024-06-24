import * as React from 'react';

import { useMediaDevice, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

// helpers
import { buildstepsNumber } from './helpers';
import { PaginationStandAlone } from './paginationStandAlone';
import { PaginationStyledProps } from './types';
// interfaces
import { IPagination, IPaginationStandAlone } from './types/pagination';

const PAGINATION_STYLES = 'PAGINATION_STYLES';

const PaginationComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, currentStep, maxStepsNumber, maxCountersNumber, ctv, ...props }: IPagination<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<PaginationStyledProps, V>(PAGINATION_STYLES, variant, ctv);
    const device = useMediaDevice();

    const limitCurrentStep = Math.max(0, Math.min(currentStep, maxStepsNumber - 1));

    const stepsNumber = buildstepsNumber(
      limitCurrentStep,
      maxStepsNumber,
      styles.paginationCountersNumber?.[device]?.counters,
      maxCountersNumber
    );
    const stepActive = stepsNumber.indexOf(limitCurrentStep + 1);

    const leftDisabled = limitCurrentStep === 0;
    const rightDisabled = limitCurrentStep === maxStepsNumber - 1;

    return (
      <PaginationStandAlone
        ref={ref}
        leftDisabled={leftDisabled}
        rightDisabled={rightDisabled}
        stepActive={stepActive}
        stepsNumber={stepsNumber}
        styles={styles}
        {...props}
      />
    );
  }
);
PaginationComponent.displayName = 'PaginationComponent';

const PaginationBoundary = <V extends string | unknown>(
  props: IPagination<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <PaginationStandAlone {...(props as unknown as IPaginationStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <PaginationComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Pagination = React.forwardRef(PaginationBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IPagination<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PaginationBoundary>;

export { Pagination };
