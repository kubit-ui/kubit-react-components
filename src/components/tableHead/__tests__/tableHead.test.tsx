import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableHead } from '../index';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Head', () => {
  it('Should render', async () => {
    const { container } = renderProvider(
      <table>
        <TableHead {...mockProps}>
          <tr>
            <th scope="col">Header Cell</th>
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <td>Body Cell</td>
          </tr>
        </tbody>
      </table>
    );

    const headerCell = screen.getByText('Header Cell');
    expect(headerCell).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
