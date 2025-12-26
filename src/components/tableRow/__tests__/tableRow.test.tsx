import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableRow } from '../tableRow';

describe('Table Row', () => {
  it('Should render', async () => {
    const { container } = render(
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
});
