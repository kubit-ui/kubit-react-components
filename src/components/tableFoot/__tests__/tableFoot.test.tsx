import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableFoot } from '../tableFoot';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Foot', () => {
  it('Should render', async () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <th scope="col">Header Cell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body Cell</td>
          </tr>
        </tbody>
        <TableFoot {...mockProps}>
          <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
          </tr>
        </TableFoot>
      </table>,
    );

    const footCell1 = screen.getByText('Totals');
    expect(footCell1).not.toBeNull();

    const footCell2 = screen.getByText('21,000');
    expect(footCell2).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
