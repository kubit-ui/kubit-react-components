import { renderHook } from '@testing-library/react-hooks';

import { useDataTableStickyRightColumns } from '../../hooks/useDataTableStickyRightColumns';

describe('useDataTableStickyRightColumns', () => {
  let wrapper: HTMLDivElement;
  let scrollableContainer: HTMLDivElement;
  let divider: HTMLDivElement;
  let table: HTMLTableElement;
  let tableHead: HTMLTableSectionElement;
  let tableRow: HTMLTableRowElement;
  let tableCell: HTMLTableCellElement;
  let rightBoxShadowContainer: HTMLDivElement;
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
    scrollableContainer.setAttribute('data-datatable-scrollable-container', '');
    scrollableContainer.scroll = jest.fn().mockImplementation((x, y) => {
      scrollableContainer.scrollTop = y;
      scrollableContainer.scrollLeft = x;
      scrollableContainer.dispatchEvent(new Event('scroll'));
    });
    divider = document.createElement('div');
    divider.setAttribute('data-table-divider', '');
    table = document.createElement('table');
    tableHead = document.createElement('thead');
    tableHead.setAttribute('data-table-head', '');
    tableRow = document.createElement('tr');
    tableRow.setAttribute('data-table-row', '');
    tableCell = document.createElement('td');
    tableCell.setAttribute('data-sticky', 'right');
    rightBoxShadowContainer = document.createElement('div');
    rightBoxShadowContainer.setAttribute('data-datatable-right-shadow', '');

    tableRow.appendChild(tableCell);
    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);
    scrollableContainer.appendChild(table);
    scrollableContainer.appendChild(divider);
    wrapper.appendChild(scrollableContainer);
    wrapper.appendChild(rightBoxShadowContainer);
    document.body.appendChild(wrapper);
    ref = { current: wrapper };
  });

  afterEach(() => {
    document.body.removeChild(wrapper);
  });

  it('should do nothing when there is not scrollable container', () => {
    const wrapperWithoutScrollableContainer = { current: document.createElement('div') };
    renderHook(() => useDataTableStickyRightColumns({ ref: wrapperWithoutScrollableContainer }));
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
    renderHook(() => useDataTableStickyRightColumns({ ref }));
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
    renderHook(() => useDataTableStickyRightColumns({ ref }));
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
    renderHook(() => useDataTableStickyRightColumns({ ref }));
    expect(rightBoxShadowContainer.style.right).toBe('5px');
  });
});
