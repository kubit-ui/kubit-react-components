import { act } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';
import * as React from 'react';

import { ERROR_EXECUTION } from '@/components/input/types';
import { renderHookProvider } from '@/tests/renderProvider/renderProvider.utility';

import { useInputDate } from '../useInputDate';

describe('useInputDate Hook', () => {
  it('handleClickInput - call onClick', () => {
    const onClick = jest.fn();
    const format = 'DD-MM-YYYY';
    const dateSeparator = 'to';
    const today = 'Today';
    const minDate = new Date('01-01-2000');
    const maxDate = new Date();
    const { result } = renderHookProvider(() =>
      useInputDate({ format, minDate, onClick, dateSeparator, today, maxDate })
    );
    const mockEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      buttons: 1,
    }) as unknown as React.MouseEvent<HTMLInputElement, MouseEvent>;
    act(() => {
      result.current.handleClickInput(mockEvent);
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('handleClickInput and handleOpenCalendar - call onCalendarOpen', () => {
    const onCalendarOpen = jest.fn();
    const format = 'DD-MM-YYYY';
    const minDate = new Date('01-01-2000');
    const { result } = renderHookProvider(() => useInputDate({ format, minDate, onCalendarOpen }));

    act(() => {
      result.current.handleOpenCalendar(true);
    });
    expect(onCalendarOpen).toHaveBeenCalledTimes(1);
    const mockEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      buttons: 1,
    }) as unknown as React.MouseEvent<HTMLInputElement, MouseEvent>;
    act(() => {
      result.current.handleClickInput(mockEvent);
    });
    expect(onCalendarOpen).toHaveBeenCalledTimes(2);
  });
  it('handleChangeInternalValidate - call onChange', () => {
    const onChange = jest.fn();
    const format = 'DD-MM-YYYY';
    const minDate = new Date('01-01-2000');
    const errorExecution = ERROR_EXECUTION.ON_CHANGE;
    const { result } = renderHookProvider(() =>
      useInputDate({ format, minDate, onChange, errorExecution })
    );

    act(() => {
      result.current.handleChangeInternalValidate({
        target: { value: '05-08-2023' },
      } as ChangeEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('handleShowCalendar - call onCalendarOpen', () => {
    const onCalendarOpen = jest.fn();
    const format = 'DD-MM-YYYY';
    const minDate = new Date('01-01-2000');
    const { result } = renderHookProvider(() => useInputDate({ format, minDate, onCalendarOpen }));

    act(() => {
      result.current.handleShowCalendar();
    });
    expect(onCalendarOpen).toHaveBeenCalledTimes(1);
  });
  it('handleChangeInternalValidate with range value- call onChange', () => {
    const onChange = jest.fn();
    const format = 'DD-MM-YYYY';
    const minDate = new Date('01-01-2000');
    const errorExecution = ERROR_EXECUTION.ON_CHANGE;
    const { result } = renderHookProvider(() =>
      useInputDate({ format, minDate, onChange, errorExecution })
    );

    act(() => {
      result.current.handleChangeInternalValidate({
        target: { value: '06-11-2023 10-11-2023' },
      } as ChangeEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('handleSetValue - setting new value range', () => {
    const onChange = jest.fn();
    const format = 'DD-MM-YYYY';
    const minDate = new Date('01-01-2000');
    const hasRange = false;
    const { result } = renderHookProvider(() =>
      useInputDate({ format, minDate, onChange, hasRange })
    );

    act(() => {
      result.current.handleSetValue('06-11-2023 10-11-2023');
    });
    expect(result.current.value).toBe('06-11-2023 10-11-2023');
  });
  it('getDateNormalize - sending initialDate and initialSecondDate initializes the prop dateFormatted', () => {
    const onChange = jest.fn();
    const format = 'DD-MM-YYYY';
    const minDate = new Date('01-01-2000');
    const hasRange = false;
    const initialDate = new Date('06-11-2023');
    const initialSecondDate = new Date('10-11-2023');
    const { result } = renderHookProvider(() =>
      useInputDate({ format, minDate, onChange, hasRange, initialDate, initialSecondDate })
    );

    const resultExpeted = [initialDate, initialSecondDate];
    expect(result.current.dateFormatted).toStrictEqual(resultExpeted);
  });
});
