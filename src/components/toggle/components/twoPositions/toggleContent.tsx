import React from 'react';

import { POSITIONS } from '@/types/positions/positions';

import { ElementOrIcon } from '../../../elementOrIcon/elementOrIcon';
import { IconWrapperStyled, ToggleSpanSwitchStyled } from '../../toggle.styled';
import { IToggleStandAlone } from '../../types/toggle';

type IToggleContent = Pick<
  IToggleStandAlone,
  'styles' | 'onIcon' | 'offIcon' | 'dataTestId' | 'togglePosition'
> & { position: POSITIONS };

export const ToggleContent = ({ ...props }: IToggleContent): JSX.Element => {
  const icon = props.position === POSITIONS.RIGHT ? props.onIcon : props.offIcon;

  return (
    <>
      <ToggleSpanSwitchStyled
        $height={props.styles?.thumb?.height}
        $width={props.styles?.thumb?.width}
      />
      <IconWrapperStyled
        data-testid={`${props.dataTestId}-${props.position === POSITIONS.RIGHT ? 'on' : 'off'}-option`}
        hasThreePositions={false}
        showLabel={props.position === props.togglePosition}
        styles={props.styles}
        togglePosition={props.togglePosition}
      >
        <ElementOrIcon customIconStyles={props.styles?.icon} {...icon} />
      </IconWrapperStyled>
    </>
  );
};
