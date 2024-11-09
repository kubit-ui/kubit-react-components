import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { LoadingStateStandAlone } from './loadingStateStandAlone';
import { ILoadingState, ILoadingStateStandAlone } from './types/loadingState';
import { LoadingStateGlobalStateStylesType } from './types/loadingStateTheme';

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

/**
 *  @deprecated This component has been deprecated and will be removed in the next MAJOR release.
 */
const LoadingState = React.forwardRef(LoadinfStateBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ILoadingState<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof LoadinfStateBoundary>;

export { LoadingState };
