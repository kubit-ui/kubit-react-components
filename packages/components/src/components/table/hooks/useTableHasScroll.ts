import { type RefObject, useEffect, useState } from 'react';

import { hasScroll as checkHasSroll } from '../../../lib/utils/scroll/hasScroll';

interface UseTableHasScrollParamsType {
  ref: RefObject<HTMLDivElement | null>;
  disabled?: boolean;
}

interface UseTableHasScrollReturnType {
  hasScroll: boolean;
}

export const useTableHasScroll = ({
  disabled = false,
  ref,
}: UseTableHasScrollParamsType): UseTableHasScrollReturnType => {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const scrollableContainer = ref.current?.querySelector?.(
      '[data-table-scrollable-container]',
    );
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement && !disabled) {
      const handleElementResize = (element: HTMLElement) => {
        setHasScroll(checkHasSroll(element));
      };
      handleElementResize(scrollableContainer);
      resizeObserver = new ResizeObserver(() => {
        handleElementResize(scrollableContainer);
      });
      resizeObserver.observe(scrollableContainer);
    }
    if (disabled) {
      setHasScroll(false);
    }
    return () => {
      resizeObserver?.disconnect();
    };
  }, [disabled]);

  return { hasScroll };
};
