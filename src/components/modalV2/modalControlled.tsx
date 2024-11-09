import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetectionWithAutoFocus } from '@/hooks/useScrollDetectionWithAutoFocus/useScrollDetectionWithAutoFocus';
import { useScrollEffect } from '@/hooks/useScrollEffect/useScrollEffect';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';
import { useSwipeDown } from '@/hooks/useSwipeDown/useSwipeDown';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '@/provider/errorBoundary/fallbackComponent';

import { Portal } from '../portal/portal';
import { ModalStandAlone } from './modalStandAlone';
import { IModalControlled, IModalStandAlone } from './types/modal';
import { ModalBaseStylesType } from './types/modalTheme';

const ModalControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, portalId, ...props }: IModalControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStylesV2<ModalBaseStylesType, V>({
      styleName: STYLES_NAME.MODAL_V2,
      variantName: variant,
      customTokens: ctv,
    });
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

      handleHeaderShadowEffect(modalHeader);
      handleContentScrollEffect(modalContent);
      handleContentScrollDetection(modalContent);
      handleDraggableIconSwipeDown(modalDraggableIcon);
    }, []);

    React.useImperativeHandle(ref, () => {
      return innerRef?.current as HTMLDivElement;
    }, []);

    const { scrollableRef: handleContentScrollEffect, shadowRef: handleHeaderShadowEffect } =
      useScrollEffect({
        // The box_shadow token is need for the shadow effect
        shadowStyles: styles?.headerContainer?.box_shadow,
      });

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
        styles={styles as ModalBaseStylesType}
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

const ModalControlled = React.forwardRef(ModalBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IModalControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ModalBoundary>;

export { ModalControlled as ModalControlledV2 };
