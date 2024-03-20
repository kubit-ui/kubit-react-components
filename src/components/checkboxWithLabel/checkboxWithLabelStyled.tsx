import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import type { CheckboxWithLabelState, CheckboxWithLabelStatePropsStylesType } from './types';

export const CheckBoxWithLabelContainerStyled = styled.div<{
  styles?: CheckboxWithLabelStatePropsStylesType;
  state: CheckboxWithLabelState;
}>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  ${({ styles, state }) => getStyles(styles?.[state]?.rootContainer)};
`;

export const CheckboxWithLabelStyled = styled.div<{
  styles?: CheckboxWithLabelStatePropsStylesType;
  state: CheckboxWithLabelState;
}>`
  display: flex;
  flex-direction: row;
  ${({ styles, state }) => getStyles(styles?.[state]?.checkboxLabelContainer)};
`;

export const CheckboxWithLabelContentStyled = styled.div<{
  styles?: CheckboxWithLabelStatePropsStylesType;
  state: CheckboxWithLabelState;
}>`
  display: flex;
  flex-direction: column;
  ${({ styles, state }) => getStyles(styles?.[state]?.descriptionHelperTextContainer)};
`;
