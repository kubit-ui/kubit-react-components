import * as React from 'react';

type UseTableShadowParamsType = {
  ref: React.RefObject<HTMLDivElement>;
  headBoxShadow?: string;
  leftBoxShadow?: string;
  rightBoxShadow?: string;
  disabled?: boolean;
};

type UseTableShadowReturnType = object;

export const useTableShadow = ({
  ref,
  headBoxShadow,
  leftBoxShadow,
  rightBoxShadow,
  disabled = false,
}: UseTableShadowParamsType): UseTableShadowReturnType => {
  React.useEffect(() => {
    const wrapper = ref.current;
    const scrollableContainer = wrapper?.querySelector('[data-table-scrollable-container]');
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
          tableHead.style.boxShadow = headBoxShadow;
        } else {
          tableHead.style.boxShadow = '';
        }
      }
      // Apply shadow when sticky column is active
      if (leftBoxShadow) {
        // Apply shadow effect to the left border
        // In order to not be hidden by the inner content, it has to be applied in the TableLeftBorderShadowStyled div
        const leftBoxShadowContainer = wrapper?.querySelector('[data-table-left-shadow]');
        if (leftBoxShadowContainer instanceof HTMLElement) {
          if (scrollableContainer.scrollLeft) {
            leftBoxShadowContainer.style.boxShadow = leftBoxShadow;
            // height can be ajusted to not show the shadow over the scrollbar
            leftBoxShadowContainer.style.height = `${scrollableContainer.clientHeight}px`;
          } else {
            leftBoxShadowContainer.style.boxShadow = '';
          }
        }
      }
      if (rightBoxShadow) {
        const rightBoxShadowContainer = wrapper?.querySelector('[data-table-right-shadow]');
        if (rightBoxShadowContainer instanceof HTMLElement) {
          if (
            scrollableContainer.scrollLeft + scrollableContainer.clientWidth <
            scrollableContainer.scrollWidth
          ) {
            rightBoxShadowContainer.style.boxShadow = rightBoxShadow;
            // height can be ajusted to not show the shadow over the scrollbar
            rightBoxShadowContainer.style.height = `${scrollableContainer.clientHeight}px`;
          } else {
            rightBoxShadowContainer.style.boxShadow = '';
          }
        }
      }
    };
    if (!disabled) {
      updateShadow();
      scrollableContainer?.addEventListener('scroll', updateShadow);
      window.addEventListener('resize', updateShadow);
    }
    return () => {
      scrollableContainer?.removeEventListener('scroll', updateShadow);
      window.removeEventListener('resize', updateShadow);
    };
  }, [disabled]);

  return {};
};
