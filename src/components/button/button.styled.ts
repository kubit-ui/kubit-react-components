import styled, { css } from 'styled-components';

// mixin
import { focusVisibleAlt } from '@/styles/mixins/focusAlt.mixin';
// theme styles
import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import { IconPositionType } from './types/buttonIconPosition';
import {
  ButtonSizePropsType,
  ButtonStateKeyOfType,
  ButtonVariantStylesType,
} from './types/buttonTheme';
import { ButtonStateType } from './types/state';

// set tokens
const setTokens = (
  state: ButtonStateType,
  styles?: ButtonStateKeyOfType,
  sizeStyles?: ButtonSizePropsType
) => {
  if (!styles?.[state]) {
    return css``;
  }
  const combinedStyles = { ...sizeStyles, ...styles[state] };

  return css`
    // common styles
    ${getStyles(combinedStyles as ButtonSizePropsType & ButtonVariantStylesType)}
    // typography
    ${getTypographyStyles(combinedStyles)}
  `;
};

interface IButtonStyled {
  $fullWidth?: boolean;
  $styles?: ButtonStateKeyOfType;
  $state: ButtonStateType;
  $iconPosition?: IconPositionType;
  $loading?: boolean;
  minWidth?: string;
  $sizeStyles?: ButtonSizePropsType;
  $ghostText?: string;
  alignText?: string;
}

export const ButtonStyled = styled.button<IButtonStyled>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: ${({ alignText }) => alignText ?? 'left'};
  cursor: pointer;
  flex-direction: ${props =>
    props.$iconPosition === IconPositionType.LEFT ? 'row' : 'row-reverse'};
  position: relative;

  ${({ $state, $styles, $sizeStyles }) => setTokens($state, $styles, $sizeStyles)}

  &:disabled {
    cursor: default;
  }

  min-width: ${props => props.minWidth};
  width: ${props => (props.$fullWidth ? '100%' : 'auto')};

  &::after {
    content: '${props => props.$ghostText}';
    display: ${props => (props.$loading ? 'block' : 'none')};
    position: relative;
    visibility: hidden;
  }
  // In alternative variants, the focus colors must be change
  ${({ $styles, $state }) => $styles?.[$state]?.altVariant && focusVisibleAlt()}
`;

export const ButtonLoaderStyled = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;
