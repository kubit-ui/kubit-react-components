import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CalendarContainerStylesType } from '../types/calendarTheme';

export type RightIconType = {
  showCustomSelector: boolean;
};

type SelectorStyledType = {
  styles?: CalendarContainerStylesType;
};

export const SelectorStyled = styled.div<SelectorStyledType & { isDaySelector?: boolean }>`
  display: flex;
  justify-content: ${({ isDaySelector }) => (isDaySelector ? 'center' : 'space-between')};
  align-items: center;
  ${({ styles }) => getStyles(styles?.selectorContainer)};
`;

export const OptionsStyled = styled.div<SelectorStyledType>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  ${({ styles }) => getStyles(styles?.selectorOptionsContainer)};
`;

export const RightIconStyled = styled.span<RightIconType>`
  visibility: ${({ showCustomSelector }) => (showCustomSelector ? 'hidden' : 'visible')};
`;

export const IconAndBackTextStyled = styled.div<SelectorStyledType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ styles }) => getStyles(styles?.selectorIconAndBackTextContainer)};
`;
