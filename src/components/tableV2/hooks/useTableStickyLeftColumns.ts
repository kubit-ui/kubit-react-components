import * as React from 'react';

import { hasHorizontalScroll } from '@/utils';

type UseTableStickyLeftColumnsParamsType = {
  ref: React.RefObject<HTMLDivElement>;
  disabled?: boolean;
};

type UseTableStickyLeftColumnsReturnType = object;

export const useTableStickyLeftColumns = ({
  ref,
  disabled = false,
}: UseTableStickyLeftColumnsParamsType): UseTableStickyLeftColumnsReturnType => {
  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector('[data-table-scrollable-container]');
    const leftBoxShadowContainer = ref.current?.querySelector('[data-table-left-shadow]');
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement && !disabled) {
      const handleElementResize = (element: HTMLElement) => {
        const _hasHorizontalScroll = hasHorizontalScroll(element);
        // For each row, set the left position of its sticky cells
        const rows = element.querySelectorAll('[data-table-row]');
        // used to calc leftBoxShadowContainer position
        let maxStickyLeftWidth = 0;
        rows.forEach(row => {
          // Retrieve all the cell with sticky attribute
          const leftStickyCells = Array.from(row.querySelectorAll('[data-sticky="left"]'));
          let left = 0;
          leftStickyCells.forEach(stickyCell => {
            if (stickyCell instanceof HTMLElement) {
              stickyCell.style.left = _hasHorizontalScroll ? `${left}px` : 'auto';
              left += stickyCell.offsetWidth;
            }
          });
          maxStickyLeftWidth = Math.max(maxStickyLeftWidth, left);
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
  }, [disabled]);

  return {};
};
