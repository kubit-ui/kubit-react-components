import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { WEEK_DAYS } from '../constants/constants';
import { CalendarContainerStylesType } from '../types/calendarTheme';

export const HeaderStyled = styled.thead<{ styles?: CalendarContainerStylesType }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${({ styles }) => getStyles(styles?.headerContainer)};
`;

export const ElementStyled = styled.th<{ styles?: CalendarContainerStylesType }>`
  width: calc(100% / ${WEEK_DAYS});
  text-align: center;
  ${({ styles }) => getStyles(styles?.weekDayContainer)};
`;

export const HeaderRowStyled = styled.tr<{ styles?: CalendarContainerStylesType }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ styles }) => getStyles(styles?.headerRow)};
`;
