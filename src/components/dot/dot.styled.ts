import styled from 'styled-components';

import {
  getMeasuresStyles,
  getPaddingStyles,
  getStyles,
  getTypographyStyles,
} from '@/utils/getStyles/getStyles';

import { IDotStyled } from './types';

export const DotStyled = styled.span<IDotStyled>`
  ${props => getStyles(props.styles.container)}
  ${props => getStyles(props.sizeStyles.container)}
  ${props => getPaddingStyles(props.sizeStyles.container)}
  ${props => getMeasuresStyles(props.sizeStyles.container)}
  ${props => getTypographyStyles(props.sizeStyles.container)}
  ${props => getTypographyStyles(props.styles.container)}
  width: ${props => props.$width};
  height: ${props => props.$height};
`;
