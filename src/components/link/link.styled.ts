import styled, { css } from 'styled-components';

// mixin
import { focusVisibleAlt } from '@/styles/mixins';
import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { LinkPositionType, LinkPropsStylesType, LinkPropsType, LinkStateType } from './types';

type LinkPropsExtended = {
  linkStyles: LinkPropsStylesType;
  alignCenter: boolean;
};

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
`;

export const LabelIconWrapper = styled.span<LinkPropsType>`
  ${props => getStyles(props.styles?.labelIconContainer)}
  ${props => getTypographyStyles(props.styles?.labelIconContainer)}
  flex-direction: ${({ iconPosition }) =>
    iconPosition === LinkPositionType.LEFT ? 'row' : 'row-reverse'};
`;
