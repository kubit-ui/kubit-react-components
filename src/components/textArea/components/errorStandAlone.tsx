import React from 'react';

import { ElementOrIcon, IElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { AriaLiveOptionType } from '@/types';

import { ErrorWrapperStyled } from '../textArea.styled';
import { TextAreaPropsThemeType, TextAreaStateType, TextAreaTextType } from '../types';

export const ErrorStandAlone = ({
  id,
  state,
  errorMessage,
  errorAriaLiveType,
  errorIcon,
  dataTestId,
  styles,
}: {
  id: string;
  state: TextAreaStateType;
  errorMessage?: TextAreaTextType;
  errorAriaLiveType: AriaLiveOptionType;
  dataTestId?: string;
  errorIcon?: IElementOrIcon;
  styles?: TextAreaPropsThemeType;
}): JSX.Element => {
  return (
    <ErrorWrapperStyled aria-live={errorAriaLiveType} id={id} styles={styles}>
      {errorMessage?.content && state === TextAreaStateType.ERROR && (
        <>
          <ElementOrIcon
            color={styles?.errorIcon?.color}
            height={styles?.errorIcon?.height}
            width={styles?.errorIcon?.width}
            {...errorIcon}
          />
          <Text
            color={styles?.errorMessage?.color}
            component={TextComponentType.PARAGRAPH}
            dataTestId={dataTestId}
            variant={styles?.errorMessage?.font_variant}
            weight={styles?.errorMessage?.font_weight}
            {...errorMessage}
          >
            {errorMessage.content}
          </Text>
        </>
      )}
    </ErrorWrapperStyled>
  );
};
