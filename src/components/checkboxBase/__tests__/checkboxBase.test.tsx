import { fireEvent } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { CheckboxBaseControlled } from '../checkboxBaseControlled';
import { CheckboxBaseUnControlled as CheckboxBase } from '../checkboxBaseUncontrolled';

const mockProps = {
  name: 'name',
  onChange: vi.fn(),
  value: 'test value',
  variant: 'DEFAULT',
};

describe('CheckboxBase', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<CheckboxBase {...mockProps} />);

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('renders with correct checked state', () => {
    const { getByRole } = render(
      <CheckboxBase {...mockProps} checked={true} />,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('renders with disabled state', () => {
    const { getByRole } = render(
      <CheckboxBase {...mockProps} disabled={true} />,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('renders with error state', () => {
    const { getByRole } = render(<CheckboxBase {...mockProps} error={true} />);

    const checkbox = getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  test('calls onChange handler when clicked', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <CheckboxBase {...mockProps} onChange={handleChange} />,
    );

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('controlled component manages state externally', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <CheckboxBaseControlled
        checked={false}
        {...mockProps}
        onChange={handleChange}
      />,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    // The checked state should not change because it's controlled externally
    expect(checkbox).not.toBeChecked();
  });

  test('uncontrolled component manages state internally', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <CheckboxBase {...mockProps} onChange={handleChange} />,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    // The checked state should change because it's managed internally
    expect(checkbox).toBeChecked();
  });
});
