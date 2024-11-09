import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { LoaderStandalone } from './loaderStandAlone';
import { ILoader, ILoaderStandAlone } from './types/loader';
import { LoaderStylesPropsType } from './types/loaderTheme';

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

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Consider using an alternative component.
 *
 * Loader component is used to show a loading state.
 * @param {React.PropsWithChildren<ILoader<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Loader variant="loader" />
 */
const Loader = React.forwardRef(LoaderBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ILoader<V>> & {
    ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null;
  }
) => ReturnType<typeof LoaderBoundary>;

export { Loader };
