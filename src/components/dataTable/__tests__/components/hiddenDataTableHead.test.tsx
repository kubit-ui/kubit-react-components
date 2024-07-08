import { screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { HiddenDataTableHead } from '../../components';

const mockProps = {};

describe('HiddenDataTableHead', () => {
  it('Should render a tableHead with its cells', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      {
        field: 'field2',
        headerContent: {
          complex: { content: 'Header 2', variant: 'DEFAULT', dataTestId: 'tableCellHeader1' },
        },
      },
    ];

    renderProvider(<HiddenDataTableHead {...mockProps} columns={columns} />);

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });
});
