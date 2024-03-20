import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';

// styles
import { InputIconStyled } from '../input.styled';
import { IInputIcon } from '../types/input';

const InputIconStandAloneComponent = (
  props: IInputIcon,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element | null => {
  if (!props.icon || props.loading) {
    return null;
  }
  const onClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.icon?.onClick?.(event);
  };

  return (
    <InputIconStyled ref={ref} iconPosition={props.iconPosition} styles={props.styles}>
      <ElementOrIcon
        customIconStyles={props.styles?.inputIcon}
        disabled={props.disabled}
        {...props.icon}
        onClick={onClick}
      />
    </InputIconStyled>
  );
};

export const InputIconStandAlone = React.forwardRef(InputIconStandAloneComponent);
