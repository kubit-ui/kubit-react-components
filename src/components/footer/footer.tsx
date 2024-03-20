import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { LineSeparatorLinePropsStylesType } from '../lineSeparator';
import { FooterStandAlone } from './footerStandAlone';
import { FooterPropsStylesType, IFooter, IFooterStandAlone } from './types';

const FooterComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, extraCt, ...props }: IFooter<V>,
    ref: React.ForwardedRef<HTMLElement> | undefined | null
  ): JSX.Element => {
    const device = useMediaDevice();
    const styles = useStyles<FooterPropsStylesType, V>(STYLES_NAME.FOOTER, variant, ctv);
    const lineSeparatorLineStyles = useStyles<LineSeparatorLinePropsStylesType>(
      STYLES_NAME.LINE_SEPARATOR,
      styles.lineSeparator?.[device]?.variant ?? styles.lineSeparator?.variant,
      extraCt
    );
    return (
      <FooterStandAlone
        ref={ref}
        device={device}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
        styles={styles}
        {...props}
      />
    );
  }
);
FooterComponent.displayName = 'FooterComponent';

const FooterBoundary = <V extends string | unknown>(
  props: IFooter<V>,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <FooterStandAlone {...(props as unknown as IFooterStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <FooterComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Footer = React.forwardRef(FooterBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IFooter<V>> & {
    ref?: React.ForwardedRef<HTMLElement> | undefined | null;
  }
) => ReturnType<typeof FooterBoundary>;

export { Footer };
