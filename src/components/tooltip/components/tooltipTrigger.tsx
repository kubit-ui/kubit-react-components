import * as React from 'react';

import { ButtonType } from '../../button/types/type';
import { TooltipTriggerWrapperStyled } from '../tooltip.styled';
import { TooltipTriggerAsButtonType } from '../types/tooltip';

interface ITooltipTrigger {
  disabled?: boolean;
  childrenAsButton: boolean;
  ariaDescribedBy?: string;
  triggerAsButton?: TooltipTriggerAsButtonType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onMouseUp?: React.MouseEventHandler<HTMLElement>;
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
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
      >
        {props.children}
      </TooltipTriggerWrapperStyled>
    );
  }
  return (
    <TooltipTriggerWrapperStyled
      as="div"
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
    >
      {props.children}
    </TooltipTriggerWrapperStyled>
  );
};
