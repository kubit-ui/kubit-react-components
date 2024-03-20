import styled from 'styled-components';

import { getStyles } from '@/utils';

import { RadioButtonStyled } from './components/radioButton/radioButton.styled';
import { IRadioButtonGroupStyled, RadioButtonGroupStateType } from './types';

export const RadioButtonGroupStyled = styled.fieldset<IRadioButtonGroupStyled>`
  & > legend {
    float: left;
    width: auto;
    ${({ styles }) => getStyles(styles[RadioButtonGroupStateType.DEFAULT]?.title)}
  }
  ${RadioButtonStyled} {
    clear: both;
  }
`;
