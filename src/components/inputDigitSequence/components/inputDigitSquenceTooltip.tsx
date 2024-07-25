import * as React from 'react';

import { ElementOrIcon, IElementOrIcon } from '@/components/elementOrIcon';
import { Tooltip } from '@/components/tooltip';

import { InputDigitSequenceStyles, InputDigitSequenceTooltipType } from '../types';

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
