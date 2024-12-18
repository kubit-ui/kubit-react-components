import React from 'react';

import { useInput } from '@/hooks/useInput/useInput';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
// helpers
import { INTERNAL_ERROR_EXECUTION } from '../input/types/input';
import { InputTypeType } from '../input/types/inputType';
import { InputCurrencyStandAlone } from './inputCurrencyStandAlone';
import { IInputCurrency, IInputCurrencyStandAlone } from './types/inputCurrency';
import { InputCurrencyStylesProps } from './types/inputCurrencyTheme';

const INPUT_CURRENCY_STYLES = 'INPUT_CURRENCY_STYLES';

const InputCurrencyComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      maxDecimals = 2,
      truncate = true,
      min = 0,
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
      disabledArrowUpDownInputNumber = false,
      ignoreKeys = ['+', '-', 'e'],
      disabledWheelMouse = true,
      disabledCopyAndPaste,
      type = InputTypeType.NUMBER,
      max,
      errorExecution,
      keyValidation,
      maxLength,
      minLength,
      mask,
      maskType,
      disabled,
      error,
      value: currentValue,
      informationAssociatedValue,
      regex,
      formatNumber,
      locale,
      variant,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      onPaste,
      ctv,
      ...props
    }: IInputCurrency<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const styles = useStyles<InputCurrencyStylesProps, V>(INPUT_CURRENCY_STYLES, variant, ctv);
    const inputCurrencyType = formatNumber ? InputTypeType.TEXT : type;
    // if formatNumber is true (input element of type text), min and maxDecimals should be undefined because it will be handled by the formatNumber function
    const inputCurrencyMin = formatNumber ? undefined : min;
    const inputCurrencyMaxDecimals = formatNumber ? undefined : maxDecimals;

    const {
      value,
      state,
      inputRef,
      handleChangeInternal,
      handleBlurInternal,
      handleFocusInternal,
      handleKeyDownInternal,
      handlePasteInternal,
    } = useInput({
      ref,
      errorExecution,
      internalErrorExecution,
      keyValidation,
      max,
      min: inputCurrencyMin,
      maxLength,
      minLength,
      mask,
      maskType,
      disabled,
      disabledArrowUpDownInputNumber,
      error,
      currentValue,
      type: inputCurrencyType,
      maxDecimals: inputCurrencyMaxDecimals,
      truncate,
      informationAssociated: informationAssociatedValue?.content,
      ignoreKeys,
      regex,
      formatNumber,
      locale,
      disabledWheelMouse,
      disabledCopyAndPaste,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      onPaste,
    });

    return (
      <InputCurrencyStandAlone
        {...props}
        ref={inputRef}
        informationAssociatedValue={informationAssociatedValue}
        max={max}
        maxDecimals={maxDecimals}
        maxLength={maxLength}
        min={inputCurrencyMin}
        minLength={minLength}
        state={state}
        styles={styles}
        truncate={truncate}
        type={inputCurrencyType}
        value={value}
        onBlur={handleBlurInternal}
        onChange={handleChangeInternal}
        onFocus={handleFocusInternal}
        onKeyDown={handleKeyDownInternal}
        onPaste={handlePasteInternal}
      />
    );
  }
);
InputCurrencyComponent.displayName = 'InputCurrencyComponent';

const InputCurrencyBoundary = <V extends string | unknown>(
  props: IInputCurrency<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputCurrencyStandAlone {...(props as unknown as IInputCurrencyStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputCurrencyComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputCurrency = React.forwardRef(InputCurrencyBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IInputCurrency<V>> & {
    ref?: React.ForwardedRef<HTMLInputElement> | undefined | null;
  }
) => ReturnType<typeof InputCurrencyBoundary>;

export { InputCurrency };
