import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TableDivider } from '../index';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Table Divider', () => {
  it('Should render', async () => {
    const { container } = renderProvider(<TableDivider {...mockProps}>Divider</TableDivider>);

    const divider = screen.getByText('Divider');
    expect(divider).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
