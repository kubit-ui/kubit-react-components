import styled from 'styled-components';

import { getStyles } from '@/utils';

import { SnackbarProps } from './types/snackbarTheme';

type ThemeStylesType = {
  styles?: SnackbarProps;
};

export const SnackbarStyled = styled.div<ThemeStylesType>`
  ${({ styles }) => getStyles(styles?.container)};
`;

export const ButtonWrapper = styled.div``;

export const SnackbarIconTitleContainerWrapper = styled.div<ThemeStylesType>`
  ${({ styles }) => getStyles(styles?.iconTitleContainer)};
`;

export const SnackbarNoStatusContentWrapper = styled.div<ThemeStylesType & { withIcon: boolean }>`
  ${({ styles, withIcon }) =>
    withIcon &&
    `margin-left: calc(${styles?.icon?.width ?? '0rem'} + ${
      styles?.iconTitleContainer?.gap ?? '0rem'
    });`};
`;

export const SnackbarTextAndActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SnackbarTextWrapper = styled.div<ThemeStylesType>`
  display: flex;
  flex-direction: column;
`;
export const SnackbarTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SnackbarLinkWrapper = styled.div<ThemeStylesType & { withIcon: boolean }>`
  display: flex;
  ${({ styles, withIcon }) =>
    withIcon &&
    `margin-left: calc(${styles?.icon?.width ?? '0rem'} + ${
      styles?.iconTitleContainer?.gap ?? '0rem'
    });`};
`;

export const SnackbarDescriptionWrapper = styled.div<ThemeStylesType>`
  display: flex;
`;
