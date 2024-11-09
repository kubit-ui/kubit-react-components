import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { HeaderStandAlone } from './headerStandAlone';
import { useHeaderShadow } from './hook/useHeaderShadow';
import { IHeader, IHeaderStandAlone } from './types/header';
import { HeaderPropsStylesType } from './types/headerTheme';

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

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the NavBar component
 */
const Header = React.forwardRef(HeaderBoundary) as <V extends string | unknown>(
  props: IHeader<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { Header };
