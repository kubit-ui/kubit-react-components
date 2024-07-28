import styled, { css, keyframes } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { MediaProgressBarVariantStylesType } from './types';

type MediaProgressBarStylesType = {
  styles: MediaProgressBarVariantStylesType;
  playing?: boolean;
  barFocused?: boolean;
  clickableBars?: boolean;
  barProgressDuration?: number;
};

const playSimulation = (width = '0%') => keyframes`
 from {
    width: ${width};
  }
  to {
    width: 100%;
  }
`;

export const ParentContainerStyled = styled.div<MediaProgressBarStylesType>`
  ${props => getStyles(props.styles.container)}
`;

export const BarStyled = styled.div<MediaProgressBarStylesType>`
  ${props => getStyles(props.styles.bar)}
  ${({ barFocused, styles }) =>
    !barFocused &&
    css`
      ${getStyles(styles.bar?.filled)}
    `};
`;

export const BarContainerStyled = styled.div<MediaProgressBarStylesType>`
  ${props => getStyles(props.styles.barContainer)}
  ${({ barFocused, styles }) =>
    barFocused &&
    css`
      ${getStyles(styles.barContainer?.filled)}
    `};
  ${({ clickableBars }) =>
    !clickableBars &&
    css`
      pointer-events: none;
    `};
  &:focus-visible {
    outline-style: none;
    box-shadow: none;

    & > ${BarStyled} {
      ${({ theme: { FOCUS_STYLES } }) => FOCUS_STYLES};
    }
  }
`;
export const ProgressBarStyled = styled.div<MediaProgressBarStylesType>`
  ${props => getStyles(props.styles.progressBar)}
  ${({ barFocused }) =>
    !barFocused &&
    css`
      background-color: transparent;
    `};
  animation-name: ${props => playSimulation(props.styles.progressBar?.width)};
  animation-duration: ${({ barProgressDuration }) => `${barProgressDuration}ms`};
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-play-state: ${({ playing }) => (playing ? 'running' : 'paused')};
`;
