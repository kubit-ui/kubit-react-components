import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { CheckboxControlled } from '../checkboxControlled';
import { CheckboxUnControlled as Checkbox } from '../checkboxUnControlled';
import type { CheckboxControlledProps } from '../types/checkbox';

const mockProps: CheckboxControlledProps = {
  checkboxBase: {
    variant: 'DEFAULT',
  },
  errorMessage: { message: { content: 'Error text' } },
  label: {
    content: 'Accept terms and conditions',
    requiredSymbol: <span>*</span>,
  },
  name: 'name',
  onChange: vi.fn(),
  value: 'test value',
  variant: 'DEFAULT',
};

describe('Checkbox', () => {
  describe('Controlled Checkbox', () => {
    it('renders successfully with default props', () => {
      render(<CheckboxControlled {...mockProps} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('reflects disabled state when provided', () => {
      render(<CheckboxControlled {...mockProps} disabled={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('shows error state when error prop is true', () => {
      const errorMessage = 'Error text';
      render(<CheckboxControlled {...mockProps} error={true} />);
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('calls onChange when clicked', () => {
      const handleChange = vi.fn();
      render(<CheckboxControlled {...mockProps} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('renders with label when provided', () => {
      const labelText = 'Test Label';
      render(
        <CheckboxControlled {...mockProps} label={{ content: labelText }} />,
      );
      expect(screen.getByText(labelText)).toBeInTheDocument();
    });
  });

  describe('Uncontrolled Checkbox', () => {
    it('renders successfully with default props', () => {
      render(<Checkbox {...mockProps} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });

    it('toggles state when clicked', () => {
      render(<Checkbox {...mockProps} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();

      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('calls onChange when clicked', () => {
      const handleChange = vi.fn();
      render(<Checkbox {...mockProps} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('starts with initial checked state when provided', () => {
      render(<Checkbox checked={true} {...mockProps} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });
  });
});
