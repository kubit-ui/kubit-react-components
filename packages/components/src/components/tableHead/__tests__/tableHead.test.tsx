import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableHead } from '../tableHead';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Head', () => {
  it('Should render', async () => {
    const { container } = render(
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
      </table>,
    );

    const headerCell = screen.getByText('Header Cell');
    expect(headerCell).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
