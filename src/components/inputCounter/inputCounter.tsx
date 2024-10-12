import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useId, useInput, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { INTERNAL_ERROR_EXECUTION, InputTypeType } from '../input/types';
import { InputCounterStandAlone } from './inputCounterStandAlone';
import { IInputCounter, IInputCounterStandAlone, InputCounterStylesProps } from './types';
import { buildScreenReaderText } from './utils';

const InputCounterComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      type = InputTypeType.TEXT,
      truncate = false,
      disabledCopyAndPaste,
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
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
      regex,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      onPaste,
      ctv,
      ...props
    }: IInputCounter<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const uniqueId = useId('inputCounter');
    const inputId = props.id ?? uniqueId;

    const styles = useStyles<InputCounterStylesProps, V>(
      STYLES_NAME.INPUT_COUNTER,
      props.variant,
      ctv
    );

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
      regex,
      disabledCopyAndPaste,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      onPaste,
    });

    const [showMessage, setShowMessage] = React.useState(false);

    const handleChange = e => {
      handleChangeInternal?.(e);
      setShowMessage(false);
    };

    const handleBlur = e => {
      handleBlurInternal?.(e);
      setShowMessage(true);
    };

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
        screenReaderCurrentCharacters={buildScreenReaderText(
          value,
          ref as React.MutableRefObject<HTMLInputElement>,
          maxLength,
          props.screenReaderCurrentCharacters
        )}
        showMessage={showMessage}
        state={state}
        styles={styles}
        truncate={truncate}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocusInternal}
        onKeyDown={handleKeyDownInternal}
        onPaste={handlePasteInternal}
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
