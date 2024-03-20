import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Loader } from '../loader';

const mockProps = {
  variant: 'PRIMARY_WHITE',
  altText: 'loader alt text',
};

describe('Loader Component', () => {
  it('Should render component', async () => {
    const { getByLabelText, container } = renderProvider(<Loader {...mockProps} />);

    const loader = getByLabelText(mockProps.altText);
    expect(loader).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
