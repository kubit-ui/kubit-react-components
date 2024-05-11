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
    const { getByText, container } = renderProvider(<Loader {...mockProps} visible={true} />);

    const loader = getByText(mockProps.altText);
    expect(loader).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Should render component but not visible', async () => {
    const { queryByText, container } = renderProvider(<Loader {...mockProps} visible={false} />);

    const loader = queryByText(mockProps.altText);
    expect(loader).not.toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
