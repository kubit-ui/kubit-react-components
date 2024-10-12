import * as React from 'react';

import { ButtonType } from '../../button';
import { TooltipTriggerWrapperStyled } from '../tooltip.styled';
import { TooltipTriggerAsButtonType } from '../types/tooltip';

interface ITooltipTrigger {
  disabled?: boolean;
  childrenAsButton: boolean;
  ariaDescribedBy?: string;
  triggerAsButton?: TooltipTriggerAsButtonType;
}

export const TooltipTrigger = (
  props: React.PropsWithChildren<ITooltipTrigger>
): React.ReactNode => {
  if (props.childrenAsButton) {
    return (
      <TooltipTriggerWrapperStyled
        aria-describedby={props.ariaDescribedBy}
        aria-disabled={props.disabled}
        {...props.triggerAsButton}
        disabled={props.disabled}
        type={ButtonType.BUTTON}
      >
        {props.children}
      </TooltipTriggerWrapperStyled>
    );
  }
  return props.children;
};
