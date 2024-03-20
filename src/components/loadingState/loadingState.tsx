import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { LoadingStateStandAlone } from './loadingStateStandAlone';
import { ILoadingState, ILoadingStateStandAlone, LoadingStateGlobalStateStylesType } from './types';

const LoadingStateComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: React.PropsWithChildren<ILoadingState<V>>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<LoadingStateGlobalStateStylesType, V>(
      STYLES_NAME.LOADING_STATE,
      variant,
      ctv
    );

    return <LoadingStateStandAlone ref={ref} styles={styles} {...props} />;
  }
);
LoadingStateComponent.displayName = 'LoadingStateComponent';

const LoadinfStateBoundary = <V extends string | unknown>(
  props: React.PropsWithChildren<ILoadingState<V>>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <LoadingStateStandAlone {...(props as unknown as ILoadingStateStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <LoadingStateComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const LoadingState = React.forwardRef(LoadinfStateBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ILoadingState<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof LoadinfStateBoundary>;

export { LoadingState };
