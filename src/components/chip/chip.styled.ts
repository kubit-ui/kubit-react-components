import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ChipPropsStylesType } from './types';

type IChipStyled = {
  styles?: ChipPropsStylesType;
};

export const ChipStyled = styled.div<IChipStyled>`
  ${props => getStyles(props.styles?.chipContainer)}
`;

export const RangeItemWrapperStyled = styled.p<IChipStyled>`
  ${props => getStyles(props.styles?.rangeItemWrapper)}
`;

export const ErrorStyled = styled.div<IChipStyled>`
  ${props => getStyles(props.styles?.errorContainer)}
`;

export const RangeContainerStyled = styled.div``;
