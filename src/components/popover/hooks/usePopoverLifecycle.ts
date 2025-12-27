import { useCallback, useEffect, useRef, useState } from 'react';

import { syncInnerAndForwardedRef } from '@/lib/hooks/syncRefs/syncRefs';
import { useScrollBlock } from '@/lib/hooks/useScrollBlock/useScrollBlock';
import { convertDurationToNumber } from '@/lib/hooks/useSwipeDown/utils/convertDurationToNumber';
import { focusFirstDescendant } from '@/lib/utils/focusHandlers/focusHandlers';

import type { IUsePopoverLifecycle } from './types/usePopoverLifecycle';

/**
 * Custom React hook that manages the complete lifecycle of a popover component.
 *
 * The hook provides fine-grained control over popover behavior including:
 * - Animation timing and visibility states
 * - Focus restoration and automatic focus management
 * - Background scroll prevention
 * - DOM element lifecycle management
 */
export const usePopoverLifecycle: IUsePopoverLifecycle = ({
  animationExitDuration = 200,
  disableAnimations,
  disableAutoFocusFirstDescendant = false,
  disableAutoFocusFirstDescendantAfterClose = true,
  disableRestoreFocusAfterClose = false,
  disableScrollBackground = false,
  open = false,
  popoverContainerRef,
  preventScrollOnCloseFocus = false,
}) => {
  // Save popover DOM element reference
  const popoverRef = useRef<HTMLElement | null>(null);
  // Track if scroll is blocked
  const scrollBlocked = useRef<boolean>(false);
  // Ref to track animation timeout
  const animationTimeout = useRef<number | null>(null);
  // Save focused element before popover opens
  const focusedElementBeforeOpen = useRef<HTMLElement | null>(null);

  // Visibility and closing states, differs from "open" prop due to animation timing
  const [isVisible, setIsVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  // Convert duration string to number if needed
  const EXIT_ANIMATION_DURATION = convertDurationToNumber(
    animationExitDuration,
  );
  // Scroll control
  const { allowScroll, blockScroll } = useScrollBlock();

  /**
   * Focuses the first focusable descendant within the popover if !disableAutoFocusFirstDescendant
   * IMPORTANT!! Should be applied after the popover DOM element is available
   */
  const applyOpenFocusStrategy = useCallback(() => {
    if (!disableAutoFocusFirstDescendant && popoverRef.current) {
      focusFirstDescendant({
        element: popoverRef.current,
        preventScroll: true,
      });
    }
  }, [disableAutoFocusFirstDescendant]);

  /**
   * Restores focus to the previously focused element before popover opened
   * or focuses the first focusable descendant of body based on configuration
   * IMPORTANT!! Should be applied before the popover DOM element is removed, if not the focus will be lost to the body
   */
  const applyCloseFocusStrategy = useCallback(() => {
    if (!disableRestoreFocusAfterClose) {
      focusedElementBeforeOpen.current?.focus({
        preventScroll: preventScrollOnCloseFocus,
      });
      return;
    }
    if (!disableAutoFocusFirstDescendantAfterClose) {
      focusFirstDescendant({ element: document.body });
    }
  }, [
    disableRestoreFocusAfterClose,
    preventScrollOnCloseFocus,
    disableAutoFocusFirstDescendantAfterClose,
  ]);

  // Effect to handle open animation
  // Also save focused element before opening
  useEffect(() => {
    if (open) {
      focusedElementBeforeOpen.current =
        document.activeElement as HTMLElement | null;
      // Show component immediately when opening
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [open]);

  // Effect to handle close animation
  useEffect(() => {
    if (!open && isVisible) {
      if (!disableAnimations) {
        // Start closing animation
        setIsClosing(true);

        // Keep the component visible during animation
        // Only hide it after exit animation completes
        animationTimeout.current = window.setTimeout(() => {
          // Apply close focus strategy
          // Should be applied before popover is removed from the DOM
          applyCloseFocusStrategy();
          setIsVisible(false);
          setIsClosing(false);
        }, EXIT_ANIMATION_DURATION);
      } else {
        // No animations, hide immediately
        // Apply close focus strategy
        // Should be applied before popover is removed from the DOM
        applyCloseFocusStrategy();
        setIsVisible(false);
        setIsClosing(false);
      }
    }
    // Cleanup function
    return () => {
      if (animationTimeout.current !== null) {
        window.clearTimeout(animationTimeout.current);
        animationTimeout.current = null;
      }
    };
  }, [
    open,
    isVisible,
    disableAnimations,
    EXIT_ANIMATION_DURATION,
    applyCloseFocusStrategy,
  ]);

  // Apply actions once popover DOM element is available
  const handleOpen = useCallback(
    (node: HTMLElement) => {
      // Save reference
      popoverRef.current = node;

      // Apply open focus strategy
      // Should be applied after popover is available in the DOM
      applyOpenFocusStrategy();

      if (disableScrollBackground && !scrollBlocked.current) {
        scrollBlocked.current = true;
        blockScroll({ elementsToOmit: [popoverRef.current] });
      }
    },
    [blockScroll, applyOpenFocusStrategy, disableScrollBackground],
  );

  // Cleanup actions when popover DOM element closes
  const handleClose = useCallback(() => {
    if (scrollBlocked.current) {
      allowScroll();
    }
    popoverRef.current = null;
  }, [allowScroll]);

  // Ref callback
  const handleInnerRef = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        handleOpen(node);
      } else {
        handleClose();
      }
      syncInnerAndForwardedRef({
        forwardedRef: popoverContainerRef,
        innerRef: popoverRef,
      });
    },
    [popoverContainerRef, handleClose, handleOpen],
  );

  return {
    handleInnerRef,
    isClosing,
    isVisible,
    popoverRef,
  };
};
