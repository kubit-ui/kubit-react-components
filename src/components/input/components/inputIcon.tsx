import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';

// styles
import { InputIconStyled } from '../input.styled';
import { IInputIcon } from '../types/input';

const InputIconStandAloneComponent = (
  props: IInputIcon,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element | null => {
  const icon = props.leftIcon || props.rightIcon;
  if (!icon || props.loading) {
    return null;
  }

  const hasAction = !!props.rightIcon?.onClick || !!props.leftIcon?.onClick;

  const onClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.rightIcon?.onClick?.(event);
    props.leftIcon?.onClick?.(event);
  };

  return (
    <InputIconStyled
      ref={ref}
      $pointerEvents={hasAction}
      iconPosition={props.iconPosition}
      styles={props.styles}
    >
      <ElementOrIcon
        customIconStyles={props.styles?.inputIcon}
        disabled={props.disabled}
        {...props.rightIcon}
        {...props.leftIcon}
        onClick={hasAction ? onClick : undefined}
      />
    </InputIconStyled>
  );
};

export const InputIconStandAlone = React.forwardRef(InputIconStandAloneComponent);

// deprecated - remove this function when icon prop is removed
const InputIconStandAloneDeprecatedComponent = (
  props: IInputIcon,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element | null => {
  if (!props.icon || props.loading) {
    return null;
  }

  const hasAction = !!props.icon.onClick;

  const onClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.icon?.onClick?.(event);
  };

  return (
    <InputIconStyled
      ref={ref}
      $pointerEvents={hasAction}
      iconPosition={props.iconPosition}
      styles={props.styles}
    >
      <ElementOrIcon
        customIconStyles={props.styles?.inputIcon}
        disabled={props.disabled}
        {...props.icon}
        onClick={hasAction ? onClick : undefined}
      />
    </InputIconStyled>
  );
};

export const InputIconStandAloneDeprecated = React.forwardRef(
  InputIconStandAloneDeprecatedComponent
);
