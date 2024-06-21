import * as React from 'react';

import { ElementOrIcon, IElementOrIcon } from '@/components/elementOrIcon';
import { Tooltip } from '@/components/tooltip';

import { SubtitleTooltipIconWrapperStyled } from '../selectorBoxFile.styled';
import { SelectorBoxFilePropsStylesType, SelectorBoxFileTooltipType } from '../types';

interface ISelectorBoxFileTooltip {
  styles: SelectorBoxFilePropsStylesType;
  tooltipIcon?: IElementOrIcon;
  tooltip?: SelectorBoxFileTooltipType;
}

export const SelectorBoxFileTooltip = (props: ISelectorBoxFileTooltip): JSX.Element | null => {
  if (!props.tooltipIcon?.icon) {
    return null;
  }

  const icon = <ElementOrIcon customIconStyles={props.styles.tooltipIcon} {...props.tooltipIcon} />;

  if (!props.tooltip) {
    return (
      <SubtitleTooltipIconWrapperStyled styles={props.styles}>
        {icon}
      </SubtitleTooltipIconWrapperStyled>
    );
  }

  return (
    <SubtitleTooltipIconWrapperStyled styles={props.styles}>
      <Tooltip variant={props.styles.tooltip?.variant} {...props.tooltip}>
        {icon}
      </Tooltip>
    </SubtitleTooltipIconWrapperStyled>
  );
};
