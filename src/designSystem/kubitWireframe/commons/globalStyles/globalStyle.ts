import { css } from 'styled-components';

import { FONT_FAMILY } from '../foundations/typography';
import { FONTS_KUBIT_WIREFRAME_GLOBAL_STYLES } from './fonts';

export const KUBIT_WIREFRAME_GLOBAL_STYLES = css`
  ${FONTS_KUBIT_WIREFRAME_GLOBAL_STYLES}

  html,
  body,
  * {
    font-family: ${FONT_FAMILY.font_family_gt_america_extended};
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
