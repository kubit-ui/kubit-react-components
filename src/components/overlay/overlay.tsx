import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
// context
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { OverlayStandAlone } from './overlayStandAlone';
import { IOverlay } from './types/overlay';
import { OverlayVariantStylesType } from './types/overlayTheme';

const OverlayComponent = React.forwardRef(
  <V extends string | unknown>(
    props: IOverlay<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<OverlayVariantStylesType, V>(
      STYLES_NAME.OVERLAY,
      props.variant,
      props.ctv
    );

    return <OverlayStandAlone {...props} ref={ref} styles={styles} />;
  }
);
OverlayComponent.displayName = 'OverlayComponent';

const OverlayBoundary = <V extends string | unknown>(
  props: IOverlay<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <OverlayStandAlone {...props} ref={ref} styles={{}} />
      </FallbackComponent>
    }
  >
    <OverlayComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Overlay = React.forwardRef(OverlayBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IOverlay<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof OverlayBoundary>;

/**
 * @description
 * Overlay component is used to create a background overlay.
 * @param {React.PropsWithChildren<IOverlay<V>} props
 * @returns {JSX.Element}
 * @constructor
 */
export { Overlay };
