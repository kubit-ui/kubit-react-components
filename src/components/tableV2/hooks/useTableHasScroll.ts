import React from 'react';

import { ResizeObserver } from '../../../utils/resizeObserver/resizeObserver';
import { hasScroll as checkHasSroll } from '../../../utils/scroll/hasScroll';

type UseTableHasScrollParamsType = {
  ref: React.RefObject<HTMLDivElement>;
  disabled?: boolean;
};

type UseTableHasScrollReturnType = {
  hasScroll: boolean;
};

export const useTableHasScroll = ({
  ref,
  disabled = false,
}: UseTableHasScrollParamsType): UseTableHasScrollReturnType => {
  const [hasScroll, setHasScroll] = React.useState(false);

  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector?.('[data-table-scrollable-container]');
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
