import styled, { css } from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { IToggleWithLabelStyled, LABEL_POSITION } from './types';

const getLabelPositionStyles = (labelPosition: LABEL_POSITION) => {
  if (labelPosition === LABEL_POSITION.LEFT) {
    return css`
      flex-direction: row;
    `;
  } else if (labelPosition === LABEL_POSITION.RIGHT) {
    return css`
      flex-direction: row-reverse;
    `;
  }
  return css`
    flex-direction: column;
  `;
};

const getLegendStyles = (labelPosition: LABEL_POSITION) => {
  if (labelPosition !== LABEL_POSITION.TOP) {
    return css`
      display: contents;
    `;
  }
  return css``;
};

/* deprecated - deleted displayRowStyles when the 'displayRow' prop is removed */
const displayRowStyles = (styles, displayRow?: boolean) => {
  return (
    displayRow &&
    css`
      ${displayRow && getStyles(styles)};
      ${displayRow && getTypographyStyles(styles)};
    `
  );
};

export const ToggleWithLabelStyled = styled.fieldset<
  IToggleWithLabelStyled & { labelPosition?: LABEL_POSITION }
>`
  ${({ styles }) => getStyles(styles?.container)};
  ${({ styles }) => getTypographyStyles(styles?.container)};

  ${({ styles, displayRow, labelPosition }) =>
    labelPosition
      ? getLabelPositionStyles(labelPosition)
      : displayRowStyles(styles?.rowContainer, displayRow)};

  legend {
    ${({ styles }) => getStyles(styles?.legendContainer)};
    ${({ styles, displayRow, labelPosition }) =>
      labelPosition
        ? getLegendStyles(labelPosition)
        : displayRowStyles(styles?.rowLegendContainer, displayRow)};
  }
`;
