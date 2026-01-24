import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableCaption } from '../tableCaption';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Caption', () => {
  it('Should render', async () => {
    const { container } = render(
      <table>
        <TableCaption component="caption" {...mockProps}>
          Table Caption
        </TableCaption>
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
      </table>,
    );

    const tableCaption = screen.getByText('Table Caption');
    expect(tableCaption).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
