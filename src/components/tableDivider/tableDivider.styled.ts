import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { TableDividerPropsStylesType } from './types/tableDividerTheme';

export const DividerStyled = styled.div<{
  $styles?: TableDividerPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
`;
