import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { Selector } from '../selector';

window.matchMedia = windowMatchMedia();

const mockProps = {
  maxDate: new Date(),
  minDate: new Date(2015, 0, 15),
  currentDate: new Date(2023, 0, 17),
  setCurrentDate: jest.fn(),
  showYearSelector: false,
  showMonthSelector: false,
  showDaySelector: true,
  setShowYearSelector: jest.fn(),
  setShowMonthSelector: jest.fn(),
  setShowDaySelector: jest.fn(),
  configCalendar: {
    iconInput: 'UNICORN',
    leftArrowIcon: { icon: 'UNICORN', ['aria-label']: 'Previous month' },
    rightArrowIcon: { icon: 'UNICORN', ['aria-label']: 'Next month' },
    variantSelectorButton: 'PRIMARY',
    sizeSelectorButton: 'LARGE',
  },
  configAccesibility: {
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
    backToMonthAriaLabel: 'Back to month view',
  },
};
describe('Selector component', () => {
  it('Selector with Range and selected Date Component', () => {
    renderProvider(<Selector {...mockProps} />);

    const selector = screen.getByRole('button', {
      name: mockProps.configCalendar.leftArrowIcon['aria-label'],
    });

    expect(selector).toBeInTheDocument();
  });

  it('Selector Date - On clic year, setShowYearSelector should be called in order to show years to select', () => {
    const setShowYearSelector = jest.fn();
    const setShowMonthSelector = jest.fn();
    const onClickYearSelector = jest.fn();
    renderProvider(
      <Selector
        {...mockProps}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        onYearSelectorClick={onClickYearSelector}
      />
    );

    const yearButton = screen.getByRole('button', {
      name: mockProps.configAccesibility.yearSelectorAriaLabel,
    });

    fireEvent.click(yearButton);

    expect(setShowMonthSelector).toHaveBeenCalledWith(false);
    expect(setShowYearSelector).toHaveBeenCalledWith(true);
    expect(onClickYearSelector).toHaveBeenCalled();
  });

  it('Selector Date - On clic month, setShowMonthSelector should be called in order to show months to select', () => {
    const setShowYearSelector = jest.fn();
    const setShowMonthSelector = jest.fn();
    const onClickMonthSelector = jest.fn();
    renderProvider(
      <Selector
        {...mockProps}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        onMonthSelectorClick={onClickMonthSelector}
      />
    );

    const monthButton = screen.getByRole('button', {
      name: mockProps.configAccesibility.monthSelectorAriaLabel,
    });

    fireEvent.click(monthButton);

    expect(setShowMonthSelector).toHaveBeenCalledWith(true);
    expect(setShowYearSelector).toHaveBeenCalledWith(false);
    expect(onClickMonthSelector).toHaveBeenCalled();
  });

  it('Selector Date - On clic arrows, setCurrentDate should be call to show others dates', () => {
    const setCurrentDate = jest.fn();
    const onClickLeftIcon = jest.fn();
    const onClickRightIcon = jest.fn();

    renderProvider(
      <Selector
        {...mockProps}
        setCurrentDate={setCurrentDate}
        onLeftIconClick={onClickLeftIcon}
        onRightIconClick={onClickRightIcon}
      />
    );

    const buttons = screen.queryAllByRole('button');
    const backButton = buttons[0];
    const nextButton = buttons[buttons.length - 1];

    fireEvent.click(backButton);
    fireEvent.click(nextButton);

    expect(setCurrentDate).toHaveBeenCalled();
    expect(onClickLeftIcon).toHaveBeenCalled();
    expect(onClickRightIcon).toHaveBeenCalled();
  });

  it('Selector Date - When showCustomSelector and click back, setShowYearSelector and setShowMonthSelector should be called to false, to show the calendar', () => {
    const setShowYearSelector = jest.fn();
    const setShowMonthSelector = jest.fn();

    renderProvider(
      <Selector
        {...mockProps}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        showMonthSelector={true}
      />
    );

    const buttons = screen.queryAllByRole('button');
    const backButton = buttons[0];

    fireEvent.click(backButton);

    expect(setShowYearSelector).toHaveBeenCalledWith(false);
    expect(setShowMonthSelector).toHaveBeenCalledWith(false);
  });
});
