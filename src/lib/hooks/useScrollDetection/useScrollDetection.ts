import { useCallback, useRef, useState } from 'react';

import { ResizeObserver } from '@/lib/utils/resizeObserver/resizeObserver';
import { hasScroll as checkHasScroll } from '@/lib/utils/scroll/hasScroll';

import type { UseScrollDetectionReturnType } from './types/useScrollDetection';

/**
 * A custom React hook to detect whether an element has scrollable content.
 * This hook is useful for determining if an element's content overflows its boundaries,
 * enabling conditional UI updates or behaviors based on scrollability.
 *
 * @returns {UseScrollDetectionReturnType} An object containing:
 * - `handleScrollDetection`: A function to observe an element and detect if it has scrollable content.
 * - `hasScroll`: A boolean indicating whether the observed element currently has scrollable content.
 */
export const useScrollDetection = (): UseScrollDetectionReturnType => {
  const [hasScroll, setHasScroll] = useState(false);
  const resizeObserverRef = useRef<ResizeObserver>();

  /**
   * Observes an element to detect if it has scrollable content.
   * If the element is null or undefined, the observer is disconnected.
   *
   * @param {HTMLElement | null | undefined} element - The element to observe for scrollability.
   *
   */
  const handleScrollDetection = useCallback(
    (element: HTMLElement | null | undefined) => {
      if (element) {
        const handleInnerContentResize = (innerElement: HTMLElement) => {
          const _hasScroll = checkHasScroll(innerElement);
          setHasScroll(_hasScroll);
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
    [],
  );

  return { handleScrollDetection, hasScroll };
};
