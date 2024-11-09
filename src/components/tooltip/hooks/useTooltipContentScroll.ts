import React from 'react';

import { ResizeObserver } from '../../../utils/resizeObserver/resizeObserver';
import { hasScroll as checkHasScroll } from '../../../utils/scroll/hasScroll';

type UseTooltipContentScrollParamsType = {
  tooltipRef: React.RefObject<HTMLDivElement>;
};

type UseTooltipContentScrollReturnType = {
  contentRefHandler: (innerContentElement: HTMLDivElement | null) => void;
  contentHasScroll: boolean;
};

/**
 * Custom hook that determines if the tooltip content has scroll and provides a ref to the content element.
 *
 * @param tooltipRef - Ref to the tooltip element.
 * @returns An object containing the `contentHasScroll` boolean and the `contentRefHandler` callback function.
 */
export const useTooltipContentScroll = ({
  tooltipRef,
}: UseTooltipContentScrollParamsType): UseTooltipContentScrollReturnType => {
  const [contentHasScroll, setContentHasScroll] = React.useState(false);
  const resizeObserverRef = React.useRef<ResizeObserver>();

  const contentRefHandler = React.useCallback((innerContentElement: HTMLDivElement | null) => {
    if (innerContentElement) {
      const handleInnerContentResize = (innerContentElement: HTMLDivElement) => {
        const _hasScroll = checkHasScroll(innerContentElement);
        // If the tooltip content has scroll and the focus is not already inside the tooltip, focus the inner content
        if (_hasScroll && !tooltipRef.current?.contains(document.activeElement)) {
          // Set the tab index to allow focus
          innerContentElement.setAttribute('tabindex', '0');
          innerContentElement.focus();
        }
        setContentHasScroll(_hasScroll);
      };
      handleInnerContentResize(innerContentElement);
      resizeObserverRef.current = new ResizeObserver(() => {
        handleInnerContentResize(innerContentElement);
      });
      resizeObserverRef.current.observe(innerContentElement);
    } else {
      resizeObserverRef.current?.disconnect();
    }
  }, []);

  return { contentHasScroll, contentRefHandler };
};
