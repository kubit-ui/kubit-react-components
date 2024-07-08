import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableCell } from '../index';

describe('Table Cell', () => {
  it('Should render', async () => {
    const { container } = renderProvider(
      <table>
        <thead>
          <tr>
            <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
              Header Cell
            </TableCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell variant="BODY_CELL_DEFAULT">Body Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );

    const headerCell = screen.getByText('Header Cell');
    expect(headerCell).toBeInTheDocument();

    const bodyCell = screen.getByText('Body Cell');
    expect(bodyCell).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When hidden child will be wrapper in a element to respect the size of the element', async () => {
    renderProvider(
      <TableCell hidden component="div" variant="BODY_CELL_DEFAULT">
        Cell
      </TableCell>
    );

    const cell = screen.getByTestId('tableCell');

    expect(cell).toHaveAttribute('data-hidden');
    expect(cell.firstChild?.nodeName).toBe('DIV');
  });
});
