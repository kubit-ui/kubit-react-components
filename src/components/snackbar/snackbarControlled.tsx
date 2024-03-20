import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { SnackbarStandAlone } from './snackbarStandAlone';
import { ISnackbarControlled, ISnackbarStandAlone, SnakbarTypeStyleProps } from './types';

const SNACKBAR_STYLES = 'SNACKBAR_STYLES';

const SnackbarControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, type, ...props }: ISnackbarControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<SnakbarTypeStyleProps, V>(SNACKBAR_STYLES, variant, ctv);

    return <SnackbarStandAlone {...props} ref={ref} styles={styles[type]} />;
  }
);
SnackbarControlledComponent.displayName = 'SnackbarControlledComponent';

const SnackbarBoundary = <V extends string | unknown>(
  props: ISnackbarControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <SnackbarStandAlone {...(props as unknown as ISnackbarStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <SnackbarControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const SnackbarControlled = React.forwardRef(SnackbarBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ISnackbarControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof SnackbarBoundary>;

export { SnackbarControlled };
