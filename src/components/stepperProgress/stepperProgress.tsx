import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { StepperProgressStandAlone } from './stepperProgressStandAlone';
import { IStepperProgress, IStepperProgressStandAlone, StepperProgressCommonProps } from './types';

const STEPPER_PROGRESS_STYLES = 'STEPPER_PROGRESS_STYLES';

const StepperProgressComponent = React.forwardRef(
  <V extends string | unknown>(
    { initialStep = 0, ctv, ...props }: IStepperProgress<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<StepperProgressCommonProps, V>(
      STEPPER_PROGRESS_STYLES,
      props.variant,
      ctv
    );

    return (
      <StepperProgressStandAlone ref={ref} initialStep={initialStep} styles={styles} {...props} />
    );
  }
);
StepperProgressComponent.displayName = 'StepperProgressComponent';

const StepperProgressBoundary = <V extends string | unknown>(
  props: IStepperProgress<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <StepperProgressStandAlone
          {...(props as unknown as IStepperProgressStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <StepperProgressComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const StepperProgress = React.forwardRef(StepperProgressBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IStepperProgress<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof StepperProgressBoundary>;

export { StepperProgress };
