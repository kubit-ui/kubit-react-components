import styled, { css } from 'styled-components';

import { getStyles } from '@/utils';

import { INavigationCardStyled } from './types';

type GapContainerSizeType = {
  marginRight?: string;
};

type ExpandedContentValueType = {
  isExpanded?: boolean;
};

type LineNumberValueType = {
  lines?: number;
  customHeight?: string;
};

export const NavigationCardStyled = styled.a.withConfig({
  shouldForwardProp: () => true,
})<INavigationCardStyled>`
  text-decoration: none;
  ${({ styles }) => getStyles(styles?.container)};
`;

export const NavigationCardInfoContentStyled = styled.div<ExpandedContentValueType>`
  display: inline-flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  ${({
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
    isExpanded,
  }) => css`
    ${onlyMobile} {
      flex-direction: ${isExpanded ? 'column' : 'row'};
    }
  `}
`;

export const NavigationCardLeftContentStyled = styled.div<ExpandedContentValueType>`
  display: flex;
  align-items: center;
  max-width: ${({ isExpanded }) => (isExpanded ? '90%' : '100%')};
  width: auto;
  text-align: left;
`;

export const NavigationCardContentStyled = styled.div<INavigationCardStyled>`
  ${({ styles }) => getStyles(styles?.contentContainer)};
`;

export const NavigationCardRightContentStyled = styled.div<INavigationCardStyled>`
  ${({ styles }) => getStyles(styles?.rightContentContainer)};
`;

export const NavigationCardDecorativeContainer = styled.div<
  INavigationCardStyled & GapContainerSizeType
>`
  ${({ styles }) => getStyles(styles?.decorativeElementContainer)};
  margin-right: ${({ marginRight }) => marginRight};
`;

export const NavigationCardDescriptionContainerStyled = styled.div<INavigationCardStyled>`
  ${({ styles }) => getStyles(styles?.descriptionContainer)};
`;

export const NavigationCardTagContainer = styled.div<INavigationCardStyled>`
  ${({ styles }) => getStyles(styles?.tagContainer)};
`;

export const NavigationCardLinesTextStyled = styled.div<LineNumberValueType>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ lines }) => lines};
  overflow: hidden;
  display: flex;
  align-items: center;
`;
