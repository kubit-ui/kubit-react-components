import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useDeviceHeight } from '@/hooks/useDeviceHeight/useDeviceHeight';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetectionWithAutoFocus } from '@/hooks/useScrollDetectionWithAutoFocus/useScrollDetectionWithAutoFocus';
import { useScrollEffect } from '@/hooks/useScrollEffect/useScrollEffect';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';
import { useZoomEffect } from '@/hooks/useZoomEffect/useZoomEffect';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { CssProperty } from '../../utils/changeCssProperty/changeCssProperty';
import { Portal } from '../portal/portal';
import { DrawerStandAlone } from './drawerStandAlone';
import { IDrawerControlled, IDrawerStandAlone } from './types/drawer';
import { DrawerVariantStylesType } from './types/drawerTheme';

/* Constants for useScrollEffect */
const SCROLL_DISTANCE = 5;

/* Constants for useZoomEffect */
const MAX_ZOOM = 2.4;
const FOOTER_EDIT_STYLES: CssProperty[] = [
  { cssPropertyName: 'position', cssPropertyValue: 'static' },
];
const CONTAINER_STYLES_EDIT: CssProperty[] = [
  { cssPropertyName: 'overflow-y', cssPropertyValue: 'auto' },
];
const CONTENT_STYLES_EDIT: CssProperty[] = [
  { cssPropertyName: 'overflow-y', cssPropertyValue: 'visible' },
  { cssPropertyName: 'max-height', cssPropertyValue: 'none' },
  { cssPropertyName: 'min-height', cssPropertyValue: 'auto' },
];

const DrawerControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { portalId, ...props }: IDrawerControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const innerRef = React.useRef<HTMLDivElement | null>(null);

    const handleInnerRef = React.useCallback(node => {
      innerRef.current = node;
      const drawerTitle = innerRef.current?.querySelector('[data-drawer-title]') as
        | HTMLElement
        | null
        | undefined;
      const drawerContent = innerRef.current?.querySelector('[data-drawer-content]') as
        | HTMLElement
        | null
        | undefined;
      const drawerFooter = innerRef.current?.querySelector('[data-drawer-footer]') as
        | HTMLElement
        | null
        | undefined;

      handleDrawerZoomEffect(innerRef.current);
      handleTitleShadowEffect(drawerTitle);
      handleContentZoomEffect(drawerContent);
      handleContentScrollEffect(drawerContent);
      handleFooterZoomEffect(drawerFooter);
      handleContentScrollDetection(drawerContent);
    }, []);

    React.useImperativeHandle(ref, () => {
      return innerRef?.current as HTMLDivElement;
    }, []);

    useDeviceHeight();

    const handleScroll = (e: Event) => {
      props.onContentScroll?.(e);
    };

    const styles = useStylesV2<DrawerVariantStylesType, V>({
      styleName: STYLES_NAME.DRAWER,
      variantName: props.variant,
      customTokens: props.ctv,
    });
    const device = useMediaDevice();
    const stylesByDevice = styles?.[device];

    const { scrollableRef: handleContentScrollEffect, shadowRef: handleTitleShadowEffect } =
      useScrollEffect({
        shadowStyles: stylesByDevice.titleContainer?.box_shadow,
        shadowVisible: SCROLL_DISTANCE,
        scrollCallback: handleScroll,
      });

    const handleDrawerZoomEffect = useZoomEffect(CONTAINER_STYLES_EDIT, MAX_ZOOM);
    const handleContentZoomEffect = useZoomEffect(CONTENT_STYLES_EDIT, MAX_ZOOM);
    const handleFooterZoomEffect = useZoomEffect(FOOTER_EDIT_STYLES, MAX_ZOOM);

    const { hasScroll: contentHasScroll, handleScrollDetection: handleContentScrollDetection } =
      useScrollDetectionWithAutoFocus({
        parentElementRef: innerRef,
      });

    const drawerStructure = (
      <DrawerStandAlone
        {...props}
        ref={handleInnerRef}
        contentHasScroll={contentHasScroll}
        device={device}
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
