import { screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { DataTableHead } from '../../components';

const mockProps = {};

describe('DataTableHead', () => {
  it('Should render a tableHead with thead tag', () => {
    renderProvider(<DataTableHead {...mockProps} tableHeadConfig={{ dataTestId: 'thead-id' }} />);

    const tableHead = screen.getByTestId('thead-id');
    expect(tableHead).toBeInTheDocument();
    expect(tableHead.tagName).toBe('THEAD');
  });

  it('When using row groups, should render a tableHead with div tag', () => {
    renderProvider(
      <DataTableHead {...mockProps} usingRowGroups tableHeadConfig={{ dataTestId: 'thead-id' }} />
    );

    const tableHead = screen.getByTestId('thead-id');

    expect(tableHead).toBeInTheDocument();
    expect(tableHead.tagName).toBe('DIV');
  });

  it('For each column in the columns prop, should render a TableCell with the columns headerContent', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    renderProvider(<DataTableHead {...mockProps} columns={columns} />);

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });

  it('When usingRowGroups, the size of the cell will be set by the grid template, table cell tag will be set to DIV', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1', with: '100px' },
      { field: 'field2', headerContent: 'Header 2', with: '100px' },
    ];

    renderProvider(<DataTableHead {...mockProps} usingRowGroups columns={columns} />);

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();

    expect(header1.tagName).toBe('DIV');
    expect(header2.tagName).toBe('DIV');
  });

  it('Each column can have a complex format, in this case, the column can be fully configured using the TableCell props', () => {
    const columns = [
      {
        field: 'field1',
        headerContent: {
          complex: { content: 'Header 1', variant: 'DEFAULT', dataTestId: 'tableCellHeader1' },
        },
      },
    ];

    renderProvider(<DataTableHead {...mockProps} columns={columns} />);

    const header1 = screen.getByTestId('tableCellHeader1');

    expect(header1).toBeInTheDocument();
    expect(header1.tagName).toBe('TH');
  });

  it('When using usingRowGroups, by default the complex columns will be set as div', () => {
    const columns = [
      {
        field: 'field1',
        headerContent: {
          complex: { content: 'Header 1', variant: 'DEFAULT', dataTestId: 'tableCellHeader1' },
        },
      },
    ];

    renderProvider(<DataTableHead {...mockProps} usingRowGroups columns={columns} />);

    const header1 = screen.getByTestId('tableCellHeader1');

    expect(header1).toBeInTheDocument();
    expect(header1.tagName).toBe('DIV');
  });
});
