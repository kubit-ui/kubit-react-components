import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { DataTableHead } from '../../components/dataTableHead';

const mockProps = {};

describe('DataTableHead', () => {
  it('Should render a tableHead with thead tag', () => {
    render(
      <DataTableHead
        {...mockProps}
        tableHeadConfig={{ 'data-testid': 'thead-id' }}
      />,
    );

    const tableHead = screen.getByTestId('thead-id');
    expect(tableHead).not.toBeNull();
    expect(tableHead.tagName).toBe('THEAD');
  });

  it('When using row groups, should render a tableHead with div tag', () => {
    render(
      <DataTableHead
        {...mockProps}
        tableHeadConfig={{ 'data-testid': 'thead-id' }}
        usingRowGroups={true}
      />,
    );

    const tableHead = screen.getByTestId('thead-id');

    expect(tableHead).not.toBeNull();
    expect(tableHead.tagName).toBe('DIV');
  });

  it('For each column in the columns prop, should render a TableCell with the columns headerContent', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      { field: 'field2', headerContent: 'Header 2' },
    ];

    render(<DataTableHead {...mockProps} columns={columns} />);

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    expect(header1).not.toBeNull();
    expect(header2).not.toBeNull();
  });

  it('When usingRowGroups, the size of the cell will be set by the grid template, table cell tag will be set to DIV', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1', with: '100px' },
      { field: 'field2', headerContent: 'Header 2', with: '100px' },
    ];

    render(
      <DataTableHead {...mockProps} columns={columns} usingRowGroups={true} />,
    );

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    expect(header1).not.toBeNull();
    expect(header2).not.toBeNull();

    expect(header1.tagName).toBe('DIV');
    expect(header2.tagName).toBe('DIV');
  });

  it('Each column can have a complex format, in this case, the column can be fully configured using the TableCell props', () => {
    const columns = [
      {
        field: 'field1',
        headerContent: {
          complex: {
            content: 'Header 1',
            'data-testid': 'tableCellHeader1',
            variant: 'DEFAULT',
          },
        },
      },
    ];

    render(<DataTableHead {...mockProps} columns={columns} />);

    const header1 = screen.getByTestId('tableCellHeader1');

    expect(header1).not.toBeNull();
    expect(header1.tagName).toBe('TH');
  });

  it('When using usingRowGroups, by default the complex columns will be set as div', () => {
    const columns = [
      {
        field: 'field1',
        headerContent: {
          complex: {
            content: 'Header 1',
            'data-testid': 'tableCellHeader1',
            variant: 'DEFAULT',
          },
        },
      },
    ];

    render(
      <DataTableHead {...mockProps} columns={columns} usingRowGroups={true} />,
    );

    const header1 = screen.getByTestId('tableCellHeader1');

    expect(header1).not.toBeNull();
    expect(header1.tagName).toBe('DIV');
  });
});
