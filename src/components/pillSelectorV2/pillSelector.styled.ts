import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { PillSelectorPropsStylesType } from './types/pillSelectorTheme';

export const RootContainerStyled = styled.div<{
  styles?: PillSelectorPropsStylesType;
}>`
  ${({ styles }) => getStyles(styles?.rootContainer)};
`;
