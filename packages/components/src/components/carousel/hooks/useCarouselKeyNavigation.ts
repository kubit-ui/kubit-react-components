import { useEffect } from 'react';

import {
  ARROW_LEFT,
  ARROW_RIGHT,
} from '@/lib/constants/keyboardKeys/keyboardKeys';
import { isKeyPressed } from '@/lib/utils/keyboard/keyboard';

import type { IUseCarouselKeyNavigation } from './types/useCarouselKeyNavigation';

export const useCarouselKeyNavigation: IUseCarouselKeyNavigation = ({
  allowShiftRef,
  changePage,
  circular,
  currentPageRef,
  disabled = false,
  numPagesRef,
  rootContainerRef,
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
      if (isKeyPressed(event.key, ARROW_LEFT.key)) {
        handleLeftPressed();
      } else if (isKeyPressed(event.key, ARROW_RIGHT.key)) {
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
