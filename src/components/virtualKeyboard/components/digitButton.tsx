import * as React from 'react';

import { ButtonType } from '@/components/button';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { ButtonKeyboardStateType, IDigitButton } from '../types';
// styles
import { DigitButtonStyled } from '../virtualKeyboard.styled';

/**
 * @description
 * Digit button component to be used in the virtual keyboard.
 * @internal
 */
export const DigitButton = (props: IDigitButton): JSX.Element => {
  const onClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.onClick(props.digit, event);
  };
  return (
    <DigitButtonStyled
      data-testid={props.dataTestId}
      styles={props.styles}
      type={ButtonType.BUTTON}
      onClick={onClick}
    >
      <Text
        component={TextComponentType.SPAN}
        customTypography={props.styles?.digitButtons?.[ButtonKeyboardStateType.DEFAULT]?.text}
      >
        {props.digit}
      </Text>
    </DigitButtonStyled>
  );
};
