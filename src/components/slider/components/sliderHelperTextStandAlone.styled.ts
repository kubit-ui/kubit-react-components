import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { SliderBaseStylesType } from '../types';

export const StyledHelperTextWrapper = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.helperTextContainer)}
`;

export const StyledLeftHelperText = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.helperTextLeftContainer)}
  ${props => getTypographyStyles(props.styles.helperTextLeftContainer)}
`;

export const StyledRightHelperText = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.helperTextRightContainer)}
  ${props => getTypographyStyles(props.styles.helperTextRightContainer)}
`;
