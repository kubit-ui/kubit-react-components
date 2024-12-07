import React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon/types/elementOrIcon';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { ArrowsControlState } from '../types/pageControlStates';
import { ArrowsControlVariantStylesType } from '../types/pageControlTheme';

interface IArrowControlStandAlone extends IElementOrIcon {
  arrowsControlStyles?: ArrowsControlVariantStylesType;
}

export const ArrowControlStandAlone = ({
  arrowsControlStyles,
  disabled = false,
  ...props
}: IArrowControlStandAlone): JSX.Element => {
  const state = disabled ? ArrowsControlState.INACTIVE : ArrowsControlState.ACTIVE;

  return (
    <ElementOrIcon
      customIconStyles={arrowsControlStyles?.[state]?.icon}
      disabled={disabled}
      {...props}
    />
  );
};
