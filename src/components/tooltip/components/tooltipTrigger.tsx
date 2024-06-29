import * as React from 'react';

import { ButtonType } from '../../button';
import { TooltipTriggerWrapperStyled } from '../tooltip.styled';

interface ITooltipTrigger {
  disabled?: boolean;
  childrenAsButton: boolean;
  ariaDescribedBy?: string;
}

export const TooltipTrigger = (
  props: React.PropsWithChildren<ITooltipTrigger>
): React.ReactNode => {
  if (props.childrenAsButton) {
    return (
      <TooltipTriggerWrapperStyled
        aria-describedby={props.ariaDescribedBy}
        disabled={props.disabled}
        type={ButtonType.BUTTON}
      >
        {props.children}
      </TooltipTriggerWrapperStyled>
    );
  }
  return props.children;
};
