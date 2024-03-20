import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

// Component
import { TextCount } from '../textCount';

// Mock's props
const mockProps = {
  variant: 'DEFAULT',
  maxLength: 10,
  currentCharacters: 5,
  id: 'text-count',
  screenReaderText: 'hello',
};

const mockPropsCurrentCharacterMajor = {
  variant: 'DEFAULT',
  maxLength: 10,
  currentCharacters: 11,
  id: 'text-count',
  screenReaderText: 'hello',
};

describe('TextCount component', () => {
  it('Should be displayed correctly', async () => {
    const { container } = renderProvider(<TextCount {...mockProps} />);

    const textCount = screen.getByTestId('textCount');
    expect(textCount).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be displayed correctly max Error', async () => {
    const { container } = renderProvider(<TextCount {...mockPropsCurrentCharacterMajor} />);

    const textCount = screen.getByTestId('textCount');
    expect(textCount).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
