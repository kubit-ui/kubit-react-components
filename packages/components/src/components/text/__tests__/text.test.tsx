import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { Text } from '@/components/text/text';
import { render } from '@/lib/tests/render/render';

const mockProps = {
  variant: 'DEFAULT',
};

describe('Text component', () => {
  it('should render', async () => {
    const { container } = render(
      <Text component="h1" {...mockProps}>
        Text
      </Text>,
    );
    const text = screen.getByText('Text');

    expect(text).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('nothing should be render when no children', () => {
    render(
      <Text {...mockProps} component="h1" data-testid="testId">
        {''}
      </Text>,
    );
    const text = screen.queryByTestId('testId');

    expect(text).toBeNull();
  });
});
