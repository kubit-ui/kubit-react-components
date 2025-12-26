import { type RefObject, useEffect } from 'react';

import { ResizeObserver } from '@/lib/utils/resizeObserver/resizeObserver';

interface UseTableShadowParamsType {
  ref: RefObject<HTMLDivElement>;
  headBoxShadow?: string;
  leftBoxShadow?: string;
  rightBoxShadow?: string;
  disabled?: boolean;
}

type UseTableShadowReturnType = object;

export const useTableShadow = ({
  disabled = false,
  headBoxShadow,
  leftBoxShadow,
  ref,
  rightBoxShadow,
}: UseTableShadowParamsType): UseTableShadowReturnType => {
  useEffect(() => {
    const wrapper = ref.current;
    const scrollableContainer = wrapper?.querySelector(
      '[data-table-scrollable-container]',
    );
    let resizeObserver: ResizeObserver;
    const updateShadow = () => {
      if (!scrollableContainer) {
        return;
      }
      // Apply shadow on sticky head
      const tableHead = scrollableContainer.querySelector('[data-table-head]');
      if (
        tableHead instanceof HTMLElement &&
        tableHead.hasAttribute('data-sticky') &&
        headBoxShadow
      ) {
        if (scrollableContainer.scrollTop) {
          tableHead.classList.add(headBoxShadow);
        } else {
          tableHead.classList.remove(headBoxShadow);
        }
      }
      // Apply shadow when sticky column is active
      if (leftBoxShadow) {
        // Apply shadow effect to the left border
        // In order to not be hidden by the inner content, it has to be applied in the TableLeftBorderShadowStyled div
        const leftBoxShadowContainer = wrapper?.querySelector(
          '[data-table-left-shadow]',
        );
        if (leftBoxShadowContainer instanceof HTMLElement) {
          if (scrollableContainer.scrollLeft) {
            leftBoxShadowContainer.classList.add(leftBoxShadow);
            // height can be ajusted to not show the shadow over the scrollbar
            // leftBoxShadowContainer.style.height = `${scrollableContainer.clientHeight}px`;
          } else {
            leftBoxShadowContainer.classList.remove(leftBoxShadow);
          }
        }
      }
      if (rightBoxShadow) {
        const rightBoxShadowContainer = wrapper?.querySelector(
          '[data-table-right-shadow]',
        );
        if (rightBoxShadowContainer instanceof HTMLElement) {
          if (
            scrollableContainer.scrollLeft + scrollableContainer.clientWidth <
            scrollableContainer.scrollWidth
          ) {
            rightBoxShadowContainer.classList.add(rightBoxShadow);
            // height can be ajusted to not show the shadow over the scrollbar
            // rightBoxShadowContainer.style.height = `${scrollableContainer.clientHeight}px`;
          } else {
            rightBoxShadowContainer.classList.remove(rightBoxShadow);
          }
        }
      }
    };
    if (scrollableContainer instanceof HTMLElement && !disabled) {
      updateShadow();
      scrollableContainer?.addEventListener('scroll', updateShadow);
      resizeObserver = new ResizeObserver(() => {
        updateShadow();
      });
      resizeObserver.observe(scrollableContainer);
    }
    return () => {
      scrollableContainer?.removeEventListener('scroll', updateShadow);
      resizeObserver?.disconnect();
    };
  }, [disabled]);

  return {};
};
