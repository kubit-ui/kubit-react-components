import { fireEvent } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { InputSignatureUnControlled as InputSignature } from '../inputSignatureUncontrolled';
import { CustomHandle, IInputSignatureUnControlled } from '../types/inputSignature';

const mockProps: IInputSignatureUnControlled = {
  placeholder: { content: 'Sign the contract' },
  disabled: false,
  error: false,
  variant: 'DEFAULT',
  dataTestid: 'inputSignature',
};

describe('InputSignature', () => {
  it('Should render correctly', async () => {
    const { container } = renderProvider(<InputSignature {...mockProps} />);

    const result = await axe(container);
    expect(container).toHTMLValidate();
    expect(result).toHaveNoViolations();
  });
  it('Should render with error message, when error is true', () => {
    const errorText = { content: 'Error message' };
    const { getByText } = renderProvider(
      <InputSignature {...mockProps} error errorText={errorText} />
    );

    const errorPlaceholder = getByText(errorText.content);
    expect(errorPlaceholder).toBeInTheDocument();
  });
  it('Should render with disabled state, when disabled is true', () => {
    const { getByText } = renderProvider(<InputSignature {...mockProps} disabled />);

    const inputSignature = getByText(mockProps.placeholder.content as string);
    expect(inputSignature).toBeInTheDocument();
  });
  it('Should hidde the placeholder, when the container clicked', () => {
    const { getByTestId, queryByText } = renderProvider(<InputSignature {...mockProps} />);
    const inputSignature = getByTestId(mockProps.dataTestid as string);
    fireEvent.click(inputSignature);

    expect(queryByText(mockProps.placeholder.content as string)).toBeNull();
  });
  it('Should prevent hidde the placeholder, when the container clicked and disabled is true', () => {
    const { getByTestId, queryByText } = renderProvider(<InputSignature {...mockProps} disabled />);
    const inputSignature = getByTestId(mockProps.dataTestid as string);
    fireEvent.click(inputSignature);

    expect(queryByText(mockProps.placeholder.content as string)).toBeInTheDocument();
  });
  it('Should set default state, when the container blur and the data is empty', () => {
    const { getByTestId, queryByText } = renderProvider(<InputSignature {...mockProps} />);
    const inputSignature = getByTestId(mockProps.dataTestid as string);
    fireEvent.click(inputSignature);
    fireEvent.blur(inputSignature);

    expect(queryByText(mockProps.placeholder.content as string)).toBeInTheDocument();
  });
  it('Should set the data, when the container blur and the data is not empty [DESKTOP]', async () => {
    const { getByTestId, container } = renderProvider(<InputSignature {...mockProps} />);
    const inputSignature = getByTestId(mockProps.dataTestid as string);
    const canvas = getByTestId(`${mockProps.dataTestid}Canvas`);

    fireEvent.click(inputSignature);
    fireEvent.mouseDown(canvas);
    fireEvent.mouseMove(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseUp(canvas);
    fireEvent.blur(inputSignature);

    const result = await axe(container);
    expect(container).toHTMLValidate();
    expect(result).toHaveNoViolations();
  });
  it('Should set the data, when the container blur and the data is not empty [MOBILE]', async () => {
    const { getByTestId, container } = renderProvider(<InputSignature {...mockProps} />);
    const inputSignature = getByTestId(mockProps.dataTestid as string);
    const canvas = getByTestId(`${mockProps.dataTestid}Canvas`);

    fireEvent.click(inputSignature);
    fireEvent.touchStart(canvas, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(canvas, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchEnd(canvas);
    fireEvent.blur(inputSignature);

    const result = await axe(container);
    expect(container).toHTMLValidate();
    expect(result).toHaveNoViolations();
  });
  it('should expose InputSignature and reset methods', () => {
    const ref = React.createRef<CustomHandle | undefined>();

    renderProvider(<InputSignature {...mockProps} ref={ref} />);

    expect(ref?.current).toHaveProperty('InputSignature');
    expect(ref?.current).toHaveProperty('reset');

    expect(typeof ref?.current?.reset).toBe('function');
  });
});
