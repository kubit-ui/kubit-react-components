import React from 'react';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { IconHighlightedContainerStyled } from './iconHighlighted.styled';
import { IIconHighlightedStandAlone } from './types/iconHighlighted';
import { IconHighlightedType } from './types/type';

const IconHighlightedStandAloneComponent = (
  { disabled = false, dataTestId = 'icon-highlighted', ...props }: IIconHighlightedStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <IconHighlightedContainerStyled
      ref={ref}
      backgroundColor={props.backgroundColor}
      data-testid={dataTestId}
      disabled={disabled}
      styles={props.styles[props.size]}
    >
      <ElementOrIcon
        altText={props.type === IconHighlightedType.INFORMATIVE ? props.altText : undefined}
        color={props.color}
        customIconStyles={
          !disabled ? props.styles[props.size]?.icon : props.styles[props.size]?.icon?.disabled
        }
        icon={props.icon}
      />
    </IconHighlightedContainerStyled>
  );
};

export const IconHighlightedStandAlone = React.forwardRef(IconHighlightedStandAloneComponent);
