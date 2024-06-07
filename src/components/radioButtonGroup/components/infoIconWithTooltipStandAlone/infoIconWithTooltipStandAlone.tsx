//vendors
import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Tooltip } from '@/components/tooltip';

import { IInfoIconWithTooltipStandAlone, RadioButtonGroupStateType } from '../../types';
import { InfoIconWrapperStyled } from './infoIconWithTooltipStandAlone.styled';

export const InfoIconWithTooltipStandAlone = ({
  styles,
  infoIcon,
  tooltip,
  dataTestId,
}: IInfoIconWithTooltipStandAlone): JSX.Element | null => {
  if (!infoIcon) {
    return null;
  }
  const infoIconWithoutTooltip = (
    <InfoIconWrapperStyled styles={styles}>
      <ElementOrIcon
        customIconStyles={styles[RadioButtonGroupStateType.DEFAULT]?.tooltip?.icon}
        dataTestId={dataTestId}
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
      dataTestId={`${dataTestId}Tooltip`}
      {...tooltip}
      variant={tooltipVariant}
    >
      {infoIconWithoutTooltip}
    </Tooltip>
  );
};
