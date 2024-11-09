import React from 'react';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { PageControlArrowControlType } from '../types/pageControl';
//types
import { ArrowsControlState } from '../types/pageControlStates';
import { ArrowsControlVariantStylesType } from '../types/pageControlTheme';

interface IArrowControlStandAlone extends PageControlArrowControlType {
  arrowsControlStyles: ArrowsControlVariantStylesType;
}

export const ArrowControlStandAlone = ({
  arrowsControlStyles,
  disabled = false,
  ...props
}: IArrowControlStandAlone): JSX.Element => {
  const state = disabled ? ArrowsControlState.INACTIVE : ArrowsControlState.ACTIVE;
  return (
    <ElementOrIcon
      customIconStyles={arrowsControlStyles[state]?.icon}
      disabled={disabled}
      {...props}
    />
  );
};
