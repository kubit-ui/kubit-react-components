import React from 'react';

import { hasScroll as checkHasScroll } from '@/utils';
import { ResizeObserver } from '@/utils/resizeObserver';

type UseScrollDetectionReturnType = {
  handleScrollDetection: (element: HTMLElement | null | undefined) => void;
  hasScroll: boolean;
};

/**
 * Custom hook that determines if an element has scroll
 *
 * @returns An object containing the `hasScroll` boolean and the `handleScrollDetection` callback function to initialize the hook.
 */
export const useScrollDetection = (): UseScrollDetectionReturnType => {
  const [hasScroll, setHasScroll] = React.useState(false);
  const resizeObserverRef = React.useRef<ResizeObserver>();

  const handleScrollDetection = React.useCallback((element: HTMLElement | null | undefined) => {
    if (element) {
      const handleInnerContentResize = (element: HTMLElement) => {
        const _hasScroll = checkHasScroll(element);
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
  }, []);

  return { hasScroll, handleScrollDetection };
};
