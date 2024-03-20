import styled, { css } from 'styled-components';

import { srOnlyMixin } from '@/styles/mixins/srOnly.mixin';
import { IllustrationGenericType, IllustrationTypes } from '@/types';

type ImgTypes = {
  moveRound: string;
  transitionDuration: string;
  $height?: string;
  $width?: string;
  customIllustrationStyles?: IllustrationTypes;
};

const commonIllustrationStyled = (styles?: IllustrationGenericType) =>
  styles &&
  css`
    width: ${styles.width};
    height: ${styles.height};
    min-width: ${styles.width};
    min-height: ${styles.height};
  `;

export const IllustrationStyled = styled.img<ImgTypes>`
  ${({
    customIllustrationStyles,
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
  }) =>
    customIllustrationStyles &&
    css`
      ${commonIllustrationStyled(customIllustrationStyles)}
      ${onlyDesktop} {
        ${commonIllustrationStyled(customIllustrationStyles.DESKTOP)}
      }
      ${onlyTablet} {
        ${commonIllustrationStyled(customIllustrationStyles.TABLET)}
      }
      ${onlyMobile} {
        ${commonIllustrationStyled(customIllustrationStyles.MOBILE)}
      }
    `}
  transform: rotate(${props => props.moveRound});
  transition-duration: ${props => props.transitionDuration};

  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
    $width,
    $height,
  }) => css`
    ${commonIllustrationStyled({ height: $height, width: $width })}
    ${onlyDesktop} {
      ${commonIllustrationStyled({ height: $height, width: $width })}
    }
    ${onlyTablet} {
      ${commonIllustrationStyled({ height: $height, width: $width })}
    }
    ${onlyMobile} {
      ${commonIllustrationStyled({ height: $height, width: $width })}
    }
  `}
`;

export const IllustrationButtonStyled = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;

export const IllustrationTitleStyled = styled.span`
  ${srOnlyMixin}
`;
