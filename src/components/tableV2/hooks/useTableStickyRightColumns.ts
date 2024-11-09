import React from 'react';

import { ResizeObserver } from '../../../utils/resizeObserver/resizeObserver';
import { hasHorizontalScroll, hasVerticalScroll } from '../../../utils/scroll/hasScroll';

type UseTableStickyRightColumnsParamsType = {
  ref: React.RefObject<HTMLDivElement>;
  disabled?: boolean;
};

type UseTableStickyRightColumnsReturnType = object;

export const useTableStickyRightColumns = ({
  ref,
  disabled = false,
}: UseTableStickyRightColumnsParamsType): UseTableStickyRightColumnsReturnType => {
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
        let maxStickyRightWidth = 0;
        rows.forEach(row => {
          // Retrieve all the cell with sticky attribute
          const rightStickyCells = Array.from(
            // deprecated - delete [data-sticky="true"] after boolean is deleted from the sticky type
            row.querySelectorAll('[data-sticky="true"], [data-sticky="right"]')
          ).reverse();
          let right = 0;
          rightStickyCells.forEach(stickyCell => {
            if (stickyCell instanceof HTMLElement) {
              stickyCell.style.right = _hasHorizontalScroll ? `${right}px` : 'auto';
              right += stickyCell.offsetWidth;
            }
          });
          maxStickyRightWidth = Math.max(maxStickyRightWidth, right);
        });
        // Once the sticky position have been added, set the position of the rightBoxShadowContainer
        // This position should be the same as the max width of the sticky cells
        if (rightBoxShadowContainer instanceof HTMLElement) {
          // If vertical scroll, add scroll bar size to maxStickyRightWidth
          const _hasVerticalScroll = hasVerticalScroll(element);
          if (_hasVerticalScroll) {
            const scrollBarSize = element.offsetWidth - element.clientWidth;
            maxStickyRightWidth += scrollBarSize;
          }
          rightBoxShadowContainer.style.right = `${maxStickyRightWidth}px`;
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
