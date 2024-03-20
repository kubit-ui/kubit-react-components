import { css } from 'styled-components';

import { FOCUS_STYLES } from '../foundations/focusStyles';
import { FONT_FAMILY } from '../foundations/typography';
import { FONTS_KUBIT_GLOBAL_STYLES } from './fonts';

export const KUBIT_GLOBAL_STYLES = css`
  ${FONTS_KUBIT_GLOBAL_STYLES}

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
  :focus-visible {
    ${FOCUS_STYLES}
  }
`;
