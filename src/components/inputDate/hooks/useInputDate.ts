import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useInternalValidations } from '@/components/input/hooks';
import { ERROR_EXECUTION, InternalErrorType } from '@/components/input/types';
import { verifyDate } from '@/components/inputDate/utils';
import { ParamsTypeInputHook, ReturnTypeInputHook } from '@/hooks/useInput/types/inputHook';
import { useInput } from '@/hooks/useInput/useInput';
import { useUtilsProvider } from '@/provider/utils';
import { formatDateToNative, formatDateToUTC, syntheticDate } from '@/utils';

import { SelectedDate } from '../types';

type ParamsType = ParamsTypeInputHook & {
  // modifiers
  format: string;
  minDate: Date;
  maxDate?: Date;
  initialDate?: Date;
  initialSecondDate?: Date;
  today?: string;
  hasRange?: boolean;
  dateSeparator?: string;
  name?: string;
  // functions
  onSelectedDateChange?: (newDate: Date | SelectedDate) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onDateError?: (hasError: boolean) => void;
  onCalendarOpen?: (calendarOpen: boolean) => void;
  onWrapperBlur?: FocusEventHandler<HTMLDivElement>;
};

type ReturnType = ReturnTypeInputHook & {
  // modifiers
  dateFormatted: Date[];
  calendarOpen: boolean;
  // functions
  handleClickInput: React.MouseEventHandler<HTMLInputElement>;
  handlePickCalendarDate: (newDate: Date[]) => void;
  handleOpenCalendar: (open: boolean) => void;
  handleChangeInternalValidate: ChangeEventHandler<HTMLInputElement>;
  handleWrapperBlur: FocusEventHandler<HTMLDivElement>;
};

