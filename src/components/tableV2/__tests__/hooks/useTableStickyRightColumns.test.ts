import { renderHook } from '@testing-library/react-hooks';

import { useTableStickyRightColumns } from '../../hooks/useTableStickyRightColumns';

describe('useTableStickyRightColumns', () => {
  let wrapper: HTMLDivElement;
  let scrollableContainer: HTMLDivElement;
  let table: HTMLTableElement;
  let tableHead: HTMLTableSectionElement;
  let tableRow: HTMLTableRowElement;
  let tableCell: HTMLTableCellElement;
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
    tableRow = document.createElement('tr');
    tableRow.setAttribute('data-table-row', '');
    tableCell = document.createElement('td');
    tableCell.setAttribute('data-sticky', 'right');
    rightBoxShadowContainer = document.createElement('div');
    rightBoxShadowContainer.setAttribute('data-table-right-shadow', '');

    tableRow.appendChild(tableCell);
    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);
    scrollableContainer.appendChild(table);
    wrapper.appendChild(scrollableContainer);
    wrapper.appendChild(rightBoxShadowContainer);
    document.body.appendChild(wrapper);
    ref = { current: wrapper };
  });

  afterEach(() => {
    document.body.removeChild(wrapper);
  });

  it('should do nothing when disabled is true', () => {
    renderHook(() => useTableStickyRightColumns({ ref, disabled: true }));
    expect(tableCell.style.right).toBe('');
  });

  it('should do nothing when there is not scrollable container', () => {
    const wrapperWithoutScrollableContainer = { current: document.createElement('div') };
    renderHook(() => useTableStickyRightColumns({ ref: wrapperWithoutScrollableContainer }));
    expect(tableCell.style.right).toBe('');
  });

  it('When there is horizontal scroll, right style for sticky columns should be set', () => {
    // Simulate horizontal scroll
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 100,
    });
    renderHook(() => useTableStickyRightColumns({ ref }));
    expect(tableCell.style.right).toBe('0px');
  });

  it('When there is not horizontal scroll, right style for sticky columns should not be set', () => {
    // Simulate not horizontal scroll
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 100,
    });
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 200,
    });
    renderHook(() => useTableStickyRightColumns({ ref }));
    expect(tableCell.style.right).toBe('');
  });

  it('When the right position of the sticky columns have been set, the rightBoxShadowContainer right position is set, bearing in mind th scrollbar size too', () => {
    // Simulate horizontal scroll
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 100,
    });
    // Simulate vertical scroll
    Object.defineProperty(scrollableContainer, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientHeight', {
      value: 100,
    });
    Object.defineProperty(scrollableContainer, 'offsetWidth', {
      value: 105,
    });
    renderHook(() => useTableStickyRightColumns({ ref }));
    expect(rightBoxShadowContainer.style.right).toBe('5px');
  });
});
