import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableFoot } from '../index';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Foot', () => {
  it('Should render', async () => {
    const { container } = renderProvider(
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
      </table>
    );

    const footCell1 = screen.getByText('Totals');
    expect(footCell1).toBeInTheDocument();

    const footCell2 = screen.getByText('21,000');
    expect(footCell2).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