export const useInputDate = ({
  ref,
  errorExecution,
  internalErrorExecution,
  keyValidation,
  max,
  min,
  maxLength,
  minLength,
  maxDate = new Date(),
  mask,
  maskType,
  disabled,
  error,
  currentValue,
  today = '',
  type,
  truncate,
  informationAssociated,
  disabledCopyAndPaste,
  onWrapperBlur,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onError,
  onInternalErrors,
  onPaste,
  ...props
}: ParamsType): ReturnType => {
  // Ghost prototype
  const { setDate } = useMemo(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      return syntheticDate(props.name);
    }
    return { setDate: () => null };
  }, []);

  // Auxiliar methods
  const buildRangeDates = (
    date: Date[]
  ): {
    startDate: Date;
    endDate: Date;
  } => {
    const orderDates = date.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    return {
      startDate: orderDates[0],
      endDate: orderDates[1],
    };
  };

  const getDate = (date: Date | null | undefined): string => {
    if (date) {
      const formatedDate = formatDate(date, props.format);
      return formatedDate;
    }
    return '';
  };

  const orderStringDates = (date: string): Date[] | string => {
    const isValidDate = verifyDate(
      props.format,
      date,
      props.minDate,
      maxDate,
      props.dateSeparator,
      props.hasRange,
      today
    );

    const datesFormatted = [
      transformDate(date.split(' ')[0], props.format),
      transformDate(date.split(' ')[1], props.format),
    ];
    return isValidDate
      ? [...datesFormatted].sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      : date;
  };

  // used when selecting date in calendar or transforming dates in internal validation
  // updates date and dateFormatted states
  // set the showcalendar state to false
  const handleChangeDate = (newDate: Date[], hasError = false) => {
    if (!hasError) {
      if (props.hasRange && newDate.length === 2) {
        props.onSelectedDateChange?.(buildRangeDates([newDate[0], newDate[1]]));
        setDateFormatted(newDate);

        if (newDate[1]) {
          setCalendarOpen(false);
        }
      } else {
        props.onSelectedDateChange?.(newDate[0]);
        setDateFormatted([newDate[0]]);
        setCalendarOpen(false);
      }
      props.onCalendarOpen?.(false);
    }
    onError?.(hasError);
  };

  // validate formatted dates when date range
  const handleChangeInternalValidateDateRange = (dateRange: string) => {
    const isValidDateRange = verifyDate(
      props.format,
      dateRange,
      props.minDate,
      maxDate,
      props.dateSeparator,
      true,
      today
    );
    // Regex to split dates with dateSeparator ("to")
    const regexSplit = /[\sA-Za-z]+/;

    const dateRangeFormatted = dateRange.split(regexSplit);

    if (dateRangeFormatted && dateRangeFormatted?.length >= 2) {
      if (isValidDateRange) {
        removeInternalError(InternalErrorType.INVALID_DATE_RANGE);
      } else {
        addInternalError(InternalErrorType.INVALID_DATE_RANGE);
      }
    }
    handleChangeDate(
      [
        transformDate(dateRangeFormatted[0], props.format),
        transformDate(dateRangeFormatted[1], props.format),
      ],
      !isValidDateRange
    );
  };

  // validate formatted dates when single date
  const handleChangeInternalValidateSingleDate = (date: string) => {
    const isValidDate = verifyDate(
      props.format,
      date,
      props.minDate,
      maxDate,
      props.dateSeparator,
      props.hasRange,
      today
    );

    if (isValidDate) {
      removeInternalError(InternalErrorType.INVALID_DATE);
    } else {
      addInternalError(InternalErrorType.INVALID_DATE);
    }
    handleChangeDate([transformDate(date, props.format)], !isValidDate);
  };

  const createDateFormatted = (initialDate?: Date, initialSecondDate?: Date): Date[] => {
    if (initialDate) {
      if (initialSecondDate) {
        return [initialDate, initialSecondDate];
      }
      return [initialDate];
    }
    return [];
  };

  // states, constants and refs
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateFormatted, setDateFormatted] = useState<Date[]>(
    createDateFormatted(props.initialDate, props.initialSecondDate)
  );
  const firstRender = useRef(true);
  const { transformDate, formatDate } = useUtilsProvider();
  const { internalErrors, addInternalError, removeInternalError } = useInternalValidations(
    type,
    undefined,
    onInternalErrors
  );

  // Methods
  // Popover control calendar
  const handleOpenCalendar = (open: boolean): void => {
    setCalendarOpen(open);
    props.onCalendarOpen?.(open);
  };

  const handleClickInput: React.MouseEventHandler<HTMLInputElement> = event => {
    if (calendarOpen) {
      setCalendarOpen(false);
      props.onCalendarOpen?.(false);
    }
    props.onClick?.(event);
  };

  const onBlurDate: FocusEventHandler<HTMLDivElement> = event => {
    if (event.currentTarget.contains(event.relatedTarget)) {
      return;
    }

    const inputValue = inputRef?.current?.value ?? '';

    if (errorExecution === ERROR_EXECUTION.ON_BLUR) {
      if (props.hasRange) {
        handleChangeInternalValidateDateRange(inputValue);
      } else {
        handleChangeInternalValidateSingleDate(inputValue);
      }
    }

    const hasError = internalErrors.length > 0;

    props.onDateError?.(hasError);

    let adaptEvent;
    const dateValue = inputValue;
    if (props.hasRange) {
      const hasSeparator = props.dateSeparator && dateValue.includes(props.dateSeparator);
      const secondDateExists = dateValue.length > props.format.length;
      const dates = hasSeparator
        ? dateValue.split(props.dateSeparator as string)
        : dateValue.split(' ');

      const firstDate = formatDateToNative(dates[0], props.format);
      const secondDate = secondDateExists ? formatDateToNative(dates[1], props.format) : '';

      const firstValueAsNumber = firstDate.length && new Date(firstDate).getTime();
      const secondValueAsNumber = secondDate.length && new Date(secondDate).getTime();

      const firstValueAsDate = firstDate.length && new Date(firstDate);
      const secondValueAsDate = secondDate.length && new Date(secondDate);

      adaptEvent = {
        target: {
          value: `${firstDate} ${secondDate}`,
          valueAsNumber: `${firstValueAsNumber} ${secondValueAsNumber}`.trim(),
          valueAsDate: `${firstValueAsDate} - ${secondValueAsDate}`,
        },
      };
    } else {
      adaptEvent = setDate(dateValue, props.format);
    }
    onWrapperBlur?.(adaptEvent);
  };

  // validate formatted dates

  const handleChangeInternalValidate: ChangeEventHandler<HTMLInputElement> = event => {
    const dateValue = event?.target?.value;
    // reset the internal errors for new verify
    if (internalErrors.includes(InternalErrorType.INVALID_DATE)) {
      removeInternalError(InternalErrorType.INVALID_DATE);
    } else if (internalErrors.includes(InternalErrorType.INVALID_DATE_RANGE)) {
      removeInternalError(InternalErrorType.INVALID_DATE_RANGE);
    }

    // date range
    if (dateValue?.length === props.format?.length * 2 + 1) {
      if (errorExecution === ERROR_EXECUTION.ON_CHANGE) {
        handleChangeInternalValidateDateRange(dateValue);
      }
      const orderedRangeDates = orderStringDates(dateValue);
      // if the first date is invalid give an error
      const hasError = internalErrors.length > 0;

      // add ordered dates in ref value
      if (inputRef?.current) {
        inputRef.current.value =
          !hasError && typeof orderedRangeDates !== 'string'
            ? `${formatDate(orderedRangeDates[0], props.format)} ${formatDate(
                orderedRangeDates[1],
                props.format
              )}`
            : dateValue;
      }

      // add date separator in ref value
      inputRef?.current?.setRangeText(
        ` ${props.dateSeparator}`,
        props.format.length,
        props.format.length,
        'end'
      );

      // single date
    } else if (
      dateValue?.length === props.format?.length &&
      errorExecution === ERROR_EXECUTION.ON_CHANGE
    ) {
      handleChangeInternalValidateSingleDate(dateValue);
    }
    let adaptEvent;
    if (props.hasRange) {
      const hasSeparator = props.dateSeparator && dateValue.includes(props.dateSeparator);
      const secondDateExists = dateValue.length > props.format.length;
      const dates = hasSeparator
        ? dateValue.split(props.dateSeparator as string)
        : dateValue.split(' ');

      const firstDate = formatDateToNative(dates[0], props.format);
      const secondDate = secondDateExists ? formatDateToNative(dates[1], props.format) : '';

      const firstValueAsNumber = firstDate.length && new Date(firstDate).getTime();
      const secondValueAsNumber = secondDate.length && new Date(secondDate).getTime();

      const firstValueAsDate = firstDate.length && new Date(firstDate);
      const secondValueAsDate = secondDate.length && new Date(secondDate);

      adaptEvent = {
        target: {
          value: `${firstDate} ${secondDate}`,
          valueAsNumber: `${firstValueAsNumber} ${secondValueAsNumber}`.trim(),
          valueAsDate: `${firstValueAsDate} - ${secondValueAsDate}`,
        },
      };
    } else {
      adaptEvent = setDate(dateValue, props.format);
    }
    onChange?.(adaptEvent as unknown as ChangeEvent<HTMLInputElement>);
  };

  const handlePickCalendarDate = (newPickDate: Date[]): void => {
    const orderedDates: Date[] = [...newPickDate].sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

    const formattedDates: string[] = orderedDates.map(date => formatDate(date, props.format));
    const hasSecondaDate = formattedDates.length === 2;

    const dateValue = hasSecondaDate ? formattedDates.join(' ') : formattedDates[0];

    handleChangeDate(newPickDate);
    if (props.hasRange) {
      handleSetValue(`${getDate(orderedDates[0])} ${getDate(orderedDates[1])}`);
    } else if (dateValue?.length === props.format?.length) {
      handleSetValue(dateValue);
    }

    let adaptEvent;

    if (hasSecondaDate) {
      const firstNativeDate = formatDateToNative(getDate(orderedDates[0]), props.format);
      const secondNativeDate = formatDateToNative(getDate(orderedDates[1]), props.format);
      const firstValueAsNumber = new Date(orderedDates[0]).getTime();
      const secondValueAsNumber = new Date(orderedDates[1]).getTime();

      adaptEvent = {
        target: {
          value: `${firstNativeDate} ${secondNativeDate}`,
          valueAsNumber: `${firstValueAsNumber} ${secondValueAsNumber}`,
          valueAsDate: `${orderedDates[0]} - ${orderedDates[1]}`,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
    } else {
      const dateSelected = getDate(orderedDates[0]);
      adaptEvent = setDate(dateSelected, props.format);
    }

    onChange?.(adaptEvent);
  };

  useEffect(() => {
    // On close calendar input will recive focus automatically
    // Also avoid focus when rendering the component
    if (!calendarOpen && !firstRender.current) {
      inputRef?.current?.focus();
    }
    firstRender.current = false;
  }, [calendarOpen]);

  const {
    value,
    state,
    inputRef,
    handleChangeInternal,
    handleBlurInternal,
    handleFocusInternal,
    handleKeyDownInternal,
    handleSetValue,
    handlePasteInternal,
  } = useInput({
    ref,
    keyValidation,
    internalErrorExecution,
    max,
    min,
    maxLength,
    minLength,
    mask,
    maskType,
    disabled,
    error: error || internalErrors.length > 0,
    currentValue,
    type,
    truncate,
    informationAssociated,
    disabledCopyAndPaste,
    onBlur,
    onFocus,
    onKeyDown,
    onError,
    onInternalErrors,
    onChange: handleChangeInternalValidate,
    onPaste,
  });

  // update initial dates when they have value
  useEffect(() => {
    setDateFormatted(
      createDateFormatted(
        props.initialDate && formatDateToUTC(props.initialDate),
        props.initialSecondDate && formatDateToUTC(props.initialSecondDate)
      )
    );
    if (props.hasRange) {
      const newValue =
        props.initialDate || props.initialSecondDate
          ? `${getDate(props.initialDate)} ${props.dateSeparator} ${getDate(
              props.initialSecondDate
            )}`
          : '';
      handleSetValue(newValue);
    } else {
      handleSetValue(getDate(props.initialDate));
    }
  }, [props.initialDate, props.initialSecondDate]);

  useEffect(() => {
    if (String(value).length === props.format?.length * 2 + 1) {
      // to set date separator when date is selected from calendar
      inputRef?.current?.setRangeText(
        ` ${props.dateSeparator}`,
        props.format.length,
        props.format.length,
        'end'
      );
      if (inputRef?.current) {
        handleSetValue(inputRef?.current?.value);
      }
    }
    //Set "Today, " when today date is selected or typed on single date
    if (
      String(value) === formatDate(new Date(), props.format) &&
      String(value)?.length === props.format?.length &&
      !props.hasRange
    ) {
      handleSetValue(`${today}${value}`);
    }
  }, [value]);

  return {
    dateFormatted,
    calendarOpen,
    handleClickInput,
    handlePickCalendarDate,
    handleOpenCalendar,
    handleChangeInternalValidate,
    value,
    state,
    inputRef,
    handleChangeInternal,
    handleBlurInternal,
    handleWrapperBlur: onBlurDate,
    handleFocusInternal,
    handleKeyDownInternal,
    handleSetValue,
    handlePasteInternal,
  };
};
