import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import * as hooks from '../hooks/useTableHasScroll';
import { Table } from '../table';

const mockProps = {
  ref: { current: null },
  variant: 'DEFAULT',
};

describe('Table', () => {
  it('Should render', async () => {
    const { container } = render(
      <Table {...mockProps}>
        <thead>
          <tr>
            <th scope="col">Header Cell</th>
          </tr>
        </thead>
        <tbody {...mockProps}>
          <tr>
            <td>Body Cell</td>
          </tr>
        </tbody>
      </Table>,
    );

    const bodyCell = screen.getByText('Body Cell');
    expect(bodyCell).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('When scrollable, its container should have a role region focusable with  tabIndex of 0', () => {
    vi.spyOn(hooks, 'useTableHasScroll').mockReturnValueOnce({
      hasScroll: true,
    });
    const { container } = render(
      <Table {...mockProps} aria-label="aria-label">
        <thead>
          <tr>
            <th scope="col">Header Cell</th>
          </tr>
        </thead>
        <tbody {...mockProps}>
          <tr>
            <td>Body Cell</td>
          </tr>
        </tbody>
      </Table>,
    );

    const scrollableContainer = screen.getByRole('region', {
      name: 'aria-label',
    });
    expect(scrollableContainer).toHaveAttribute('tabIndex', '0');
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });
});
