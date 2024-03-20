import styled, { css } from 'styled-components';

import { DeviceBreakpointsType } from '@/types';

type OperativeLayoutContainerType = {
  maxWidthParentContainer?: { [key in DeviceBreakpointsType]?: string };
  $width: string;
};

type OperativeLayoutColors = {
  $color?: string;
  $align?: string;
  $paddingBottom?: string;
  $margin?: string;
  $height?: string;
  $width?: { [key in DeviceBreakpointsType]?: string };
  $contentOverflowColor?: boolean;
};

const alignmentPosition = {
  LEFT: 'flex-start',
  CENTER: 'center',
  RIGHT: 'flex-end',
};

export const OperativeLayoutColor = styled.div<OperativeLayoutColors>`
  display: flex;
  position: relative;
  align-items: ${({ $align }) => ($align ? alignmentPosition[$align] : 'center')};
  background: ${({ $color }) => $color};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  margin: ${({ $margin }) => $margin};
  height: ${({ $height }) => $height};
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyTablet, onlyMobile, onlyDesktop },
      },
      $width,
      $margin,
      $contentOverflowColor,
    }) => css`
      ${onlyDesktop} {
        flex-direction: column;
        width: ${$contentOverflowColor
          ? `calc(100% - ${$margin})`
          : `calc(${$width?.[DeviceBreakpointsType.DESKTOP]} - ${$margin})`};
        /* width: 100%; */
      }
      ${onlyTablet} {
        flex-direction: column;
        width: ${$width?.[DeviceBreakpointsType.TABLET]
          ? $width[DeviceBreakpointsType.TABLET]
          : 'auto'};
      }
      ${onlyMobile} {
        flex-direction: column;
        width: ${$width?.[DeviceBreakpointsType.MOBILE]
          ? $width[DeviceBreakpointsType.MOBILE]
          : 'auto'};
      }
    `};
`;

export const OperativeLayoutContainer = styled.div<OperativeLayoutContainerType>`
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
      maxWidthParentContainer,
      $width,
    }) => css`
      ${onlyDesktop} {
        width: ${$width};
        height: 100%;
        max-width: ${maxWidthParentContainer?.[DeviceBreakpointsType.DESKTOP]
          ? maxWidthParentContainer[DeviceBreakpointsType.DESKTOP]
          : 'auto'};
      }
      ${onlyTablet} {
        max-width: ${maxWidthParentContainer?.[DeviceBreakpointsType.TABLET]
          ? maxWidthParentContainer[DeviceBreakpointsType.TABLET]
          : 'auto'};
      }
      ${onlyMobile} {
        width: ${maxWidthParentContainer?.[DeviceBreakpointsType.MOBILE]
          ? maxWidthParentContainer[DeviceBreakpointsType.MOBILE]
          : 'auto'};
      }
    `};
`;
