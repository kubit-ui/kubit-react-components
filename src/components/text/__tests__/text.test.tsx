import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { Text } from '@/components/text';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { TextComponentType } from '../types';

const mockProps = {
  component: TextComponentType.H1,
  variant: 'DEFAULT',
};

describe('Text component', () => {
  it('should render', async () => {
    const { container } = renderProvider(<Text {...mockProps}>Text</Text>);
    const text = screen.getByText('Text');

    expect(text).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('nothing should be render when no children', () => {
    renderProvider(
      <Text {...mockProps} dataTestId="testId">
        {''}
      </Text>
    );
    const text = screen.queryByTestId('testId');

    expect(text).not.toBeInTheDocument();
  });
});
