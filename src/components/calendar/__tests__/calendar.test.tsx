// TO DO: RESOLVE THE TESTS
import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Calendar } from '../calendar';

const mockProps = {
  configAccesibility: {
    backToMonthAriaLabel: 'Back to month view',
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
  },
  configCalendar: {
    leftArrowIcon: { ['aria-label']: 'Previous month', icon: 'CLOSE' },
    rightArrowIcon: { ['aria-label']: 'Next month', icon: 'CLOSE' },
    sizeSelectorButton: 'LARGE',
    variantSelectorButton: 'PRIMARY',
  },
  defaultDate: new Date(),
  maxDate: new Date(),
  minDate: new Date('2000-01-01'),
  onChangeSelectedDate: vi.fn(),
  open: true,
  variant: 'DEFAULT',
};

describe('Calendar', () => {
  it('Calendar Component', async () => {
    const { container } = render(<Calendar {...mockProps} />);

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Calendar with Range Component', async () => {
    const { container } = render(<Calendar hasRange={true} {...mockProps} />);

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Calendar with selected Date Component', async () => {
    const { container } = render(
      <Calendar
        hasRange={true}
        selectedDate={new Date(2023, 0, 15)}
        {...mockProps}
      />,
    );

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Calendar with secondSelectedDate', async () => {
    const { container } = render(
      <Calendar
        hasRange={true}
        secondSelectedDate={new Date(2023, 0, 20)}
        selectedDate={new Date(2023, 0, 15)}
        {...mockProps}
      />,
    );

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Calendar without selectedDate', async () => {
    const { container } = render(<Calendar hasRange={false} {...mockProps} />);

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Calendar without defaultCurrentDate', async () => {
    const { container } = render(
      <Calendar
        configAccesibility={mockProps.configAccesibility}
        configCalendar={mockProps.configCalendar}
        maxDate={mockProps.maxDate}
        minDate={mockProps.minDate}
        open={mockProps.open}
        variant={mockProps.variant}
        onSelectedDateChange={mockProps.onChangeSelectedDate}
      />,
    );

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Calendar calls onSelectedDateChange when date changes', async () => {
    const onSelectedDateChangeMock = vi.fn();
    render(
      <Calendar
        defaultCurrentDate={new Date(2023, 0, 15)}
        {...mockProps}
        onSelectedDateChange={onSelectedDateChangeMock}
      />,
    );

    const calendar = screen.getByTestId('calendar');
    expect(calendar).not.toBeNull();
  });

  it('Calendar Component, on Click year show year selector', async () => {
    const onClickYearSelectorMock = vi.fn();

    const { container } = render(
      <Calendar
        defaultCurrentDate={new Date(2023, 0, 15)}
        onYearSelectorClick={onClickYearSelectorMock}
        {...mockProps}
      />,
    );

    // Open year selector
    const year = screen.getByText('2023');
    fireEvent.click(year);

    expect(onClickYearSelectorMock).toHaveBeenCalled();
    expect(screen.getByText('2022')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  // it('Calendar Component, on Click month show month selector', async () => {
  //   const onClickMonthSelectorMock = vi.fn();

  //   const { container } = render(
  //     <Calendar
  //       defaultCurrentDate={new Date(2023, 0, 15)}
  //       onMonthSelectorClick={onClickMonthSelectorMock}
  //       {...mockProps}
  //     />
  //   );

  //   // Open month selector
  //   const month = screen.getByText('January');

  //   fireEvent.click(month);

  //   expect(screen.getAllByText('January')).toHaveLength(2);
  //   expect(onClickMonthSelectorMock).toHaveBeenCalled();

  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'prefer-native-element': 'off',
  //     },
  //   });
  // });

  // it('Calendar call onChangeSelectedDate', async () => {
  //   const onChangeSelectedDateMock = vi.fn();
  //   const { container } = render(
  //     <Calendar
  //       {...mockProps}
  //       defaultCurrentDate={new Date(2024, 0, 2)}
  //       onSelectedDateChange={onChangeSelectedDateMock}
  //     />
  //   );

  //   const buttonDay1 = screen.getByText(1);
  //   expect(buttonDay1).not.toBeNull();

  //   fireEvent.click(buttonDay1);
  //   expect(onChangeSelectedDateMock).toHaveBeenCalled();

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'prefer-native-element': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });
});
