import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CalendarContainerStylesType } from '../../types/calendarTheme';
import { YearSelectorStateType } from './types/state';

type YearElementStyledTypes = {
  isSelected?: boolean;
  state: YearSelectorStateType;
  styles?: CalendarContainerStylesType;
};

export const YearSelectorStyled = styled.ul<{ styles?: CalendarContainerStylesType }>`
  position: relative;
  padding: ${props => props.styles?.[YearSelectorStateType.DEFAULT]?.top_bottom_spacing};
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  overflow: auto;
  max-height: 18rem;
  ${({ styles }) => getStyles(styles?.yearsList)};
`;

export const YearElementStyled = styled.button``;

export const YearListStyled = styled.li<YearElementStyledTypes>`
  text-align: center;
  ${({ styles, state }) => getStyles(styles?.yearListItem?.[state])};

  ${YearElementStyled} {
    width: 100%;
    display: inline-flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    ${({ styles, state }) => getStyles(styles?.yearElement?.[state])};
  }
`;
