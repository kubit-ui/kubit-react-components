import { useEffect } from 'react';

import {
  isArrowLeftPressed,
  isArrowRightPressed,
} from '@/lib/utils/keyboard/keyboard';

import type { IUseCarouselKeyNavigation } from './types/useCarouselKeyNavigation';

export const useCarouselKeyNavigation: IUseCarouselKeyNavigation = ({
  rootContainerRef,
  allowShiftRef,
  circular,
  currentPageRef,
  numPagesRef,
  disabled = false,
  changePage,
}) => {
  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleLeftPressed = () => {
      if (allowShiftRef.current && (circular || currentPageRef.current !== 0)) {
        changePage({ newPage: currentPageRef.current - 1 });
      }
    };

    const handleRightPressed = () => {
      if (
        allowShiftRef.current &&
        (circular || currentPageRef.current !== numPagesRef.current - 1)
      ) {
        changePage({ newPage: currentPageRef.current + 1 });
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!allowShiftRef.current || numPagesRef.current <= 1) {
        return;
      }
      if (isArrowLeftPressed(event.key)) {
        handleLeftPressed();
      } else if (isArrowRightPressed(event.key)) {
        handleRightPressed();
      }
    };

    const rootContainer = rootContainerRef.current;

    rootContainer?.addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line consistent-return
    return () => {
      rootContainer?.removeEventListener('keydown', handleKeyDown);
    };
  }, [circular, changePage, disabled]);
};
