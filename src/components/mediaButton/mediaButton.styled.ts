import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

// mixin
import { focusVisibleAlt } from '../../styles/mixins/focusAlt.mixin';
import { MediaButtonVariantStylesType } from './types/mediaButtonTheme';

type MediaButtonStylesType = {
  styles?: MediaButtonVariantStylesType;
  hasBackground?: boolean;
  twistedIcon?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

export const ContainerStyled = styled.button<MediaButtonStylesType>`
  ${props => getStyles(props.styles?.container)}
  ${({ hasBackground }) =>
    !hasBackground &&
    css`
      background-color: transparent;
    `}
  ${({ twistedIcon }) =>
    !twistedIcon &&
    css`
      align-items: center;
      justify-content: center;
    `}
  ${({ loading }) =>
    loading &&
    css`
      cursor: default;
      width: fit-content;
      height: fit-content;
    `} 
  &:disabled {
    cursor: default;
  }
`;

export const ButtonStyled = styled.span<MediaButtonStylesType>`
  ${props => getStyles(props.styles?.buttonContainer)}
  ${props => props.styles?.altVariant && focusVisibleAlt()}
`;
