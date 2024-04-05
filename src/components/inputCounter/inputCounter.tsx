import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useId, useInput, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { InputTypeType } from '../input/types';
import { InputCounterStandAlone } from './inputCounterStandAlone';
import { IInputCounter, IInputCounterStandAlone, InputCounterStylesProps } from './types';

const InputCounterComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      type = InputTypeType.TEXT,
      truncate = false,
      errorExecution,
      keyValidation,
      min,
      max,
      maxLength,
      minLength,
      mask,
      maskType,
      disabled,
      error,
      value: currentValue,
      informationAssociatedValue,
      ignoreKeys,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      ctv,
      ...props
    }: IInputCounter<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const styles = useStyles<InputCounterStylesProps, V>(
      STYLES_NAME.INPUT_COUNTER,
      props.variant,
      ctv
    );
    const uniqueId = useId('inputCounter');
    const inputId = props.id ?? uniqueId;

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
      max,
      min,
      maxLength,
      minLength,
      mask,
      maskType,
      disabled,
      error,
      currentValue,
      type,
      truncate,
      informationAssociated: informationAssociatedValue?.content,
      ignoreKeys,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
    });

    return (
      <InputCounterStandAlone
        {...props}
        ref={inputRef}
        id={inputId}
        informationAssociatedValue={informationAssociatedValue}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        state={state}
        styles={styles}
        truncate={truncate}
        type={type}
        value={value}
        onBlur={handleBlurInternal}
        onChange={handleChangeInternal}
        onFocus={handleFocusInternal}
        onKeyDown={handleKeyDownInternal}
      />
    );
  }
);
InputCounterComponent.displayName = 'InputCounterComponent';

const InputCounterBoundary = <V extends string | unknown>(
  props: IInputCounter<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputCounterStandAlone {...(props as unknown as IInputCounterStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputCounterComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputCounter = React.forwardRef(InputCounterBoundary) as <V extends string | unknown>(
  props: IInputCounter<V> & {
    ref?: React.ForwardedRef<HTMLInputElement | undefined>;
  }
) => JSX.Element;

export { InputCounter };
