import styled, { css } from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { BreadcrumbsPropsStylesType, BreadcrumbsStateType } from './types';
import { IBreadcrumbLiStyled } from './types/breadcrumbs';

export const BreadcrumbsStyled = styled.div`
  margin: 0;
  padding: 0;
`;

export const BreadcrumbsNavStyled = styled.nav`
  ol {
    display: flex;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    position: relative;
  }
`;

const getLinkStylesByState = (styles?: BreadcrumbsPropsStylesType) => css`
  ${getTypographyStyles(styles?.link)}
  text-decoration: ${styles?.link?.text_decoration ?? 'none'};
`;

export const BreadcrumbLiStyled = styled.li`
  display: inline-flex;
  align-items: center;
`;

export const LinkContainerStyled = styled.div<IBreadcrumbLiStyled>`
  ${({ styles }) => getStyles(styles[BreadcrumbsStateType.DEFAULT]?.linkContainer)}
  & > a {
    width: fit-content;
    ${({ styles }) => getLinkStylesByState(styles[BreadcrumbsStateType.DEFAULT])}
    &:before {
      width: 0;
    }
  }
  &:hover {
    & > a {
      ${({ styles }) => getLinkStylesByState(styles[BreadcrumbsStateType.HOVER])}
    }
  }
`;

export const IconContainerStyled = styled.div<IBreadcrumbLiStyled>`
  ${({ styles, state }) => (state ? getStyles(styles[state].iconDividerContainer) : null)}
`;
