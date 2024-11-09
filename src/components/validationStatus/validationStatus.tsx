import React from 'react';

// custom hooks
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { IValidationStatus, IValidationStatusStandAlone } from './types/validationStatus';
import { ValidationStatusStylesProps } from './types/validationStatusTheme';
import { ValidationStatusStandAlone } from './validationStatusStandAlone';

const VALIDATION_STATUS_STYLES = 'VALIDATION_STATUS_STYLES';

const ValidationStatusComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IValidationStatus<V>,
    ref: React.ForwardedRef<HTMLUListElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ValidationStatusStylesProps, V>(
      VALIDATION_STATUS_STYLES,
      variant,
      ctv
    );

    return <ValidationStatusStandAlone {...props} ref={ref} styles={styles} />;
  }
);
ValidationStatusComponent.displayName = 'ValidationStatusComponent';

const ValidationStatusBoundary = <V extends string | unknown>(
  props: IValidationStatus<V>,
  ref: React.ForwardedRef<HTMLUListElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ValidationStatusStandAlone
          {...(props as unknown as IValidationStatusStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <ValidationStatusComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const ValidationStatus = React.forwardRef(ValidationStatusBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IValidationStatus<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ValidationStatusBoundary>;

export { ValidationStatus };
