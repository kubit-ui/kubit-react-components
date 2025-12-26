import { type RefObject, useEffect, useState } from 'react';

import { ResizeObserver } from '../../../lib/utils/resizeObserver/resizeObserver';
import { hasScroll as checkHasSroll } from '../../../lib/utils/scroll/hasScroll';

interface UseDataTableHasScrollParamsType {
  ref: RefObject<HTMLDivElement>;
}

interface UseDataTableHasScrollReturnType {
  hasScroll: boolean;
}

export const useDataTableHasScroll = ({
  ref,
}: UseDataTableHasScrollParamsType): UseDataTableHasScrollReturnType => {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const scrollableContainer = ref.current?.querySelector?.(
      '[data-datatable-scrollable-container]',
    );
    let resizeObserver: ResizeObserver;
    if (scrollableContainer instanceof HTMLElement) {
      const handleElementResize = (element: HTMLElement) => {
        setHasScroll(checkHasSroll(element));
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

  return { hasScroll };
};
