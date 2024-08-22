import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

// type
import { ButtonKeyboardStateType, VirtualKeyboardPropsStylesType } from './types';

interface ButtonsStyledPropsTypes {
  styles?: VirtualKeyboardPropsStylesType;
}

interface VirtualKeyboardStyledPropsTypes {
  styles?: VirtualKeyboardPropsStylesType;
}

export const DigitButtonStyled = styled.button<ButtonsStyledPropsTypes>`
  ${({ styles }) =>
    getStyles(styles?.digitButtons?.wrapper?.[ButtonKeyboardStateType.DEFAULT]?.button)}
  & > span {
    ${({ styles }) =>
      getStyles(styles?.digitButtons?.wrapper?.[ButtonKeyboardStateType.DEFAULT]?.text)}
  }

  /* When pressed the button */
  &:active {
    ${({ styles }) =>
      getStyles(styles?.digitButtons?.wrapper?.[ButtonKeyboardStateType.PRESSED]?.button)};
    span {
      ${({ styles }) =>
        getTypographyStyles(styles?.digitButtons?.wrapper?.[ButtonKeyboardStateType.PRESSED]?.text)}
    }
  }
`;

export const DigitButtonGrid = styled.div<ButtonsStyledPropsTypes>`
  ${({ styles }) => getStyles(styles?.digitButtons?.wrapper)}
  button:nth-child(n + 6) {
    border-bottom: none;
  }
`;

export const RemoveButtonStyled = styled.button<ButtonsStyledPropsTypes>`
  ${({ styles }) => getStyles(styles?.removeButton?.[ButtonKeyboardStateType.DEFAULT])}

  /* When pressed the button */
  &:active {
    ${({ styles }) => getStyles(styles?.removeButton?.[ButtonKeyboardStateType.PRESSED])}
  }
`;

export const VirtualKeyboardStyled = styled.div<VirtualKeyboardStyledPropsTypes>`
  // get tokens styles
  ${({ styles }) => getStyles(styles?.container)}
`;
