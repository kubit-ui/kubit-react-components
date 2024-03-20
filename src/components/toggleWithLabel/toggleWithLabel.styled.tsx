import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import type { IToggleWithLabelStyled } from './types';

export const ToggleWithLabelStyled = styled.fieldset<IToggleWithLabelStyled>`
  ${({ styles }) => getStyles(styles?.container)};
  ${({ styles }) => getTypographyStyles(styles?.container)};

  ${({ styles, displayRow }) => displayRow && getStyles(styles?.rowContainer)};
  ${({ styles, displayRow }) => displayRow && getTypographyStyles(styles?.rowContainer)};

  legend {
    ${({ styles }) => getStyles(styles?.legendContainer)};
    ${({ styles, displayRow }) => displayRow && getStyles(styles?.rowLegendContainer)};
  }
`;
