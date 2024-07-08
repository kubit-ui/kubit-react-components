import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { TableFootPropsStylesType } from './types';

export const TFootStyled = styled.tfoot<{
  $styles?: TableFootPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
`;
