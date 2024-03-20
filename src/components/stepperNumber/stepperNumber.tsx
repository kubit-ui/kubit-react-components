import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { StepperNumberStandAlone } from './stepperNumberStandAlone';
import {
  IStepperNumber,
  IStepperNumberStandAlone,
  StepperNumberDimensionStylesType,
  StepperNumberOrientationType,
} from './types';

const STEPPER_NUMBER_STYLES = 'STEPPER_NUMBER_STYLES';

const StepperNumberComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      orientation = StepperNumberOrientationType.HORIZONTAL,
      ctv,
      ...props
    }: IStepperNumber<V>,
    ref: React.ForwardedRef<HTMLElement> | undefined | null
  ): JSX.Element => {
    const stylesOrientation = useStyles<StepperNumberDimensionStylesType, V>(
      STEPPER_NUMBER_STYLES,
      variant,
      ctv
    );
    const styles = stylesOrientation?.[orientation];

    return (
      <StepperNumberStandAlone {...props} ref={ref} orientation={orientation} styles={styles} />
    );
  }
);
StepperNumberComponent.displayName = 'StepperNumberComponent';

const StepperNumberBoundary = <V extends string | unknown>(
  props: IStepperNumber<V>,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <StepperNumberStandAlone {...(props as unknown as IStepperNumberStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <StepperNumberComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const StepperNumber = React.forwardRef(StepperNumberBoundary) as <V extends string | unknown>(
  props: IStepperNumber<V> & {
    ref?: React.ForwardedRef<HTMLElement> | undefined | null;
  }
) => ReturnType<typeof StepperNumberBoundary>;

export { StepperNumber };
