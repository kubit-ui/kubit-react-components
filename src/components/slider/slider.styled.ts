import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { SliderBaseStylesType, SliderStateType } from './types';

export const StyledRoot = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.states?.[SliderStateType.DEFAULT]?.container)}
  &[data-hover='true'] {
    ${props => getStyles(props.styles.states?.[SliderStateType.HOVER]?.container)}
  }
  &[data-pressed='true'] {
    ${props => getStyles(props.styles.states?.[SliderStateType.PRESSED]?.container)}
  }
  &[data-disabled='true'] {
    ${props => getStyles(props.styles.states?.[SliderStateType.DISABLED]?.container)}
  }
`;

export const StyledLabelContainer = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.labelContainer)}
`;

export const StyledButtonsTracksContainer = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.buttonsTracksContainer)}
`;

export const StyledWrap = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.tracksThumbsContainer)}
`;

export const StyledContainer = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.tracksThumbsInnerContainer)}
`;

const getTrackStyles = (styles: SliderBaseStylesType, isActive: boolean) => {
  const track = isActive ? 'activeTrack' : 'inactiveTrack';
  return css`
    ${getStyles(styles.states?.[SliderStateType.DEFAULT]?.[track])}
    &[data-hover='true'] {
      ${getStyles(styles.states?.[SliderStateType.HOVER]?.[track])}
    }
    &[data-pressed='true'] {
      ${getStyles(styles.states?.[SliderStateType.PRESSED]?.[track])}
    }
    &[data-disabled='true'] {
      ${getStyles(styles.states?.[SliderStateType.DISABLED]?.[track])}
    }
  `;
};

export const StyledTrack = styled.div<{ styles: SliderBaseStylesType }>`
  ${({ styles }) => getTrackStyles(styles, false)}
`;

export const StyledActiveTrack = styled.div<{ styles: SliderBaseStylesType }>`
  ${({ styles }) => getTrackStyles(styles, true)}
`;
