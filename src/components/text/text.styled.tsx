import styled, { CSSProp, css } from 'styled-components';

import { getTypographyStyles } from '@/utils/getStyles/getStyles';

import { ITextStyled } from './types/text';
import { TextPropsStylesType, TextThemeStylesType } from './types/textTheme';

const applyDevicePropsTextStyles = (props: TextPropsStylesType) => css`
  color: ${props.color};
  cursor: ${props.cursor};
  display: ${props.display};
  text-decoration: ${props.decoration};
  text-transform: ${props.$transform};
  text-align: ${props.align};
  font-weight: ${props.weight};
  filter: ${props.filter};
  ${props.isDisabled &&
  css`
    pointer-events: none;
  `}
`;

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

export const applyVariantStyles = (textStyles?: TextThemeStylesType): CSSProp => {
  return css`
    font-family: ${textStyles?.font_family};
    font-weight: ${textStyles?.font_weight};
    font-size: ${textStyles?.typography?.DESKTOP?.font_size};
    line-height: ${textStyles?.typography?.DESKTOP?.line_height};

    sup {
      font-size: ${textStyles?.typography?.DESKTOP?.sup?.font_size};
      vertical-align: super;
    }
    sub {
      font-size: ${textStyles?.typography?.DESKTOP?.sub?.font_size};
      vertical-align: sub;
    }

    ${({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
    }) => css`
      ${onlyDesktop} {
        font-size: ${textStyles?.typography?.DESKTOP?.font_size};
        line-height: ${textStyles?.typography?.DESKTOP?.line_height};
        sup {
          font-size: ${textStyles?.typography?.DESKTOP?.sup?.font_size};
        }
        sub {
          font-size: ${textStyles?.typography?.DESKTOP?.sub?.font_size};
        }
      }
      ${onlyTablet} {
        font-size: ${textStyles?.typography?.TABLET?.font_size};
        line-height: ${textStyles?.typography?.TABLET?.line_height};
        sup {
          font-size: ${textStyles?.typography?.TABLET?.sup?.font_size};
        }
        sub {
          font-size: ${textStyles?.typography?.TABLET?.sub?.font_size};
        }
      }
      ${onlyMobile} {
        font-size: ${textStyles?.typography?.MOBILE?.font_size};
        line-height: ${textStyles?.typography?.MOBILE?.line_height};
        sup {
          font-size: ${textStyles?.typography?.MOBILE?.sup?.font_size};
        }
        sub {
          font-size: ${textStyles?.typography?.MOBILE?.sub?.font_size};
        }
      }
    `}
  `;
};

const TEXT_STYLED_TRANSIENT_PROPS = [
  'color',
  'styles',
  'weight',
  'isDisabled',
  'align',
  'decoration',
  'cursor',
  'customTypography',
  'display',
];

export const TextStyled = styled.p.withConfig({
  shouldForwardProp: prop => !TEXT_STYLED_TRANSIENT_PROPS.includes(prop),
})<ITextStyled>`
  // Apply prop customTypography styles
  // In this case, when font_variant in customTypography is specified, apply font_variant theme. font_variant may change for each device
  // Then, apply the rest of the tokens in customTypography
  ${({ customTypography, theme: { TEXT_STYLES } }) => {
    if (!customTypography) {
      return;
    }
    return css`
      ${applyVariantStyles(TEXT_STYLES[customTypography.font_variant || 0])}
      ${({
        theme: {
          MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
        },
      }) => css`
        ${onlyDesktop} {
          ${applyVariantStyles(TEXT_STYLES[customTypography.DESKTOP?.font_variant || 0])}
        }
        ${onlyTablet} {
          ${applyVariantStyles(TEXT_STYLES[customTypography.TABLET?.font_variant || 0])}
        }
        ${onlyMobile} {
          ${applyVariantStyles(TEXT_STYLES[customTypography.MOBILE?.font_variant || 0])}
        }
      `}
      ${getTypographyStyles(customTypography)}
    `;
  }}
  // Apply theme generated by the variant
  ${({ styles }) => applyVariantStyles(styles)}
  // Apply props tokens
  ${props => applyPropsTextStyles(props)}
`;
