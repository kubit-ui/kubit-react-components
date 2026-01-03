import { type ForwardedRef, forwardRef, useCallback, useRef } from 'react';

import { syncInnerAndForwardedRef } from '@/lib/hooks/syncRefs/syncRefs';
import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useContentVisibility } from '@/lib/hooks/useContentVisibility/useContentVisibility';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetection } from '@/lib/hooks/useScrollDetection/useScrollDetection';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect/useScrollEffect';
import { useSwipeDown } from '@/lib/hooks/useSwipeDown/useSwipeDown';

import type { ModalControlledProps } from './types/modal';

import { Portal } from '../portal/portal';
import { ModalStandAlone } from './modalStandAlone';

export const ModalControlled = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      disableFocusableContent = false,
      onClose,
      popover,
      portalId,
      variant,
      ...props
    }: ModalControlledProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'MODAL',
      variant,
    });
    const device = useMediaDevice();
    const innerRef = useRef<HTMLDivElement | null>(null);
    const {
      scrollableRef: handleContentScrollEffect,
      shadowRef: handleHeaderShadowEffect,
    } = useScrollEffect({
      shadowStyles: /* styles?.headerContainer?.box_shadow*/ 'none',
    });
    const { handleContentVisibility } = useContentVisibility({});
    const { setDragIconRef: handleDraggableIconSwipeDown } = useSwipeDown({
      onClose,
    });

    // const { setDragIconRef: handleDraggableIconSwipeDown, setPopoverRef: handlePopoverSwipeDown } =
    // useSwipeDown({ animationOptions: props.popover?.animationOptions, onClose: props.onClose });

    const {
      handleScrollDetection: handleContentScrollDetection,
      hasScroll: contentHasScroll,
    } = useScrollDetection({
      autoFocus: !disableFocusableContent,
    });
    const handleInnerRef = useCallback((node) => {
      innerRef.current = node;
      syncInnerAndForwardedRef({ forwardedRef: ref, innerRef });
      const modalHeader = innerRef.current?.querySelector(
        '[data-modal-header]',
      ) as HTMLElement | null;
      const modalContent = innerRef.current?.querySelector(
        '[data-modal-content]',
      ) as HTMLElement | null;
      const modalDraggableIcon = innerRef.current?.querySelector(
        '[data-modal-draggable-icon]',
      ) as HTMLElement | null | undefined;
      handleHeaderShadowEffect(modalHeader);
      handleContentVisibility({
        container: innerRef.current,
        content: modalContent,
      });
      handleContentScrollEffect(modalContent);
      handleContentScrollDetection(modalContent);
      if (modalDraggableIcon) {
        handleDraggableIconSwipeDown(modalDraggableIcon);
      }
    }, []);
    const handlePopoverCloseInternally = () => {
      onClose?.();
    };
    const modalStructure = (
      <ModalStandAlone
        {...props}
        ref={handleInnerRef}
        contentHasScroll={contentHasScroll}
        cssClasses={cssClasses}
        device={device}
        popover={{
          ...popover,
        }}
        onPopoverCloseInternally={handlePopoverCloseInternally}
      />
    );
    return portalId ? (
      <Portal wrapperId={portalId}>{modalStructure}</Portal>
    ) : (
      modalStructure
    );
  },
);
