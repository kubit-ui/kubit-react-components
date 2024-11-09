import React from 'react';

import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { SubtitleTooltipIconWrapperStyled } from '../selectorBoxFile.styled';
import { SelectorBoxFileTooltipType } from '../types/selectorBoxFile';
import { SelectorBoxFilePropsStylesType } from '../types/selectorBoxFileTheme';

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
