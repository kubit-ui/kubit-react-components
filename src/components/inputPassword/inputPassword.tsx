import * as React from 'react';

import { InputTypeType } from '@/components/input';
import { STYLES_NAME } from '@/constants';
import { useInput, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { InputPasswordStandAlone } from './inputPasswordStandAlone';
import {
  IInputPassword,
  IInputPasswordStandAlone,
  InputPasswordStylesProps,
  OnIconClickValueType,
} from './types';

const InputPasswordComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      type = InputTypeType.PASSWORD,
      errorExecution,
      keyValidation,
      maxLength,
      mask,
      maskType,
      disabled,
      error,
      value: currentValue,
      ignoreKeys,
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
    } = useInput({
      ref,
      errorExecution,
      keyValidation,
      maxLength,
      mask,
      maskType,
      disabled,
      error,
      currentValue,
      type: inputPasswordType,
      ignoreKeys,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onError,
      onInternalErrors,
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
