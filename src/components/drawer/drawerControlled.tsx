import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useDeviceHeight, useMediaDevice, useScrollEffect, useZoomEffect } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { CssProperty } from '@/utils';

import { Portal } from '../portal';
import { DrawerStandAlone } from './drawerStandAlone';
import { DrawerVariantStylesType, IDrawerControlled, IDrawerStandAlone } from './types';

/* Constants for useScrollEffect */
const SCROLL_DISTANCE = 5;
/* Constants for useZoomEffect (footer) */
const FOOTER_EDIT_STYLES: CssProperty[] = [
  { cssPropertyName: 'position', cssPropertyValue: 'static' },
];

const MAX_ZOOM = 2.4;

const DrawerControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { portalId, ...props }: IDrawerControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    useDeviceHeight();
    const styles = useStyles<DrawerVariantStylesType, V>(
      STYLES_NAME.DRAWER,
      props.variant,
      props.ctv
    );
    const device = useMediaDevice();
    const stylesByDevice = styles[device];

    const { scrollableRef, shadowRef } = useScrollEffect({
      shadowStyles: stylesByDevice.titleContainer?.box_shadow,
      shadowVisible: SCROLL_DISTANCE,
    });

    const footerRef = useZoomEffect(FOOTER_EDIT_STYLES, MAX_ZOOM);

    const drawerStructure = (
      <DrawerStandAlone
        {...props}
        ref={ref}
        device={device}
        footerRef={footerRef}
        scrollableRef={scrollableRef}
        shadowRef={shadowRef}
        styles={stylesByDevice}
      />
    );

    return portalId ? <Portal wrapperId={portalId}>{drawerStructure}</Portal> : drawerStructure;
  }
);
DrawerControlledComponent.displayName = 'DrawerControlledComponent';

const DrawerBoundary = <V extends string | unknown>(
  { portalId, ...props }: IDrawerControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const drawerStructure = (
    <DrawerStandAlone {...(props as unknown as IDrawerStandAlone)} ref={ref} />
  );
  return (
    <ErrorBoundary
      fallBackComponent={
        <FallbackComponent>
          {portalId ? <Portal wrapperId={portalId}>{drawerStructure}</Portal> : drawerStructure}{' '}
        </FallbackComponent>
      }
    >
      <DrawerControlledComponent {...props} ref={ref} portalId={portalId} />
    </ErrorBoundary>
  );
};

const DrawerControlled = React.forwardRef(DrawerBoundary) as <V extends string | unknown>(
  props: IDrawerControlled<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { DrawerControlled };
