import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { TableDivider } from '../tableDivider';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Divider', () => {
  it('Should render', async () => {
    const { container } = render(
      <TableDivider {...mockProps}>Divider</TableDivider>,
    );

    const divider = screen.getByText('Divider');
    expect(divider).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
