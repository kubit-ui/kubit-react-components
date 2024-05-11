import styled, { css } from 'styled-components';

// mixin
import { focusVisibleAlt } from '@/styles/mixins';
import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { TextPropsStylesType } from '../text/types';
import { LinkPositionType, LinkPropsStylesType, LinkPropsType, LinkStateType } from './types';

type LinkPropsExtended = {
  linkStyles: LinkPropsStylesType;
  alignCenter: boolean;
};
const applyDevicePropsTextStyles = (props: TextPropsStylesType) => {
  return css`
    color: ${props.color};
    display: ${props.display};
    text-decoration: ${props.decoration};
    text-align: ${props.align};
    font-weight: ${props.weight};
    ${props.isDisabled &&
    css`
      pointer-events: none;
    `}
  `;
};

const applyPropsTextStyles = (props: TextPropsStylesType) => css`
  ${applyDevicePropsTextStyles(props)}
  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
  }) => css`
    ${onlyDesktop} {
      ${applyDevicePropsTextStyles(props)}
    }
    ${onlyTablet} {
      ${applyDevicePropsTextStyles(props)}
    }
    ${onlyMobile} {
      ${applyDevicePropsTextStyles(props)}
    }
  `}
`;

export const TextStyledExtended = styled.p.withConfig({
  shouldForwardProp: () => true,
})<LinkPropsExtended>`
  ${({ linkStyles }) => getStyles(linkStyles?.[LinkStateType.DEFAULT]?.container)}
  ${({ linkStyles }) => getTypographyStyles(linkStyles?.[LinkStateType.DEFAULT]?.container)}
  // In alternative variants, the focus colors must be change
  ${({ linkStyles }) => linkStyles?.[LinkStateType.DEFAULT]?.altVariant && focusVisibleAlt()}
  ${({ alignCenter }) =>
    alignCenter &&
    css`
      margin: auto;
    `};

  &[aria-disabled='true'] {
    ${({ linkStyles }) => getStyles(linkStyles?.[LinkStateType.DISABLED]?.container)}
    ${({ linkStyles }) => getTypographyStyles(linkStyles?.[LinkStateType.DISABLED]?.container)}
    // In alternative variants, the focus colors must be change
    ${({ linkStyles }) => linkStyles?.[LinkStateType.DEFAULT]?.altVariant && focusVisibleAlt()}
  }

  &:hover:not([aria-disabled='true']) {
    ${({ linkStyles }) => getStyles(linkStyles?.[LinkStateType.HOVER]?.container)}
    ${({ linkStyles }) => getTypographyStyles(linkStyles?.[LinkStateType.HOVER]?.container)}
    // In alternative variants, the focus colors must be change
    ${({ linkStyles }) => linkStyles?.[LinkStateType.HOVER]?.altVariant && focusVisibleAlt()}
  }

  &:active:not([aria-disabled='true']) {
    ${({ linkStyles }) => getStyles(linkStyles?.[LinkStateType.PRESSED]?.container)}
    ${({ linkStyles }) => getTypographyStyles(linkStyles?.[LinkStateType.PRESSED]?.container)}
    // In alternative variants, the focus colors must be change
    ${({ linkStyles }) => linkStyles?.[LinkStateType.PRESSED]?.altVariant && focusVisibleAlt()}
  }

  &:visited:not([aria-disabled='true']) {
    ${({ linkStyles }) => getStyles(linkStyles?.[LinkStateType.VISITED]?.container)}
    ${({ linkStyles }) => getTypographyStyles(linkStyles?.[LinkStateType.VISITED]?.container)}
    // In alternative variants, the focus colors must be change
    ${({ linkStyles }) => linkStyles?.[LinkStateType.VISITED]?.altVariant && focusVisibleAlt()}
  }

  // Apply props tokens
  ${props => applyPropsTextStyles(props)}
`;

export const LabelIconWrapper = styled.span<LinkPropsType>`
  ${props => getStyles(props.styles?.labelIconContainer)}
  ${props => getTypographyStyles(props.styles?.labelIconContainer)}
  flex-direction: ${({ iconPosition }) =>
    iconPosition === LinkPositionType.LEFT ? 'row' : 'row-reverse'};
`;
