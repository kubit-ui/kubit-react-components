import React from 'react';

import { hasScroll as checkHasScroll } from '@/utils';
import { ResizeObserver } from '@/utils/resizeObserver';

type UseScrollDetectionWithAutoFocusParamsType = {
  parentElementRef?: React.RefObject<HTMLElement>;
};

type UseScrollDetectionWithAutoFocusReturnType = {
  handleScrollDetection: (element: HTMLElement | null | undefined) => void;
  hasScroll: boolean;
};

/**
 * Custom hook that determines if an element has scroll. Besides it will focus on the element if it has scroll and the active element is not inside the parent element.
 *
 * @returns An object containing the `hasScroll` boolean and the `handleScrollDetection` callback function to initialize the hook.
 */
export const useScrollDetectionWithAutoFocus = ({
  parentElementRef,
}: UseScrollDetectionWithAutoFocusParamsType): UseScrollDetectionWithAutoFocusReturnType => {
  const [hasScroll, setHasScroll] = React.useState(false);
  const resizeObserverRef = React.useRef<ResizeObserver>();

  const handleScrollDetection = React.useCallback((element: HTMLElement | null | undefined) => {
    if (element) {
      const handleInnerContentResize = (element: HTMLElement) => {
        const _hasScroll = checkHasScroll(element);
        setHasScroll(_hasScroll);
      };
      const handleAutoFocus = element => {
        const _hasScroll = checkHasScroll(element);
        if (!_hasScroll) {
          return;
        }
        const autoFocus = () => {
          element.setAttribute('tabindex', '0');
          element.focus();
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
          element.compareDocumentPosition(document.activeElement) & Node.DOCUMENT_POSITION_FOLLOWING
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
  }, []);

  return { hasScroll, handleScrollDetection };
};
