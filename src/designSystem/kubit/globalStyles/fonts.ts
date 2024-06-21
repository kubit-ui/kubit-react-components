import { css } from 'styled-components';

import GTAmericaExpandedBold from '../fonts/GT-America-Expanded-Medium.otf';
import GTAmericaExpandedRegular from '../fonts/GT-America-Expanded-Regular.otf';
import GTAmericaExpandedLight from '../fonts/GT-America-ExpandedLight.otf';
import GTAmericaExtendedLight from '../fonts/GT-America-Extended-Light.otf';
import GTAmericaExtendedBold from '../fonts/GT-America-Extended-Medium.otf';
import GTAmericaExtendedRegular from '../fonts/GT-America-Extended-Regular.ttf';
import NunitoBlack from '../fonts/NunitoSans_10pt-Black.ttf';
import NunitoBold from '../fonts/NunitoSans_10pt-Bold.ttf';
import NunitoExtraBold from '../fonts/NunitoSans_10pt-ExtraBold.ttf';
import NunitoExtraLight from '../fonts/NunitoSans_10pt-ExtraLight.ttf';
import NunitoLight from '../fonts/NunitoSans_10pt-Light.ttf';
import NunitoRegular from '../fonts/NunitoSans_10pt-Regular.ttf';
import NunitoSemiBold from '../fonts/NunitoSans_10pt-SemiBold.ttf';

export const FONTS_KUBIT_GLOBAL_STYLES = css`
  @font-face {
    font-family: 'GT-America-Expanded Font';
    font-weight: 700;
    src: url(${GTAmericaExpandedBold}) format('truetype');
  }

  @font-face {
    font-family: 'GT-America-Expanded Font';
    font-weight: 400;
    src: url(${GTAmericaExpandedRegular}) format('truetype');
  }

  @font-face {
    font-family: 'GT-America-Expanded Font';
    font-weight: 300;
    src: url(${GTAmericaExpandedLight}) format('truetype');
  }

  @font-face {
    font-family: 'GT-America-Extended Font';
    font-weight: 700;
    src: url(${GTAmericaExtendedBold}) format('truetype');
  }

  @font-face {
    font-family: 'GT-America-Extended Font';
    font-weight: 400;
    src: url(${GTAmericaExtendedRegular}) format('truetype');
  }

  @font-face {
    font-family: 'GT-America-Extended Font';
    font-weight: 300;
    src: url(${GTAmericaExtendedLight}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 200;
    src: url(${NunitoExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 300;
    src: url(${NunitoLight}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 400;
    src: url(${NunitoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 500;
    src: url(${NunitoSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 600;
    src: url(${NunitoBold}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 700;
    src: url(${NunitoExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito-Sans Font';
    font-weight: 800;
    src: url(${NunitoBlack}) format('truetype');
  }
`;
