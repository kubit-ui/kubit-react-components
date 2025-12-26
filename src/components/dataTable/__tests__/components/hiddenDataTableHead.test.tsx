import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { HiddenDataTableHead } from '../../components/hiddenDataTableHead';

const mockProps = {};

describe('HiddenDataTableHead', () => {
  it('Should render a tableHead with its cells', () => {
    const columns = [
      { field: 'field1', headerContent: 'Header 1' },
      {
        field: 'field2',
        headerContent: {
          complex: {
            content: 'Header 2',
            'data-testid': 'tableCellHeader1',
            variant: 'DEFAULT',
          },
        },
      },
    ];

    render(<HiddenDataTableHead {...mockProps} columns={columns} />);

    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');

    expect(header1).not.toBeNull();
    expect(header2).not.toBeNull();
  });
});
