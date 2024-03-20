import { css } from 'styled-components';

import GTAmericaExpandedBold from '../fonts/GT-America-Expanded-Medium.otf';
import GTAmericaExpandedRegular from '../fonts/GT-America-Expanded-Regular.otf';
import GTAmericaExpandedLight from '../fonts/GT-America-ExpandedLight.otf';
import GTAmericaExtendedLight from '../fonts/GT-America-Extended-Light.otf';
import GTAmericaExtendedBold from '../fonts/GT-America-Extended-Medium.otf';
import GTAmericaExtendedRegular from '../fonts/GT-America-Extended-Regular.ttf';
import RobotoMonoBold from '../fonts/RobotoMono-Bold.ttf';
import RobotoMonoLight from '../fonts/RobotoMono-Light.ttf';
import RobotoMonoMedium from '../fonts/RobotoMono-Medium.ttf';

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
    font-family: 'Roboto-Mono Font';
    font-weight: 700;
    src: url(${RobotoMonoBold}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto-Mono Font';
    font-weight: 300;
    src: url(${RobotoMonoLight}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto-Mono Font';
    font-weight: 400;
    src: url(${RobotoMonoMedium}) format('truetype');
  }
`;
