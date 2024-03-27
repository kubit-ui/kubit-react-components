import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { OptionPropsStateStylesType, OptionPropsStylesType } from './types';

export const OptionDivStyled = styled.div``;

export const OptionStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})<{
  $styles: OptionPropsStylesType;
  $stateStyles?: OptionPropsStateStylesType;
}>`
  ${props => getStyles(props.$stateStyles?.container)}
  ${props => getTypographyStyles(props.$stateStyles?.container)}
  &:before {
    content: '';
    ${props => getStyles(props.$stateStyles?.containerBefore)}
  }
  :focus-visible {
    border-radius: ${props => props.$stateStyles?.containerFocusVisible?.border_radius};
    outline-offset: ${props => props.$stateStyles?.containerFocusVisible?.outline_offset};
  }
`;

export const OptionFirstRowWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const OptionLabelIconWrapper = styled.div<{ stateStyles?: OptionPropsStateStylesType }>`
  ${props => getStyles(props.stateStyles?.labelIconContainer)}
`;

export const OptionLabelHighlightedLabelWrapper = styled.p``;

export const OptionSublabelContainer = styled.div<{
  stateStyles?: OptionPropsStateStylesType;
}>`
  ${props => getStyles(props.stateStyles?.sublabelContainer)}
`;
