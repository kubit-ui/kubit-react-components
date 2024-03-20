import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';

//types
import {
  ArrowsControlState,
  ArrowsControlVariantStylesType,
  PageControlArrowControlType,
} from '../types';

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
