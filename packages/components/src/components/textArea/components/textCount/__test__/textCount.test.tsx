import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

// Component
import { TextCount } from '../textCount';

// Mock's props
const mockProps = {
  currentCharacters: 5,
  id: 'text-count',
  maxLength: 10,
  screenReaderText: 'hello',
  variant: 'DEFAULT',
};

const mockPropsCurrentCharacterMajor = {
  currentCharacters: 11,
  id: 'text-count',
  maxLength: 10,
  screenReaderText: 'hello',
  variant: 'DEFAULT',
};

describe('TextCount component', () => {
  it('Should be displayed correctly', async () => {
    const { container } = render(<TextCount {...mockProps} />);

    const textCount = screen.getByTestId('text-count');
    expect(textCount).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should be displayed correctly max Error', async () => {
    const { container } = render(
      <TextCount {...mockPropsCurrentCharacterMajor} />,
    );

    const textCount = screen.getByTestId('text-count');
    expect(textCount).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
