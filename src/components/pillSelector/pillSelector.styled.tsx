import styled from 'styled-components';

import { getStyles } from '@/utils';

import { PillSelectorStyles } from './types/pillSelectorTheme';

type PillSelectorStylesProp = {
  styles: PillSelectorStyles;
  isSelected?: boolean;
};

export const PillSelectorWrapper = styled.div<PillSelectorStylesProp>`
  ${({ styles }) => getStyles(styles?.container)};

  & :first-child {
    ${({ styles }) => getStyles(styles?.firstPill)};
    ${({ isSelected, styles }) => isSelected && getStyles(styles?.firstPill?.selected)}
  }
  & :last-child {
    ${({ styles }) => getStyles(styles?.lastPill)};
    ${({ isSelected, styles }) => isSelected && getStyles(styles?.lastPill?.selected)}
  }
  & :not(:last-child, :first-child) {
    ${({ styles }) => getStyles(styles?.pill)};
    ${({ isSelected, styles }) => isSelected && getStyles(styles?.pill?.selected)}
  }
`;

export const ThumbStyled = styled.div<PillSelectorStylesProp>`
  ${({ styles }) => getStyles(styles?.thumb)};
`;
