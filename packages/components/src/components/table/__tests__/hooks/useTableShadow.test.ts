import { act, renderHook } from '@testing-library/react';

import { useTableShadow } from '../../hooks/useTableShadow';

describe('useTableShadow', () => {
  let wrapper: HTMLDivElement;
  let scrollableContainer: HTMLDivElement;
  let table: HTMLTableElement;
  let tableHead: HTMLTableSectionElement;
  let leftBoxShadowContainer: HTMLDivElement;
  let rightBoxShadowContainer: HTMLDivElement;
  let ref: React.RefObject<HTMLDivElement>;

  beforeEach(() => {
    wrapper = document.createElement('div');
    scrollableContainer = document.createElement('div');
    scrollableContainer.setAttribute('data-table-scrollable-container', '');
    scrollableContainer.scroll = vi.fn().mockImplementation((x, y) => {
      scrollableContainer.scrollTop = y;
      scrollableContainer.scrollLeft = x;
      scrollableContainer.dispatchEvent(new Event('scroll'));
    });
    table = document.createElement('table');
    tableHead = document.createElement('thead');
    tableHead.setAttribute('data-table-head', '');
    tableHead.setAttribute('data-sticky', '');
    leftBoxShadowContainer = document.createElement('div');
    leftBoxShadowContainer.setAttribute('data-table-left-shadow', '');
    rightBoxShadowContainer = document.createElement('div');
    rightBoxShadowContainer.setAttribute('data-table-right-shadow', '');

    table.appendChild(tableHead);
    scrollableContainer.appendChild(table);
    wrapper.appendChild(scrollableContainer);
    wrapper.appendChild(leftBoxShadowContainer);
    wrapper.appendChild(rightBoxShadowContainer);
    document.body.appendChild(wrapper);
    ref = { current: wrapper };
  });

  afterEach(() => {
    document.body.removeChild(wrapper);
  });

  it('should do nothing when disabled is true', () => {
    renderHook(() => useTableShadow({ disabled: true, ref }));
    expect(tableHead.style.boxShadow).toBe('');
    expect(document.body).toHTMLValidate();
  });

  it('should do nothing when there is not scrollable container', () => {
    const wrapperWithoutScrollableContainer = {
      current: document.createElement('div'),
    };
    renderHook(() =>
      useTableShadow({ ref: wrapperWithoutScrollableContainer }),
    );
    expect(tableHead.style.boxShadow).toBe('');
    expect(document.body).toHTMLValidate();
  });

  it('should apply headBoxShadow when scrollableContainer has scrollTop', () => {
    const headBoxShadow = 'custom-class';
    renderHook(() => useTableShadow({ headBoxShadow, ref }));
    act(() => {
      scrollableContainer.scroll(5, 5);
    });
    expect(tableHead.className).toBe(headBoxShadow);
    act(() => {
      scrollableContainer.scroll(0, 0);
    });
    expect(tableHead.className).toBe('');
    expect(document.body).toHTMLValidate();
  });

  it('should apply leftBoxShadow when scrollableContainer has scrollleft', () => {
    const leftBoxShadow = 'custom-class';
    renderHook(() => useTableShadow({ leftBoxShadow, ref }));
    act(() => {
      scrollableContainer.scroll(5, 5);
    });
    expect(leftBoxShadowContainer.className).toBe(leftBoxShadow);
    act(() => {
      scrollableContainer.scroll(0, 0);
    });
    expect(leftBoxShadowContainer.className).toBe('');
    expect(document.body).toHTMLValidate();
  });

  it('should apply rightBoxShadow when scrollableContainer.scrollLeft + scrollableContainer.clientWidth < scrollableContainer.scrollWidth', () => {
    const rightBoxShadow = 'custom-class';
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 10,
    });
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 20,
    });
    renderHook(() => useTableShadow({ ref, rightBoxShadow }));
    act(() => {
      scrollableContainer.scroll(0, 0);
    });
    expect(rightBoxShadowContainer.className).toBe(rightBoxShadow);
    act(() => {
      scrollableContainer.scroll(10, 10);
    });
    expect(rightBoxShadowContainer.className).toBe('');
    expect(document.body).toHTMLValidate();
  });
});
