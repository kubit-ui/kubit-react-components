// import { fireEvent } from '@testing-library/react';
// import { axe } from 'vitest-axe';
import { render } from '@/lib/tests/render/render';

import type { InputProps } from '../types/input';

import { Input } from '../input';

const mockProps: InputProps = {
  defaultValue: 'test',
  disabled: false,
  id: 'inputId',

  leftDecoration: {
    decoration: {
      altText: 'left icon',
      icon: 'PLACEHOLDER',
      onClick: vi.fn(),
    },
    variant: 'STANDARD',
  },
  placeholder: 'Placeholder',
  required: true,
  rightDecoration: {
    decoration: {
      altText: 'right icon',
      icon: 'PLACEHOLDER',
      onClick: vi.fn(),
    },
    variant: 'STANDARD',
  },
  type: 'text',
  variant: 'STANDARD',
};

describe('Input Component', () => {
  it('Should display the component correctly', async () => {
    const { getByTestId } = render(<Input {...mockProps} />);
    const input = getByTestId('input-base');
    expect(input).toBeInTheDocument();
    // expect(input).toHaveAccessibleName(mockProps.label?.content as string);

    // const label = getByText(mockProps.label?.content as string);
    // expect(label).toBeInTheDocument();

    // const leftDecoration = getByRole('button', { name: 'left icon' });
    // fireEvent.click(leftDecoration);
    // expect(mockProps.leftDecoration?.decoration?.onClick).toHaveBeenCalled();

    // const rightDecoration = getByRole('button', { name: 'right icon' });
    // fireEvent.click(rightDecoration);
    // expect(mockProps.rightDecoration?.decoration?.onClick).toHaveBeenCalled();

    // const results = await axe(container);
    // expect(container).toHTMLValidate();
    // expect(results.violations).toHaveLength(0);
  });

  it('Should handle filled state when value is provided', () => {
    const { getByTestId } = render(<Input {...mockProps} value="test value" />);
    const input = getByTestId('input-base');
    expect(input).toBeInTheDocument();
  });

  it('Should handle empty state when no value is provided', () => {
    const { getByTestId } = render(
      <Input {...mockProps} defaultValue={undefined} value={undefined} />,
    );
    const input = getByTestId('input-base');
    expect(input).toBeInTheDocument();
  });

  it('Should handle disabled state', () => {
    const { getByTestId } = render(<Input {...mockProps} disabled />);
    const input = getByTestId('input-base');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('Should handle error state', () => {
    const { getByTestId } = render(<Input {...mockProps} error />);
    const input = getByTestId('input-base');
    expect(input).toHaveAttribute('data-state', 'ERROR_FILLED');
  });

  it('Should generate unique id when id is not provided', () => {
    const { getByTestId } = render(<Input {...mockProps} id={undefined} />);
    const input = getByTestId('input-base');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id');
  });

  it('Should use provided id in inputBaseId', () => {
    const { getByTestId } = render(<Input {...mockProps} id="custom-id" />);
    const input = getByTestId('input-base');
    // Verify the input has an id attribute
    const inputId = input.getAttribute('id');
    expect(inputId).toBeTruthy();
    expect(inputId).toContain('inputbase');
  });
});
