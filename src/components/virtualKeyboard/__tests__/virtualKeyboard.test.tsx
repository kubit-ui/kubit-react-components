import { fireEvent } from '@testing-library/dom';
import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import type { VirtualKeyboardProps } from '../types/virtualKeyboard';

import { VirtualKeyboard } from '../virtualKeyboard';

const mockProps: VirtualKeyboardProps = {
  digits: ['0', '4', '2', '8', '7', '3', '9', '1', '6', '5'],
  icon: { altText: 'Remove', icon: 'CLOSE' },
  onDigitButtonClick: vi.fn(),
  onRemoveButtonClick: vi.fn(),
  variant: 'DEFAULT',
};

describe('Virtual Keyboard component', () => {
  it('Should render component', async () => {
    const { container } = render(<VirtualKeyboard {...mockProps} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(11);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should callback onDigitButtonClick and onRemoveButtonClick when pressed', () => {
    const onDigitButtonClick = vi.fn();
    const onRemoveButtonClick = vi.fn();
    render(
      <VirtualKeyboard
        {...mockProps}
        onDigitButtonClick={onDigitButtonClick}
        onRemoveButtonClick={onRemoveButtonClick}
      />,
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(onDigitButtonClick).toHaveBeenCalled();

    fireEvent.click(buttons[10]);
    expect(onRemoveButtonClick).toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });

  it('When onFocus and onBlur will change internal styles, but no action will be called', () => {
    const onDigitButtonClick = vi.fn();
    const onRemoveButtonClick = vi.fn();
    render(
      <VirtualKeyboard
        {...mockProps}
        onDigitButtonClick={onDigitButtonClick}
        onRemoveButtonClick={onRemoveButtonClick}
      />,
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.focus(buttons[0]);
    fireEvent.blur(buttons[0]);
    expect(mockProps.onDigitButtonClick).not.toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });
});
