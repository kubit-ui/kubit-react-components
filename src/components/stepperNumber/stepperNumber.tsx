import React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { StepperNumberStandAlone } from './stepperNumberStandAlone';
import { StepperNumberOrientationType } from './types/orientation';
import { IStepperNumber, IStepperNumberStandAlone } from './types/stepperNumber';
import { StepperNumberDimensionStylesType } from './types/stepperNumberTheme';

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
