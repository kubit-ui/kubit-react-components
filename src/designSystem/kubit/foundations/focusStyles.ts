import { css } from 'styled-components';

import { COLORS } from './colors';
import { SPACINGS } from './spacings';

const inner_border = {
  border_color: COLORS.NEUTRAL.color_neutral_border_250,
  border_weight: SPACINGS.spacing_100,
} as const;
const outer_border = {
  border_color: '#2C71DB',
  border_weight: SPACINGS.spacing_100,
} as const;

export const FOCUS_STYLES = css`
  /* Inner border */
  box-shadow: 0 0 0 ${inner_border.border_weight} ${inner_border.border_color};
  /* Outer border */
  outline-style: solid;
  outline-offset: ${inner_border.border_weight};
  outline-width: ${outer_border.border_weight};
  outline-color: ${outer_border.border_color};
`;
