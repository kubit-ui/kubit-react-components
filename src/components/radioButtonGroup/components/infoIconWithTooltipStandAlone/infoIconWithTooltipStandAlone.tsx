//vendors
import React from 'react';

import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';

import { ElementOrIcon } from '../../../elementOrIcon/elementOrIcon';
import { IInfoIconWithTooltipStandAlone } from '../../types/radioButtonGroup';
import { RadioButtonGroupStateType } from '../../types/state';
import { InfoIconWrapperStyled } from './infoIconWithTooltipStandAlone.styled';

export const InfoIconWithTooltipStandAlone = ({
  styles,
  infoIcon,
  tooltip,
}: IInfoIconWithTooltipStandAlone): JSX.Element | null => {
  if (!infoIcon) {
    return null;
  }
  const infoIconWithoutTooltip = (
    <InfoIconWrapperStyled styles={styles}>
      <ElementOrIcon
        customIconStyles={styles[RadioButtonGroupStateType.DEFAULT]?.tooltip?.icon}
        {...infoIcon}
      />
    </InfoIconWrapperStyled>
  );
  const tooltipVariant =
    tooltip?.variant ?? styles[RadioButtonGroupStateType.DEFAULT]?.tooltip?.variant;
  if ((!tooltip?.title?.content && !tooltip?.content?.content) || !tooltipVariant) {
    return infoIconWithoutTooltip;
  }
  return (
    <Tooltip
      align={styles[RadioButtonGroupStateType.DEFAULT]?.tooltip?.align}
      {...tooltip}
      variant={tooltipVariant}
    >
      {infoIconWithoutTooltip}
    </Tooltip>
  );
};
