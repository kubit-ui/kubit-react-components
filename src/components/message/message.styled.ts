import styled from 'styled-components';

import { IconTypes } from '@/types';
import { getStyles } from '@/utils';

import { MessagePropsThemeType } from './types/messageTheme';

export const ParentContainerStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.parentContainer)};
`;

export const MessageStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const MessageHeaderStyled = styled.div<{
  styles: MessagePropsThemeType;
  isLargeMessage?: boolean;
  withIcon?: boolean;
}>`
  ${({ styles, withIcon }) =>
    withIcon &&
    `margin-right: calc(${styles?.closeIcon?.width ?? '0rem'} + ${
      styles?.closeIconContainer?.gap ?? '0rem'
    });`};
  ${({ styles }) => getStyles(styles.headerContainer)};
  ${({ styles, isLargeMessage }) =>
    isLargeMessage && getStyles(styles.headerContainerLargeMessage)};
`;

export const MessageTextStyled = styled.div<{ extraPaddingGap?: boolean; styles?: IconTypes }>`
  display: flex;
  flex-direction: column;
  padding-right: ${props => (props.extraPaddingGap ? props.styles?.width : '0')};
  word-break: break-word;
`;

export const MessageContentStyled = styled.div<{
  styles: MessagePropsThemeType;
  isLargeMessage?: boolean;
}>`
  ${({ styles }) => getStyles(styles.contentContainer)};
  ${({ styles, isLargeMessage }) =>
    isLargeMessage && getStyles(styles.contentContainerLargeMessage)};
`;

export const ExtraActioButtonWrapperStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.extraActionButtonContainer)};
`;

export const ButtonSectionStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.buttonSectionContainer)};
`;

export const ActioButtonWrapperStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.actionButtonContainer)};
`;

export const CloseButtonSectionStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.closeIconContainer)};
`;

export const LinkContainerStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.linkContainer)};
`;

export const LinksContainerStyled = styled.div<{
  styles: MessagePropsThemeType;
}>`
  ${({ styles }) => getStyles(styles.linksContainer)};
`;
