import styled from 'styled-components';

import { getStyles } from '@/utils';

import { TableDividerPropsStylesType } from './types';

export const DividerStyled = styled.div<{
  $styles?: TableDividerPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
`;
