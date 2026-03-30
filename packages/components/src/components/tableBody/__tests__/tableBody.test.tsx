import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableBody } from '../tableBody';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Body', () => {
  it('Should render', async () => {
    const { container } = render(
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
      </table>,
    );

    const bodyCell = screen.getByText('Body Cell');
    expect(bodyCell).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
