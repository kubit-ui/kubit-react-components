import { useCallback, useRef } from 'react';

import { ICssAnimationOptions } from '@/components/cssAnimation';
import { convertDurationToNumber } from '@/utils/stringUtility/string.utility';

const distanceToTriggerClose = 30;

type ReturnType = {
  setPopoverRef?: (node: HTMLElement) => void;
  setDragIconRef?: (node: HTMLElement) => void;
};

export const useSwipeDown = (
  animationOptions?: ICssAnimationOptions,
  handleClose?: () => void
): ReturnType => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const setPopoverRef = useCallback(node => {
    if (node) {
      containerRef.current = node;
    } else {
      containerRef.current = null;
    }
  }, []);

  const setDragIconRef = useCallback(node => {
    if (node) {
      dragRef.current = node;
      dragRef?.current?.addEventListener('mousedown', startMove);
      dragRef?.current?.addEventListener('mousemove', currentMove);
      dragRef?.current?.addEventListener('mouseup', endMove);

      dragRef?.current?.addEventListener('touchstart', startMove);
      dragRef?.current?.addEventListener('touchmove', currentMove);
      dragRef?.current?.addEventListener('touchend', endMove);
    } else {
      dragRef?.current?.removeEventListener('mousedown', startMove);
      dragRef?.current?.removeEventListener('mousemove', currentMove);
      dragRef?.current?.removeEventListener('mouseup', endMove);

      dragRef?.current?.removeEventListener('touchstart', startMove);
      dragRef?.current?.removeEventListener('touchmove', currentMove);
      dragRef?.current?.removeEventListener('touchend', endMove);
      dragRef.current = null;
    }
  }, []);

  const animationExitDuration =
    ((convertDurationToNumber(animationOptions?.exitDuration) ||
      convertDurationToNumber(animationOptions?.duration) ||
      0) +
      (convertDurationToNumber(animationOptions?.delay) || 0)) *
    1000;

  const currentBottom = useRef(0);
  const yStart = useRef(0);
  const yEnd = useRef<number | null>(0);
  const dragMove = useRef(false);

  const startMove = e => {
    const swiperContent = containerRef?.current;
    if (!swiperContent) {
      return;
    }
    e.preventDefault?.();
    swiperContent.style.removeProperty('transition');

    if (e.type === 'touchstart') {
      yStart.current = e.touches[0].clientY;
    } else {
      yStart.current = e.clientY;
    }
    dragMove.current = true;
    yEnd.current = null;
  };

  const currentMove = e => {
    const swiperContent = containerRef?.current;
    if (!dragMove.current || !swiperContent) {
      return;
    }
    if (e.type === 'touchmove' && yEnd !== null) {
      yEnd.current = e.touches[0].clientY as number;
    } else {
      yEnd.current = e.clientY as number;
    }
    const currentMove = yStart.current - yEnd.current;
    if (yEnd.current < yStart.current) {
      return;
    }
    swiperContent.style.bottom = `${currentBottom.current + currentMove}px`;
  };

  const endMove = () => {
    const swiperContent = containerRef?.current;
    if (!swiperContent || !yEnd.current) {
      return;
    }
    dragMove.current = false;
    swiperContent.style.setProperty('transition', `bottom ${animationExitDuration}ms linear`);

    if (yEnd.current < yStart.current + distanceToTriggerClose) {
      swiperContent.style.bottom = '0px';
      return;
    }
    // Move modal
    const distance = currentBottom.current + swiperContent.scrollHeight;
    swiperContent.style.bottom = `-${distance}px`;
    setTimeout(() => {
      handleClose?.();
    }, animationExitDuration);
  };

  return { setPopoverRef, setDragIconRef };
};
