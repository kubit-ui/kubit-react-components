import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { IconHighlightedSizePropsType } from './types/iconHighlightedTheme';

type IconHighlightedStyledType = {
  styles?: IconHighlightedSizePropsType;
  backgroundColor?: string;
  disabled?: boolean;
  selected?: boolean;
};
export const ParentContainerStyled = styled.span<IconHighlightedStyledType>`
  ${props => getStyles(props.styles?.parentContainer)}
`;

export const IconHighlightedContainerStyled = styled.span<IconHighlightedStyledType>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => getStyles(props.styles?.container)}
  ${props => props.selected && getStyles(props.styles?.container?.selected)}
  ${props => props.disabled && getStyles(props.styles?.container?.disabled)}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const CustomContentContainerStyled = styled.span<IconHighlightedStyledType>`
  ${props => getStyles(props.styles?.customContentContainer)}
  ${props => getTypographyStyles(props.styles?.customContentContainer)}
  ${props => props.selected && getStyles(props.styles?.customContentContainer?.selected)}
  ${props => props.selected && getTypographyStyles(props.styles?.customContentContainer?.selected)}
  ${props => props.disabled && getStyles(props.styles?.customContentContainer?.disabled)}
  ${props => props.disabled && getTypographyStyles(props.styles?.customContentContainer?.disabled)}
`;
