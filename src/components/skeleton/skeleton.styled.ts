import styled, { keyframes } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { SkeletonVariantStylesType } from './types/skeletonTheme';

type SkeletonStylesType = {
  $width: string;
  $height: string;
  duration: string;
  styles?: SkeletonVariantStylesType;
};

const breatheAnimation = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const SkeletonStyled = styled.div<SkeletonStylesType>`
  ${props => getStyles(props.styles?.skeleton)}
  width: ${props => props.$width};
  height: ${props => props.$height};
  animation-name: ${breatheAnimation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${props => props.duration};
  animation-delay: 1ms;
`;
