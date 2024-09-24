import styled, { css } from 'styled-components';

//utils
import { getStyles } from '@/utils/getStyles/getStyles';

import type { IModalStyled } from './types';

type ModalShowScrollType = {
  $minContentHeight?: string;
};

const commonModalContainerStyled = (
  mediaQuery: string,
  minWidth?: string,
  minHeight?: string,
  maxWidth?: string,
  maxHeight?: string,
  hasFooter = false
) =>
  mediaQuery &&
  css`
    ${mediaQuery} {
      ${minWidth &&
      css`
        min-width: ${minWidth};
      `}
      ${minHeight &&
      css`
        min-height: ${minHeight};
      `};
      ${maxWidth &&
      css`
        max-width: ${maxWidth || '100vw'};
      `}
      ${maxHeight &&
      css`
        max-height: ${maxHeight || '100vh'};
      `}
      padding-bottom: ${hasFooter ? '0' : null};
    }
  `;

export const ModalStyled = styled.div<IModalStyled>`
  ${props => getStyles(props.$styles.container)};
  ${({
    hasFooter,
    $minHeight,
    $minWidth,
    $maxHeight,
    $maxWidth,
    theme: {
      MEDIA_QUERIES: { onlyTablet, onlyDesktop, onlyMobile },
    },
  }) => css`
    ${commonModalContainerStyled(
      onlyDesktop,
      $minWidth,
      $minHeight,
      $maxWidth,
      $maxHeight,
      hasFooter
    )}
    ${commonModalContainerStyled(
      onlyTablet,
      $minWidth,
      $minHeight,
      $maxWidth,
      $maxHeight,
      hasFooter
    )}
    ${commonModalContainerStyled(
      onlyMobile,
      $minWidth,
      $minHeight,
      $maxWidth,
      $maxHeight,
      hasFooter
    )}
  `}
`;

export const ModalHeaderStyled = styled.div<IModalStyled>`
  ${props => getStyles(props.$styles.headerContainer)}
`;

export const TitleHiddenContainer = styled.span`
  display: none;
`;

export const ModalCloseButtonStyled = styled.div<IModalStyled>`
  ${props => getStyles(props.$styles.closeButtonContainer)};
`;

export const ModalContentStyled = styled.div<IModalStyled & ModalShowScrollType>`
  word-break: break-word;
  line-height: 1.5rem;
  ${props => getStyles(props.$styles.content)}
  min-height: ${({ $minContentHeight }) => $minContentHeight};
`;

export const ModalFooterStyled = styled.div<IModalStyled>`
  ${props => getStyles(props.$styles.footer)}
`;

export const DraggableIcon = styled.div<IModalStyled>`
  ${props => getStyles(props.$styles?.dragIconContainer)}
`;
