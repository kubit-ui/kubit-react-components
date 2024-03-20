/* eslint-disable complexity */
import styled, { css } from 'styled-components';

import { DeviceBreakpointsType } from '@/types/breakpoints';
import { POSITIONS } from '@/types/positions';

import { PopoverPositionVariantType, PopoverVariantStylesProps, getAlignStyles } from './types';

type PopoverProps = {
  device: DeviceBreakpointsType;
  positionVariant?: PopoverPositionVariantType;
  align?: POSITIONS;
  autoWidth?: boolean;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  transparentBackground?: boolean;
  extraAlignGap?: string;
  extraWidth?: string;
  extraWidthSide?: POSITIONS;
  fullWidth?: boolean;
  zIndex?: string | number;
};
const MAX_CONTENT = 'max-content';

// Replace width style if exists and add margin left
// It is necessary if we want the popover to grow to the right of the element
const getWidth = (props: PopoverVariantStylesProps & PopoverProps) => {
  let newWidth = props.fullWidth || props[props.device]?.fullWidth ? '100%' : MAX_CONTENT;
  if (props.extraWidth && newWidth !== MAX_CONTENT) {
    newWidth = `calc(${newWidth} + ${props.extraWidth})`;
  }
  let marginLeft = '';
  if (props.extraWidth) {
    const marginDirection = props.extraWidthSide === POSITIONS.LEFT ? '-' : '';
    marginLeft = `calc(${marginDirection}${props.extraWidth} / 2)`;
  }

  return css`
    width: ${newWidth};
    margin-left: ${marginLeft};
  `;
};

// Get the align styles
const alignProps = (align: POSITIONS = POSITIONS.CENTER, extraAlignGap = '0px') => {
  // It is necessary if we want the popover to grow to the left of the element
  return getAlignStyles(align, extraAlignGap);
};

export const PopoverStyled = styled.div<PopoverVariantStylesProps & PopoverProps>`
  width: ${props =>
    props.fullWidth || props[DeviceBreakpointsType.DESKTOP]?.fullWidth ? '100%' : MAX_CONTENT};

  display: inline-block;
  background-color: transparent;
  position: ${props =>
    props.positionVariant
      ? props.positionVariant
      : props[DeviceBreakpointsType.DESKTOP]?.positionVariant};

  z-index: ${props => props[DeviceBreakpointsType.DESKTOP]?.zIndex || props.zIndex || 'auto'};

  ${props =>
    props.align
      ? alignProps(props.align, props.extraAlignGap)
      : alignProps(props[DeviceBreakpointsType.DESKTOP]?.align)};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
  ${({
    theme: {
      MEDIA_QUERIES: { onlyMobile, onlyTablet, onlyDesktop },
    },
    zIndex,
    ...props
  }) => css`
    ${onlyDesktop} {
      ${getWidth(props)}
    }

    ${onlyTablet} {
      position: ${!props[DeviceBreakpointsType.TABLET]
        ? props.positionVariant
        : props[DeviceBreakpointsType.TABLET]?.positionVariant};
      ${props.align
        ? alignProps(props.align, props.extraAlignGap)
        : alignProps(props[DeviceBreakpointsType.TABLET]?.align)};
      ${getWidth(props)}
      z-index: ${props => props[DeviceBreakpointsType.TABLET]?.zIndex || zIndex || 'auto'};
    }

    ${onlyMobile} {
      position: ${!props[DeviceBreakpointsType.MOBILE]
        ? props.positionVariant
        : props[DeviceBreakpointsType.MOBILE]?.positionVariant};
      ${alignProps(props[DeviceBreakpointsType.MOBILE]?.align)};
      ${getWidth(props)}
      z-index: ${props => props[DeviceBreakpointsType.MOBILE]?.zIndex || zIndex || 'auto'};
    }
  `}
  height: auto;
  max-height: 100%;
`;

export const PopoverAnimationStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})``;
