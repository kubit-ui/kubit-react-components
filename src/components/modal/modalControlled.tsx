import { type ForwardedRef, forwardRef, useCallback, useRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useContentVisibility } from '@/lib/hooks/useContentVisibility/useContentVisibility';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetection } from '@/lib/hooks/useScrollDetection/useScrollDetection';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect/useScrollEffect';
import { useSwipeDown } from '@/lib/hooks/useSwipeDown/useSwipeDown';
import { syncInnerAndForwardedRef } from '@/lib/utils/refs/syncRefs';

import type { ModalControlledProps } from './types/modal';

import { Portal } from '../portal/portal';
import { ModalStandAlone } from './modalStandAlone';

/**
 * ModalControlled component for displaying overlay dialogs.
 *
 * This component manages modal visibility externally through props. It provides
 * scroll detection, swipe-down gestures, focus management, and portal rendering.
 * Use this when you need full control over the modal's open/close state.
 *
 * @example
 * ```tsx
 * <ModalControlled
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   variant="default"
 * >
 *   Modal content here
 * </ModalControlled>
 * ```
 */
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
    const {
      setDragIconRef: handleDraggableIconSwipeDown,
      setPopoverRef: handlePopoverSwipeDown,
    } = useSwipeDown({
      handleClose: onClose,
    });

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
          popoverContainerRef: handlePopoverSwipeDown,
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
