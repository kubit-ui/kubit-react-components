import styled from 'styled-components';

import { srOnlyMixin } from '@/styles';
import { getStyles, getTypographyStyles } from '@/utils';

import { TableCellPropsStylesType } from './types';

export const TDStyled = styled.td<{
  $styles?: TableCellPropsStylesType;
  $height?: string;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $textAlign?: string;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
  text-align: ${({ $textAlign }) => $textAlign};
  &[data-sticky='true'] {
    position: sticky;
  }
  &[data-hidden='true'] {
    & > :first-child {
      ${srOnlyMixin}
    }
  }
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
`;
