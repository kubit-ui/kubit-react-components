import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableCell } from '../tableCell';

describe('Table Cell', () => {
  it('Should render', async () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <TableCell scope="col" th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell
            </TableCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell variant="BODY_CELL_DEFAULT">Body Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );

    const headerCell = screen.getByText('Header Cell');
    expect(headerCell).not.toBeNull();

    const bodyCell = screen.getByText('Body Cell');
    expect(bodyCell).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('When hidden child will be wrapper in a element to respect the size of the element', async () => {
    render(
      <TableCell component="div" hidden={true} variant="BODY_CELL_DEFAULT">
        Cell
      </TableCell>,
    );

    const cell = screen.getByTestId('table-cell');

    expect(cell).toHaveAttribute('data-hidden');
    expect(cell.firstChild?.nodeName).toBe('SPAN');
  });
});
