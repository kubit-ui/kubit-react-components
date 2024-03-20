import * as React from 'react';

import { ButtonType } from '@/components/button';

import { ExtraPaddingArrowStyled } from '../carousel.styled';
import { CarouselPropsStylesType } from '../types';

interface IExtraPaddingArrowStandAlone {
  extraPadding?: number;
  extraPaddingAsArrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  ariaControls: string;
  styles: CarouselPropsStylesType;
  right?: boolean;
  dataTestId?: string;
}

export const ExtraPaddingArrowStandAlone = (
  props: IExtraPaddingArrowStandAlone
): JSX.Element | null => {
  if (!props.extraPadding || !props.extraPaddingAsArrow) {
    return null;
  }
  return (
    <ExtraPaddingArrowStyled
      aria-controls={props.ariaControls}
      aria-label={props.ariaLabel}
      data-testid={props.dataTestId}
      extraPadding={props.extraPadding}
      right={props.right}
      styles={props.styles}
      type={ButtonType.BUTTON}
      onClick={props.onClick}
    />
  );
};
