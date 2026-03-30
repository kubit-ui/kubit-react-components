import { renderHook } from '@testing-library/react';

import { useTableHasScroll } from '../../hooks/useTableHasScroll';

describe('useTableHasScroll', () => {
  let wrapper: HTMLDivElement;
  let scrollableContainer: HTMLDivElement;
  let ref: React.RefObject<HTMLDivElement>;

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
    const { result } = renderHook(() =>
      useTableHasScroll({ disabled: true, ref }),
    );
    expect(result.current.hasScroll).toBe(false);
    expect(document.body).toHTMLValidate();
  });

  it('should return false when there is no scrollable container', () => {
    const mutableRef = { current: {} as HTMLDivElement };
    const { result } = renderHook(() => useTableHasScroll({ ref: mutableRef }));
    expect(result.current.hasScroll).toBe(false);
    expect(document.body).toHTMLValidate();
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
    expect(document.body).toHTMLValidate();
  });
});
