import * as React from 'react';

import { hasHorizontalScroll } from '@/utils';

type UseDataTableStickyDividersParamsType = {
  ref: React.RefObject<HTMLDivElement>;
};

type UseDataTableStickyDividersReturnType = object;

export const useDataTableStickyDividers = ({
  ref,
}: UseDataTableStickyDividersParamsType): UseDataTableStickyDividersReturnType => {
  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector('[data-datatable-scrollable-container]');
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement) {
      const handleElementResize = (element: HTMLElement) => {
        const _hasHorizontalScroll = hasHorizontalScroll(element);
        // If there are sticky left cells:
        // -> dividers should be sticky to the left too
        // -> left and right datatable shadows should remain under the divider (z-index in the divider should be greather than the z-index of the shadows)
        // If there are not sticky left cells:
        // -> dividers with should be updated with the offset width of the table in order to have a width of 100% (in case the datatable has horizontal scroll)
        const dividers = element.querySelectorAll('[data-table-divider]');
        const stickyLeft = element.querySelectorAll('[data-sticky="left"]').length > 0;
        // Calc shadow z-index when sticky left
        let shadowZIndex = 0;
        // Calc divider width when !sticky left
        let dividerWidth = 0;
        if (stickyLeft) {
          const leftBoxShadowContainer = ref.current?.querySelector('[data-datatable-left-shadow]');
          if (leftBoxShadowContainer) {
            const shadowContainerStyle = window.getComputedStyle(leftBoxShadowContainer);
            const _shadowZIndex = shadowContainerStyle.getPropertyValue('z-index');
            if (_shadowZIndex) {
              shadowZIndex = parseInt(_shadowZIndex, 10);
            }
          }
        } else {
          const rows = element.querySelectorAll('[data-table-row]');
          rows.forEach(row => {
            if (row instanceof HTMLElement) {
              dividerWidth = Math.max(dividerWidth, row.offsetWidth);
            }
          });
        }
        dividers.forEach(divider => {
          if (divider instanceof HTMLElement) {
            if (stickyLeft) {
              divider.style.position = _hasHorizontalScroll ? 'sticky' : '';
              divider.style.left = _hasHorizontalScroll ? '0' : '';
              divider.style.zIndex = _hasHorizontalScroll ? `${shadowZIndex + 1}` : '';
            } else {
              divider.style.width = _hasHorizontalScroll ? `${dividerWidth}px` : '';
            }
          }
        });
      };
      handleElementResize(scrollableContainer);
      resizeObserver = new ResizeObserver(() => {
        handleElementResize(scrollableContainer);
      });
      resizeObserver.observe(scrollableContainer);
    }
    return () => {
      resizeObserver?.disconnect();
    };
  }, []);

  return {};
};
