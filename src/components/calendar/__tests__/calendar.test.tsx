import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { Calendar } from '../calendar';

window.matchMedia = windowMatchMedia();

const mockProps = {
  variant: 'DEFAULT',
  minDate: new Date('2000-01-01'),
  maxDate: new Date(),
  defaultDate: new Date(),
  open: true,
  dataTestId: 'test',
  onChangeSelectedDate: jest.fn(),
  configCalendar: {
    leftArrowIcon: { icon: 'CLOSE', altText: 'Previous month' },
    rightArrowIcon: { icon: 'CLOSE', altText: 'Next month' },
    variantSelectorButton: 'PRIMARY',
    sizeSelectorButton: 'LARGE',
  },
  configAccesibility: {
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
    backToMonthAriaLabel: 'Back to month view',
  },
};

describe('Calendar', () => {
  it('Calendar Component', () => {
    renderProvider(<Calendar {...mockProps} />);

    const calendar = screen.getByTestId('testCalendar');

    expect(calendar).toBeInTheDocument();
  });

  it('Calendar with Range Component', () => {
    renderProvider(<Calendar hasRange={true} {...mockProps} />);

    const calendar = screen.getByTestId('testCalendar');

    expect(calendar).toBeInTheDocument();
  });

  it('Calendar with selected Date Component', () => {
    renderProvider(
      <Calendar hasRange={true} selectedDate={new Date(2023, 0, 15)} {...mockProps} />
    );

    const calendar = screen.getByTestId('testCalendar');

    expect(calendar).toBeInTheDocument();
  });

  it('Calendar with Range and selected Date Component', () => {
    renderProvider(
      <Calendar hasRange={false} selectedDate={new Date(2023, 0, 15)} {...mockProps} />
    );

    const calendar = screen.getByTestId('testCalendar');

    expect(calendar).toBeInTheDocument();
  });

  it('Calendar Component, on Click year show year selector', () => {
    const onClickYearSelectorMock = jest.fn();

    renderProvider(
      <Calendar
        defaultCurrentDate={new Date(2023, 0, 15)}
        onYearSelectorClick={onClickYearSelectorMock}
        {...mockProps}
      />
    );

    // Open year selector
    const year = screen.getByText('2023');
    fireEvent.click(year);

    expect(onClickYearSelectorMock).toHaveBeenCalled();
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('Calendar Component, on Click month show month selector', () => {
    const onClickMonthSelectorMock = jest.fn();

    renderProvider(
      <Calendar
        defaultCurrentDate={new Date(2023, 0, 15)}
        onMonthSelectorClick={onClickMonthSelectorMock}
        {...mockProps}
      />
    );

    // Open month selector
    const month = screen.getByText('January');
    fireEvent.click(month);

    expect(screen.getAllByText('January')).toHaveLength(2);
    expect(onClickMonthSelectorMock).toHaveBeenCalled();
  });

  it('Calendar call onChangeSelectedDate', () => {
    const onChangeSelectedDateMock = jest.fn();
    renderProvider(
      <Calendar
        {...mockProps}
        defaultCurrentDate={new Date(2024, 0, 2)}
        onSelectedDateChange={onChangeSelectedDateMock}
      />
    );

    const buttonDay1 = screen.getByText(1);
    expect(buttonDay1).toBeInTheDocument();

    fireEvent.click(buttonDay1);
    expect(onChangeSelectedDateMock).toHaveBeenCalled();
  });
});
