import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CheckboxPropsStylesType } from './types';

type ThemeStylesType = {
  styles?: CheckboxPropsStylesType;
};

type SpanChecked = {
  $isChecked?: boolean;
};

export const CheckboxContainerStyled = styled.div`
  width: fit-content;
`;

export const CheckboxIconLabelWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CheckboxStyled = styled.input<ThemeStylesType>`
  ${props => getStyles(props.styles?.checkbox)}
  appearance: none;
  cursor: pointer;
  display: grid;
  place-content: center;
  &:disabled {
    cursor: default;
  }
`;

export const CheckboxFrameStyled = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

export const CheckedIcon = styled.span<ThemeStylesType & SpanChecked>`
  display: ${({ $isChecked }) => ($isChecked ? 'inline-flex' : 'none')};
  pointer-events: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: ${({ styles }) => styles?.checkedIcon?.height};
  width: ${({ styles }) => styles?.checkedIcon?.width};
  background-color: transparent;
  top: 0;
  left: 0;
`;

export const CheckboxHelperContentStyled = styled.div<ThemeStylesType>`
  ${props => getStyles(props.styles?.extraContentWrapper)}
`;

export const CheckboxIsErrorStyled = styled.div<ThemeStylesType>`
  ${props => getStyles(props.styles?.errorWrapper)}
  small {
    flex: 1;
  }
`;

export const CheckboxHelpContentStyled = styled.div``;

export const CheckboxHelpContentTextStyled = styled.div<ThemeStylesType>`
  ${props => getStyles(props.styles?.helpContentTextWrapper)}
`;
