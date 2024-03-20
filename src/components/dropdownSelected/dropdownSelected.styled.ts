import styled, { css } from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { DropdownSelectedPropsStylesType } from './types';

type DropdrownSelectedPropsStyles = {
  styles?: DropdownSelectedPropsStylesType;
  $rotate?: boolean;
};

export const DropdrownSelectedContainerStyled = styled.div<DropdrownSelectedPropsStyles>`
  position: relative;
  display: flex;
  ${props => getStyles(props.styles?.container)}
`;

export const ButtonOrLinkContainerStyled = styled.button.withConfig({
  shouldForwardProp: () => true,
})<DropdrownSelectedPropsStyles>`
  transform: rotate(0deg);
  transition: transform 0.15s ease-in-out;
  ${({ $rotate }) =>
    $rotate &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
  ${props => getStyles(props.styles?.buttonOrLinkContainer)}
  ${props => getTypographyStyles(props.styles?.buttonOrLinkContainer)}
`;

export const ListOptionsContainerStyled = styled.div<DropdrownSelectedPropsStyles>`
  ${props => getStyles(props.styles?.listOptionsContainer)}
`;

export const PopoverContainerStyled = styled.div``;
export const ParentButtonContainerStyled = styled.div``;
