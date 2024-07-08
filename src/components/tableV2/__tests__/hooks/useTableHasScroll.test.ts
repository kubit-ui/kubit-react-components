import { renderHook } from '@testing-library/react-hooks';

import { useTableHasScroll } from '../../hooks/useTableHasScroll';

describe('useTableHasScroll', () => {
  let wrapper: HTMLDivElement;
  let scrollableContainer: HTMLDivElement;
  let ref: React.RefObject<HTMLDivElement>;

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
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
        // do nothing
      }
    };
  });

  beforeEach(() => {
    wrapper = document.createElement('div');
    scrollableContainer = document.createElement('div');
    scrollableContainer.setAttribute('data-table-scrollable-container', '');
    wrapper.appendChild(scrollableContainer);
    document.body.appendChild(wrapper);
    ref = { current: wrapper };
  });

  afterEach(() => {
    document.body.removeChild(wrapper);
  });

  it('should return false when disabled is true', () => {
    const { result } = renderHook(() => useTableHasScroll({ ref, disabled: true }));
    expect(result.current.hasScroll).toBe(false);
  });

  it('should return false when there is no scrollable container', () => {
    const mutableRef = { current: {} as HTMLDivElement };
    const { result } = renderHook(() => useTableHasScroll({ ref: mutableRef }));
    expect(result.current.hasScroll).toBe(false);
  });

  it('should return true when there is a scrollable container and it has scroll', () => {
    Object.defineProperty(scrollableContainer, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientHeight', {
      value: 100,
    });

    const { result } = renderHook(() => useTableHasScroll({ ref }));
    expect(result.current.hasScroll).toBe(true);
  });
});
