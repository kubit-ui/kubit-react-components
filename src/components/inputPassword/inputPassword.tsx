import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useInput } from '@/hooks/useInput/useInput';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { INTERNAL_ERROR_EXECUTION } from '../input/types/input';
import { InputTypeType } from '../input/types/inputType';
import { InputPasswordStandAlone } from './inputPasswordStandAlone';
import {
  IInputPassword,
  IInputPasswordStandAlone,
  OnIconClickValueType,
} from './types/inputPassword';
import { InputPasswordStylesProps } from './types/inputPasswordTheme';

const InputPasswordComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      type = InputTypeType.PASSWORD,
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
      errorExecution,
      keyValidation,
      maxLength,
      mask,
      maskType,
      disabled,
      error,
      value: currentValue,
      ignoreKeys,
      disabledCopyAndPaste,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      activeIcon,
      disabledIcon,
      onInputTypeChange,
      onIconClick,
      onPaste,
      ctv,
      ...props
    }: IInputPassword<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const [inputPasswordType, setInputPasswordType] = React.useState(type);
    const styles = useStyles<InputPasswordStylesProps, V>(
      STYLES_NAME.INPUT_PASSWORD,
      props.variant,
      ctv
    );

    const handleRightIconClick: React.MouseEventHandler<HTMLButtonElement> = event => {
      const icon = inputPasswordType === InputTypeType.PASSWORD ? disabledIcon : activeIcon;

      setInputPasswordType(
        inputPasswordType === InputTypeType.PASSWORD ? InputTypeType.TEXT : InputTypeType.PASSWORD
      );
      onInputTypeChange && onInputTypeChange();
      // deprecated - Remove this icon.onClick when the 'icon' is removed from the component
      const iconClickValue =
        inputPasswordType === InputTypeType.PASSWORD
          ? OnIconClickValueType.VISIBLE
          : OnIconClickValueType.HIDE;
      icon.onClick?.(iconClickValue, event);
      onIconClick?.(iconClickValue);
    };

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
      maxLength,
      mask,
      maskType,
      disabled,
      error,
      currentValue,
      type: inputPasswordType,
      ignoreKeys,
      disabledCopyAndPaste,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
      onPaste,
    });

    const icon = inputPasswordType === InputTypeType.PASSWORD ? disabledIcon : activeIcon;

    return (
      <InputPasswordStandAlone
        {...props}
        ref={inputRef}
        maxLength={maxLength}
        rightIcon={{
          ...icon,
          onClick: handleRightIconClick,
        }}
        state={state}
        styles={styles}
        type={inputPasswordType}
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
InputPasswordComponent.displayName = 'InputPasswordComponent';

const InputPasswordBoundary = <V extends string | unknown>(
  props: IInputPassword<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputPasswordStandAlone {...(props as unknown as IInputPasswordStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputPasswordComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputPassword = React.forwardRef(InputPasswordBoundary) as <V extends string | unknown>(
  props: IInputPassword<V> & React.RefAttributes<HTMLInputElement | undefined>
) => JSX.Element;

export { InputPassword };
