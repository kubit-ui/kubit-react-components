import styled from 'styled-components';

import { getStyles } from '../../../../utils/getStyles/getStyles';
import { IRadioButtonGroupStyled } from '../../types/radioButtonGroup';
import { RadioButtonGroupStateType } from '../../types/state';

export const InfoIconWrapperStyled = styled.div<IRadioButtonGroupStyled>`
  ${({ styles }) => getStyles(styles?.[RadioButtonGroupStateType.DEFAULT]?.infoIconContainer)}
`;
