import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '../../utils/getStyles/getStyles';
import { TableFootPropsStylesType } from './types/tableFootTheme';

export const TFootStyled = styled.tfoot<{
  $styles?: TableFootPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
`;
