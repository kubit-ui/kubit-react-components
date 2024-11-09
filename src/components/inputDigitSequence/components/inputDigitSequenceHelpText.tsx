import React from 'react';

import { Text } from '@/components/text/text';

import { HelpTextContainerStyled } from '../inputDigitSequence.styled';
import { InputDigitSequenceTextType } from '../types/inputDigitSequence';
import { InputDigitSequenceStyles } from '../types/inputDigitSequenceTheme';

interface IInputDigitSequenceHelpText {
  styles?: InputDigitSequenceStyles;
  helpText?: InputDigitSequenceTextType;
  dataTestId: string;
}

export const InputDigitSequenceHelpText = (
  props: IInputDigitSequenceHelpText
): JSX.Element | null => {
  if (!props.helpText?.content) {
    return null;
  }
  return (
    <HelpTextContainerStyled data-testid={`${props.dataTestId}-wrapper`} styles={props.styles}>
      <Text customTypography={props.styles?.helpText} {...props.helpText}>
        {props.helpText.content}
      </Text>
    </HelpTextContainerStyled>
  );
};
