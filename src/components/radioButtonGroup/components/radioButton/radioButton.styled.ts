import styled, { css } from 'styled-components';

import { focusVisibleAlt } from '@/styles/mixins';
import { VariantStyles } from '@/types';
import { getStyles } from '@/utils';

import {
  IRadioButtonStyled,
  RadioButtonBaseStyles,
  RadioButtonStateType,
  RadioButtonStylesType,
} from './types';

interface IRadioButtonContentStyled {
  styles: VariantStyles<RadioButtonStylesType>;
  state: RadioButtonStateType;
  hasLabel?: boolean;
  lastChild?: boolean;
}

interface IRadioButtonErrorStyled {
  styles?: RadioButtonBaseStyles;
}

interface IRadioButtonErrorStyled {
  styles?: RadioButtonBaseStyles;
}

const getDynamicStyles = (styles?: RadioButtonBaseStyles) => css`
  ${getStyles(styles?.radioButton)}

  &:before {
    content: '';
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    ${getStyles(styles?.icon)}
  }
`;

export const RadioButtonContainerInput = styled.div<IRadioButtonStyled>`
  ${props => getStyles(props.styles[RadioButtonStateType.DEFAULT]?.radioButtonContainer)}
`;

export const RadioButtonInputStyled = styled.input<IRadioButtonStyled>`
  appearance: none;
  cursor: pointer;
  display: inline-block;
  vertical-align: bottom;
  position: relative;

  ${({ styles, state }) => state && getDynamicStyles(styles?.[state])}

  &:focus-visible {
    border-radius: 100%;
    outline-offset: 0;
  }
  ${({ styles }) => styles.altVariant && focusVisibleAlt()}
`;

export const RadioButtonStyled = styled.div<IRadioButtonContentStyled>`
  display: ${props => (props.hasLabel ? 'grid' : 'block')};
  grid-template-columns: auto 1fr;
  ${props => getStyles(props.styles?.[props.state]?.rowContainer)}
  margin-bottom: ${props => (props.lastChild ? 0 : undefined)};
  & > :nth-child(3) {
    grid-column: 2;
  }
`;

export const RadioButtonContentStyled = styled.div``;

export const RadioButtonLabelStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonErrorStyled = styled.div<IRadioButtonErrorStyled>`
  ${({ styles }) => getStyles(styles?.errorMessageContainer)};
  p {
    display: flex;
  }
`;

export const ErrorIconWrapperStyled = styled.span<IRadioButtonErrorStyled>`
  ${({ styles }) => getStyles(styles?.errorMessageIconContainer)};
`;
