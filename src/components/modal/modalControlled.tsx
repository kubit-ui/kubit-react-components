import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useScrollEffect, useStyles, useZoomEffect } from '@/hooks';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '@/provider/errorBoundary/fallbackComponent';
import { DeviceBreakpointsType } from '@/types';
import { CssProperty } from '@/utils';

import { Portal } from '../portal';
import { ModalStandAlone } from './modalStandAlone';
import type { IModalControlled, IModalStandAlone, ModalBaseStylesType } from './types';

const MAX_ZOOM = 2.9;
const CONTAINER_STYLES_EDIT: CssProperty[] = [
  { cssPropertyName: 'overflow-y', cssPropertyValue: 'auto' },
];
const CONTENT_STYLES_EDIT: CssProperty[] = [
  { cssPropertyName: 'overflow-y', cssPropertyValue: 'visible' },
];

const ModalControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, portalId, ...props }: IModalControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ModalBaseStylesType, V>(STYLES_NAME.MODAL, variant, ctv);
    const device = useMediaDevice();

    const conditional = React.useMemo(
      () =>
        device !== DeviceBreakpointsType.DESKTOP && device !== DeviceBreakpointsType.LARGE_DESKTOP,
      [device]
    );
    const { scrollableRef, resizeRef, shadowRef } = useScrollEffect({
      conditional,
      shadowStyles: styles.headerContainer?.box_shadow,
    });

    const zoomRef = useZoomEffect(CONTAINER_STYLES_EDIT, MAX_ZOOM);
    const zoomRefChild = useZoomEffect(CONTENT_STYLES_EDIT, MAX_ZOOM);

    const modalStructure = (
      <ModalStandAlone
        {...props}
        ref={ref}
        device={device}
        resizeRef={resizeRef}
        scrollableRef={scrollableRef}
        shadowRef={shadowRef}
        styles={styles}
        zoomRef={zoomRef}
        zoomRefChild={zoomRefChild}
      />
    );

    return portalId ? <Portal wrapperId={portalId}>{modalStructure}</Portal> : modalStructure;
  }
);
ModalControlledComponent.displayName = 'ModalControlledComponent';

const ModalBoundary = <V extends string | unknown>(
  { portalId, ...props }: IModalControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const modalStructure = <ModalStandAlone {...(props as unknown as IModalStandAlone)} ref={ref} />;

  return (
    <ErrorBoundary
      fallBackComponent={
        <FallbackComponent>
          {portalId ? <Portal wrapperId={portalId}>{modalStructure}</Portal> : modalStructure}
        </FallbackComponent>
      }
    >
      <ModalControlledComponent {...props} ref={ref} portalId={portalId} />
    </ErrorBoundary>
  );
};

const ModalControlled = React.forwardRef(ModalBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IModalControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ModalBoundary>;

export { ModalControlled };
