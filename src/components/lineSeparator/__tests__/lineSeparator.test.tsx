import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { LineSeparator } from '../lineSeparator';

const mockPropsLineSeparator = {
  labelVariant: 'LABEL_DEFAULT',
  lineVariant: 'LINE_DEFAULT',
  label: { content: 'LOREM IPSUM' },
};

describe('LineSeparator', () => {
  test('When defined, should render a label', async () => {
    const { container } = renderProvider(<LineSeparator {...mockPropsLineSeparator} />);
    const label = screen.getByText(mockPropsLineSeparator.label.content);
    expect(label).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
