import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Selector } from '../selector';

const mockProps = {
  configAccesibility: {
    backToMonthAriaLabel: 'Back to month view',
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
  },
  configCalendar: {
    iconInput: 'UNICORN',
    leftArrowIcon: { ['aria-label']: 'Previous month', icon: 'UNICORN' },
    rightArrowIcon: { ['aria-label']: 'Next month', icon: 'UNICORN' },
    sizeSelectorButton: 'LARGE',
    variantSelectorButton: 'PRIMARY',
  },
  currentDate: new Date(2023, 0, 17),
  customBackText: 'Back',
  maxDate: new Date(),
  minDate: new Date(2015, 0, 15),
  setCurrentDate: vi.fn(),
  setShowDaySelector: vi.fn(),
  setShowMonthSelector: vi.fn(),
  setShowYearSelector: vi.fn(),
  showDaySelector: true,
  showMonthSelector: false,
  showYearSelector: false,
};

describe('Selector component', () => {
  it('Selector with Range and selected Date Component', async () => {
    const { container } = render(<Selector {...mockProps} />);

    const selector = screen.getByLabelText(
      mockProps.configCalendar.leftArrowIcon['aria-label'],
    );

    expect(selector).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Selector Date - On click year, setShowYearSelector should be called in order to show years to select', async () => {
    const setShowYearSelector = vi.fn();
    const setShowMonthSelector = vi.fn();
    const onClickYearSelector = vi.fn();
    const { container } = render(
      <Selector
        {...mockProps}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        onYearSelectorClick={onClickYearSelector}
      />,
    );

    const yearButton = screen.getByRole('button', {
      name: mockProps.configAccesibility.yearSelectorAriaLabel,
    });

    await userEvent.click(yearButton);

    expect(setShowMonthSelector).toHaveBeenCalledWith(false);
    expect(setShowYearSelector).toHaveBeenCalledWith(true);
    expect(onClickYearSelector).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Selector Date - On click month, setShowMonthSelector should be called in order to show months to select', async () => {
    const setShowYearSelector = vi.fn();
    const setShowMonthSelector = vi.fn();
    const onClickMonthSelector = vi.fn();
    const { container } = render(
      <Selector
        {...mockProps}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        onMonthSelectorClick={onClickMonthSelector}
      />,
    );

    const monthButton = screen.getByRole('button', {
      name: mockProps.configAccesibility.monthSelectorAriaLabel,
    });

    await userEvent.click(monthButton);

    expect(setShowMonthSelector).toHaveBeenCalledWith(true);
    expect(setShowYearSelector).toHaveBeenCalledWith(false);
    expect(onClickMonthSelector).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Selector Date - On click arrows, setCurrentDate should be called to show other dates', async () => {
    const setCurrentDate = vi.fn();
    const onClickLeftIcon = vi.fn();
    const onClickRightIcon = vi.fn();

    const { container } = render(
      <Selector
        {...mockProps}
        setCurrentDate={setCurrentDate}
        onLeftIconClick={onClickLeftIcon}
        onRightIconClick={onClickRightIcon}
      />,
    );

    const buttons = screen.queryAllByRole('button');
    const backButton = buttons[0];
    const nextButton = buttons[buttons.length - 1];

    await userEvent.click(backButton);
    await userEvent.click(nextButton);

    expect(setCurrentDate).toHaveBeenCalled();
    expect(onClickLeftIcon).toHaveBeenCalled();
    expect(onClickRightIcon).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Selector Date - When showCustomSelector and click back, setShowYearSelector and setShowMonthSelector should be called to false, to show the calendar', async () => {
    const setShowYearSelector = vi.fn();
    const setShowMonthSelector = vi.fn();

    const { container } = render(
      <Selector
        {...mockProps}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        showMonthSelector={true}
      />,
    );

    const buttons = screen.queryAllByRole('button');
    const backButton = buttons[0];

    await userEvent.click(backButton);

    expect(setShowYearSelector).toHaveBeenCalledWith(false);
    expect(setShowMonthSelector).toHaveBeenCalledWith(false);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
