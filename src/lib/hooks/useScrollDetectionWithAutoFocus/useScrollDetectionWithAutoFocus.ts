import { useCallback, useRef, useState } from 'react';

import { ResizeObserver } from '@/lib/utils/resizeObserver/resizeObserver';
import { hasScroll as checkHasScroll } from '@/lib/utils/scroll/hasScroll';

import type {
  UseScrollDetectionWithAutoFocusParamsType,
  UseScrollDetectionWithAutoFocusReturnType,
} from './types/useScrollDetectionWithAutoFocus';

/**
 * A custom React hook that combines scroll detection with an auto-focus mechanism.
 * This hook detects whether an element has scrollable content and, if necessary, automatically focuses on the element.
 * It is particularly useful for managing accessibility and user experience in scrollable containers.
 *
 * @param {UseScrollDetectionWithAutoFocusParamsType} params - Parameters for the hook.
 * @param {boolean} [params.disabled=false] - A flag to disable the scroll detection and auto-focus behavior.
 * @param {RefObject<HTMLElement>} params.parentElementRef - A reference to the parent element, used to determine focus behavior.
 *
 * @returns {UseScrollDetectionWithAutoFocusReturnType} An object containing:
 * - `handleScrollDetection`: A function to observe an element and detect if it has scrollable content.
 * - `hasScroll`: A boolean indicating whether the observed element currently has scrollable content.
 *
 */
export const useScrollDetectionWithAutoFocus = ({
  disabled = false,
  parentElementRef,
}: UseScrollDetectionWithAutoFocusParamsType): UseScrollDetectionWithAutoFocusReturnType => {
  const [hasScroll, setHasScroll] = useState(false);
  const resizeObserverRef = useRef<ResizeObserver>();

  const handleScrollDetection = useCallback(
    (element: HTMLElement | null | undefined) => {
      if (element && !disabled) {
        const handleInnerContentResize = (innerElement: HTMLElement) => {
          const _hasScroll = checkHasScroll(innerElement);
          setHasScroll(_hasScroll);
        };
        const handleAutoFocus = (autoFocusElement) => {
          const _hasScroll = checkHasScroll(autoFocusElement);
          if (!_hasScroll) {
            return;
          }
          const autoFocus = () => {
            autoFocusElement.setAttribute('tabindex', '0');
            autoFocusElement.focus();
          };

          if (!document.activeElement) {
            autoFocus();
            return;
          }

          if (!parentElementRef?.current?.contains(document.activeElement)) {
            autoFocus();
            return;
          }

          if (
            autoFocusElement.compareDocumentPosition(document.activeElement) &
            Node.DOCUMENT_POSITION_FOLLOWING
          ) {
            autoFocus();
          }
        };
        handleInnerContentResize(element);
        // Autofocus is only executed on mount
        handleAutoFocus(element);
        resizeObserverRef.current = new ResizeObserver(() => {
          handleInnerContentResize(element);
        });
        resizeObserverRef.current.observe(element);
      } else {
        resizeObserverRef.current?.disconnect();
      }
    },
    [disabled],
  );

  return { handleScrollDetection, hasScroll };
};
