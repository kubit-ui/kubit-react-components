import { renderHook } from '@testing-library/react-hooks';

import { useDataTableStickyDividers } from '../../hooks/useDataTableStickyDividers';

describe('useDataTableStickyDividers', () => {
  let wrapper: HTMLDivElement;
  let scrollableContainer: HTMLDivElement;
  let divider: HTMLDivElement;
  let table: HTMLTableElement;
  let tableHead: HTMLTableSectionElement;
  let tableRow: HTMLTableRowElement;
  let tableCell: HTMLTableCellElement;
  let leftBoxShadowContainer: HTMLDivElement;
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
    leftBoxShadowContainer = document.createElement('div');
    leftBoxShadowContainer.setAttribute('data-datatable-left-shadow', '');

    tableRow.appendChild(tableCell);
    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);
    scrollableContainer.appendChild(table);
    scrollableContainer.appendChild(divider);
    wrapper.appendChild(scrollableContainer);
    wrapper.appendChild(leftBoxShadowContainer);
    document.body.appendChild(wrapper);
    ref = { current: wrapper };
  });

  afterEach(() => {
    document.body.removeChild(wrapper);
  });

  it('When the right position of the sticky columns have been set and there is horizontal scroll, the dividers width is set to the max width of the sticky columns', () => {
    // Simulate horizontal scroll
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 100,
    });
    // Simulate offset width for the table row
    Object.defineProperty(tableRow, 'offsetWidth', {
      value: 200,
    });
    renderHook(() => useDataTableStickyDividers({ ref }));
    expect(divider.style.width).toBe('200px');
  });

  it('When there are left sticky columns and there is horizontal scroll, the dividers position is set to sticky', () => {
    tableCell.setAttribute('data-sticky', 'left');
    // Simulate horizontal scroll
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 100,
    });
    // Simulate offset width for the table row
    Object.defineProperty(tableRow, 'offsetWidth', {
      value: 200,
    });
    renderHook(() => useDataTableStickyDividers({ ref }));
    expect(divider.style.position).toBe('sticky');
  });

  it('When there are left sticky columns and there is horizontal scroll, the dividers z-index should be greather than the shadow z-index', () => {
    tableCell.setAttribute('data-sticky', 'left');
    leftBoxShadowContainer.style.zIndex = '2';
    // Simulate horizontal scroll
    Object.defineProperty(scrollableContainer, 'scrollWidth', {
      value: 200,
    });
    Object.defineProperty(scrollableContainer, 'clientWidth', {
      value: 100,
    });
    // Simulate offset width for the table row
    Object.defineProperty(tableRow, 'offsetWidth', {
      value: 200,
    });
    renderHook(() => useDataTableStickyDividers({ ref }));
    expect(divider.style.zIndex).toBe('3');
  });

  it('When the right position of the sticky columns have been set and there is no horizontal scroll, the dividers width is unset', () => {
    // Simulate offset width for the table row
    Object.defineProperty(tableRow, 'offsetWidth', {
      value: 200,
    });
    renderHook(() => useDataTableStickyDividers({ ref }));
    expect(divider.style.width).toBe('');
  });

  it('When there are left sticky columns and there is no horizontal scroll, the dividers position is unset', () => {
    tableCell.setAttribute('data-sticky', 'left');
    // Simulate offset width for the table row
    Object.defineProperty(tableRow, 'offsetWidth', {
      value: 200,
    });
    renderHook(() => useDataTableStickyDividers({ ref }));
    expect(divider.style.position).toBe('');
  });
});
