import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { IconHighlightedSizePropsType } from './types';

type IconHighlightedStyledType = {
  styles?: IconHighlightedSizePropsType;
  backgroundColor?: string;
};
export const IconHighlightedContainerStyled = styled.span<IconHighlightedStyledType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${props => getStyles(props.styles?.container)}
`;
