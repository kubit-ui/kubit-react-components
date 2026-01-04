import { type RefObject, useCallback, useRef, useState } from 'react';

import { hasScroll as checkHasScroll } from '../../../lib/utils/scroll/hasScroll';

interface UseTooltipContentScrollParamsType {
  tooltipRef: RefObject<HTMLDivElement>;
}

interface UseTooltipContentScrollReturnType {
  contentRefHandler: (innerContentElement: HTMLDivElement | null) => void;
  contentHasScroll: boolean;
}

/**
 * Custom hook that determines if the tooltip content has scroll and provides a ref to the content element.
 *
 * @param tooltipRef - Ref to the tooltip element.
 * @returns An object containing the `contentHasScroll` boolean and the `contentRefHandler` callback function.
 */
export const useTooltipContentScroll = ({
  tooltipRef,
}: UseTooltipContentScrollParamsType): UseTooltipContentScrollReturnType => {
  const [contentHasScroll, setContentHasScroll] = useState(false);
  const resizeObserverRef = useRef<ResizeObserver>();

  const contentRefHandler = useCallback(
    (innerContentElement: HTMLDivElement | null) => {
      if (innerContentElement) {
        const handleInnerContentResize = (
          elementContentResize: HTMLDivElement,
        ) => {
          const _hasScroll = checkHasScroll(elementContentResize);
          // If the tooltip content has scroll and the focus is not already inside the tooltip, focus the inner content
          if (
            _hasScroll &&
            !tooltipRef.current?.contains(document.activeElement)
          ) {
            // Set the tab index to allow focus
            elementContentResize.setAttribute('tabindex', '0');
            elementContentResize.focus();
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
    },
    [],
  );

  return { contentHasScroll, contentRefHandler };
};
