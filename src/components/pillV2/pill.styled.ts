import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { PillPropsStylesType } from './types';

export const PillAsButton = styled.button``;

export const PillRootContainerStyled = styled.div<{ styles?: PillPropsStylesType }>`
  ${({ styles }) => getStyles(styles?.rootContainer)};
`;

export const PillContentContainerStyled = styled.span<{ styles?: PillPropsStylesType }>`
  ${({ styles }) => getStyles(styles?.contentContainer)};
`;

export const PillInputStyled = styled.input<{ styles?: PillPropsStylesType }>`
  appearance: none;
  ${({ styles }) => getStyles(styles?.input)};
`;
