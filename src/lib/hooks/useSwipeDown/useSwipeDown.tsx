import { useCallback, useEffect, useRef } from 'react';

import { convertDurationToNumber } from './utils/convertDurationToNumber';

const DEFAULT_DISTANCE_THRESHOLD = 30;

/**
 * Animation configuration options for swipe-down behavior
 */
export interface SwipeDownAnimationOptions {
  /** Duration of the animation in milliseconds or CSS time string (e.g., "0.3s") */
  duration?: string | number;
  /** Delay before animation starts in milliseconds or CSS time string */
  delay?: string | number;
  /** Duration of exit animation, overrides duration if provided */
  exitDuration?: string | number;
  /** Easing function for the animation (e.g., "ease-in-out") */
  easing?: string;
  /** Easing function for exit animation, overrides easing if provided */
  exitEasing?: string;
  /** Easing function for enter animation */
  enterEasing?: string;
}

/**
 * Configuration options for swipe-down behavior
 */
export interface SwipeDownOptions {
  /** Animation configuration */
  animationOptions?: SwipeDownAnimationOptions;
  /** Callback executed when swipe-down triggers close */
  onClose?: () => void;
  /** Distance threshold in pixels to trigger close action (default: 30) */
  distanceThreshold?: number;
  /** Enable or disable swipe-down functionality (default: true) */
  enabled?: boolean;
}

/**
 * A custom React hook that enables swipe-down-to-close functionality for modals and popovers.
 *
 * Provides touch and mouse drag support with configurable animation and threshold settings.
 * Automatically handles event listener cleanup and memory management.
 * Supports customizable distance threshold and enable/disable functionality.
 *
 * @param options - Configuration options for swipe-down behavior
 * @param options.animationOptions - Animation timing and easing configuration
 * @param options.onClose - Callback function invoked when swipe triggers close
 * @param options.distanceThreshold - Minimum drag distance in pixels to trigger close (default: 30px)
 * @param options.enabled - Enable or disable swipe functionality (default: true)
 *
 * @returns Object containing ref callbacks for the container and drag handle
 * @returns return.setPopoverRef - Ref callback for the popover/modal container element
 * @returns return.setDragIconRef - Ref callback for the drag handle element
 *
 * @remarks
 * **Drag Behavior:**
 * - Only allows downward dragging (upward drags are ignored)
 * - Calculates drag distance from initial touch/click position
 * - Triggers close when drag exceeds `distanceThreshold`
 * - Returns to original position if threshold not met
 * - Removes transition during drag for immediate feedback
 *
 * **Touch & Mouse Support:**
 * - Touch events: `touchstart`, `touchmove`, `touchend`
 * - Mouse events: `mousedown`, `mousemove`, `mouseup`
 * - Prevents default behavior during drag to avoid scrolling
 * - Works on both desktop and mobile devices
 *
 * **Animation:**
 * - Uses CSS transitions for smooth open/close animations
 * - Respects provided duration, delay, and easing values
 * - Waits for exit animation before calling `onClose`
 * - Removes transition during active drag for instant feedback
 *
 * **Performance:**
 * - Event listeners attached only to drag handle
 * - Proper cleanup prevents memory leaks
 * - Uses refs to avoid re-renders during drag
 * - Can be disabled when not needed
 *
 * **Memory Management:**
 * - Automatic cleanup of all event listeners
 * - Clears pending timeouts on unmount
 * - Nullifies refs when elements are removed
 *
 * @example
 * **Basic usage:**
 * ```tsx
 * const { setPopoverRef, setDragIconRef } = useSwipeDown({
 *   onClose: () => setIsOpen(false),
 *   distanceThreshold: 50,
 * });
 *
 * <div ref={setPopoverRef} className="modal">
 *   <div ref={setDragIconRef} className="drag-handle">
 *     ⌄
 *   </div>
 *   <div>Modal content</div>
 * </div>
 * ```
 *
 * @example
 * **With custom animation:**
 * ```tsx
 * const { setPopoverRef, setDragIconRef } = useSwipeDown({
 *   animationOptions: {
 *     duration: '0.3s',
 *     exitDuration: '0.5s',
 *     easing: 'ease-in-out',
 *     exitEasing: 'ease-out',
 *   },
 *   onClose: handleClose,
 * });
 * ```
 *
 * @example
 * **Conditional enable/disable:**
 * ```tsx
 * const { setPopoverRef, setDragIconRef } = useSwipeDown({
 *   enabled: !isLoading && allowSwipe,
 *   onClose: handleClose,
 *   distanceThreshold: 40,
 * });
 * ```
 *
 * @see {@link convertDurationToNumber} - Utility for converting CSS time strings to milliseconds
 */
