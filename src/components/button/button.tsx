import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { States, useManageState } from '@/hooks/useManageState/useManageState';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '@/provider/errorBoundary/fallbackComponent';

import { ButtonStandAlone } from './buttonStandAlone';
import { IButton, IButtonStandAlone } from './types/button';
import { ButtonSizePropsType, ButtonStateKeyOfType } from './types/buttonTheme';
import { ButtonStateType } from './types/state';
import { ButtonType } from './types/type';

const ButtonComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    {
      type = ButtonType.BUTTON,
      disabled = false,
      loading = false,
      ctv,
      cts,
      ...props
    }: IButton<V, S>,
    ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
  ): JSX.Element | null => {
    const variantStyles = useStyles<ButtonStateKeyOfType, V>(
      STYLES_NAME.BUTTON,
      props.variant,
      ctv
    );
    const sizeStyles = useStyles<ButtonSizePropsType, S>(STYLES_NAME.BUTTON, props.size, cts);

    const { state, setRef } = useManageState({
      states: Object.values(ButtonStateType) as States,
      ref: ref as React.ForwardedRef<HTMLElement> | undefined | null,
      disabled,
      loading,
    });

    if (!props.children && !props.icon?.icon) return null;

    return (
      <ButtonStandAlone
        {...props}
        ref={setRef as React.ForwardedRef<HTMLButtonElement>}
        loading={loading}
        sizeStyles={sizeStyles}
        state={state as unknown as ButtonStateType}
        styles={variantStyles}
        type={type}
      >
        {props.children}
      </ButtonStandAlone>
    );
  }
);
ButtonComponent.displayName = 'ButtonComponent';

const ButtonBoundary = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: IButton<V, S>,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ButtonStandAlone
          {...(props as unknown as IButtonStandAlone)}
          ref={ref}
          type={ButtonType.BUTTON}
        />
      </FallbackComponent>
    }
  >
    <ButtonComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Button = React.forwardRef(ButtonBoundary) as <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: React.PropsWithChildren<IButton<V, S>> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof ButtonBoundary>;

/**
 * Represents the button component.
 *
 * @function Button
 * @category Atoms
 * @param {React.PropsWithChildren<IButton>} props - The props for the component.
 * @param {React.ForwardedRef<HTMLButtonElement>} ref - The ref for the component.
 * @returns {JSX.Element} - The JSX element representing the button component.
 */

export { Button };

export default Button;
