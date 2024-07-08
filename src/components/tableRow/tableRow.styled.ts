import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { TableRowPropsStylesType } from './types';

export const TRStyled = styled.tr<{
  $styles?: TableRowPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
  /* Styles are applied over the cell and no over the row, this is because the cell background could have been set, and it should be overriden when active or hover */
  &[data-hoverable='true'] {
    &:hover td,
    &:hover th {
      ${({ $styles }) => getStyles($styles?.hoveredCellContainer)};
      ${({ $styles }) => getTypographyStyles($styles?.hoveredCellContainer)};
    }
  }
  &[data-active='true'] {
    td,
    th {
      ${({ $styles }) => getStyles($styles?.activeCellContainer)};
      ${({ $styles }) => getTypographyStyles($styles?.activeCellContainer)};
    }
  }
`;
