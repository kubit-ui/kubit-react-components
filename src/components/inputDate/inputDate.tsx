import React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { INTERNAL_ERROR_EXECUTION, MASK_TYPE } from '../input/types/input';
import { InputTypeType } from '../input/types/inputType';
import { useInputDate } from './hooks/useInputDate';
import { InputDateStandAlone } from './inputDateStandAlone';
import { IInputDate, IInputDateStandAlone } from './types/inputDate';
import { InputDateStylesProps } from './types/inputDateTheme';
import { getMask } from './utils/getMask';
import { getPlaceholder } from './utils/getPlaceholder';

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
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
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
      onWrapperBlur,
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
      handleOpenCalendar,
      value,
      state,
      inputRef,
      handleBlurInternal,
      handleWrapperBlur,
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
      onWrapperBlur,
      onClick,
      onDateError,
      onSelectedDateChange,
      onCalendarOpen,
      errorExecution,
      internalErrorExecution,
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
        icon={{
          ...props.icon,
          onClick: event => {
            handleOpenCalendar(!calendarOpen);
            props.icon?.onClick?.(event);
          },
        }}
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
        rightIcon={{
          ...props.rightIcon,
          onClick: event => {
            handleOpenCalendar(!calendarOpen);
            props.rightIcon?.onClick?.(event);
          },
        }}
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
        onWrapperBlur={handleWrapperBlur}
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
