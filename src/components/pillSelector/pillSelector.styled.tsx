import styled, { css } from 'styled-components';

import { getStyles } from '@/utils';

import { PillSelectorStyles } from './types/pillSelectorTheme';

type PillSelectorStylesProp = {
  styles: PillSelectorStyles;
  isSelected?: boolean;
  hasThumb?: boolean;
};

export const PillSelectorWrapper = styled.div<PillSelectorStylesProp>`
  ${({ styles }) => getStyles(styles?.container)};

  ${({ hasThumb, styles, isSelected }) =>
    hasThumb
      ? css`
          & > :nth-child(2) {
            ${getStyles(styles?.firstPill)};
            ${isSelected && getStyles(styles?.firstPill?.selected)}
          }
          & > :last-child {
            ${getStyles(styles?.lastPill)};
            ${isSelected && getStyles(styles?.lastPill?.selected)}
          }
          & > :not(:last-child, :nth-child(2)) {
            ${getStyles(styles?.pill)};
            ${isSelected && getStyles(styles?.pill?.selected)}
          }
        `
      : css`
          & > :first-child {
            ${getStyles(styles?.firstPill)};
            ${isSelected && getStyles(styles?.firstPill?.selected)}
          }
          & > :last-child {
            ${getStyles(styles?.lastPill)};
            ${isSelected && getStyles(styles?.lastPill?.selected)}
          }
          & > :not(:last-child, :first-child) {
            ${getStyles(styles?.pill)};
            ${isSelected && getStyles(styles?.pill?.selected)}
          }
        `};
`;

export const ThumbStyled = styled.div<PillSelectorStylesProp>`
  ${({ styles }) => getStyles(styles?.thumb)};
`;
