import React from 'react';

import { ResizeObserver } from '../../../utils/resizeObserver/resizeObserver';
import { hasScroll as checkHasSroll } from '../../../utils/scroll/hasScroll';

type UseDataTableHasScrollParamsType = {
  ref: React.RefObject<HTMLDivElement>;
};

type UseDataTableHasScrollReturnType = {
  hasScroll: boolean;
};

export const useDataTableHasScroll = ({
  ref,
}: UseDataTableHasScrollParamsType): UseDataTableHasScrollReturnType => {
  const [hasScroll, setHasScroll] = React.useState(false);

  React.useEffect(() => {
    const scrollableContainer = ref.current?.querySelector?.(
      '[data-datatable-scrollable-container]'
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
