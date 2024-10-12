import { act, renderHook } from '@testing-library/react-hooks';

import { useTooltipContentScroll } from '../hooks';

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

describe('useTooltipContentScroll', () => {
  let tooltip;
  let content;
  let tooltipRef;

  beforeEach(() => {
    tooltip = document.createElement('div');
    content = document.createElement('div');
    tooltipRef = { current: tooltip };
    tooltip.appendChild(content);
  });

  afterEach(() => {
    tooltip.remove();
  });

  it('Should return contentHasScroll false if it does not have scroll', () => {
    const { result } = renderHook(() => useTooltipContentScroll({ tooltipRef }));

    act(() => {
      result.current.contentRefHandler(content);
    });

    expect(result.current.contentHasScroll).toBe(false);
  });

  it('should return contentHasScroll true when the content container has scroll', () => {
    Object.defineProperty(content, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(content, 'clientHeight', {
      value: 100,
    });

    const { result } = renderHook(() => useTooltipContentScroll({ tooltipRef }));
    act(() => {
      result.current.contentRefHandler(content);
    });
    expect(result.current.contentHasScroll).toBe(true);
  });

  it('When it has scroll and tooltip does not have the focus, it should focus on the content with scroll when opening', () => {
    Object.defineProperty(content, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(content, 'clientHeight', {
      value: 100,
    });
    const mockFocus = jest.spyOn(content, 'focus');

    const { result } = renderHook(() => useTooltipContentScroll({ tooltipRef }));
    act(() => {
      result.current.contentRefHandler(content);
    });

    expect(mockFocus).toHaveBeenCalled();
  });

  it('When the node is deleted the inner observer is deleted', () => {
    const { result } = renderHook(() => useTooltipContentScroll({ tooltipRef }));

    act(() => {
      result.current.contentRefHandler(content);
    });
    act(() => {
      result.current.contentRefHandler(null);
    });

    expect(resizeObserverDisconnectMock).toHaveBeenCalled();
  });
});
