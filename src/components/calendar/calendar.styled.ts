import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CalendarContainerStylesType } from './types/calendarTheme';

type CalendarStyledTypes = {
  styles?: CalendarContainerStylesType;
};

export const CalendarStyled = styled.div<CalendarStyledTypes>`
  ${({ styles }) => getStyles(styles?.container)};
`;

export const CalendarSelectorStyled = styled.div`
  position: relative;
`;

export const TableStyled = styled.table`
  display: flex;
  flex-direction: column;
`;
