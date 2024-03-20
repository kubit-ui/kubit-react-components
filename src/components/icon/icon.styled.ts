import styled, { css } from 'styled-components';

import { srOnlyMixin } from '@/styles/mixins/srOnly.mixin';
import { IconGenericType, IconTypes } from '@/types/index';

type ImgTypes = {
  $moveRound: string;
  $transitionDuration: string;
  $height?: string;
  $width?: string;
  $customIconStyles?: IconTypes;
};

type SvgTypes = {
  $srcImage: string;
  $width?: string;
  $height?: string;
  $moveRound?: string;
  $transitionDuration?: string;
  twistIconAnimation?: boolean;
  twistAnimationTransformValue?: string | null | undefined;
  $color?: string;
  $customIconStyles?: IconTypes;
};

const commonIconSVGStyled = (styles?: IconGenericType) =>
  styles &&
  css`
    background-color: ${styles.color};
    width: ${styles.width};
    height: ${styles.height};
    min-width: ${styles.width};
    min-height: ${styles.height};
  `;

export const IconSVGStyled = styled.svg<SvgTypes>`
  ${({
    $customIconStyles,
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
  }) =>
    $customIconStyles &&
    css`
      ${commonIconSVGStyled($customIconStyles)}
      ${onlyDesktop} {
        ${commonIconSVGStyled($customIconStyles.DESKTOP)}
      }
      ${onlyTablet} {
        ${commonIconSVGStyled($customIconStyles.TABLET)}
      }
      ${onlyMobile} {
        ${commonIconSVGStyled($customIconStyles.MOBILE)}
      }
    `}
  display: inline-block;
  -webkit-mask-image: ${({ $srcImage }) => `url("${$srcImage}")`};
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  mask-image: ${({ $srcImage }) => `url("${$srcImage}")`};
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  justify-content: center;
  transform: rotate(${props => props.$moveRound});
  transition-property: transform;
  transition-duration: ${props => props.$transitionDuration};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${({ twistAnimationTransformValue }) => {
    if (twistAnimationTransformValue) {
      return css`
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        transform: ${twistAnimationTransformValue};
      `;
    }
    return null;
  }}

  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
    $width,
    $height,
    $color,
  }) => css`
    ${commonIconSVGStyled({ color: $color, height: $height, width: $width })}
    ${onlyDesktop} {
      ${commonIconSVGStyled({ color: $color, height: $height, width: $width })}
    }
    ${onlyTablet} {
      ${commonIconSVGStyled({ color: $color, height: $height, width: $width })}
    }
    ${onlyMobile} {
      ${commonIconSVGStyled({ color: $color, height: $height, width: $width })}
    }
  `}
`;

const commonIconStyled = (styles?: IconGenericType) =>
  styles &&
  css`
    width: ${styles.width};
    height: ${styles.height};
    min-width: ${styles.width};
    min-height: ${styles.height};
  `;

export const IconStyled = styled.img<ImgTypes>`
  ${({ $customIconStyles, theme: { MEDIA_QUERIES } }) =>
    $customIconStyles &&
    css`
      ${commonIconStyled($customIconStyles)}
      ${MEDIA_QUERIES?.onlyDesktop} {
        ${commonIconStyled($customIconStyles.DESKTOP)}
      }
      ${MEDIA_QUERIES?.onlyTablet} {
        ${commonIconStyled($customIconStyles.TABLET)}
      }
      ${MEDIA_QUERIES?.onlyMobile} {
        ${commonIconStyled($customIconStyles.MOBILE)}
      }
    `}

  transform: rotate(${props => props.$moveRound});
  transition-duration: ${props => props.$transitionDuration};

  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
    $width,
    $height,
  }) => css`
    ${commonIconStyled({ width: $width, height: $height })}
    ${onlyDesktop} {
      ${commonIconStyled({ width: $width, height: $height })}
    }
    ${onlyTablet} {
      ${commonIconStyled({ width: $width, height: $height })}
    }
    ${onlyMobile} {
      ${commonIconStyled({ width: $width, height: $height })}
    }
  `}
`;

const commonIconComplexStyled = (styles?: IconGenericType) =>
  styles &&
  css`
    width: ${styles.width};
    height: ${styles.height};
    min-width: ${styles.width};
    min-height: ${styles.height};
    path {
      fill: ${styles.color};
    }
  `;

export const IconComplexStyled = styled.span<SvgTypes>`
  display: inline-flex;
  transform: rotate(${props => props.$moveRound});
  transition-duration: ${props => props.$transitionDuration};
  align-items: center;

  ${({ twistAnimationTransformValue }) => {
    if (twistAnimationTransformValue) {
      return css`
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        transform: ${twistAnimationTransformValue};
      `;
    }
    return null;
  }}

  svg {
    ${({
      $customIconStyles,
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
    }) =>
      $customIconStyles &&
      css`
        ${commonIconComplexStyled($customIconStyles)};
        ${onlyDesktop} {
          ${commonIconComplexStyled($customIconStyles.DESKTOP)};
        }
        ${onlyTablet} {
          ${commonIconComplexStyled($customIconStyles.TABLET)};
        }
        ${onlyMobile} {
          ${commonIconComplexStyled($customIconStyles.MOBILE)};
        }
      `}

    ${({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
      $width,
      $height,
      $color,
    }) => css`
      ${commonIconComplexStyled({ color: $color, width: $width, height: $height })};
      ${onlyDesktop} {
        ${commonIconComplexStyled({ color: $color, width: $width, height: $height })};
      }
      ${onlyTablet} {
        ${commonIconComplexStyled({ color: $color, width: $width, height: $height })};
      }
      ${onlyMobile} {
        ${commonIconComplexStyled({ color: $color, width: $width, height: $height })};
      }
    `}
  }
`;

const commonIconButtonStyled = (styles?: IconGenericType) =>
  styles &&
  css`
    max-width: ${styles.width};
    max-height: ${styles.height};
  `;

export const IconButtonStyled = styled.button<{
  $width?: string;
  $height?: string;
  $customIconStyles?: IconTypes;
}>`
  ${({
    $customIconStyles,
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
  }) =>
    $customIconStyles &&
    css`
      ${commonIconButtonStyled($customIconStyles)}
      ${onlyDesktop} {
        ${commonIconButtonStyled($customIconStyles.DESKTOP)}
      }
      ${onlyTablet} {
        ${commonIconButtonStyled($customIconStyles.TABLET)}
      }
      ${onlyMobile} {
        ${commonIconButtonStyled($customIconStyles.MOBILE)}
      }
    `}
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  :disabled {
    cursor: default;
  }
  :focus {
    border-radius: 0.25rem;
  }
  min-width: 1.5rem; //accesibility
  min-height: 1.5rem; //accesibility

  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
    $width,
    $height,
  }) => css`
    ${commonIconButtonStyled({ height: $height, width: $width })}
    ${onlyDesktop} {
      ${commonIconButtonStyled({ height: $height, width: $width })}
    }
    ${onlyTablet} {
      ${commonIconButtonStyled({ height: $height, width: $width })}
    }
    ${onlyMobile} {
      ${commonIconButtonStyled({ height: $height, width: $width })}
    }
  `}
`;

export const IconTitleStyled = styled.span`
  ${srOnlyMixin}
`;
