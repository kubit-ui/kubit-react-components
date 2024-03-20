import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { EmptyStatePropsStyles, EmptyStatePropsStylesType } from './types/emptyStateTheme';

type StylesType = {
  styles?: EmptyStatePropsStylesType;
};

export const EmptyStateStyled = styled.div<EmptyStatePropsStyles & StylesType>`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.isHorizontalOrientation ? 'row' : 'column')};
  align-items: center;
  justify-content: center;

  ${props => getStyles(props.styles?.container)}
`;

export const TextSectionStyled = styled.div<StylesType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props => getStyles(props.styles?.titleAndSubTitleContainer)}
`;

export const EmptyStateTitleWrapperStyled = styled.div<StylesType>`
  ${props => getStyles(props.styles?.titleContainer)}
  ${props => getTypographyStyles(props.styles?.titleContainer)}
`;

export const EmptyStateDescriptionWrapperStyled = styled.div<StylesType>`
  ${props => getStyles(props.styles?.subtitleContainer)}
  ${props => getTypographyStyles(props.styles?.subtitleContainer)}
`;

export const ActionSectionStyled = styled.div<StylesType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${props => getStyles(props.styles?.buttonLinkContainer)}
`;

export const ButtonWrapperStyled = styled.div<StylesType>`
  display: flex;
  width: 100%;
  justify-content: center;
  ${props => getStyles(props.styles?.buttonContainer)}
`;
