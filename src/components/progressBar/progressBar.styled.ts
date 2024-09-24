import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ProgressBarSizeStylesType, ProgressBarVariantStylesType } from './types';

type ProgressBarStylesType = {
  styles: ProgressBarVariantStylesType;
  sizeStyles?: ProgressBarSizeStylesType;
};

export const ParentContainerStyled = styled.div<ProgressBarStylesType>`
  ${props => getStyles(props.styles.container)}
`;

export const BarContainerStyled = styled.div<ProgressBarStylesType>`
  ${props => getStyles(props.styles.barContainer)}
`;

export const BarStyled = styled.div<ProgressBarStylesType>`
  ${props => getStyles(props.styles.bar)}
  ${props => getStyles(props.sizeStyles?.bar)}
`;

export const ProgressBarStyled = styled.div<ProgressBarStylesType & { progressCompleted?: number }>`
  ${props => getStyles(props.styles.progressBar)}
  ${props => getStyles(props.sizeStyles?.progressBar)}
  width: ${({ progressCompleted }) => `${progressCompleted}%`};
`;
