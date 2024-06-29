import styled from 'styled-components';

import {
  LineSeparatorLinePropsStylesType,
  LineSeparatorPositionType,
} from '@/components/lineSeparator';
import { getStyles } from '@/utils';

import { INavigationRowStyled } from './types';

type NavigationRowStylesProps = {
  topLine?: boolean;
  bottomLine?: boolean;
  lineSeparatorLineStyles?: LineSeparatorLinePropsStylesType;
};

export const NavigationRowStyled = styled.button<INavigationRowStyled & NavigationRowStylesProps>`
  ${({ styles }) => getStyles(styles?.container)};
  ${({ lineSeparatorLineStyles, topLine }) =>
    topLine && lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP)}
  ${({ lineSeparatorLineStyles, bottomLine }) =>
    bottomLine && lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.BOTTOM)}
`;

export const TextSectionStyled = styled.span<INavigationRowStyled>`
  ${({ styles }) => getStyles(styles?.textSectionContainer)}
`;

export const IconAndIconHighlightedContainerStyled = styled.span<INavigationRowStyled>`
  ${({ styles }) => getStyles(styles?.iconTextContainer)}
`;
