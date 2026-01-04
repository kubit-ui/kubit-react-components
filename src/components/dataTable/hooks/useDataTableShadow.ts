import { type RefObject, useEffect } from 'react';

interface UseDataTableShadowParamsType {
  ref: RefObject<HTMLDivElement>;
  headBoxShadow?: string;
  leftBoxShadow?: string;
  rightBoxShadow?: string;
}

type UseDataTableShadowReturnType = object;

export const useDataTableShadow = ({
  headBoxShadow,
  leftBoxShadow,
  ref,
  rightBoxShadow,
}: UseDataTableShadowParamsType): UseDataTableShadowReturnType => {
  useEffect(() => {
    const wrapper = ref.current;
    const scrollableContainer = wrapper?.querySelector(
      '[data-datatable-scrollable-container]',
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
      // Apply shadow when sticky column is active to the left
      if (leftBoxShadow) {
        // Apply shadow effect to the left border
        // In order to not be hidden by the inner content, it has to be applied in the TableLeftBorderShadowStyled div
        const leftBoxShadowContainer = wrapper?.querySelector(
          '[data-datatable-left-shadow]',
        );
        if (leftBoxShadowContainer instanceof HTMLElement) {
          if (scrollableContainer.scrollLeft) {
            leftBoxShadowContainer.style.boxShadow = leftBoxShadow;
            leftBoxShadowContainer.classList.add(leftBoxShadow);
            // height can be ajusted to not show the shadow over the scrollbar
            leftBoxShadowContainer.style.height = `${scrollableContainer.clientHeight}px`;
          } else {
            leftBoxShadowContainer.classList.remove(leftBoxShadow);
          }
        }
      }
      if (rightBoxShadow) {
        // Apply shadow effect to the sticky box container column
        const rightBoxShadowContainer = wrapper?.querySelector(
          '[data-datatable-right-shadow]',
        );
        if (rightBoxShadowContainer instanceof HTMLElement) {
          if (
            scrollableContainer.scrollLeft + scrollableContainer.clientWidth <
            scrollableContainer.scrollWidth
          ) {
            rightBoxShadowContainer.classList.add(rightBoxShadow);
            // height can be ajusted to not show the shadow over the scrollbar
            rightBoxShadowContainer.style.height = `${scrollableContainer.clientHeight}px`;
          } else {
            rightBoxShadowContainer.classList.remove(rightBoxShadow);
          }
        }
      }
    };

    if (scrollableContainer instanceof HTMLElement) {
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
  }, []);

  return {};
};
