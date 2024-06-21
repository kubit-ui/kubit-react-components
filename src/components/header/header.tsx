import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { HeaderStandAlone } from './headerStandAlone';
import { useHeaderShadow } from './hook/useHeaderShadow';
import { HeaderPropsStylesType, IHeader, IHeaderStandAlone } from './types';

const HeaderComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, showShadowFrom, ...props }: IHeader<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<HeaderPropsStylesType, V>(STYLES_NAME.HEADER, variant, ctv);
    const device = useMediaDevice();
    const { box_shadow } = styles?.container?.scrollShadow || {};
    const { headerRef } = useHeaderShadow({
      ref,
      shadow: { boxShadow: box_shadow, showShadowFrom },
    });

    return <HeaderStandAlone {...props} ref={headerRef} device={device} styles={styles} />;
  }
);
HeaderComponent.displayName = 'HeaderComponent';

const HeaderBoundary = <V extends string | unknown>(
  props: IHeader<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <HeaderStandAlone {...(props as unknown as IHeaderStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <HeaderComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Header = React.forwardRef(HeaderBoundary) as <V extends string | unknown>(
  props: IHeader<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { Header };
