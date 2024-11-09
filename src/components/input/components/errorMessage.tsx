import React from 'react';

import { Text } from '@/components/text/text';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
// styles
import { ErrorIconWrapperStyled, InputErrorStyled } from '../input.styled';
import { IErrorMessage } from '../types/input';
import { hasError } from '../utils/state.utils';

export const ErrorMessageStandAlone = (props: IErrorMessage): JSX.Element => {
  return (
    <InputErrorStyled
      aria-live={props.errorAriaLiveType}
      id={props.errorMessageId}
      styles={props.styles}
    >
      {hasError(props.state) && (
        <>
          <ErrorIconWrapperStyled styles={props.styles}>
            <ElementOrIcon customIconStyles={props.styles?.errorMessageIcon} {...props.errorIcon} />
          </ErrorIconWrapperStyled>
          <Text customTypography={props.styles?.errorMessage} {...props.errorMessage}>
            {props.errorMessage?.content}
          </Text>
        </>
      )}
    </InputErrorStyled>
  );
};
