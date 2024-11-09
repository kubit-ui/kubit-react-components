import styled from 'styled-components';

import { srOnlyMixin } from '../../styles/mixins/srOnly.mixin';
import { getStyles, getTypographyStyles } from '../../utils/getStyles/getStyles';
import { TableCellPropsStylesType } from './types/tableCellTheme';

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
  &[data-sticky] {
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
