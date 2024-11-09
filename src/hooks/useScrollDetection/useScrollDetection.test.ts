import { act, renderHook } from '@testing-library/react-hooks';

import { useScrollDetection } from './useScrollDetection';

const resizeObserverDisconnectMock = jest.fn();
jest.mock('@/utils/resizeObserver/resizeObserver', () => {
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

describe('useScrollDetection', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('Should return hasScroll false if it does not have scroll', () => {
    const { result } = renderHook(() => useScrollDetection());

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

    const { result } = renderHook(() => useScrollDetection());
    act(() => {
      result.current.handleScrollDetection(element);
    });
    expect(result.current.hasScroll).toBe(true);
  });

  it('When the node is deleted the inner observer is deleted', () => {
    const { result } = renderHook(() => useScrollDetection());

    act(() => {
      result.current.handleScrollDetection(element);
    });
    act(() => {
      result.current.handleScrollDetection(null);
    });

    expect(resizeObserverDisconnectMock).toHaveBeenCalled();
  });
});
