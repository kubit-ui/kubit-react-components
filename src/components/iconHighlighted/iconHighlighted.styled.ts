import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { IconHighlightedSizePropsType } from './types';

type IconHighlightedStyledType = {
  styles?: IconHighlightedSizePropsType;
  backgroundColor?: string;
  disabled?: boolean;
};
export const IconHighlightedContainerStyled = styled.span<IconHighlightedStyledType>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.disabled
      ? getStyles(props.styles?.container?.disabled)
      : getStyles(props.styles?.container)}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
