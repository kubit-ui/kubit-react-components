import * as React from 'react';

import { hasHorizontalScroll, hasVerticalScroll } from '@/utils';

type UseDataTableStickyColumnsParamsType = {
  ref: React.RefObject<HTMLDivElement>;
};

type UseDataTableStickyColumnsReturnType = object;

export const useDataTableStickyColumns = ({
  ref,
}: UseDataTableStickyColumnsParamsType): UseDataTableStickyColumnsReturnType => {
  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector('[data-datatable-scrollable-container]');
    const rightBoxShadowContainer = ref.current?.querySelector('[data-datatable-right-shadow]');
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement) {
      const handleElementResize = (element: HTMLElement) => {
        const _hasHorizontalScroll = hasHorizontalScroll(element);
        // For each row, set the right position of its sticky cells
        const rows = element.querySelectorAll('[data-table-row]');
        // Divider width when horizontal scroll should be calc from the inner tables
        let dividerWidth = 0;
        // used to calc rightBoxShadowContainer position
        let maxStickyWidth = 0;
        rows.forEach(row => {
          if (row instanceof HTMLElement) {
            // Retrieve all the cell with sticky attribute
            const stickyCells = Array.from(row.querySelectorAll('[data-sticky]')).reverse();
            let right = 0;
            stickyCells.forEach(stickyCell => {
              if (stickyCell instanceof HTMLElement) {
                stickyCell.style.right = _hasHorizontalScroll ? `${right}px` : 'auto';
                right += stickyCell.offsetWidth;
              }
            });
            dividerWidth = Math.max(dividerWidth, row.offsetWidth);
            maxStickyWidth = Math.max(maxStickyWidth, right);
          }
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
        // All dividers should be updated with the offset width of the table in order to have a width of 100%
        const dividers = element.querySelectorAll('[data-table-divider]');
        dividers.forEach(divider => {
          if (divider instanceof HTMLElement) {
            if (_hasHorizontalScroll) {
              divider.style.width = `${dividerWidth}px`;
            } else {
              // Remove width if no horizontal scroll
              divider.style.width = '';
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
