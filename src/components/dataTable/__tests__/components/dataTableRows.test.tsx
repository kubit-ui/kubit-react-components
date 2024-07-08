import { screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { DataTableRows } from '../../components';

const mockProps = {};

describe('DataTableRows', () => {
  it('Should render a set of rows', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    renderProvider(<DataTableRows {...mockProps} columns={columns} rows={rows} />);

    const rowsFound = screen.getAllByRole(ROLES.ROW);
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(1);
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
  });

  it('Should render a set of rows with active rows', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [{ id: 'row1', field1: 'value1', field2: 'value2' }];

    renderProvider(
      <DataTableRows {...mockProps} activeRows={['row1']} columns={columns} rows={rows} />
    );

    const rowsFound = screen.getAllByRole(ROLES.ROW);
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(1);
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
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

    renderProvider(<DataTableRows {...mockProps} columns={columns} rows={rows} />);

    const rowsFound = screen.getAllByRole(ROLES.ROW);
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(1);
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
  });

  it('Cell value could be build from a valueGetter function given by the column', () => {
    const columns = [
      {
        field: 'field1',
        headerContent: 'Header 1',
        valueGetter: value => value.toUpperCase(),
      },
      { field: 'field2', headerConent: 'Header 2' },
    ];

    const rows = [{ field1: 'value1', field2: 'value2' }];

    renderProvider(<DataTableRows {...mockProps} columns={columns} rows={rows} />);

    const rowsFound = screen.getAllByRole(ROLES.ROW);
    const cell1 = screen.getByText('VALUE1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(1);
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
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

    renderProvider(
      <DataTableRows
        {...mockProps}
        usingRowGroups
        activeRows={['row1']}
        columns={columns}
        rows={rows}
      />
    );

    const rowsFound = screen.getAllByRole(ROLES.ROW);
    const cell1 = screen.getByText('value1');
    const cell2 = screen.getByText('value2');

    expect(rowsFound).toHaveLength(1);
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
  });
});
