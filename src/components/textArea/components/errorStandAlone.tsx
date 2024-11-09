import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ErrorWrapperStyled } from '../textArea.styled';
import { TextAreaStateType } from '../types/state';
import { TextAreaTextType } from '../types/textArea';
import { TextAreaPropsThemeType } from '../types/textAreaTheme';

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
