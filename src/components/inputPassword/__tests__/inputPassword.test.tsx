import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { InputTypeType } from '@/components/input/types';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { InputPassword } from '../inputPassword';

const mockProps = {
  dataTestId: 'inputPassword',
  activeIcon: { icon: 'ADD_IN_A_CIRCLE', altText: 'icon show password alt text' },
  disabledIcon: { icon: 'ADD_IN_A_CIRCLE', altText: 'icon hide password alt text' },
  variant: 'DEFAULT',
  name: 'name',
  label: { content: 'input password' },
  value: 'password',
};

describe('New Input Password Component', () => {
  it('Should render InputPassword component', async () => {
    const { container, getByTestId } = renderProvider(<InputPassword {...mockProps} />);

    expect(getByTestId(mockProps.dataTestId + 'Input')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should get activeIcon', async () => {
    const { container } = renderProvider(
      <InputPassword {...mockProps} type={InputTypeType.NUMBER} />
    );

    expect(screen.getByLabelText('icon show password alt text')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render InputPassword component with default input', async () => {
    const onChange = jest.fn();
    const { container, getByTestId } = renderProvider(
      <InputPassword {...mockProps} onInputTypeChange={onChange} />
    );

    expect(getByTestId(mockProps.dataTestId + 'Input')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should allow to show and hide the password', async () => {
    const onInputTypeChangeMock = jest.fn();
    const { container, getByRole, getByTestId } = renderProvider(
      <InputPassword {...mockProps} onInputTypeChange={onInputTypeChangeMock} />
    );

    // Default type
    expect(getByTestId(mockProps.dataTestId + 'Input').getAttribute('type')).toBe('password');

    const iconButton = getByRole('button');
    fireEvent.click(iconButton);

    expect(getByTestId(mockProps.dataTestId + 'Input').getAttribute('type')).toBe('text');

    fireEvent.click(iconButton);
    expect(getByTestId(mockProps.dataTestId + 'Input').getAttribute('type')).toBe('password');

    expect(onInputTypeChangeMock).toHaveBeenCalledTimes(2);
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
