import * as React from 'react';

import { useInput } from '@/hooks/useInput/useInput';

import { InputControlled } from './inputControlled';
import { IInputUnControlled, INTERNAL_ERROR_EXECUTION, InputTypeType } from './types';

const InputUnControlledComponent = <V extends string | unknown>(
  {
    type = InputTypeType.TEXT,
    truncate = false,
    internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
    disabledArrowUpDownInputNumber = false,
    disabledWheelMouse = true,
    errorExecution,
    keyValidation,
    min,
    max,
    maxLength,
    minLength,
    mask,
    maskType,
    regex,
    disabled,
    error,
    value: currentValue,
    informationAssociatedValue,
    ignoreKeys,
    formatNumber,
    locale,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onError,
    onInternalErrors,
    ...props
  }: IInputUnControlled<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => {
  const inputType = formatNumber ? InputTypeType.TEXT : type;

  const {
    value,
    state,
    inputRef,
    handleChangeInternal,
    handleBlurInternal,
    handleFocusInternal,
    handleKeyDownInternal,
  } = useInput({
    ref,
    errorExecution,
    internalErrorExecution,
    keyValidation,
    disabledArrowUpDownInputNumber,
    max,
    min,
    maxLength,
    minLength,
    mask,
    maskType,
    regex,
    disabled,
    error,
    currentValue,
    type: inputType,
    truncate,
    informationAssociated: informationAssociatedValue?.content,
    ignoreKeys,
    formatNumber,
    locale,
    disabledWheelMouse,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onError,
    onInternalErrors,
  });

  return (
    <InputControlled
      {...props}
      ref={inputRef}
      disabledArrowUpDownInputNumber={disabledArrowUpDownInputNumber}
      informationAssociatedValue={informationAssociatedValue}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      state={state}
      truncate={truncate}
      type={inputType}
      value={value}
      onBlur={handleBlurInternal}
      onChange={handleChangeInternal}
      onFocus={handleFocusInternal}
      onKeyDown={handleKeyDownInternal}
    />
  );
};

const InputUnControlled = React.forwardRef(InputUnControlledComponent) as <
  V extends string | unknown,
>(
  props: IInputUnControlled<V> & {
    ref?: React.ForwardedRef<HTMLInputElement | undefined>;
  }
) => JSX.Element;

export { InputUnControlled };
