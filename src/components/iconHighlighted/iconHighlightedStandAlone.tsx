import React from 'react';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import {
  CustomContentContainerStyled,
  IconHighlightedContainerStyled,
  ParentContainerStyled,
} from './iconHighlighted.styled';
import { IIconHighlightedStandAlone } from './types/iconHighlighted';
import { IconHighlightedType } from './types/type';

const IconHighlightedStandAloneComponent = (
  {
    disabled = false,
    selected = false,
    dataTestId = 'icon-highlighted',
    ...props
  }: IIconHighlightedStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <ParentContainerStyled ref={ref} data-testid={dataTestId} styles={props.styles[props.size]}>
      <IconHighlightedContainerStyled
        backgroundColor={props.backgroundColor}
        disabled={disabled}
        selected={selected}
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
      {props.customContent && (
        <CustomContentContainerStyled
          disabled={disabled}
          selected={selected}
          styles={props.styles[props.size]}
        >
          {props.customContent}
        </CustomContentContainerStyled>
      )}
    </ParentContainerStyled>
  );
};

export const IconHighlightedStandAlone = React.forwardRef(IconHighlightedStandAloneComponent);
