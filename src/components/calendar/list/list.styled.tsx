import styled from 'styled-components';

import { WEEK_DAYS } from '../constants/constants';
import { ListStylesVariantType } from './types/listTheme';
import { ListDaysStateType } from './types/state';

type ElementTypes = {
  state: ListDaysStateType;
  styles?: ListStylesVariantType;
  $disabled: boolean;
};

export const ListStyled = styled.tbody<{ styles?: ListStylesVariantType }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  gap: ${({ styles }) => styles?.[ListDaysStateType.DEFAULT]?.gap_days};
`;

export const ElementStyled = styled.button<ElementTypes>``;

export const ElementEmptyStyled = styled.td`
  width: calc(100% / ${WEEK_DAYS});
  aspect-ratio: 1 / 1;
`;

export const ItemRoveStyled = styled.td<ElementTypes>`
  width: calc(100% / ${WEEK_DAYS});
  aspect-ratio: 1 / 1;

  ${ElementStyled} {
    width: 100%;
    height: 100%;
    text-align: ${props => props.styles?.[props.state]?.label_font_align};
    color: ${props => props.styles?.[props.state]?.label_font_color};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.styles?.[props.state]?.background_color};
    border: ${props => props.styles?.[props.state]?.border};
    border-top: ${props => props.styles?.[props.state]?.border_top};
    border-bottom: ${props => props.styles?.[props.state]?.border_bottom};
    border-radius: ${props => props.styles?.[props.state]?.radius_size};
    cursor: pointer;

    &:hover {
      background-color: ${props => props.styles?.[ListDaysStateType.HOVER]?.background_color};
      color: ${props => props.styles?.[ListDaysStateType.HOVER]?.label_font_color};
    }

    ${({ $disabled, styles }) =>
      $disabled &&
      `
      cursor: auto;
      pointer-events: none;
      background-color: transparent;
      border: 0;
      color: ${styles?.[ListDaysStateType.DISABLED]?.label_font_color};
  `}
  }
`;

export const TableRowStyled = styled.tr`
  display: flex;
  width: 100%;
`;
