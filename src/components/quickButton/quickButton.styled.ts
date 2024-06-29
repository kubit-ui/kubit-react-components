import styled, { css } from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { QuickButtonState, QuickButtonVariantStylesType } from './types';

export const QuickButtonContainerStyled = styled.div<{
  maxWidth?: string;
  styles?: QuickButtonVariantStylesType;
}>`
  ${({ styles }) => getStyles(styles?.[QuickButtonState.DEFAULT]?.container)}
  ${({ styles }) => getTypographyStyles(styles?.[QuickButtonState.DEFAULT]?.container)}
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `};

  &:disabled {
    ${({ styles }) => getStyles(styles?.[QuickButtonState.DISABLED]?.container)}
    ${({ styles }) => getTypographyStyles(styles?.[QuickButtonState.DISABLED]?.container)}
  }

  &:hover:not(:disabled) {
    ${({ styles }) => getStyles(styles?.[QuickButtonState.HOVER]?.container)}
    ${({ styles }) => getTypographyStyles(styles?.[QuickButtonState.HOVER]?.container)}
  }

  &:active:not(:disabled) {
    ${({ styles }) => getStyles(styles?.[QuickButtonState.PRESSED]?.container)}
    ${({ styles }) => getTypographyStyles(styles?.[QuickButtonState.PRESSED]?.container)}
  }
`;

export const QuickButtonStyled = styled.button<{
  styles?: QuickButtonVariantStylesType;
}>`
  ${({ styles }) => getStyles(styles?.[QuickButtonState.DEFAULT]?.button)}

  &:disabled {
    ${({ styles }) => getStyles(styles?.[QuickButtonState.DISABLED]?.button)}
  }

  &:hover:not(:disabled) {
    ${({ styles }) => getStyles(styles?.[QuickButtonState.HOVER]?.button)}
  }

  &:active:not(:disabled) {
    ${({ styles }) => getStyles(styles?.[QuickButtonState.PRESSED]?.button)}
  }
`;
