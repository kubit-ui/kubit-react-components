import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

// mixin
import { focusVisibleAlt } from '../../styles/mixins/focusAlt.mixin';
import type { IPillStyled } from './types/pill';

export const ParentContainerStyled = styled.div<IPillStyled>`
  ${props => getStyles(props.styles?.parentContainer)}
`;

export const LabelContainerStyled = styled.div<IPillStyled>`
  ${props => getStyles(props.styles?.labelContainer)}
`;

export const PillStyled = styled.div<IPillStyled & { focus?: boolean }>`
  ${props => getStyles(props.styles?.container)}
  &:focus-visible {
    z-index: ${props => props.styles?.container_focus?.z_index};
  }
  ${props => props.styles?.altVariant && focusVisibleAlt()}
`;

export const PillInputStyled = styled.input<IPillStyled>`
  ${props => getStyles(props.styles?.input)}
`;

export const PillLabelStyled = styled.label<IPillStyled>`
  display: flex;
  align-items: center;
  ${props => getTypographyStyles(props.styles?.label)}
`;

export const IconContainerStyled = styled.div<IPillStyled>`
  ${props => getStyles(props.styles?.decorativeIconContainer)}
`;
