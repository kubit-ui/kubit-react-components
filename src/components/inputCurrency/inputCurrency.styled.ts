import styled, { css } from 'styled-components';

import { POSITIONS } from '@/types/positions';
import { getStyles } from '@/utils/getStyles/getStyles';

import { InputCurrencyStateProps } from './types';

// affix
type AffixStyledProps = {
  $positionAffix?: string;
  $isOutPositionAffix?: boolean;
  styles?: InputCurrencyStateProps;
};

const getMarginsAffix = ({ styles, $positionAffix, $isOutPositionAffix }: AffixStyledProps) => css`
  margin-left: ${() =>
    $isOutPositionAffix && $positionAffix === POSITIONS.RIGHT
      ? styles?.currencyNameContainer?.marginLeftOrRightByIsOutAndPosition
      : 'inherit'};
  margin-right: ${() =>
    $isOutPositionAffix && $positionAffix === POSITIONS.LEFT
      ? styles?.currencyNameContainer?.marginLeftOrRightByIsOutAndPosition
      : 'inherit'};
`;

export const AffixStyled = styled.div<AffixStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  order: ${props => (props.$positionAffix === POSITIONS.LEFT ? '-1' : '1')};
  ${props => getStyles(props.styles?.currencyNameContainer)}
  ${getMarginsAffix}
`;
