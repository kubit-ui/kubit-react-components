import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableRow } from '../index';

describe('Table Row', () => {
  it('Should render', async () => {
    const { container } = renderProvider(
      <table>
        <thead>
          <TableRow variant="HEADER_ROW_DEFAULT">
            <th scope="col">Header Cell</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow variant="BODY_ROW_DEFAULT">
            <td>Body Cell</td>
          </TableRow>
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
});
