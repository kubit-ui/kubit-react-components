import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { LoaderStandalone } from './loaderStandAlone';
import { ILoader, ILoaderStandAlone, LoaderStylesPropsType } from './types';

export const LoaderComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ...props }: ILoader<V>,
    ref: React.ForwardedRef<HTMLSpanElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<LoaderStylesPropsType, V>(STYLES_NAME.LOADER, variant);
    return <LoaderStandalone ref={ref} styles={styles} {...props} />;
  }
);
LoaderComponent.displayName = 'LoaderComponent';

const LoaderBoundary = <V extends string | unknown>(
  props: ILoader<V>,
  ref: React.ForwardedRef<HTMLSpanElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <LoaderStandalone {...(props as unknown as ILoaderStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <LoaderComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Loader = React.forwardRef(LoaderBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ILoader<V>> & {
    ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null;
  }
) => ReturnType<typeof LoaderBoundary>;

/**
 * @description
 * Loader component is used to show a loading state.
 * @param {React.PropsWithChildren<ILoader<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Loader variant="loader" />
 */
export { Loader };
