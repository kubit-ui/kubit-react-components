import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableBody } from '../index';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Body', () => {
  it('Should render', async () => {
    const { container } = renderProvider(
      <table>
        <thead>
          <tr>
            <th scope="col">Header Cell</th>
          </tr>
        </thead>
        <TableBody {...mockProps}>
          <tr>
            <td>Body Cell</td>
          </tr>
        </TableBody>
      </table>
    );

    const bodyCell = screen.getByText('Body Cell');
    expect(bodyCell).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
