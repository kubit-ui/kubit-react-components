import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CalendarContainerStylesType } from '../../types/calendarTheme';
import { MonthSelectorStateType } from './types/state';

type ElementStyledType = {
  styles?: CalendarContainerStylesType;
  state: MonthSelectorStateType;
  $disabled?: boolean;
};

export const MonthSelectorStyled = styled.ul<{ styles?: CalendarContainerStylesType }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  ${({ styles }) => getStyles(styles?.monthsList)};
`;

export const MonthElementStyled = styled.button``;

export const MonthListStyled = styled.li<ElementStyledType>`
  ${({ styles, state }) => getStyles(styles?.monthListItem?.[state])};

  ${MonthElementStyled} {
    width: 100%;
    text-align: center;
    cursor: pointer;
    ${({ styles, state }) => getStyles(styles?.monthElement?.[state])};
  }
`;
