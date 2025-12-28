import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { MonthSelector } from '../monthSelector';

describe('MonthSelector', () => {
  const mockSetCurrentDate = vi.fn();
  const mockOnMonthClick = vi.fn();

  const defaultProps = {
    configAccesibility: {
      monthSelectorAriaLabel: 'Select a month',
    },
    currentDate: new Date(2024, 5, 15), // June 15, 2024
    maxDate: new Date(2024, 11, 31), // December 31, 2024
    minDate: new Date(2024, 0, 1), // January 1, 2024
    setCurrentDate: mockSetCurrentDate,
    today: new Date(2024, 5, 15),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render with valid HTML structure', () => {
    const { container } = render(<MonthSelector {...defaultProps} />);

    const monthsList = screen.getByTestId('tbody-months-list');
    expect(monthsList).toBeInTheDocument();
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('should render all 12 months', () => {
    render(<MonthSelector {...defaultProps} />);

    const monthsList = screen.getByTestId('tbody-months-list');
    expect(monthsList).toBeInTheDocument();

    const monthButtons = screen.getAllByRole('button');
    expect(monthButtons).toHaveLength(12);
  });

  it('should mark the current month as selected', () => {
    render(<MonthSelector {...defaultProps} />);

    const monthItems = screen.getAllByRole('listitem');
    const juneItem = monthItems[5]; // June is index 5
    expect(juneItem).toHaveAttribute('aria-selected', 'true');
  });

  it('should disable months before minDate', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 5, 15),
      minDate: new Date(2024, 3, 1), // April 1, 2024
    };

    render(<MonthSelector {...props} />);

    const monthButtons = screen.getAllByRole('button');
    // January, February, March should be disabled
    expect(monthButtons[0]).toHaveAttribute('aria-disabled', 'true');
    expect(monthButtons[1]).toHaveAttribute('aria-disabled', 'true');
    expect(monthButtons[2]).toHaveAttribute('aria-disabled', 'true');
    // April onwards should not be disabled
    expect(monthButtons[3]).toHaveAttribute('aria-disabled', 'false');
  });

  it('should disable months after maxDate', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 5, 15),
      maxDate: new Date(2024, 8, 30), // September 30, 2024
    };

    render(<MonthSelector {...props} />);

    const monthButtons = screen.getAllByRole('button');
    // October, November, December should be disabled
    expect(monthButtons[9]).toHaveAttribute('aria-disabled', 'true');
    expect(monthButtons[10]).toHaveAttribute('aria-disabled', 'true');
    expect(monthButtons[11]).toHaveAttribute('aria-disabled', 'true');
    // September and before should not be disabled
    expect(monthButtons[8]).toHaveAttribute('aria-disabled', 'false');
  });

  it('should render month buttons with proper attributes', () => {
    render(<MonthSelector {...defaultProps} />);

    const monthButtons = screen.getAllByRole('button');

    monthButtons.forEach((button) => {
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveAttribute('aria-label');
    });
  });

  it('should handle onMonthClick callback prop', () => {
    // Just verify the component accepts the prop without errors
    const { container } = render(
      <MonthSelector {...defaultProps} onMonthClick={mockOnMonthClick} />,
    );

    expect(container).toBeInTheDocument();
  });

  it('should apply custom data-testid when provided', () => {
    render(<MonthSelector {...defaultProps} data-testid="custom-calendar" />);

    const textElements = screen.getAllByTestId('custom-calendar');
    expect(textElements.length).toBeGreaterThan(0);
  });

  it('should render with custom locale', () => {
    render(<MonthSelector {...defaultProps} locale="en-US" />);

    const monthButtons = screen.getAllByRole('button');
    expect(monthButtons).toHaveLength(12);
  });

  it('should show current state for today month', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 3, 15), // April selected
      today: new Date(2024, 5, 15), // But today is June
    };

    render(<MonthSelector {...props} />);

    const monthItems = screen.getAllByRole('listitem');
    // April (index 3) should be selected
    expect(monthItems[3]).toHaveAttribute('aria-selected', 'true');
    // June (index 5) should have current state in data attribute
    expect(monthItems[5]).toHaveAttribute('data-state');
  });

  it('should handle edge case when currentDate is defined', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(),
    };

    render(<MonthSelector {...props} />);

    const monthsList = screen.getByTestId('tbody-months-list');
    expect(monthsList).toBeInTheDocument();
  });

  it('should apply accessibility label to months list', () => {
    render(<MonthSelector {...defaultProps} />);

    const monthsList = screen.getByTestId('tbody-months-list');
    expect(monthsList).toHaveAttribute('aria-label', 'Select a month');
  });

  it('should capitalize month names', () => {
    render(<MonthSelector {...defaultProps} />);

    const monthButtons = screen.getAllByRole('button');
    monthButtons.forEach((button) => {
      const text = button.textContent || '';
      expect(text.charAt(0)).toBe(text.charAt(0).toUpperCase());
    });
  });

  it('should handle disabled months in the same year as minDate', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 6, 15), // July 2024
      minDate: new Date(2024, 5, 1), // June 2024
    };

    render(<MonthSelector {...props} />);

    const monthButtons = screen.getAllByRole('button');
    // Months before June should be disabled
    for (let i = 0; i < 5; i++) {
      expect(monthButtons[i]).toHaveAttribute('aria-disabled', 'true');
    }
    // June and after should not be disabled
    expect(monthButtons[5]).toHaveAttribute('aria-disabled', 'false');
  });

  it('should handle disabled months in the same year as maxDate', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 3, 15), // April 2024
      maxDate: new Date(2024, 5, 30), // June 2024
    };

    render(<MonthSelector {...props} />);

    const monthButtons = screen.getAllByRole('button');
    // Months after June should be disabled
    for (let i = 6; i < 12; i++) {
      expect(monthButtons[i]).toHaveAttribute('aria-disabled', 'true');
    }
    // June and before should not be disabled
    expect(monthButtons[5]).toHaveAttribute('aria-disabled', 'false');
  });

  it('should show correct state for selected month', () => {
    render(<MonthSelector {...defaultProps} />);

    const monthItems = screen.getAllByRole('listitem');
    const selectedMonth = monthItems[5]; // June

    expect(selectedMonth).toHaveAttribute('data-state', 'selected');
  });

  it('should show correct state for today month when not selected', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 3, 15), // April selected
      today: new Date(2024, 5, 15), // But today is June
    };

    render(<MonthSelector {...props} />);

    const monthItems = screen.getAllByRole('listitem');
    const todayMonth = monthItems[5]; // June

    expect(todayMonth).toHaveAttribute('data-state', 'current');
  });

  it('should show disabled state for disabled months', () => {
    const props = {
      ...defaultProps,
      currentDate: new Date(2024, 5, 15),
      minDate: new Date(2024, 3, 1), // April 1, 2024
    };

    render(<MonthSelector {...props} />);

    const monthItems = screen.getAllByRole('listitem');
    const januaryMonth = monthItems[0]; // January (disabled)

    expect(januaryMonth).toHaveAttribute('data-state', 'disabled');
  });
});
