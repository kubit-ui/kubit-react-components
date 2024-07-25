import styled, { css } from 'styled-components';

import { focusVisibleAlt } from '@/styles/mixins';
import { getStyles } from '@/utils';

import { RadioButtonBaseStyles, RadioButtonStateStylesType, RadioButtonStateType } from './types';

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

export const RadioButtonContainerInput = styled.div<{ styles: RadioButtonStateStylesType }>`
  ${props => getStyles(props.styles[RadioButtonStateType.DEFAULT]?.radioButtonContainer)}
`;

export const RadioButtonInputStyled = styled.input<{
  styles: RadioButtonStateStylesType & { altVariant?: boolean };
  state?: RadioButtonStateType;
}>`
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

export const RadioButtonStyled = styled.div<{
  styles: RadioButtonStateStylesType;
  state: RadioButtonStateType;
  hasLabel?: boolean;
  lastChild?: boolean;
}>`
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

export const RadioButtonErrorStyled = styled.div<{ styles?: RadioButtonBaseStyles }>`
  ${({ styles }) => getStyles(styles?.errorMessageContainer)};
  p {
    display: flex;
  }
`;

export const ErrorIconWrapperStyled = styled.span<{ styles?: RadioButtonBaseStyles }>`
  ${({ styles }) => getStyles(styles?.errorMessageIconContainer)};
`;
