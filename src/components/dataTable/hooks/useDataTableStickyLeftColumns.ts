import * as React from 'react';

import { hasHorizontalScroll } from '@/utils';

type UseDataTableStickyLeftColumnsParamsType = {
  ref: React.RefObject<HTMLDivElement>;
};

type UseDataTableStickyLeftColumnsReturnType = object;

export const useDataTableStickyLeftColumns = ({
  ref,
}: UseDataTableStickyLeftColumnsParamsType): UseDataTableStickyLeftColumnsReturnType => {
  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector('[data-datatable-scrollable-container]');
    const leftBoxShadowContainer = ref.current?.querySelector('[data-datatable-left-shadow]');
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement) {
      const handleElementResize = (element: HTMLElement) => {
        const _hasHorizontalScroll = hasHorizontalScroll(element);
        // For each row, set the left position of its sticky cells
        const rows = element.querySelectorAll('[data-table-row]');
        // used to calc leftBoxShadowContainer position
        let maxStickyLeftWidth = 0;
        rows.forEach(row => {
          if (row instanceof HTMLElement) {
            // Retrieve all the cell with sticky attribute
            const stickyCells = Array.from(row.querySelectorAll('[data-sticky="left"]'));
            let left = 0;
            stickyCells.forEach(stickyCell => {
              if (stickyCell instanceof HTMLElement) {
                stickyCell.style.left = _hasHorizontalScroll ? `${left}px` : 'auto';
                left += stickyCell.offsetWidth;
              }
            });
            maxStickyLeftWidth = Math.max(maxStickyLeftWidth, left);
          }
        });
        // Once the sticky position have been added, set the position of the leftBoxShadowContainer
        // This position should be the same as the max width of the sticky cells
        if (leftBoxShadowContainer instanceof HTMLElement) {
          leftBoxShadowContainer.style.left = `${maxStickyLeftWidth}px`;
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
  }, []);

  return {};
};
