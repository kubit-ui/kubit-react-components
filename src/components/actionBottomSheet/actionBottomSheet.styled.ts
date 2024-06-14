import styled, { css } from 'styled-components';

import { CommonStyleType } from '@/types';
import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { ActionBottomSheetVariantStylesType } from './types/actionBottomSheetTheme';

type ActionBottomSheetStylesTypes = {
  styles: ActionBottomSheetVariantStylesType;
};

type IActionBottomSheetStyles = {
  styles?: CommonStyleType;
};

export const ActionBottomSheetStyled = styled.div<IActionBottomSheetStyles & { $height?: string }>`
  max-height: 100vh;
  max-height: var(--100svh, 100vh);
  max-height: 100svh;
  ${props => getStyles(props.styles)}
  height: ${({ $height }) => $height};
`;

export const ActionBottomSheetHeaderStyled = styled.div<IActionBottomSheetStyles>`
  ${props => getStyles(props.styles)}
`;

export const ActionBottomSheetIconSyled = styled.div<IActionBottomSheetStyles>`
  display: flex;
  ${props => getStyles(props.styles)}
`;

export const ActionBottomSheetTitleSyled = styled.div<ActionBottomSheetStylesTypes>`
  display: block;
  ${({ theme: { MEDIA_QUERIES } }) => css`
    ${MEDIA_QUERIES?.onlyDesktop} {
      display: 'block';
    }
  `}
  ${props => getStyles(props.styles.titleContainer)}
    ${props => getTypographyStyles(props.styles.titleContainerFont)}
`;

export const ActionBottomSheetHeaderContentStyled = styled.div<ActionBottomSheetStylesTypes>`
  ${props => getStyles(props.styles.headerContent)}
`;

export const ActionBottomSheetContentStyled = styled.div<IActionBottomSheetStyles>`
  ${props => getStyles(props.styles)};

  ${({ theme: { MEDIA_QUERIES } }) => css`
    ${MEDIA_QUERIES?.mobileAndTablet} {
      max-height: 100vh;
      max-height: var(--100svh, 100vh);
      max-height: 100svh;
    }
  `}
`;
