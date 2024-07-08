import * as React from 'react';

import { hasHorizontalScroll, hasVerticalScroll } from '@/utils';

type UseTableStickyColumnsParamsType = {
  ref: React.RefObject<HTMLDivElement>;
  disabled?: boolean;
};

type UseTableStickyColumnsReturnType = object;

export const useTableStickyColumns = ({
  ref,
  disabled = false,
}: UseTableStickyColumnsParamsType): UseTableStickyColumnsReturnType => {
  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector('[data-table-scrollable-container]');
    const rightBoxShadowContainer = ref.current?.querySelector('[data-table-right-shadow]');
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement && !disabled) {
      const handleElementResize = (element: HTMLElement) => {
        const _hasHorizontalScroll = hasHorizontalScroll(element);
        // For each row, set the right position of its sticky cells
        const rows = element.querySelectorAll('[data-table-row]');
        // used to calc rightBoxShadowContainer position
        let maxStickyWidth = 0;
        rows.forEach(row => {
          // Retrieve all the cell with sticky attribute
          const stickyCells = Array.from(row.querySelectorAll('[data-sticky]')).reverse();
          let right = 0;
          stickyCells.forEach(stickyCell => {
            if (stickyCell instanceof HTMLElement) {
              stickyCell.style.right = _hasHorizontalScroll ? `${right}px` : 'auto';
              right += stickyCell.offsetWidth;
            }
          });
          maxStickyWidth = Math.max(maxStickyWidth, right);
        });
        // Once the sticky position have been added, set the position of the rightBoxShadowContainer
        // This position should be the same as the max width of the sticky cells
        if (rightBoxShadowContainer instanceof HTMLElement) {
          // If vertical scroll, add scroll bar size to maxStickyWidth
          const _hasVerticalScroll = hasVerticalScroll(element);
          if (_hasVerticalScroll) {
            const scrollBarSize = element.offsetWidth - element.clientWidth;
            maxStickyWidth += scrollBarSize;
          }
          rightBoxShadowContainer.style.right = `${maxStickyWidth}px`;
        }
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
  }, [disabled]);

  return {};
};
