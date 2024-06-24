import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { DotUseStateType } from './types';
import { BadgeVariantStylesType } from './types/badgeTheme';

type BadgeStylesProps = {
  styles: BadgeVariantStylesType;
};

type BadgeDotProps = {
  dotSize?: string;
  dotWidthHeight?: DotUseStateType | null;
  customDotTranslate?: string;
};

const getTransformProp = (dotWidth: number, dotHeight: number) => {
  return `translate(${dotWidth * 0.3}px, -${dotHeight * 0.3}px)`;
};

export const BadgeStyled = styled.button<BadgeStylesProps>`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  ${props => getStyles(props.styles.container)}
`;

export const SpanContainerIconAndDot = styled.span`
  position: relative;
  display: inline-flex;
`;

export const BadgeDotStyled = styled.span<BadgeDotProps>`
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0;
  transform: ${({ customDotTranslate, dotWidthHeight }) => {
    if (customDotTranslate) {
      return customDotTranslate;
    }
    if (dotWidthHeight) {
      return getTransformProp(dotWidthHeight.dotWidth, dotWidthHeight.dotHeight);
    }
    return undefined;
  }};
`;

export const BadgeLabelStyled = styled.span<BadgeStylesProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  ${props => getStyles(props.styles.labelContainer)}
`;

export const BadgeContainerStyled = styled.div`
  position: relative;
`;
