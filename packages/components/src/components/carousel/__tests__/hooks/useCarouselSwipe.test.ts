import { renderHook } from '@testing-library/react';
import { type MutableRefObject, type RefObject, createElement } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { IUseCarouselSwipeParams } from '../../hooks/types/useCarouselSwipe';

import { useCarouselSwipe } from '../../hooks/useCarouselSwipe';

// Mock useScrollBlock hook
const mockAllowScroll = vi.fn();
const mockBlockScroll = vi.fn();

vi.mock('@/hooks/useScrollBlock/useScrollBlock', () => ({
  useScrollBlock: () => ({
    allowScroll: mockAllowScroll,
    blockScroll: mockBlockScroll,
  }),
}));

describe('useCarouselSwipe', () => {
  let contentContainer: HTMLDivElement;
  let viewerContainer: HTMLDivElement;
  let contentContainerRef: RefObject<HTMLDivElement>;
  let viewerContainerRef: RefObject<HTMLDivElement>;
  let allowShiftRef: MutableRefObject<boolean>;
  let currentPageRef: MutableRefObject<number>;
  let numPagesRef: MutableRefObject<number>;
  let numElementsPerPageRef: MutableRefObject<number>;
  let changePage: ReturnType<typeof vi.fn>;
  let mockElements: JSX.Element[];

  beforeEach(() => {
    // Create DOM elements
    contentContainer = document.createElement('div');
    viewerContainer = document.createElement('div');

    // Create child elements for testing
    for (let i = 0; i < 6; i++) {
      const child = document.createElement('div');
      child.style.width = '100px';
      child.style.height = '100px';
      contentContainer.appendChild(child);
    }

    viewerContainer.appendChild(contentContainer);
    document.body.appendChild(viewerContainer);

    // Create mock JSX elements
    mockElements = Array.from({ length: 6 }, (_, i) =>
      createElement('div', {
        key: i,
        style: { height: '100px', width: '100px' },
      }),
    );

    // Set up refs
    contentContainerRef = { current: contentContainer };
    viewerContainerRef = { current: viewerContainer };
    allowShiftRef = { current: true };
    currentPageRef = { current: 0 };
    numPagesRef = { current: 3 };
    numElementsPerPageRef = { current: 2 };

    // Mock functions
    changePage = vi.fn();

    // Set initial styles
    contentContainer.style.left = '0px';
    contentContainer.style.position = 'relative';

    // Mock children positions for drag limit calculations
    Array.from(contentContainer.children).forEach((child, index) => {
      Object.defineProperty(child, 'offsetLeft', {
        configurable: true,
        get: () => index * 100, // Each child is 100px wide
      });
      Object.defineProperty(child, 'offsetWidth', {
        configurable: true,
        get: () => 100,
      });
    });
  });

  afterEach(() => {
    viewerContainer.remove();
    vi.clearAllMocks();
    mockAllowScroll.mockClear();
    mockBlockScroll.mockClear();
  });

  const renderUseCarouselSwipe = (props = {}) => {
    const defaultProps = {
      allowShiftRef,
      centerExtremesWhenExtraPadding: false,
      changePage,
      circular: false,
      contentContainerRef,
      currentPageRef,
      disabled: false,
      elements: mockElements,
      extraPadding: 0,
      numElementsPerPageRef,
      numPagesRef,
      viewerContainerRef,
    };

    return renderHook(() =>
      useCarouselSwipe({
        ...defaultProps,
        ...props,
      } as IUseCarouselSwipeParams),
    );
  };

  const createTouchEvent = (type: string, clientX: number, clientY = 0) => {
    return new TouchEvent(type, {
      bubbles: true,
      touches: [{ clientX, clientY } as Touch],
    });
  };

  const createMouseEvent = (type: string, clientX: number, clientY = 0) => {
    return new MouseEvent(type, {
      bubbles: true,
      clientX,
      clientY,
    });
  };

  describe('event listeners setup', () => {
    it('should add touch and mouse event listeners to viewer container', () => {
      const addEventListenerSpy = vi.spyOn(viewerContainer, 'addEventListener');

      renderUseCarouselSwipe();

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'touchstart',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'touchend',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'touchmove',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'mousedown',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'mouseup',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'mousemove',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'mouseleave',
        expect.any(Function),
        {
          passive: true,
        },
      );
    });

    it('should remove event listeners when unmounted', () => {
      const removeEventListenerSpy = vi.spyOn(
        viewerContainer,
        'removeEventListener',
      );

      const { unmount } = renderUseCarouselSwipe();
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'touchstart',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'touchend',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'touchmove',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'mousedown',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'mouseup',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'mousemove',
        expect.any(Function),
        {
          passive: true,
        },
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'mouseleave',
        expect.any(Function),
        {
          passive: true,
        },
      );
    });

    it('should not add event listeners when disabled', () => {
      const addEventListenerSpy = vi.spyOn(viewerContainer, 'addEventListener');

      renderUseCarouselSwipe({ disabled: true });

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });

  describe('touch swipe interactions', () => {
    it('should handle horizontal swipe right (next page)', () => {
      renderUseCarouselSwipe();

      // Start touch
      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      // Move horizontally more than THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING to trigger horizontal dragging
      const touchMove1 = createTouchEvent('touchmove', 75); // 25px movement
      viewerContainer.dispatchEvent(touchMove1);

      // End touch with significant left movement
      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).toHaveBeenCalledWith({ newPage: 1 });
    });

    it('should handle horizontal swipe left (previous page)', () => {
      // Start with container already positioned to the left (simulating is in the first page)
      contentContainer.style.left = '-100px';
      currentPageRef.current = 1;

      renderUseCarouselSwipe();

      // Start touch - this will capture the current position as posInitial
      const touchStart = createTouchEvent('touchstart', 50);
      viewerContainer.dispatchEvent(touchStart);

      // Move horizontally more than THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING to trigger horizontal dragging
      const touchMove = createTouchEvent('touchmove', 75); // 25px movement right
      viewerContainer.dispatchEvent(touchMove);

      // End touch - should trigger handleLeftSwipe (previous page)
      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).toHaveBeenCalledWith({ newPage: 0 });
    });

    it('should not swipe when movement is below threshold', () => {
      renderUseCarouselSwipe();

      // Start touch
      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      // Very small movement (below threshold for triggering horizontal dragging)
      const touchMove = createTouchEvent('touchmove', 98); // only 2px movement
      viewerContainer.dispatchEvent(touchMove);

      // End touch
      const touchEnd = createTouchEvent('touchend', 98);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).not.toHaveBeenCalled();
    });

    it('should block scroll when vertical scrolling and avoid horizontal dragging', () => {
      renderUseCarouselSwipe();

      // Start touch
      const touchStart = createTouchEvent('touchstart', 100, 100);
      viewerContainer.dispatchEvent(touchStart);

      // Move vertically first (should block horizontal dragging)
      const touchMove = createTouchEvent('touchmove', 100, 50);
      viewerContainer.dispatchEvent(touchMove);

      // Continue moving horizontally
      const touchMove1 = createTouchEvent('touchmove', 75);
      viewerContainer.dispatchEvent(touchMove1);

      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).not.toHaveBeenCalled();
    });
  });

  describe('mouse drag interactions', () => {
    it('should handle mouse drag right (next page)', () => {
      renderUseCarouselSwipe();

      // Start mouse down
      const mouseDown = createMouseEvent('mousedown', 100);
      viewerContainer.dispatchEvent(mouseDown);

      // Move mouse horizontally more than THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING to trigger horizontal dragging
      const mouseMove1 = createMouseEvent('mousemove', 75); // 25px movement
      viewerContainer.dispatchEvent(mouseMove1);

      // End mouse interaction
      const mouseUp = createMouseEvent('mouseup', 75);
      viewerContainer.dispatchEvent(mouseUp);

      expect(changePage).toHaveBeenCalledWith({ newPage: 1 });
    });

    it('should handle mouse drag left (previous page)', () => {
      // Start with container already positioned to the left (simulating is in the first page)
      contentContainer.style.left = '-100px';
      currentPageRef.current = 1;

      renderUseCarouselSwipe();

      // Start touch - this will capture the current position as posInitial
      const touchStart = createMouseEvent('mousedown', 50);
      viewerContainer.dispatchEvent(touchStart);

      // Move horizontally more than THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING to trigger horizontal dragging
      const touchMove = createMouseEvent('mousemove', 75); // 25px movement right
      viewerContainer.dispatchEvent(touchMove);

      // End touch - should trigger handleLeftSwipe (previous page)
      const touchEnd = createMouseEvent('mouseup', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).toHaveBeenCalledWith({ newPage: 0 });
    });

    it('should not swipe when movement is below threshold', () => {
      renderUseCarouselSwipe();

      // Start mouse down
      const mouseDown = createMouseEvent('mousedown', 100);
      viewerContainer.dispatchEvent(mouseDown);

      // Move mouse horizontally but not enough to trigger horizontal dragging
      const mouseMove = createMouseEvent('mousemove', 98); // only 2px movement
      viewerContainer.dispatchEvent(mouseMove);

      // Mouse leave should end drag
      const mouseLeave = createMouseEvent('mouseleave', 98);
      viewerContainer.dispatchEvent(mouseLeave);

      // Should not trigger page change due to insufficient movement
      expect(changePage).not.toHaveBeenCalled();
    });
  });

  describe('circular navigation', () => {
    it('should allow swiping to next page from last page when circular', () => {
      currentPageRef.current = 2; // last page
      renderUseCarouselSwipe({ circular: true });

      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      const touchMove1 = createTouchEvent('touchmove', 75);
      viewerContainer.dispatchEvent(touchMove1);

      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).toHaveBeenCalledWith({ newPage: 3 });
    });

    it('should allow swiping to previous page from first page when circular', () => {
      currentPageRef.current = 0; // first page
      renderUseCarouselSwipe({ circular: true });

      const touchStart = createTouchEvent('touchstart', 50);
      viewerContainer.dispatchEvent(touchStart);

      const touchMove1 = createTouchEvent('touchmove', 75);
      viewerContainer.dispatchEvent(touchMove1);

      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).toHaveBeenCalledWith({ newPage: -1 });
    });

    it('should not allow swiping beyond bounds when not circular', () => {
      currentPageRef.current = 2;
      renderUseCarouselSwipe({ circular: false });

      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      const touchMove1 = createTouchEvent('touchmove', 75);
      viewerContainer.dispatchEvent(touchMove1);

      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should not handle drag when there is only one page', () => {
      numPagesRef.current = 1;
      renderUseCarouselSwipe();

      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      const touchMove = createTouchEvent('touchmove', 50);
      viewerContainer.dispatchEvent(touchMove);

      const touchEnd = createTouchEvent('touchend', 50);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).not.toHaveBeenCalled();
    });

    it('should not handle drag when allowShiftRef is false', () => {
      allowShiftRef.current = false;
      renderUseCarouselSwipe();

      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      const touchMove1 = createTouchEvent('touchmove', 75);
      viewerContainer.dispatchEvent(touchMove1);

      const touchEnd = createTouchEvent('touchend', 75);
      viewerContainer.dispatchEvent(touchEnd);

      expect(changePage).not.toHaveBeenCalled();
    });

    it('should handle when contentContainerRef is null', () => {
      const nullContentContainerRef = { current: null };

      expect(() =>
        renderUseCarouselSwipe({
          contentContainerRef: nullContentContainerRef,
        }),
      ).not.toThrow();
    });

    it('should handle when viewerContainerRef is null', () => {
      const nullViewerContainerRef = { current: null };

      expect(() =>
        renderUseCarouselSwipe({ viewerContainerRef: nullViewerContainerRef }),
      ).not.toThrow();
    });

    it('should not crash when numElementsPerPageRef is null', () => {
      const nullNumElementsPerPageRef = { current: null };

      expect(() =>
        renderUseCarouselSwipe({
          numElementsPerPageRef: nullNumElementsPerPageRef,
        }),
      ).not.toThrow();
    });
  });

  describe('extra padding behavior', () => {
    it('should handle drag limits with extra padding', () => {
      renderUseCarouselSwipe({
        centerExtremesWhenExtraPadding: true,
        extraPadding: 20,
      });

      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      // Move to trigger horizontal dragging
      const touchMove = createTouchEvent('touchmove', 75); // 25px movement
      viewerContainer.dispatchEvent(touchMove);

      // The content container position should be updated
      expect(contentContainer.style.left).not.toBe('0px');
    });

    it('should handle extra padding without centering extremes', () => {
      renderUseCarouselSwipe({
        centerExtremesWhenExtraPadding: false,
        extraPadding: 20,
      });

      const touchStart = createTouchEvent('touchstart', 100);
      viewerContainer.dispatchEvent(touchStart);

      const touchMove = createTouchEvent('touchmove', 75); // 25px movement
      viewerContainer.dispatchEvent(touchMove);

      expect(contentContainer.style.left).not.toBe('0px');
    });
  });
});
