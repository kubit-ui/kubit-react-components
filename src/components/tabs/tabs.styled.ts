import styled, { css } from 'styled-components';

import { ButtonType } from '@/components/button';
import { getStyles } from '@/utils/getStyles/getStyles';

import { TabsStateTypes } from './types/state';
import { TabsVariantStylesType } from './types/tabsTheme';

const TWO_TABS = 2;
const THREE_TABS = 3;

type StylesType = {
  styles: TabsVariantStylesType;
};

type TabStylesType = StylesType & {
  tabsLength: number;
  state: TabsStateTypes;
  compacted: boolean;
  right?: boolean;
  autoWidth?: boolean;
  empty?: boolean;
};

export const TabsContainerStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles.fullContainer)}
`;

export const TabsStyled = styled.div<StylesType>`
  position: relative;
  display: flex;
  ${({ styles }) => getStyles(styles.container)}

  ${({
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
  }) => css`
    ${onlyMobile} {
      overflow: hidden;
    }
  `}
`;

export const PrimaryTabItemRoveStyled = styled.button``;

PrimaryTabItemRoveStyled.defaultProps = {
  type: ButtonType.BUTTON,
};

export const OneTabStyled = styled.div``;

export const TabsLeftArrowContainerStyled = styled.button<StylesType>`
  ${({ styles }) => getStyles(styles.arrowLeftIconContainer)}
  ${({
    styles,
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
  }) => css`
    ${onlyMobile} {
      :focus-visible {
        ${getStyles(styles.arrowLeftIconContainer?.MOBILE?.focusVisible)}
      }
    }
  `}
`;

export const TabsRightArrowContainerStyled = styled.button<StylesType>`
  ${({ styles }) => getStyles(styles.arrowRightIconContainer)}
  ${({
    styles,
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
  }) => css`
    ${onlyMobile} {
      :focus-visible {
        ${getStyles(styles.arrowRightIconContainer?.MOBILE?.focusVisible)}
      }
    }
  `}
`;

export const TabStyled = styled.div<TabStylesType>`
  ${({ styles }) => getStyles(styles.tabContainer)}
  width: ${props => (props.autoWidth ? 'auto' : `calc(100% / ${props.tabsLength})`)};

  &:has(:focus-visible) {
    ${({
      styles,
      theme: {
        MEDIA_QUERIES: { onlyDesktop },
      },
    }) => css`
      ${onlyDesktop} {
        &:focus-within {
          ${getStyles(styles.tabContainer?.DESKTOP?.focusWithin)}
        }
        &:focus {
          ${getStyles(styles.tabContainer?.DESKTOP?.focus)}
        }
        &:focus-visible {
          ${getStyles(styles.tabContainer?.DESKTOP?.focusVisible)}
        }
      }
    `}
  }
  ${({
    styles,
    compacted,
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
  }) => css`
    ${onlyMobile} {
      min-width: calc(100% / ${compacted ? TWO_TABS : THREE_TABS});
      :focus-within {
        ${getStyles(styles.tabContainer?.MOBILE?.focusWithin)}
      }
    }
  `}

  > * {
    height: 100%;
  }

  & ${PrimaryTabItemRoveStyled} {
    ${props => getStyles(props.styles?.[props.state]?.tabButton)}

    &:hover {
      ${props => getStyles(props.styles?.[TabsStateTypes.HOVER]?.tabButton)}
    }

    &:active {
      ${props => getStyles(props.styles?.[TabsStateTypes.PRESSED]?.tabButton)}
    }

    &:disabled {
      ${props => getStyles(props.styles?.[TabsStateTypes.DISABLED]?.tabButton)}
    }

    // When label is empty
    ${props => props.empty && getStyles(props.styles?.[TabsStateTypes.EMPTY]?.tabButton)}
  }

  & ${OneTabStyled} {
    ${({ styles }) => getStyles(styles.oneTabContainer)}
    ${props => props.empty && getStyles(props.styles?.[TabsStateTypes.EMPTY]?.tabButton)}
  }
`;

export const TextWrapperStyled = styled.span.withConfig({
  shouldForwardProp: () => true,
})`
  display: ${isHidden => (isHidden ? 'none' : undefined)};
  text-overflow: ellipsis;
  overflow: hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export const LabelHiddenContainer = styled.span`
  display: none;
`;

export const TabsContentStyled = styled.div<StylesType & { $display?: string }>`
  ${({ styles }) => getStyles(styles.contentContainer)}
  display: ${({ $display }) => $display};
`;

export const TabsTabListStyled = styled.div<StylesType>`
  display: flex;
  width: 100%;
  ${({ styles }) => getStyles(styles.tabButtonsContainer)}

  ${({
    theme: {
      MEDIA_QUERIES: { onlyMobile },
    },
  }) => css`
    ${onlyMobile} {
      transition: 0.2s linear;
    }
  `}
  > ${TabStyled}:first-child > ${PrimaryTabItemRoveStyled} {
    ${props => getStyles(props.styles?.firstTabButton)}
  }
  > ${TabStyled}:last-child > ${PrimaryTabItemRoveStyled} {
    ${props => getStyles(props.styles?.lastTabButton)}
  }
`;
