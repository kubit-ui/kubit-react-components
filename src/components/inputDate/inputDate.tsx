import * as React from 'react';

import { InputTypeType, MASK_TYPE } from '@/components/input/types';
import { useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { useInputDate } from './hooks/useInputDate';
import { InputDateStandAlone } from './inputDateStandAlone';
import { IInputDate, IInputDateStandAlone, InputDateStylesProps } from './types';
import { getMask, getPlaceholder } from './utils';

const INPUT_DATE_STYLES = 'INPUT_DATE_STYLES';

const InputDateComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      type = InputTypeType.TEXT,
      initialDate,
      initialSecondDate,
      dateSeparator = 'to',
      maskType = MASK_TYPE.NUMBERS,
      truncate = false,
      format,
      placeholder = format,
      today,
      minDate,
      maxDate,
      hasRange,
      onClick,
      onDateError,
      onSelectedDateChange,
      onCalendarOpen,
      min,
      max,
      errorExecution,
      keyValidation,
      maxLength,
      minLength,
      disabled,
      error,
      value: currentValue,
      informationAssociatedValue,
      ignoreKeys,
      onBlur,
      onFocus,
      onKeyDown,
      onChange,
      onError,
      onInternalErrors,
      name,
      ctv,
      ...props
    }: IInputDate<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const styles = useStyles<InputDateStylesProps, V>(INPUT_DATE_STYLES, props.variant, ctv);
    // for date ranges
    const DOUBLE_MASK = `${getMask(format)} ${getMask(format)}`;
    const mask = hasRange ? DOUBLE_MASK : getMask(format);

    const {
      dateFormatted,
      calendarOpen,
      handleClickInput,
      handlePickCalendarDate,
      handleShowCalendar,
      handleOpenCalendar,
      value,
      state,
      inputRef,
      handleBlurInternal,
      handleFocusInternal,
      handleKeyDownInternal,
      handleChangeInternal,
    } = useInputDate({
      ref,
      format,
      minDate,
      maxDate,
      initialDate,
      initialSecondDate,
      today,
      hasRange,
      dateSeparator,
      onClick,
      onDateError,
      onSelectedDateChange,
      onCalendarOpen,
      errorExecution,
      keyValidation,
      max,
      min,
      maxLength,
      minLength,
      mask,
      maskType,
      disabled,
      error,
      currentValue,
      type: InputTypeType.DATE,
      truncate,
      informationAssociated: informationAssociatedValue?.content,
      ignoreKeys,
      name,
      onBlur,
      onFocus,
      onKeyDown,
      onChange,
      onError,
      onInternalErrors,
    });

    return (
      <InputDateStandAlone
        {...props}
        ref={inputRef}
        calendarOpen={calendarOpen}
        dateFormatted={dateFormatted}
        hasRange={hasRange}
        icon={{ ...props.icon, onClick: handleShowCalendar }}
        informationAssociatedValue={informationAssociatedValue}
        mask={mask}
        maskType={maskType}
        max={max}
        maxDate={maxDate ?? new Date()}
        maxLength={maxLength}
        min={min}
        minDate={minDate}
        minLength={minLength}
        placeholder={getPlaceholder(placeholder, state, styles[state]?.label?.type)}
        state={state}
        styles={styles}
        truncate={truncate}
        type={type}
        value={value}
        onBlur={handleBlurInternal}
        onCalendarOpen={handleOpenCalendar}
        onChange={handleChangeInternal}
        onClick={handleClickInput}
        onDateChange={handlePickCalendarDate}
        onFocus={handleFocusInternal}
        onKeyDown={handleKeyDownInternal}
      />
    );
  }
);
InputDateComponent.displayName = 'InputDateComponent';

const InputDateBoundary = <V extends string | unknown>(
  props: IInputDate<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputDateStandAlone {...(props as unknown as IInputDateStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputDateComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputDate = React.forwardRef(InputDateBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IInputDate<V>> & {
    ref?: React.ForwardedRef<HTMLInputElement | undefined>;
  }
) => ReturnType<typeof InputDateBoundary>;

export { InputDate };
