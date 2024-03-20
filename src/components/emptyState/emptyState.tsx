import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { EmptyStateStandAlone } from './emptyStateStandAlone';
import { IEmptyState, IEmptyStateStandAlone } from './types';
import { EmptyStateVariantStylesType } from './types/emptyStateTheme';

const EmptyStateComponent = React.forwardRef(
  <V extends string | unknown, S extends string | number | symbol>(
    { ctv, ...props }: IEmptyState<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles: EmptyStateVariantStylesType<S> = useStyles<EmptyStateVariantStylesType<S>, V>(
      STYLES_NAME.EMPTY_STATE,
      props.variant,
      ctv
    );

    return <EmptyStateStandAlone {...props} ref={ref} styles={styles?.[props.state]} />;
  }
);
EmptyStateComponent.displayName = 'EmptyStateComponent';

const EmptyStateBoundary = <V extends string | unknown>(
  props: IEmptyState<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <EmptyStateStandAlone {...(props as unknown as IEmptyStateStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <EmptyStateComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const EmptyState = React.forwardRef(EmptyStateBoundary) as <V extends string | unknown>(
  props: IEmptyState<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { EmptyState };
