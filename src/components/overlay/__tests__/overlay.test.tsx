import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Overlay } from '../overlay';

const mockProps = {
  variant: 'DEFAULT',
  dataTestId: 'overlayId',
};

describe('Overlay component', () => {
  it('Render with a valid HTML structure', async () => {
    const { getByTestId, container } = renderProvider(<Overlay {...mockProps} />);

    expect(getByTestId(mockProps.dataTestId)).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
