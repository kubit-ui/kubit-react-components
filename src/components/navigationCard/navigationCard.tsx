import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useStyles } from '@/hooks';
import { useGenericComponents } from '@/provider';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { NavigationCardStandalone } from './navigationCardStandAlone';
import { INavigationCard, INavigationCardStandAlone, NavigationCardStylesPropsType } from './types';

const NavigationCardComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: INavigationCard<V>,
    ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<NavigationCardStylesPropsType, V>(
      STYLES_NAME.NAVIGATION_CARD,
      variant,
      ctv
    );
    const device = useMediaDevice();
    const { LINK } = useGenericComponents();

    return (
      <NavigationCardStandalone
        ref={ref}
        component={LINK}
        device={device}
        styles={styles}
        {...props}
      />
    );
  }
);
NavigationCardComponent.displayName = 'NavigationCardComponent';

const NavigationCardBoundary = <V extends string | unknown>(
  props: INavigationCard<V>,
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <NavigationCardStandalone {...(props as unknown as INavigationCardStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <NavigationCardComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const NavigationCard = React.forwardRef(NavigationCardBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<INavigationCard<V>> & {
    ref?: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof NavigationCardBoundary>;

export { NavigationCard };
