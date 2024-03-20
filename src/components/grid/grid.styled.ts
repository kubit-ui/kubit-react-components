import styled, { css } from 'styled-components';

import { DeviceBreakpointsType } from '@/types/breakpoints';

import { ContentCustomGridItemType, CustomGridItemType, GridItemType, GridType } from './types';
import { getGridConfiguration, getItemGridConfiguration, getMaxWidth } from './utils/grid.utils';

export const GridStyled = styled.div<GridType>`
  display: grid;
  margin: auto;
  ${props =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyTablet, onlyMobile, onlyDesktop },
        BREAKPOINTS,
      },
    }) => css`
      ${onlyDesktop} {
        ${getGridConfiguration(props.config?.[DeviceBreakpointsType.DESKTOP])};
        ${!props.isFullWidth &&
        BREAKPOINTS?.XL &&
        getMaxWidth(
          BREAKPOINTS?.XL,
          props.config?.[DeviceBreakpointsType.DESKTOP]?.margin,
          props.config?.[DeviceBreakpointsType.DESKTOP]?.gap,
          props.addPaddingForLayout
        )};
        padding: 0
          ${props.addPaddingForLayout ? props.config?.[DeviceBreakpointsType.DESKTOP]?.gap : 0};
      }
      ${onlyTablet} {
        ${getGridConfiguration(props.config?.[DeviceBreakpointsType.TABLET])};
        margin: 0 ${props.config?.[DeviceBreakpointsType.TABLET]?.margin}rem;
      }

      ${onlyMobile} {
        ${getGridConfiguration(props.config?.[DeviceBreakpointsType.MOBILE])};
        margin: 0 ${props.config?.[DeviceBreakpointsType.MOBILE]?.margin}rem;
      }
    `};
`;

export const GridItemStyled = styled.div<GridItemType>`
  ${props => getItemGridConfiguration(props.desktop)};
  ${props =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyTablet, onlyMobile },
      },
    }) => css`
      ${onlyTablet} {
        ${getItemGridConfiguration(props.tablet)};
      }
      ${onlyMobile} {
        ${getItemGridConfiguration(props.mobile)};
      }
    `}
`;

// It is a Grid without margins and paddings to allow differents containers and make width calculations in the children
export const CustomGridStyled = styled.div<GridType>`
  display: grid;
  ${props =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyTablet, onlyMobile, onlyDesktop },
      },
    }) => css`
      ${onlyDesktop} {
        ${getGridConfiguration(props.config?.[DeviceBreakpointsType.DESKTOP])};
      }
      ${onlyTablet} {
        ${getGridConfiguration(props.config?.[DeviceBreakpointsType.TABLET])};
        margin: 0 ${props.config?.[DeviceBreakpointsType.TABLET]?.margin}rem;
      }

      ${onlyMobile} {
        ${getGridConfiguration(props.config?.[DeviceBreakpointsType.MOBILE])};
        margin: 0 ${props.config?.[DeviceBreakpointsType.MOBILE]?.margin}rem;
      }
    `};
`;

export const CustomGridItem = styled.div<CustomGridItemType>`
  /* we can apply a background color for each container */
  background: ${({ containerColor }) => containerColor};
  ${props => getItemGridConfiguration(props.desktop)};
  ${props =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
      paddingRight,
      paddingLeft,
      height,
    }) => {
      return css`
        ${onlyDesktop} {
          /* These are the paddings for the GridItem container and his content */
          padding-right: ${paddingRight};
          padding-left: ${paddingLeft};
          height: ${height};
        }
        ${onlyTablet} {
          ${getItemGridConfiguration(props.tablet)};
        }
        ${onlyMobile} {
          ${getItemGridConfiguration(props.mobile)};
        }
      `;
    }}
`;

export const ContentCustomGridItem = styled.div<ContentCustomGridItemType>`
  ${props =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyDesktop },
      },
      isMainContainer,
      containerWidth,
      marginsContainer,
      paddingRight,
      paddingLeft,
    }) => {
      return css`
        ${onlyDesktop} {
          //We need the property margin with "getMaxWidth" to make the margins increase and decrease when you resize the screen.
          ${isMainContainer ? 'margin-left: auto' : 'margin-right: auto'};
          /* We have to  make "/2" because the function getMaxWidth make "margin x 2" (left and right), so we need to apply just the the half for each one in the same row.
          if we had 3 containers in the same line it is neccesary to make another function */
          ${getMaxWidth(
            Number(containerWidth),
            (marginsContainer ?? 0) / 2,
            props.minMarginRightAndLeft,
            true
          )};
          padding-top: 0;
          padding-bottom: 0;
          padding-left: ${paddingLeft};
          padding-right: ${paddingRight};
        }
      `;
    }}
`;
