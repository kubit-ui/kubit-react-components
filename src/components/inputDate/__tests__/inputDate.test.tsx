import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { ICONS } from '@/assets';
import { ERROR_EXECUTION } from '@/components/input/types';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';
import { formatDateToUTC } from '@/utils';

import { InputDate } from '../inputDate';

window.matchMedia = windowMatchMedia();

const mockProps = {
  format: 'DD-MM-YYYY',
  showCalendar: false,
  onChangeDate: jest.fn(),
  minDate: new Date(2000, 0, 1),
  maxDate: new Date(),
  defaultDate: new Date(),
  dateFormatted: [null, null],
  transformDate: jest.fn(),
  rightIcon: { icon: ICONS.ICON_PLACEHOLDER },
  calendar: {
    configCalendar: {
      leftArrowIcon: { icon: 'ERROR', ['aria-label']: 'Previous month' },
      rightArrowIcon: { icon: 'ERROR', ['aria-label']: 'Next month' },
      variantSelectorButton: 'PRIMARY',
      sizeSelectorButton: 'LARGE',
    },
  },
  configAccesibility: {
    iconInputOpenAriaLabel: 'show calendar',
    iconInputCloseAriaLabel: 'close calendar',
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
    backToMonthAriaLabel: 'Back to month view',
  },
  locale: 'es',
  variant: 'DEFAULT',
};

describe('New Input Date Component', () => {
  test('Should render InputDate component', () => {
    renderProvider(<InputDate {...mockProps} defaultDate={undefined} maxDate={undefined} />);

    const input = screen.getByRole(ROLES.TEXTBOX);

    expect(input).toBeDefined();
  });

  test('Should render InputDate with range component', () => {
    renderProvider(<InputDate {...mockProps} hasRange={true} />);

    const input = screen.getByRole(ROLES.TEXTBOX);

    expect(input).toBeDefined();
  });

  test('On input click should show calendar', () => {
    renderProvider(<InputDate {...mockProps} />);

    const calendarIcon = screen.getByRole('button');
    fireEvent.click(calendarIcon);

    const selectMonthButton = screen.getByRole(ROLES.BUTTON, {
      name: mockProps.configAccesibility.monthSelectorAriaLabel,
    });

    expect(selectMonthButton).toBeInTheDocument();
  });

  test('On select a date, onChangeSelectedDate should be called', () => {
    const onChangeSelectedDate = jest.fn();
    renderProvider(<InputDate {...mockProps} onSelectedDateChange={onChangeSelectedDate} />);

    const calendarIcon = screen.getByRole('button');
    fireEvent.click(calendarIcon);
    const selectDate = screen.getByRole('button', {
      name: mockProps.maxDate.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });
    fireEvent.click(selectDate);

    expect(onChangeSelectedDate).toHaveBeenCalled();
  });

  test('On select a date with range, onChangeSelectedDate should be called', () => {
    const onChangeSelectedDate = jest.fn();
    renderProvider(
      <InputDate {...mockProps} hasRange onSelectedDateChange={onChangeSelectedDate} />
    );

    const calendarIcon = screen.getByRole('button');
    fireEvent.click(calendarIcon);
    const firstSelectDate = screen.getByRole('button', {
      name: mockProps.maxDate.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });
    fireEvent.click(firstSelectDate);

    const secondSelectDate = screen.getByRole('button', {
      name: mockProps.maxDate.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });
    fireEvent.click(secondSelectDate);

    expect(onChangeSelectedDate).toHaveBeenCalled();
  });
  test('with show calendar prop', () => {
    const { ...restProps } = mockProps;
    const withShowCalendar = { ...restProps, showCalendar: true };
    renderProvider(<InputDate {...withShowCalendar} />);

    const input = screen.getByRole(ROLES.TEXTBOX);

    expect(input).toBeDefined();
  });

  test('Should execute onCloseInternally when Esc key is pressed', () => {
    renderProvider(<InputDate {...mockProps} />);

    const calendarIcon = screen.getByRole('button');
    fireEvent.click(calendarIcon);
    const selectMonthButton = screen.getByRole(ROLES.BUTTON, {
      name: mockProps.configAccesibility.monthSelectorAriaLabel,
    });
    expect(selectMonthButton).toBeInTheDocument();

    fireEvent.keyDown(window, {
      key: 'Escape',
      code: 'Escape',
    });
    expect(selectMonthButton).not.toBeInTheDocument();
  });

  test('On blur component call handleChangeInternalValidateSingleDate and addInternalError', () => {
    const mockOnBlur = jest.fn();
    const errorExecution = ERROR_EXECUTION.ON_BLUR;
    renderProvider(
      <InputDate {...mockProps} errorExecution={errorExecution} onBlur={mockOnBlur} />
    );

    const input = screen.getByRole(ROLES.TEXTBOX);
    fireEvent.blur(input);
    expect(mockOnBlur).toHaveBeenCalled();
  });

  test('On blur component call handleChangeInternalValidateDateRange and addInternalError', () => {
    const mockOnBlur = jest.fn();
    const errorExecution = ERROR_EXECUTION.ON_BLUR;
    renderProvider(
      <InputDate
        {...mockProps}
        errorExecution={errorExecution}
        hasRange={true}
        initialDate={formatDateToUTC(new Date('01-01-2000'))}
        initialSecondDate={formatDateToUTC(new Date('05-01-2000'))}
        onBlur={mockOnBlur}
      />
    );

    const input = screen.getByRole(ROLES.TEXTBOX);
    fireEvent.blur(input);
    expect(mockOnBlur).toHaveBeenCalled();
  });

  test('Render actionBottomSheet and click onCloseIcon', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);

    const onShowCalendarMock = jest.fn();

    renderProvider(
      <InputDate
        {...mockProps}
        closeIcon={{ icon: 'CLOSE', ['aria-label']: 'close button' }}
        onCalendarOpen={onShowCalendarMock}
      />
    );

    const calendarIcon = screen.getByRole('button');
    fireEvent.click(calendarIcon);

    const closeButton = screen.getByLabelText('close button');
    fireEvent.click(closeButton);

    expect(onShowCalendarMock).toHaveBeenCalled();
  });
});
