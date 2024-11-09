import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { LineSeparatorLinePropsStylesType } from '../lineSeparator/types/lineSeparatorTheme';
import { FooterStandAlone } from './footerStandAlone';
import { IFooter, IFooterStandAlone } from './types/footer';
import { FooterPropsStylesType } from './types/footerTheme';

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

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the CheckBox component
 */
const Footer = React.forwardRef(FooterBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IFooter<V>> & {
    ref?: React.ForwardedRef<HTMLElement> | undefined | null;
  }
) => ReturnType<typeof FooterBoundary>;

export { Footer };
