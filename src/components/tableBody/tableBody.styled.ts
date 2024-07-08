import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { TableBodyPropsStylesType } from './types';

export const TBodyStyled = styled.tbody<{
  $styles?: TableBodyPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
`;
