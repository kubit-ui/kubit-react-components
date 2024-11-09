import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { DataTablePropsStylesType } from './types/dataTableTheme';

export const WrapperStyled = styled.div<{
  $styles?: DataTablePropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.wrapper)};
`;

export const ScrollableContainerStyled = styled.div<{
  $styles?: DataTablePropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.scrollableContainer)};
`;

export const LeftBoxShadowContainerStyled = styled.div<{
  $styles?: DataTablePropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.leftBoxShadowContainer)};
`;

export const RightBoxShadowContainerStyled = styled.div<{
  $styles?: DataTablePropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.rightBoxShadowContainer)};
`;
