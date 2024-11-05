import * as React from 'react';

import { Text } from '@/components/text';

import { HelpTextContainerStyled } from '../inputDigitSequence.styled';
import { InputDigitSequenceStyles, InputDigitSequenceTextType } from '../types';

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
