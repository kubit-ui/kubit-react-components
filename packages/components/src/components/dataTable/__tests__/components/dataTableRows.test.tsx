import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { DataTableRows } from '../../components/dataTableRows';

const mockProps = {};

// Helper to render DataTableRows with proper table structure
const renderWithTable = (component: React.ReactElement) => {
  return render(
    <table>
      <tbody>{component}</tbody>
    </table>,
  );
};

describe('DataTableRows', () => {
  it('Should render a set of rows', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    renderWithTable(
      <DataTableRows {...mockProps} columns={columns} rows={rows} />,
    );

    const rowsFound = screen.getAllByRole('row');
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(3);
    expect(cell1).not.toBeNull();
    expect(cell2).not.toBeNull();
  });

  it('Should render a set of rows with active rows', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2', id: 'row1' }];

    renderWithTable(
      <DataTableRows
        {...mockProps}
        activeRows={['row1']}
        columns={columns}
        rows={rows}
      />,
    );

    const rowsFound = screen.getAllByRole('row');
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(3);
    expect(cell1).not.toBeNull();
    expect(cell2).not.toBeNull();
  });

  it('Cell value could be a complex object, configuring it as a tableCell props', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [
      {
        field1: 'value1',
        field2: {
          complex: {
            content: 'value2',
          },
        },
      },
    ];

    renderWithTable(
      <DataTableRows {...mockProps} columns={columns} rows={rows} />,
    );

    const rowsFound = screen.getAllByRole('row');
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(3);
    expect(cell1).not.toBeNull();
    expect(cell2).not.toBeNull();
  });

  it('Cell value could be build from a valueGetter function given by the column', () => {
    const columns = [
      {
        field: 'field1',
        headerContent: 'Header 1',
        valueGetter: (value) => value.toUpperCase(),
      },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    renderWithTable(
      <DataTableRows {...mockProps} columns={columns} rows={rows} />,
    );

    const rowsFound = screen.getAllByRole('row');
    const cell1 = screen.getByText('VALUE1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(3);
    expect(cell1).not.toBeNull();
    expect(cell2).not.toBeNull();
  });

  it('When usingRowGroups is set to true, it only affects to the display of the rows grid', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [
      {
        field1: 'value1',
        field2: {
          complex: {
            content: 'value2',
          },
        },
      },
    ];

    renderWithTable(
      <DataTableRows
        {...mockProps}
        usingRowGroups
        activeRows={['row1']}
        columns={columns}
        rows={rows}
      />,
    );

    const rowsFound = screen.getAllByRole('row');
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(3);
    expect(cell1).not.toBeNull();
    expect(cell2).not.toBeNull();
  });
});
