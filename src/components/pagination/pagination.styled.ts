import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { PaginationStyledProps } from './types/paginationTheme';
import { PaginationState } from './types/state';

export const PaginationContainerStyled = styled.div<{
  styles: PaginationStyledProps;
}>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const PaginationPagesContainerStyled = styled.div<{
  styles: PaginationStyledProps;
}>`
  ${({ styles }) => getStyles(styles.pagesContainer)};
`;

export const PaginationPageContainerStyled = styled.span<{
  styles: PaginationStyledProps;
  state: PaginationState;
  $isClickable: boolean;
}>`
  ${({ styles, state }) => getStyles(styles[state]?.pageContainer)};
  ${({ styles, state, $isClickable }) =>
    $isClickable && getStyles(styles[state]?.pageContainer?.clickable)};
`;
