import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { SliderBaseStylesType } from '../types';

export const StyledScaleWrap = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.scaleContainer)}
`;

export const StyledScaledOption = styled.span<{
  styles: SliderBaseStylesType;
  scaleOffset: number;
}>`
  ${props => getStyles(props.styles.scaleOption)}
  left: ${({ styles, scaleOffset }) => `calc(${scaleOffset}% - ${styles.scaleOption?.width} / 2)`};
`;
