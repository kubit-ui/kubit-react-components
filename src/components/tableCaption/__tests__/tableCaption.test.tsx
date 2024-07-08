import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableCaption } from '../index';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Caption', () => {
  it('Should render', async () => {
    const { container } = renderProvider(
      <table>
        <TableCaption {...mockProps}>Table Caption</TableCaption>
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
      </table>
    );

    const tableCaption = screen.getByText('Table Caption');
    expect(tableCaption).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
