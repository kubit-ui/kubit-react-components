import React from 'react';

import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { InputDigitSequenceTooltipType } from '../types/inputDigitSequence';
import { InputDigitSequenceStyles } from '../types/inputDigitSequenceTheme';

interface IInputDigitSequenceTooltip {
  stateStyles?: InputDigitSequenceStyles;
  tooltipIcon?: IElementOrIcon;
  tooltip?: InputDigitSequenceTooltipType;
}

export const InputDigitSequenceTooltip = (
  props: IInputDigitSequenceTooltip
): JSX.Element | null => {
  if (!props.tooltipIcon?.icon) {
    return null;
  }

  if (!(props.tooltip?.variant || props.stateStyles?.tooltip?.variant)) {
    return (
      <ElementOrIcon customIconStyles={props.stateStyles?.tooltipIcon} {...props.tooltipIcon} />
    );
  }

  return (
    <Tooltip variant={props.stateStyles?.tooltip?.variant} {...props.tooltip}>
      <ElementOrIcon customIconStyles={props.stateStyles?.tooltipIcon} {...props.tooltipIcon} />
    </Tooltip>
  );
};
