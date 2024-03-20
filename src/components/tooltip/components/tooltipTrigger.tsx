import * as React from 'react';

import { ButtonType } from '../../button';
import { TooltipTriggerWrapperStyled } from '../tooltip.styled';

interface ITooltipTrigger {
  childrenAsButton: boolean;
}

export const TooltipTrigger = (
  props: React.PropsWithChildren<ITooltipTrigger>
): React.ReactNode => {
  if (props.childrenAsButton) {
    return (
      <TooltipTriggerWrapperStyled type={ButtonType.BUTTON}>
        {props.children}
      </TooltipTriggerWrapperStyled>
    );
  }
  return props.children;
};
