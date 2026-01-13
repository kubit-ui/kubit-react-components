import { useCallback, useRef } from 'react';

const DISTANCE_TO_TRIGGER_CLOSE = 30;

export type UseSwipeDownReturn = {
  setPopoverRef: (node: HTMLElement | null) => void;
  setDragIconRef: (node: HTMLElement | null) => void;
};

/**
 * Hook for handling swipe down gesture to close modals/popovers
 * - Mouse and touch support
 *
 * @param handleClose - Callback function to execute when closing
 */
export const useSwipeDown = ({
  handleClose,
}: {
  handleClose?: () => void;
}): UseSwipeDownReturn => {
  const containerRef = useRef<HTMLElement | null>(null);
  const dragRef = useRef<HTMLElement | null>(null);

  const isDragging = useRef(false);
  const initialBottom = useRef<string>('');
  const startY = useRef(0);

  const cleanUp = useRef<(() => void) | null>(null);

  const setPopoverRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  const setDragIconRef = useCallback(
    (node: HTMLElement | null) => {
      // Clean up previous listeners if they exist
      if (cleanUp.current) {
        cleanUp.current();
        cleanUp.current = null;
      }

      dragRef.current = node;

      if (node) {
        // Helper function to get Y coordinate from mouse or touch event
        const _getEventY = (e: MouseEvent | TouchEvent): number => {
          if ('touches' in e) {
            const touch = e.touches[0] || e.changedTouches[0];
            return touch?.clientY || 0;
          }
          return (e as MouseEvent).clientY;
        };

        const onDragStart = (e: MouseEvent | TouchEvent) => {
          if (isDragging.current || !containerRef.current) {
            return;
          }

          e.preventDefault();
          isDragging.current = true;
          startY.current = _getEventY(e);
          initialBottom.current = window.getComputedStyle(
            containerRef.current,
          ).bottom;

          // These listeners are added to document because once dragging starts,
          // we want to track movement and end events anywhere on the page,
          // not just within the original drag element
          document.addEventListener('mousemove', onDragMove, {
            passive: false,
          });
          document.addEventListener('mouseup', onDragEnd, { passive: false });
          document.addEventListener('touchmove', onDragMove, {
            passive: false,
          });
          document.addEventListener('touchend', onDragEnd, { passive: false });
        };

        const onDragMove = (e: MouseEvent | TouchEvent) => {
          if (!isDragging.current || !containerRef.current) {
            return;
          }

          e.preventDefault();
          const _currentY = _getEventY(e);
          const _deltaY = _currentY - startY.current;

          // Only allow downward movement (closing gesture)
          if (_deltaY > 0) {
            // Use bottom to provide visual feedback during drag
            containerRef.current.style.bottom = `-${_deltaY}px`;
          }
        };

        const onDragEnd = (e: MouseEvent | TouchEvent) => {
          if (!isDragging.current || !containerRef.current) {
            return;
          }

          isDragging.current = false;

          const _currentY = _getEventY(e);
          const _deltaY = _currentY - startY.current;

          if (_deltaY > DISTANCE_TO_TRIGGER_CLOSE) {
            handleClose?.();
          } else {
            // Reset position if not closing
            containerRef.current.style.bottom = initialBottom.current;
          }
        };

        // These listeners are added to the specific node (drag icon) because we only want
        // to start dragging when the user interacts with this specific element
        node.addEventListener('mousedown', onDragStart, { passive: false });
        node.addEventListener('touchstart', onDragStart, { passive: false });

        cleanUp.current = () => {
          node.removeEventListener('mousedown', onDragStart);
          node.removeEventListener('touchstart', onDragStart);

          document.removeEventListener('mousemove', onDragMove);
          document.removeEventListener('mouseup', onDragEnd);
          document.removeEventListener('touchmove', onDragMove);
          document.removeEventListener('touchend', onDragEnd);

          isDragging.current = false;
        };
      }
    },
    [handleClose],
  );

  return { setPopoverRef, setDragIconRef };
};
