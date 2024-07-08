import { act, renderHook } from '@testing-library/react-hooks';

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
    scrollableContainer.scroll = jest.fn().mockImplementation((x, y) => {
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
    renderHook(() => useTableShadow({ ref, disabled: true }));
    expect(tableHead.style.boxShadow).toBe('');
  });

  it('should do nothing when there is not scrollable container', () => {
    const wrapperWithoutScrollableContainer = { current: document.createElement('div') };
    renderHook(() => useTableShadow({ ref: wrapperWithoutScrollableContainer }));
    expect(tableHead.style.boxShadow).toBe('');
  });

  it('should apply headBoxShadow when scrollableContainer has scrollTop', () => {
    const headBoxShadow = '1px 1px 1px black';
    renderHook(() => useTableShadow({ ref, headBoxShadow }));
    act(() => {
      scrollableContainer.scroll(5, 5);
    });
    expect(tableHead.style.boxShadow).toBe(headBoxShadow);
    act(() => {
      scrollableContainer.scroll(0, 0);
    });
    expect(tableHead.style.boxShadow).toBe('');
  });

  it('should apply leftBoxShadow when scrollableContainer has scrollleft', () => {
    const leftBoxShadow = '1px 1px 1px black';
    renderHook(() => useTableShadow({ ref, leftBoxShadow }));
    act(() => {
      scrollableContainer.scroll(5, 5);
    });
    expect(leftBoxShadowContainer.style.boxShadow).toBe(leftBoxShadow);
    act(() => {
      scrollableContainer.scroll(0, 0);
    });
    expect(leftBoxShadowContainer.style.boxShadow).toBe('');
  });

  it('should apply rightBoxShadow when  scrollableContainer.scrollLeft + scrollableContainer.clientWidth <  scrollableContainer.scrollWidth', () => {
    const rightBoxShadow = '1px 1px 1px black';
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
    expect(rightBoxShadowContainer.style.boxShadow).toBe(rightBoxShadow);
    act(() => {
      scrollableContainer.scroll(10, 10);
    });
    expect(rightBoxShadowContainer.style.boxShadow).toBe('');
  });
});
