import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { VirtualKeyboard } from '../index';
import { IVirtualKeyboard } from '../types';

const mockProps: IVirtualKeyboard = {
  variant: 'DEFAULT',
  digits: ['0', '4', '2', '8', '7', '3', '9', '1', '6', '5'],
  icon: { icon: 'CLOSE', altText: 'Remove' },
  dataTestId: 'test-data',
  onDigitButtonClick: jest.fn(),
  onRemoveButtonClick: jest.fn(),
};

describe('Virtual Keyboard component', () => {
  it('Should render component', async () => {
    const { container } = renderProvider(<VirtualKeyboard {...mockProps} />);

    const buttons = screen.getAllByRole(ROLES.BUTTON);
    expect(buttons).toHaveLength(11);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should callback onDigitButtonClick and onRemoveButtonClick when pressed', () => {
    const onDigitButtonClick = jest.fn();
    const onRemoveButtonClick = jest.fn();
    renderProvider(
      <VirtualKeyboard
        {...mockProps}
        onDigitButtonClick={onDigitButtonClick}
        onRemoveButtonClick={onRemoveButtonClick}
      />
    );

    const buttons = screen.getAllByRole(ROLES.BUTTON);
    fireEvent.click(buttons[0]);
    expect(onDigitButtonClick).toHaveBeenCalled();

    fireEvent.click(buttons[10]);
    expect(onRemoveButtonClick).toHaveBeenCalled();
  });

  it('When onFocus and onBlur will change internal styles, but no action will be called', () => {
    const onDigitButtonClick = jest.fn();
    const onRemoveButtonClick = jest.fn();
    renderProvider(
      <VirtualKeyboard
        {...mockProps}
        onDigitButtonClick={onDigitButtonClick}
        onRemoveButtonClick={onRemoveButtonClick}
      />
    );

    const buttons = screen.getAllByRole(ROLES.BUTTON);
    fireEvent.focus(buttons[0]);
    fireEvent.blur(buttons[0]);
    expect(mockProps.onDigitButtonClick).not.toHaveBeenCalled();
  });
});
