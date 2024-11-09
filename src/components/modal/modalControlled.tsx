import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetectionWithAutoFocus } from '@/hooks/useScrollDetectionWithAutoFocus/useScrollDetectionWithAutoFocus';
import { useScrollEffect } from '@/hooks/useScrollEffect/useScrollEffect';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useSwipeDown } from '@/hooks/useSwipeDown/useSwipeDown';
import { useZoomEffect } from '@/hooks/useZoomEffect/useZoomEffect';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '@/provider/errorBoundary/fallbackComponent';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { CssProperty } from '../../utils/changeCssProperty/changeCssProperty';
import { Portal } from '../portal/portal';
import { ModalStandAlone } from './modalStandAlone';
import { IModalControlled, IModalStandAlone } from './types/modal';
import { ModalBaseStylesType } from './types/modalTheme';

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
    const innerRef = React.useRef<HTMLDivElement | null>(null);

    const handleInnerRef = React.useCallback(node => {
      innerRef.current = node;
      const modalHeader = innerRef.current?.querySelector('[data-modal-header]') as
        | HTMLElement
        | null
        | undefined;
      const modalContent = innerRef.current?.querySelector('[data-modal-content]') as
        | HTMLElement
        | null
        | undefined;
      const modalDraggableIcon = innerRef.current?.querySelector('[data-modal-draggable-icon]') as
        | HTMLElement
        | null
        | undefined;
      const modalIllustration = innerRef.current?.querySelector(
        '[data-modal-ilustration-container]'
      )?.firstElementChild as HTMLElement | null | undefined;

      handleModalZoomEffect(innerRef.current);
      handleHeaderShadowEffect(modalHeader);
      handleContentScrollEffect(modalContent);
      handleIllustrationResizeEffect(modalIllustration);
      handleContentZoomEffect(modalContent);
      handleContentScrollDetection(modalContent);
      handleDraggableIconSwipeDown(modalDraggableIcon);
    }, []);

    React.useImperativeHandle(ref, () => {
      return innerRef?.current as HTMLDivElement;
    }, []);

    const isTabletOrMobile = React.useMemo(
      () =>
        device !== DeviceBreakpointsType.DESKTOP && device !== DeviceBreakpointsType.LARGE_DESKTOP,
      [device]
    );

    const {
      scrollableRef: handleContentScrollEffect,
      resizeRef: handleIllustrationResizeEffect,
      shadowRef: handleHeaderShadowEffect,
    } = useScrollEffect({
      conditional: isTabletOrMobile,
      shadowStyles: styles.headerContainer?.box_shadow,
    });

    const handleModalZoomEffect = useZoomEffect(CONTAINER_STYLES_EDIT, MAX_ZOOM);
    const handleContentZoomEffect = useZoomEffect(CONTENT_STYLES_EDIT, MAX_ZOOM);

    const { setPopoverRef: handlePopoverSwipeDown, setDragIconRef: handleDraggableIconSwipeDown } =
      useSwipeDown(props.popover?.animationOptions, () => props.onClose?.());

    const { hasScroll: contentHasScroll, handleScrollDetection: handleContentScrollDetection } =
      useScrollDetectionWithAutoFocus({
        parentElementRef: innerRef,
      });

    const handlePopoverCloseInternally = () => {
      props.popover?.onCloseInternally?.();
      props.onClose?.();
    };

    const modalStructure = (
      <ModalStandAlone
        {...props}
        ref={handleInnerRef}
        contentHasScroll={contentHasScroll}
        device={device}
        popover={{ ...props.popover, forwardedRef: handlePopoverSwipeDown }}
        styles={styles}
        onPopoverCloseInternally={handlePopoverCloseInternally}
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

/**
 * @deprecated Try the new ModalV2 component
 *
 **/
const ModalControlled = React.forwardRef(ModalBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IModalControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ModalBoundary>;

export { ModalControlled };
