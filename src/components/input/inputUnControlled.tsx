import * as React from 'react';

import { useInput } from '@/hooks/useInput/useInput';

import { InputControlled } from './inputControlled';
import { IInputUnControlled, InputTypeType } from './types';

const InputUnControlledComponent = <V extends string | unknown>(
  {
    type = InputTypeType.TEXT,
    truncate = false,
    errorExecution,
    keyValidation,
    disabledArrowUpDownInputNumber = false,
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
    disabledWheelMouse = true,
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
