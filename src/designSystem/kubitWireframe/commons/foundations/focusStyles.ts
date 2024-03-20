import { CSSProp, css } from 'styled-components';

import { SPACINGS } from './spacings';

const inner_border = (COLORS: { [key: string]: { [key: string]: string } }) => {
  return {
    border_color: COLORS.NEUTRAL.color_neutral_border_250,
    border_weight: SPACINGS.spacing_100,
  };
};

const outer_border = (COLORS: { [key: string]: { [key: string]: string } }) => {
  return {
    border_color: COLORS.NEUTRAL.color_neutral_border_250,
    border_weight: SPACINGS.spacing_100,
  };
};

export const getFocusStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): CSSProp => css`
  /* Inner border */
  box-shadow: 0 0 0 ${inner_border(COLORS).border_weight} ${inner_border(COLORS).border_color};
  /* Outer border */
  outline-style: solid;
  outline-offset: ${inner_border(COLORS).border_weight};
  outline-width: ${outer_border(COLORS).border_weight};
  outline-color: ${outer_border(COLORS).border_color};
`;
