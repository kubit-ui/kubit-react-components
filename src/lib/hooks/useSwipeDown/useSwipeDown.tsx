import { useCallback, useRef } from 'react';

import { convertDurationToNumber } from './utils/convertDurationToNumber';

const distanceToTriggerClose = 30;

/**
 * A custom React hook that enables swipe-down functionality for a popover or modal.
 * This hook allows users to drag a modal or popover downwards to close it, with optional animation settings.
 *
 * @param {Object} [animationOptions] - Configuration options for animations.
 * @param {string | number} [animationOptions.duration] - The duration of the animation in milliseconds or as a CSS time string (e.g., "0.3s").
 * @param {string | number} [animationOptions.delay] - The delay before the animation starts, in milliseconds or as a CSS time string.
 * @param {string | number} [animationOptions.exitDuration] - The duration of the exit animation, overriding `duration` if provided.
 * @param {string} [animationOptions.easing] - The easing function for the animation (e.g., "ease-in-out").
 * @param {string} [animationOptions.exitEasing] - The easing function for the exit animation, overriding `easing` if provided.
 * @param {string} [animationOptions.enterEasing] - The easing function for the enter animation.
 * @param {() => void} [handleClose] - A callback function to execute when the swipe-down action triggers the modal or popover to close.
 *
 * @returns {Object} An object containing two ref callbacks:
 * - `setPopoverRef`: A ref callback to attach to the popover or modal container element.
 * - `setDragIconRef`: A ref callback to attach to the drag handle element.
 *
 * @example
 * const { setPopoverRef, setDragIconRef } = useSwipeDown(
 *   {
 *     duration: '0.3s',
 *     exitDuration: '0.5s',
 *     easing: 'ease-in-out',
 *   },
 *   () => console.log('Popover closed')
 * );
 *
 * return (
 *   <div ref={setPopoverRef} style={{ position: 'fixed', bottom: 0 }}>
 *     <div ref={setDragIconRef} style={{ cursor: 'grab' }}>
 *       Drag here
 *     </div>
 *     <div>Popover content</div>
 *   </div>
 * );
 */
export const useSwipeDown = (
  animationOptions?: {
    duration?: string | number;
    delay?: string | number;
    exitDuration?: string | number;
    easing?: string;
    exitEasing?: string;
    enterEasing?: string;
  },
  handleClose?: () => void,
): {
  setPopoverRef: (node: HTMLElement) => void;
  setDragIconRef: (node: HTMLElement | null | undefined) => void;
} => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const setPopoverRef = useCallback((node) => {
    if (node) {
      containerRef.current = node;
    } else {
      containerRef.current = null;
    }
  }, []);

  const currentBottom = useRef(0);
  const yStart = useRef(0);
  const yEnd = useRef<number | null>(0);
  const dragMove = useRef(false);

  const startMove = (e) => {
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

  const currentMove = (e) => {
    const swiperContent = containerRef?.current;
    if (!dragMove.current || !swiperContent) {
      return;
    }
    if (e.type === 'touchmove' && yEnd !== null) {
      yEnd.current = e.touches[0].clientY as number;
    } else {
      yEnd.current = e.clientY as number;
    }
    const currentMoveDistance = yStart.current - yEnd.current;
    if (yEnd.current < yStart.current) {
      return;
    }
    swiperContent.style.bottom = `${currentBottom.current + currentMoveDistance}px`;
  };

  const animationExitDuration =
    ((convertDurationToNumber(animationOptions?.exitDuration) ||
      convertDurationToNumber(animationOptions?.duration) ||
      0) +
      (convertDurationToNumber(animationOptions?.delay) || 0)) *
    1000;

  const waitForAnimation = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const endMove = async () => {
    const swiperContent = containerRef?.current;
    if (!swiperContent || !yEnd.current) {
      return;
    }
    dragMove.current = false;
    swiperContent.style.setProperty(
      'transition',
      `bottom ${animationExitDuration}ms linear`,
    );

    if (yEnd.current < yStart.current + distanceToTriggerClose) {
      swiperContent.style.bottom = '0px';
      return;
    }
    // Move modal
    const distance = currentBottom.current + swiperContent.scrollHeight;
    swiperContent.style.bottom = `-${distance}px`;
    await waitForAnimation(animationExitDuration);
    handleClose?.();
  };

  const setDragIconRef = useCallback((node) => {
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

  return { setDragIconRef, setPopoverRef };
};
