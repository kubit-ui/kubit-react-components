import styled from 'styled-components';

import { getStyles } from '@/utils';

import { IRadioButtonGroupStyled, RadioButtonGroupStateType } from '../../types';

export const InfoIconWrapperStyled = styled.div<IRadioButtonGroupStyled>`
  ${({ styles }) => getStyles(styles?.[RadioButtonGroupStateType.DEFAULT]?.infoIconContainer)}
`;
