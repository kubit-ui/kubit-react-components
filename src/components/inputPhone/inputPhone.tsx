import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useInput } from '@/hooks/useInput/useInput';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { InputTypeType } from '../input';
import { INTERNAL_ERROR_EXECUTION, MASK_TYPE } from '../input/types';
import { InputPhoneStandAlone } from './inputPhoneStandAlone';
import { IInputPhone, IInputPhoneStandAlone, InputPhoneStylesProps } from './types';

const InputPhoneComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      type = InputTypeType.TEL,
      maskType = MASK_TYPE.NUMBERS,
      truncate = false,
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE,
      errorExecution,
      keyValidation,
      min,
      max,
      maxLength,
      minLength,
      mask,
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
    }: IInputPhone<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const styles = useStyles<InputPhoneStylesProps, V>(STYLES_NAME.INPUT_PHONE, props.variant, ctv);

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
      <InputPhoneStandAlone
        {...props}
        ref={inputRef}
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
InputPhoneComponent.displayName = 'InputPhoneComponent';

const InputPhoneBoundary = <V extends string | unknown>(
  props: IInputPhone<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputPhoneStandAlone {...(props as unknown as IInputPhoneStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputPhoneComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputPhone = React.forwardRef(InputPhoneBoundary) as <V extends string | unknown>(
  props: IInputPhone<V> & React.RefAttributes<HTMLInputElement>
) => JSX.Element;

export { InputPhone };
