import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import * as hooks from '../hooks/useTableHasScroll';
import { TableV2 } from '../index';

const mockProps = {
  variant: 'DEFAULT',
  ref: { current: null },
};

describe('Table', () => {
  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      callback;
      constructor(callback) {
        this.callback = callback;
      }
      observe() {
        // Call the callback
        this.callback();
      }
      unobserve() {
        // do nothing
      }
      disconnect() {
        // do nothing
      }
    };
  });

  it('Should render', async () => {
    const { container } = renderProvider(
      <TableV2 {...mockProps}>
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
      </TableV2>
    );

    const bodyCell = screen.getByText('Body Cell');
    expect(bodyCell).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When scrollable, its container should have a role region focusable with tabIndex of 0', () => {
    jest.spyOn(hooks, 'useTableHasScroll').mockReturnValueOnce({ hasScroll: true });
    renderProvider(
      <TableV2 {...mockProps} aria-label="aria-label">
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
      </TableV2>
    );

    const scrollableContainer = screen.getByRole(ROLES.REGION, { name: 'aria-label' });
    expect(scrollableContainer).toHaveAttribute('tabIndex', '0');
  });
});
