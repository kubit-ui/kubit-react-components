import styled, { css } from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import {
  DrawerDeviceStyleType,
  DrawerLevelPositionTypes,
  DrawerVariantPositionTypes,
} from './types';

type DrawerStylesType = {
  level?: DrawerLevelPositionTypes;
  styles: DrawerDeviceStyleType;
  position?: DrawerVariantPositionTypes;
  blocked?: boolean;
};

export const DrawerTitleContentFooterContainerStyled = styled.div<DrawerStylesType>`
  padding-top: ${props =>
    !props.blocked ? 0 : props.styles.titleContentFooterContainer?.paddingTopIsBlocking};
  display: flex;
  flex-direction: column;
  //Height is 100svh minus DrawerNavigationStyled total height
  height: ${props =>
    !props.blocked
      ? `calc(var(--100svh, 100vh) - (${props.styles.iconContainer?.padding_top} + ${props.styles.iconContainer?.padding_right} + ${props.styles.icon?.width}))`
      : 'var(--100svh, 100vh)'};
  ${props => getStyles(props.styles.titleContentFooterContainer)}
`;

export const DrawerTitleStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})``;

export const DrawerStyled = styled.div<DrawerStylesType>`
  background-color: #fff;
  max-height: 100vh;
  max-height: var(--100svh, 100vh);
  max-height: 100svh;
  min-width: 50vw;
  max-width: 50vw;
  overflow-y: auto;
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet },
      },
    }) => css`
      ${onlyDesktop} {
        min-height: 100vh;
        min-height: var(--100svh, 100vh);
        min-height: 100svh;
      }
      ${onlyTablet} {
        min-height: 100vh;
        min-height: var(--100svh, 100vh);
        min-height: 100svh;
      }
    `};

  ${DrawerTitleStyled} {
    transition: box-shadow 300ms;
    word-break: break-word;
    top: ${props =>
      `calc(${props.styles.icon?.width} + ${props.styles.iconContainer?.padding_top})`};
    ${props => getStyles(props.styles.titleContainer)}
    ${props => getTypographyStyles(props.styles.titleContainer)}
  }

  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyMobile, onlyTablet },
      },
    }) => css`
      ${onlyMobile} {
        max-width: inherit;
        max-height: inherit;
      }
      ${onlyTablet} {
        max-width: 100vw;
        min-width: 100vw;
      }
    `};
  ${props => props.position && getStyles(props.styles.container?.[props.position])}
`;

export const DrawerNavigationStyled = styled.div<DrawerStylesType>`
  top: 0;
  width: 100%;
  display: flex;
  justify-content: ${props =>
    props.level === DrawerLevelPositionTypes.FIRST_LEVEL ? 'flex-end' : 'flex-start'};
  ${props => getStyles(props.styles.iconContainer)}
`;

export const DrawerContentStyled = styled.div<DrawerStylesType>`
  max-height: 100%;
  word-break: break-word;
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  min-height: 5rem;
  height: 100%;

  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyMobile },
      },
    }) => css`
      ${onlyMobile} {
        height: auto;
      }
    `};
  ${props => getStyles(props.styles.content)}
  > *:first-child {
    ${props => getStyles(props.styles.content?.firstChild)};
  }
  > * {
    ${props => getStyles(props.styles.content?.childs)};
  }
  > *:last-child {
    ${props => getStyles(props.styles.content?.lastChild)};
  }
`;

export const DrawerFooterStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})<{ customFooterStyles: DrawerDeviceStyleType }>`
  bottom: 0;
  width: 100%;
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyMobile },
      },
    }) => css`
      ${onlyMobile} {
        margin-top: 0;
      }
    `};
  ${props => getStyles(props.customFooterStyles?.footer)}
`;
