import { useCallback, useEffect, useRef } from 'react';

import { useScrollBlock } from '@/lib/hooks/useScrollBlock/useScrollBlock';

import type { IUseCarouselSwipe } from './types/useCarouselSwipe';

import calcUtils from './utils/calc.utils';
import CONSTANTS from './utils/constants';

export const useCarouselSwipe: IUseCarouselSwipe = ({
  allowShiftRef,
  centerExtremesWhenExtraPadding,
  changePage,
  circular,
  contentContainerRef,
  currentPageRef,
  disabled = false,
  elements,
  extraPadding,
  numElementsPerPageRef,
  numPagesRef,
  viewerContainerRef,
}) => {
  // Variables for the drag listeners listener
  const isDragging = useRef(false);
  const isHorizontalDragging = useRef(false);
  const isVerticalDragging = useRef(false);
  const posInitial = useRef<number | undefined>();
  const posX1 = useRef(0);
  const posX2 = useRef(0);
  const posXInitial = useRef(0);
  const posYInitial = useRef(0);

  const handleRightSwipe = useCallback(() => {
    if (
      allowShiftRef.current &&
      (circular || currentPageRef.current !== numPagesRef.current - 1)
    ) {
      changePage({ newPage: currentPageRef.current + 1 });
    }
  }, [circular, changePage]);

  const handleLeftSwipe = useCallback(() => {
    if (allowShiftRef.current && (circular || currentPageRef.current !== 0)) {
      changePage({ newPage: currentPageRef.current - 1 });
    }
  }, [circular, changePage]);

  // Decide during the first INITIAL_MOVE_THRESHOLD if is a horizontal o vertical swipe
  // In order to allow drag and block the scroll or not
  const { allowScroll, blockScroll } = useScrollBlock();

  const dragStart = useCallback((e) => {
    const contentContainer = contentContainerRef.current;
    if (!contentContainer || numPagesRef.current <= 1) {
      return;
    }
    posInitial.current = parseFloat(contentContainer.style.left || '0');

    if (e.type === 'touchstart') {
      posX1.current = e.touches[0].clientX;
      posXInitial.current = e.touches[0].clientX;
      posYInitial.current = e.touches[0].clientY;
    } else {
      posX1.current = e.clientX;
      posXInitial.current = e.clientX;
      posYInitial.current = e.clientY;
    }
    isDragging.current = true;
  }, []);

  const dragAction = useCallback(
    (e) => {
      const contentContainer = contentContainerRef.current;
      if (
        !contentContainer ||
        !isDragging.current ||
        !numElementsPerPageRef?.current ||
        numPagesRef.current <= 1
      ) {
        return;
      }
      let posXAcc;
      let posYAcc;

      if (e.type === 'touchmove') {
        posX2.current = posX1.current - e.touches[0].clientX;
        posX1.current = e.touches[0].clientX;
        posXAcc = e.touches[0].clientX - posXInitial.current;
        posYAcc = e.touches[0].clientY - posYInitial.current;
      } else {
        posX2.current = posX1.current - e.clientX;
        posX1.current = e.clientX;
        posXAcc = e.clientX - posXInitial.current;
        posYAcc = e.clientY - posYInitial.current;
      }
      const left =
        parseFloat(contentContainer.style.left || '0') - posX2.current;
      // Decide during the first INITIAL_MOVE_THRESHOLD if is a horizontal o vertical swipe
      // In order to allow drag and block the scroll or not
      if (!isHorizontalDragging.current && !isVerticalDragging.current) {
        if (
          Math.abs(posXAcc) > CONSTANTS.THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING
        ) {
          // allow drag and block scroll
          isHorizontalDragging.current = true;
          blockScroll();
        } else if (
          Math.abs(posYAcc) > CONSTANTS.THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING
        ) {
          // block drag and enable scroll
          isVerticalDragging.current = true;
        }
      }

      if (!isHorizontalDragging.current) {
        return;
      }
      // Only set left position in some cases
      if (circular && elements.length > numElementsPerPageRef.current) {
        contentContainer.style.left = `${left}px`;
      } else {
        const maxDistance = calcUtils.calcXDistanceBetween2Elements(
          contentContainer.firstChild as HTMLElement,
          contentContainer.children[
            contentContainer.children.length - numElementsPerPageRef.current
          ] as HTMLElement,
        );

        // Depending if the first or the last element of the carousel is centered or not
        if (centerExtremesWhenExtraPadding) {
          if (left - extraPadding < 0 && -left < maxDistance - extraPadding) {
            contentContainer.style.left = `${left}px`;
          }
        } else {
          let modifyExtraPadding = circular ? extraPadding : 0;
          if (
            !circular &&
            extraPadding &&
            currentPageRef.current === numPagesRef.current - 1
          ) {
            modifyExtraPadding = extraPadding * 2;
          }
          if (
            left - modifyExtraPadding < 0 &&
            -left < maxDistance - modifyExtraPadding
          ) {
            contentContainer.style.left = `${left}px`;
          }
        }
      }
    },
    [
      blockScroll,
      centerExtremesWhenExtraPadding,
      circular,
      elements,
      extraPadding,
    ],
  );

  const dragEnd = useCallback(() => {
    const contentContainer = contentContainerRef.current;
    isVerticalDragging.current = false;
    if (isHorizontalDragging.current) {
      allowScroll();
    }
    isHorizontalDragging.current = false;
    if (
      !contentContainer ||
      !isDragging.current ||
      posInitial.current === undefined ||
      numPagesRef.current <= 1
    ) {
      return;
    }
    isDragging.current = false;
    const posFinal = parseFloat(contentContainer.style.left || '0');
    if (
      posFinal - posInitial.current <
      -CONSTANTS.THRESHOLD_TO_DECIDE_IF_SWIPE_ON_DRAG_ENDS
    ) {
      handleRightSwipe();
    } else if (
      posFinal - posInitial.current >
      CONSTANTS.THRESHOLD_TO_DECIDE_IF_SWIPE_ON_DRAG_ENDS
    ) {
      handleLeftSwipe();
    } else {
      // Return to initial pos
      contentContainer.style.left = `${posInitial.current}px`;
    }
  }, [allowScroll, handleRightSwipe, handleLeftSwipe]);

  // Initialize listener for dragging
  useEffect(() => {
    if (disabled) {
      return;
    }

    const viewerContainer = viewerContainerRef.current;
    const passiveOptions: AddEventListenerOptions = { passive: true };

    viewerContainer?.addEventListener('touchstart', dragStart, passiveOptions);
    viewerContainer?.addEventListener('touchend', dragEnd, passiveOptions);
    viewerContainer?.addEventListener('touchmove', dragAction, passiveOptions);

    viewerContainer?.addEventListener('mousedown', dragStart, passiveOptions);
    viewerContainer?.addEventListener('mouseup', dragEnd, passiveOptions);
    viewerContainer?.addEventListener('mousemove', dragAction, passiveOptions);
    viewerContainer?.addEventListener('mouseleave', dragEnd, passiveOptions);
    // eslint-disable-next-line consistent-return
    return () => {
      viewerContainer?.removeEventListener(
        'touchstart',
        dragStart,
        passiveOptions,
      );
      viewerContainer?.removeEventListener('touchend', dragEnd, passiveOptions);
      viewerContainer?.removeEventListener(
        'touchmove',
        dragAction,
        passiveOptions,
      );

      viewerContainer?.removeEventListener(
        'mousedown',
        dragStart,
        passiveOptions,
      );
      viewerContainer?.removeEventListener('mouseup', dragEnd, passiveOptions);
      viewerContainer?.removeEventListener(
        'mousemove',
        dragAction,
        passiveOptions,
      );
      viewerContainer?.removeEventListener(
        'mouseleave',
        dragEnd,
        passiveOptions,
      );
    };
  }, [dragStart, dragEnd, dragAction, disabled]);
};
