import styled from 'styled-components';

import { getStyles } from '@/utils';

import { PillSelectorPropsStylesType } from './types';

export const RootContainerStyled = styled.div<{
  styles?: PillSelectorPropsStylesType;
}>`
  ${({ styles }) => getStyles(styles?.rootContainer)};
`;
