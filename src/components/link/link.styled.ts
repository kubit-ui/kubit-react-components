import styled, { css } from 'styled-components';

// mixin
import { focusVisibleAlt } from '@/styles/mixins';
import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { applyVariantStyles as applyTextVariantStyles } from '../text/text.styled';
import { TextPropsStylesType, TextVariantStylesType } from '../text/types';
import { LinkPositionType, LinkPropsStylesType, LinkPropsType, LinkStateType } from './types';

type LinkPropsExtended = {
  linkStyles: LinkPropsStylesType;
  alignCenter: boolean;
  textStyles?: TextVariantStylesType;
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

const applyLinkStateStyles = ({
  textStyles,
  linkPropsStyles,
}: {
  textStyles?: TextVariantStylesType;
  linkPropsStyles?: LinkPropsStylesType;
}) => {
  return css`
    ${getStyles(linkPropsStyles?.container)}
    ${getTypographyStyles(linkPropsStyles?.container)}
    // If textVariant is defined it should be applied before the own variant styles
    ${applyTextVariantStyles(textStyles)}
    // In alternative variants, the focus colors must be change
    ${linkPropsStyles?.altVariant && focusVisibleAlt()}
  `;
};

export const TextStyledExtended = styled.p.withConfig({
  shouldForwardProp: () => true,
})<LinkPropsExtended>`
  ${({ linkStyles, textStyles }) =>
    applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.DEFAULT] })}
  ${({ alignCenter }) =>
    alignCenter &&
    css`
      margin: auto;
    `};

  &[aria-disabled='true'] {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.DISABLED] })}
  }

  &:hover:not([aria-disabled='true']) {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.HOVER] })}
  }

  &:active:not([aria-disabled='true']) {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.PRESSED] })}
  }

  &:visited:not([aria-disabled='true']) {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.VISITED] })}
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