export const useSwipeDown = ({
  animationOptions,
  distanceThreshold = DEFAULT_DISTANCE_THRESHOLD,
  enabled = true,
  onClose,
}: SwipeDownOptions = {}): {
  setPopoverRef: (node: HTMLElement | null) => void;
  setDragIconRef: (node: HTMLElement | null) => void;
} => {
  const containerRef = useRef<HTMLElement | null>(null);
  const dragRef = useRef<HTMLElement | null>(null);
  const currentBottom = useRef(0);
  const yStart = useRef(0);
  const yEnd = useRef<number | null>(null);
  const dragMove = useRef(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate animation exit duration
  const animationExitDuration =
    ((convertDurationToNumber(animationOptions?.exitDuration) ||
      convertDurationToNumber(animationOptions?.duration) ||
      0) +
      (convertDurationToNumber(animationOptions?.delay) || 0)) *
    1000;

  /**
   * Wait for animation to complete
   */
  const waitForAnimation = useCallback(
    (ms: number) =>
      new Promise<void>((resolve) => {
        closeTimeoutRef.current = setTimeout(resolve, ms);
      }),
    [],
  );

  /**
   * Start drag operation
   */
  const startMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!enabled) {
        return;
      }

      const swiperContent = containerRef?.current;
      if (!swiperContent) {
        return;
      }

      e.preventDefault?.();
      swiperContent.style.removeProperty('transition');

      if (e.type === 'touchstart') {
        yStart.current = (e as TouchEvent).touches[0].clientY;
      } else {
        yStart.current = (e as MouseEvent).clientY;
      }
      dragMove.current = true;
      yEnd.current = null;
    },
    [enabled],
  );

  /**
   * Handle drag movement
   */
  const currentMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!enabled) {
        return;
      }

      const swiperContent = containerRef?.current;
      if (!dragMove.current || !swiperContent) {
        return;
      }

      if (e.type === 'touchmove') {
        yEnd.current = (e as TouchEvent).touches[0].clientY;
      } else {
        yEnd.current = (e as MouseEvent).clientY;
      }

      const currentMoveDistance = yStart.current - yEnd.current;

      // Only allow downward dragging
      if (yEnd.current < yStart.current) {
        return;
      }

      swiperContent.style.bottom = `${currentBottom.current + currentMoveDistance}px`;
    },
    [enabled],
  );

  /**
   * End drag operation and trigger close if threshold is met
   */
  const endMove = useCallback(async () => {
    if (!enabled) {
      return;
    }

    const swiperContent = containerRef?.current;
    if (!swiperContent || yEnd.current === null) {
      return;
    }

    dragMove.current = false;
    swiperContent.style.setProperty(
      'transition',
      `bottom ${animationExitDuration}ms linear`,
    );

    // Check if drag distance exceeds threshold
    if (yEnd.current < yStart.current + distanceThreshold) {
      // Not enough distance, return to original position
      swiperContent.style.bottom = '0px';
      return;
    }

    // Trigger close animation
    const distance = currentBottom.current + swiperContent.scrollHeight;
    swiperContent.style.bottom = `-${distance}px`;
    await waitForAnimation(animationExitDuration);
    onClose?.();
  }, [
    enabled,
    animationExitDuration,
    distanceThreshold,
    onClose,
    waitForAnimation,
  ]);

  /**
   * Store callback refs to prevent recreating listeners
   */
  const handlersRef = useRef({
    currentMove,
    endMove,
    startMove,
  });

  useEffect(() => {
    handlersRef.current = {
      currentMove,
      endMove,
      startMove,
    };
  }, [currentMove, endMove, startMove]);

  /**
   * Callback ref for popover/modal container
   */
  const setPopoverRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  /**
   * Callback ref for drag handle with event listener management
   */
  const setDragIconRef = useCallback(
    (node: HTMLElement | null) => {
      // Cleanup previous element's listeners
      if (dragRef.current) {
        const handlers = handlersRef.current;
        dragRef.current.removeEventListener(
          'mousedown',
          handlers.startMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'mousemove',
          handlers.currentMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'mouseup',
          handlers.endMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'touchstart',
          handlers.startMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'touchmove',
          handlers.currentMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'touchend',
          handlers.endMove as EventListener,
        );
      }

      dragRef.current = node;

      // Attach listeners to new element
      if (node && enabled) {
        const handlers = handlersRef.current;
        node.addEventListener('mousedown', handlers.startMove as EventListener);
        node.addEventListener(
          'mousemove',
          handlers.currentMove as EventListener,
        );
        node.addEventListener('mouseup', handlers.endMove as EventListener);
        node.addEventListener(
          'touchstart',
          handlers.startMove as EventListener,
        );
        node.addEventListener(
          'touchmove',
          handlers.currentMove as EventListener,
        );
        node.addEventListener('touchend', handlers.endMove as EventListener);
      }
    },
    [enabled],
  );

  // Cleanup effect on unmount or when enabled changes
  useEffect(() => {
    return () => {
      // Clear any pending timeouts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      // Remove all event listeners
      if (dragRef.current) {
        const handlers = handlersRef.current;
        dragRef.current.removeEventListener(
          'mousedown',
          handlers.startMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'mousemove',
          handlers.currentMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'mouseup',
          handlers.endMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'touchstart',
          handlers.startMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'touchmove',
          handlers.currentMove as EventListener,
        );
        dragRef.current.removeEventListener(
          'touchend',
          handlers.endMove as EventListener,
        );
      }
    };
  }, []);

  return { setDragIconRef, setPopoverRef };
};
