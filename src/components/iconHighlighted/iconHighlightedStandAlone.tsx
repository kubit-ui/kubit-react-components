import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';

import { IconHighlightedContainerStyled } from './iconHighlighted.styled';
import { IIconHighlightedStandAlone } from './types/iconHighlighted';
import { IconHighlightedType } from './types/type';

const IconHighlightedStandAloneComponent = (
  { ...props }: IIconHighlightedStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <IconHighlightedContainerStyled
      ref={ref}
      backgroundColor={props.backgroundColor}
      data-testid={props.dataTestId}
      styles={props.styles[props.size]}
    >
      <ElementOrIcon
        altText={props.type === IconHighlightedType.INFORMATIVE ? props.altText : undefined}
        color={props.color}
        customIconStyles={props.styles[props.size]?.icon}
        icon={props.icon}
      />
    </IconHighlightedContainerStyled>
  );
};

export const IconHighlightedStandAlone = React.forwardRef(IconHighlightedStandAloneComponent);
