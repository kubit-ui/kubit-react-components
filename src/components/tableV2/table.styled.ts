import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { TablePropsStylesTypeV2 } from './types';

export const TableWrapperStyled = styled.div<{
  $styles?: TablePropsStylesTypeV2;
  $position?: string;
  $zIndex?: number;
}>`
  ${({ $styles }) => getStyles($styles?.wrapper)};
  &[data-sticky='true'] {
    position: sticky;
    top: 0;
  }
`;

export const TableScrollableContainerStyled = styled.div<{
  $styles?: TablePropsStylesTypeV2;
  $hasScrollDisabled?: boolean;
}>`
  ${({ $styles }) => getStyles($styles?.scrollableContainer)};
  overflow: ${({ $hasScrollDisabled }) => $hasScrollDisabled && 'visible'};
`;
export const LeftBoxShadowContainerStyled = styled.div<{
  $styles?: TablePropsStylesTypeV2;
}>`
  ${({ $styles }) => getStyles($styles?.leftBoxShadowContainer)};
`;

export const RightBoxShadowContainerStyled = styled.div<{
  $styles?: TablePropsStylesTypeV2;
}>`
  ${({ $styles }) => getStyles($styles?.rightBoxShadowContainer)};
`;

export const TableStyled = styled.table<{
  $styles?: TablePropsStylesTypeV2;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
`;
