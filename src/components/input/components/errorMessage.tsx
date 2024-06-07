import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text';

// styles
import { ErrorIconWrapperStyled, InputErrorStyled } from '../input.styled';
import { IErrorMessage } from '../types/input';
import { hasError } from '../utils';

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
          <Text
            customTypography={props.styles?.errorMessage}
            dataTestId={`${props.dataTestId}ErrorMessage`}
            {...props.errorMessage}
          >
            {props.errorMessage?.content}
          </Text>
        </>
      )}
    </InputErrorStyled>
  );
};
