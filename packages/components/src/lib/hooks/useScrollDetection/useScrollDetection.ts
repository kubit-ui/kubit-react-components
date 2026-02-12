import { useCallback, useRef, useState } from 'react';

import { hasScroll as checkHasScroll } from '@/lib/utils/scroll/hasScroll';

import type {
  UseScrollDetectionParamsType,
  UseScrollDetectionReturnType,
} from './types/useScrollDetection';

/**
 * Custom hook to detect whether an element has scrollable content.
 *
 * Monitors an element using ResizeObserver to detect if content overflows and requires scrolling.
 * Optionally supports automatic focus when scroll is detected for better accessibility.
 *
 * @param options - Configuration options for scroll detection
 * @param options.autoFocus - If true, automatically focuses the container when scroll is first detected
 * @returns Object containing scroll detection handler and scroll state
 *
 * @example
 * **Basic usage:**
 * ```tsx
 * const { handleScrollDetection, hasScroll } = useScrollDetection();
 *
 * <div ref={handleScrollDetection}>
 *   <Content />
 * </div>
 * ```
 *
 * @example
 * **With auto focus:**
 * ```tsx
 * const { handleScrollDetection, hasScroll } = useScrollDetection({
 *   autoFocus: true
 * });
 *
 * <div ref={handleScrollDetection} tabIndex={-1}>
 *   <Modal content />
 * </div>
 * ```
 */
export const useScrollDetection = ({
  autoFocus = false,
}: UseScrollDetectionParamsType = {}): UseScrollDetectionReturnType => {
  const [hasScroll, setHasScroll] = useState(false);
  const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);
  const hasFocusedRef = useRef(false);

  /**
   * Observes an element to detect if it has scrollable content.
   * If the element is null or undefined, the observer is disconnected.
   *
   * @param element - The element to observe for scrollability
   */
  const handleScrollDetection = useCallback(
    (element: HTMLElement | null | undefined) => {
      if (element) {
        const handleInnerContentResize = (innerElement: HTMLElement) => {
          const _hasScroll = checkHasScroll(innerElement);
          setHasScroll(_hasScroll);

          // Auto focus on first scroll detection if enabled and not yet focused
          if (autoFocus && _hasScroll && !hasFocusedRef.current) {
            innerElement.focus();
            hasFocusedRef.current = true;
          }
        };

        handleInnerContentResize(element);
        resizeObserverRef.current = new ResizeObserver(() => {
          handleInnerContentResize(element);
        });
        resizeObserverRef.current.observe(element);
      } else {
        resizeObserverRef.current?.disconnect();
      }
    },
    [autoFocus],
  );

  return { handleScrollDetection, hasScroll };
};
