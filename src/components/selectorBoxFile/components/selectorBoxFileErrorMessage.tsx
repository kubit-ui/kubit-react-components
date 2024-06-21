import * as React from 'react';

import { ElementOrIcon, IElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text';
import { AriaLiveOptionType } from '@/types';

import { ErrorWrapperStyled } from '../selectorBoxFile.styled';
import {
  SelectorBoxFilePropsStylesType,
  SelectorBoxFileStateType,
  SelectorBoxFileTextType,
} from '../types';

interface ISelectorBoxFileErrorMessage {
  styles: SelectorBoxFilePropsStylesType;
  errorMessageId: string;
  errorMessageIcon?: IElementOrIcon;
  errorMessage?: SelectorBoxFileTextType;
  state: SelectorBoxFileStateType;
}

export const SelectorBoxFileErrorMessage = (
  props: ISelectorBoxFileErrorMessage
): JSX.Element | null => {
  return (
    <div aria-live={AriaLiveOptionType.POLITE}>
      {!props.errorMessage?.content || props.state !== SelectorBoxFileStateType.ERROR ? null : (
        <ErrorWrapperStyled id={props.errorMessageId} styles={props.styles}>
          <ElementOrIcon
            customIconStyles={props.styles.errorMessageIcon}
            {...props.errorMessageIcon}
          />
          <Text customTypography={props.styles.errorMessage} {...props.errorMessage}>
            {props.errorMessage.content}
          </Text>
        </ErrorWrapperStyled>
      )}
    </div>
  );
};
