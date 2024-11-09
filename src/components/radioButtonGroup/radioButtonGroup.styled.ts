import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { RadioButtonStyled } from './components/radioButton/radioButton.styled';
import { IRadioButtonGroupStyled } from './types/radioButtonGroup';
import { RadioButtonGroupStateType } from './types/state';

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
