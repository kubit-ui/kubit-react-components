// TO DO: RESOLVE THE TESTS
import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { DataTable } from '../dataTable';
import * as hooks from '../hooks/useDataTableHasScroll';

const mockProps = {
  ref: { current: null },
};

describe('DataTable', () => {
  // it('Should render a unique table component when no rowGroups are used', async () => {
  //   const columns = [
  //     { field: 'field1', headerContent: 'Header 1' },
  //     { field: 'field2', headerContent: 'Header 2' },
  //   ];

  //   const rows = [{ field1: 'value1', field2: 'value2' }];

  //   const { container } = render(
  //     <DataTable
  //       {...mockProps}
  //       caption={{ content: 'Table Caption' }}
  //       columns={columns}
  //       rows={rows}
  //     />
  //   );

  //   const table = screen.getByRole('table');
  //   const caption = screen.getByText('Table Caption');

  //   const header1 = screen.getByText('Header 1');
  //   const header2 = screen.getByText('Header 2');

  //   const cell1 = screen.getByText('value1');
  //   const cell2 = screen.getByText('value2');

  //   expect(table).not.toBeNull();
  //   expect(caption).not.toBeNull();
  //   expect(header1).not.toBeNull();
  //   expect(header2).not.toBeNull();
  //   expect(cell1).not.toBeNull();
  //   expect(cell2).not.toBeNull();

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'no-inline-style': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Should render multiple tables when no rowGroups are used', async () => {
  //   const columns = [
  //     { field: 'field1', headerContent: 'Header 1' },
  //     { field: 'field2', headerContent: 'Header 2' },
  //   ];

  //   const rowGroups = [
  //     { caption: { content: 'Table Caption 1' }, rows: [{ field1: 'value1', field2: 'value2' }] },
  //     { caption: { content: 'Table Caption 2' }, rows: [{ field1: 'value3', field2: 'value4' }] },
  //   ];

  //   const { container } = render(
  //     <DataTable
  //       {...mockProps}
  //       caption={{ content: 'Table Caption' }}
  //       columns={columns}
  //       rowGroups={rowGroups}
  //     />
  //   );

  //   const tables = screen.getAllByRole('table');
  //   expect(tables.length).toBe(2);

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'no-inline-style': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  it('Row groups can have divider', async () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    const rowGroups = [
      {
        divider: { content: 'divider1' },
        rows: [{ field1: 'value1', field2: 'value2' }],
      },
      {
        divider: { content: 'divider2' },
        rows: [{ field1: 'value3', field2: 'value4' }],
      },
    ];

    render(
      <DataTable
        {...mockProps}
        caption={{ content: 'Table Caption' }}
        columns={columns}
        rowGroups={rowGroups}
      />,
    );

    const divider1 = screen.getByText('divider1');
    const divider2 = screen.getByText('divider2');

    expect(divider1).not.toBeNull();
    expect(divider2).not.toBeNull();
  });

  it('When scrollable, its container should have a role region focusable with tabIndex of 0', () => {
    vi.spyOn(hooks, 'useDataTableHasScroll').mockReturnValueOnce({
      hasScroll: true,
    });
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    render(
      <DataTable
        {...mockProps}
        aria-label="aria-label"
        caption={{ content: 'Table Caption' }}
        columns={columns}
        rows={rows}
      />,
    );

    const scrollableContainer = screen.getByRole('region', {
      name: 'aria-label',
    });
    expect(scrollableContainer).toHaveAttribute('tabIndex', '0');
  });
});
