import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ChipPropsStylesType } from './types';

type IChipStyled = {
  styles?: ChipPropsStylesType;
};

export const ChipStyled = styled.span<IChipStyled>`
  ${props => getStyles(props.styles?.chipContainer)}
`;

export const RangeItemWrapperStyled = styled.span<IChipStyled>`
  ${props => getStyles(props.styles?.rangeItemWrapper)}
`;

export const ErrorStyled = styled.span<IChipStyled>`
  ${props => getStyles(props.styles?.errorContainer)}
`;

export const RangeContainerStyled = styled.span``;
