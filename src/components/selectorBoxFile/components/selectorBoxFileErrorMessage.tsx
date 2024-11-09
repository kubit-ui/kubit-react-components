import React from 'react';

import { Text } from '@/components/text/text';
import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ErrorWrapperStyled } from '../selectorBoxFile.styled';
import { SelectorBoxFileTextType } from '../types/selectorBoxFile';
import { SelectorBoxFilePropsStylesType } from '../types/selectorBoxFileTheme';
import { SelectorBoxFileStateType } from '../types/state';

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
