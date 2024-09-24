import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { ProgressBarStandalone } from './progressBarStandAlone';
import {
  IProgressBar,
  IProgressBarStandAlone,
  ProgressBarSizeStylesType,
  ProgressBarVariantStylesType,
} from './types';

const ProgressBarComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    { variant, percentProgressCompleted, ctv, ...props }: IProgressBar<V, S>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ProgressBarVariantStylesType, V>(
      STYLES_NAME.PROGRESS_BAR,
      variant,
      ctv
    );
    const sizeStyles = useStyles<ProgressBarSizeStylesType, S>(
      STYLES_NAME.PROGRESS_BAR,
      props.size,
      props.cts
    );

    // Avoid values not included in 0 - 100
    const progressCompleted = !percentProgressCompleted
      ? 0
      : Math.min(Math.max(percentProgressCompleted, 0), 100);

    return (
      <ProgressBarStandalone
        {...props}
        ref={ref}
        progressCompleted={progressCompleted}
        sizeStyles={sizeStyles}
        styles={styles}
      />
    );
  }
);
ProgressBarComponent.displayName = 'ProgressBarComponent';

const ProgressBarBoundary = <V extends string | unknown>(
  props: IProgressBar<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ProgressBarStandalone {...(props as unknown as IProgressBarStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <ProgressBarComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const ProgressBar = React.forwardRef(ProgressBarBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IProgressBar<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ProgressBarBoundary>;

/**
 * @description
 * ProgressBar component is used to show a progress bar.
 * @param {React.PropsWithChildren<IProgressBar<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <ProgressBar variant="progressBar" />
 */
export { ProgressBar };
