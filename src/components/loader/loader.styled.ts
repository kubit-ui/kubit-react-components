import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ILoaderStyled } from './types';

export const LoaderStyled = styled.span<ILoaderStyled>`
  ${props => getStyles(props.styles.container)}
  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
      height: ${$width};
    `};
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `};
  ${({ styles }) => css`
    ${styles.animation}
  `}
`;

export const LoaderWrapperStyled = styled.span<ILoaderStyled>`
  display: flex;
  ${props => getStyles(props.styles.parentContainer)}
`;
