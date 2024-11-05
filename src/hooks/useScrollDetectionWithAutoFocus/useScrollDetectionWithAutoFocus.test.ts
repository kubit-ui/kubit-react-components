import { act, renderHook } from '@testing-library/react-hooks';

import { useScrollDetectionWithAutoFocus } from './useScrollDetectionWithAutoFocus';

const resizeObserverDisconnectMock = jest.fn();
jest.mock('@/utils/resizeObserver', () => {
  return {
    ResizeObserver: class ResizeObserver {
      callback;
      constructor(callback) {
        this.callback = callback;
      }
      observe() {
        // Call the callback
        this.callback();
      }
      unobserve() {
        // do nothing
      }
      disconnect() {
        resizeObserverDisconnectMock();
      }
    },
  };
});

describe('useScrollDetectionWithAutoFocus', () => {
  let parent;
  let element;
  let internalFocusableElement;
  let parentElementRef;

  beforeEach(() => {
    parent = document.createElement('div');
    element = document.createElement('div');
    internalFocusableElement = document.createElement('button');
    parent.appendChild(element);
    parent.appendChild(internalFocusableElement);
    document.body.appendChild(parent);
    parentElementRef = { current: parent };
  });

  afterEach(() => {
    parent.remove();
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('Should return hasScroll false if it does not have scroll', () => {
    const { result } = renderHook(() => useScrollDetectionWithAutoFocus({ parentElementRef }));

    act(() => {
      result.current.handleScrollDetection(element);
    });

    expect(result.current.hasScroll).toBe(false);
  });

  it('should return hasScroll true when the element container has scroll', () => {
    Object.defineProperty(element, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(element, 'clientHeight', {
      value: 100,
    });

    const { result } = renderHook(() => useScrollDetectionWithAutoFocus({ parentElementRef }));
    act(() => {
      result.current.handleScrollDetection(element);
    });
    expect(result.current.hasScroll).toBe(true);
  });

  it('When it has scroll and document.active element is null, it should focus on the element with scroll when opening', () => {
    Object.defineProperty(element, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(element, 'clientHeight', {
      value: 100,
    });
    jest.spyOn(document, 'activeElement', 'get').mockReturnValue(null);
    const mockFocus = jest.spyOn(element, 'focus');

    const { result } = renderHook(() => useScrollDetectionWithAutoFocus({ parentElementRef }));
    act(() => {
      result.current.handleScrollDetection(element);
    });

    expect(mockFocus).toHaveBeenCalled();
  });

  it('When it has scroll and parentElementRef does not contains the active element, it should focus on the element with scroll when opening', () => {
    Object.defineProperty(element, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(element, 'clientHeight', {
      value: 100,
    });

    const mockFocus = jest.spyOn(element, 'focus');

    const { result } = renderHook(() => useScrollDetectionWithAutoFocus({ parentElementRef }));
    act(() => {
      result.current.handleScrollDetection(element);
    });

    expect(mockFocus).toHaveBeenCalled();
  });

  it('When it has scroll and focus is after element, it should focus on the element with scroll when opening', () => {
    Object.defineProperty(element, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(element, 'clientHeight', {
      value: 100,
    });

    // Focus in the "after" element
    act(() => {
      internalFocusableElement.focus();
    });

    const mockFocus = jest.spyOn(element, 'focus');

    const { result } = renderHook(() => useScrollDetectionWithAutoFocus({ parentElementRef }));
    act(() => {
      result.current.handleScrollDetection(element);
    });

    expect(mockFocus).toHaveBeenCalled();
  });

  it('When the node is deleted the inner observer is deleted', () => {
    const { result } = renderHook(() => useScrollDetectionWithAutoFocus({ parentElementRef }));

    act(() => {
      result.current.handleScrollDetection(element);
    });
    act(() => {
      result.current.handleScrollDetection(null);
    });

    expect(resizeObserverDisconnectMock).toHaveBeenCalled();
  });
});
