import styled, { css } from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

// mixin
import { focusVisibleAlt } from '../../styles/mixins/focusAlt.mixin';
import { applyVariantStyles as applyTextVariantStyles } from '../text/text.styled';
import { TextPropsStylesType, TextVariantStylesType } from '../text/types/textTheme';
import { LinkPropsStylesType, LinkPropsType } from './types/linkTheme';
import { LinkPositionType } from './types/position';
import { LinkStateType } from './types/state';

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
    ${props => applyPropsTextStyles(props)}
  }

  &:hover:not([aria-disabled='true']) {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.HOVER] })}
    ${props => applyPropsTextStyles(props)}
  }

  &:active:not([aria-disabled='true']) {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.PRESSED] })}
    ${props => applyPropsTextStyles(props)}
  }

  &:visited:not([aria-disabled='true']) {
    ${({ linkStyles, textStyles }) =>
      applyLinkStateStyles({ textStyles, linkPropsStyles: linkStyles?.[LinkStateType.VISITED] })}
    ${props => applyPropsTextStyles(props)}
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
