import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '../../utils/getStyles/getStyles';
import { TableBodyPropsStylesType } from './types/tableBodyTheme';

export const TBodyStyled = styled.tbody<{
  $styles?: TableBodyPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
`;
