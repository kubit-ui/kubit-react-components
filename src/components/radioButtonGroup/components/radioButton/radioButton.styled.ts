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
}

const getDynamicStyles = (styles?: RadioButtonBaseStyles) => css`
  ${getStyles(styles?.radioButton)}

  &:before {
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

  ${({ styles }) => getDynamicStyles(styles[RadioButtonStateType.DEFAULT])}

  // Check - Centering & sizing
  &:before {
    content: '';
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked:not(:disabled) {
    ${({ styles }) => getDynamicStyles(styles[RadioButtonStateType.SELECTED])}
  }

  &:disabled {
    cursor: not-allowed;
    ${({ styles }) => getDynamicStyles(styles[RadioButtonStateType.DISABLED])}

    :checked {
      ${({ styles }) => getDynamicStyles(styles[RadioButtonStateType.DISABLED_SELECTED])}
    }
  }

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

  & > :nth-child(3) {
    grid-column: 2;
  }
`;

export const RadioButtonContentStyled = styled.div``;

export const RadioButtonLabelStyled = styled.div`
  display: flex;
  align-items: center;
`;
