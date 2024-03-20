import * as React from 'react';

import { Text, TextComponentType } from '@/components/text';

// styles
import { HelpMessageWrapperStyled } from '../input.styled';
import { IHelpMessage } from '../types/input';

export const HelpMessageStandAlone = (props: IHelpMessage): JSX.Element | null => {
  if (!props.helpMessage?.content) {
    return null;
  }
  return (
    <HelpMessageWrapperStyled
      align={props.styles?.helpMessage?.text_align}
      id={props.helpMessageId}
      styles={props.styles}
    >
      <Text
        component={TextComponentType.PARAGRAPH}
        customTypography={props.styles?.helpMessage}
        dataTestId={`${props.dataTestId}HelpMessage`}
        {...props.helpMessage}
      >
        {props.helpMessage.content}
      </Text>
    </HelpMessageWrapperStyled>
  );
};
