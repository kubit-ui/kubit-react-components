import { act, renderHook } from '@testing-library/react';

import { useSwipeDown } from '../useSwipeDown';

const createMockElements = () => {
  const mockPopoverElement = document.createElement('div');
  const mockDragElement = document.createElement('div');
  return { mockDragElement, mockPopoverElement };
};
const captureEventHandlers = () => {
  const eventListeners: Record<string, EventListener> = {};
  const originalAddEventListener = document.addEventListener;
  document.addEventListener = vi.fn(
    (
      event: string,
      handler: EventListener,
      options?: AddEventListenerOptions | boolean,
    ) => {
      eventListeners[event] = handler;
      originalAddEventListener.call(document, event, handler, options);
    },
  );
  return {
    eventListeners,
    restore: () => (document.addEventListener = originalAddEventListener),
  };
};

const createTouchEvent = (type: string, clientY: number, useTouches = true) => {
  const touchData = { clientY } as Touch;
  const event = new TouchEvent(type, {
    bubbles: true,
    cancelable: true,
    changedTouches: !useTouches ? [touchData] : [],
    touches: useTouches ? [touchData] : [],
  });
  Object.defineProperty(event, 'preventDefault', {
    value: vi.fn(),
    writable: true,
  });
  return event;
};

describe('useSwipeDown', () => {
  let mockHandleClose: () => void;
  let mockAddEventListener: ReturnType<typeof vi.fn>;
  let mockRemoveEventListener: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockHandleClose = vi.fn() as () => void;
    mockAddEventListener = vi.fn();
    mockRemoveEventListener = vi.fn();

    Object.defineProperty(document, 'addEventListener', {
      value: mockAddEventListener,
      writable: true,
    });

    Object.defineProperty(document, 'removeEventListener', {
      value: mockRemoveEventListener,
      writable: true,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it('should initialize correctly', () => {
    const { result } = renderHook(() =>
      useSwipeDown({ handleClose: mockHandleClose }),
    );

    expect(result.current.setPopoverRef).toBeDefined();
    expect(result.current.setDragIconRef).toBeDefined();
  });

  describe('Event Listener Management', () => {
    it('should clean up event listeners when drag element is unmounted', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const mockDragElement = document.createElement('div');
      const mockAddElementListener = vi.fn();
      const mockRemoveElementListener = vi.fn();

      mockDragElement.addEventListener = mockAddElementListener;
      mockDragElement.removeEventListener = mockRemoveElementListener;

      act(() => {
        result.current.setDragIconRef(mockDragElement);
      });

      expect(mockAddElementListener).toHaveBeenCalledWith(
        'mousedown',
        expect.any(Function),
        {
          passive: false,
        },
      );
      expect(mockAddElementListener).toHaveBeenCalledWith(
        'touchstart',
        expect.any(Function),
        {
          passive: false,
        },
      );

      act(() => {
        result.current.setDragIconRef(null);
      });

      expect(mockRemoveElementListener).toHaveBeenCalledWith(
        'mousedown',
        expect.any(Function),
      );
      expect(mockRemoveElementListener).toHaveBeenCalledWith(
        'touchstart',
        expect.any(Function),
      );
    });
  });

  describe('Drag Behavior', () => {
    it('should close when drag distance exceeds threshold', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement, mockPopoverElement } = createMockElements();
      const { eventListeners, restore } = captureEventHandlers();

      act(() => {
        result.current.setPopoverRef(mockPopoverElement);
        result.current.setDragIconRef(mockDragElement);
      });

      const touchStartEvent = createTouchEvent('touchstart', 100);
      act(() => mockDragElement.dispatchEvent(touchStartEvent));

      const touchEndEvent = createTouchEvent('touchend', 150, false);
      act(() => eventListeners['touchend']?.(touchEndEvent));

      restore();
      expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

    it('should not close when drag distance is too small', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement, mockPopoverElement } = createMockElements();
      const { eventListeners, restore } = captureEventHandlers();

      act(() => {
        result.current.setPopoverRef(mockPopoverElement);
        result.current.setDragIconRef(mockDragElement);
      });

      const touchStartEvent = createTouchEvent('touchstart', 100);
      act(() => mockDragElement.dispatchEvent(touchStartEvent));

      const touchEndEvent = createTouchEvent('touchend', 105, false);
      act(() => eventListeners['touchend']?.(touchEndEvent));

      restore();
      expect(mockHandleClose).not.toHaveBeenCalled();
    });

    it('should update popover bottom style during drag downward', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement, mockPopoverElement } = createMockElements();
      const { eventListeners, restore } = captureEventHandlers();

      act(() => {
        result.current.setPopoverRef(mockPopoverElement);
        result.current.setDragIconRef(mockDragElement);
      });

      const touchStartEvent = createTouchEvent('touchstart', 100);
      act(() => mockDragElement.dispatchEvent(touchStartEvent));

      const touchMoveEvent = createTouchEvent('touchmove', 150);
      act(() => eventListeners['touchmove']?.(touchMoveEvent));

      restore();
      expect(mockPopoverElement.style.bottom).toBe('-50px');
    });

    it('should not update style when moving upward', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement, mockPopoverElement } = createMockElements();
      const { eventListeners, restore } = captureEventHandlers();

      act(() => {
        result.current.setPopoverRef(mockPopoverElement);
        result.current.setDragIconRef(mockDragElement);
      });

      const touchStartEvent = createTouchEvent('touchstart', 100);
      act(() => mockDragElement.dispatchEvent(touchStartEvent));

      const touchMoveEvent = createTouchEvent('touchmove', 50);
      act(() => eventListeners['touchmove']?.(touchMoveEvent));

      restore();
      expect(mockPopoverElement.style.bottom).toBe('');
    });

    it('should handle mouse events correctly', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement, mockPopoverElement } = createMockElements();
      const { eventListeners, restore } = captureEventHandlers();

      act(() => {
        result.current.setPopoverRef(mockPopoverElement);
        result.current.setDragIconRef(mockDragElement);
      });

      const mouseDownEvent = new MouseEvent('mousedown', { clientY: 100 });
      Object.defineProperty(mouseDownEvent, 'preventDefault', {
        value: vi.fn(),
      });
      act(() => mockDragElement.dispatchEvent(mouseDownEvent));

      const mouseMoveEvent = {
        clientY: 150,
        preventDefault: vi.fn(),
        type: 'mousemove',
      };
      act(() =>
        eventListeners['mousemove']?.(mouseMoveEvent as unknown as MouseEvent),
      );

      const mouseUpEvent = { clientY: 150, type: 'mouseup' };
      act(() =>
        eventListeners['mouseup']?.(mouseUpEvent as unknown as MouseEvent),
      );

      restore();
      expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Edge Cases', () => {
    it('should prevent double drag initiation', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement } = createMockElements();

      act(() => result.current.setDragIconRef(mockDragElement));

      const touchStartEvent1 = createTouchEvent('touchstart', 100);
      act(() => mockDragElement.dispatchEvent(touchStartEvent1));

      mockAddEventListener.mockClear();

      const touchStartEvent2 = createTouchEvent('touchstart', 150);
      act(() => mockDragElement.dispatchEvent(touchStartEvent2));

      expect(mockAddEventListener).not.toHaveBeenCalled();
    });

    it('should not handle events when not dragging', () => {
      const { result } = renderHook(() =>
        useSwipeDown({ handleClose: mockHandleClose }),
      );
      const { mockDragElement } = createMockElements();

      act(() => result.current.setDragIconRef(mockDragElement));

      const touchMoveEvent = createTouchEvent('touchmove', 150);
      act(() => document.dispatchEvent(touchMoveEvent));

      expect(touchMoveEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockHandleClose).not.toHaveBeenCalled();
    });
  });
});
