import React from 'react';

import { Text } from '@/components/text/text';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { TextComponentType } from '../../text/types/component';
import { CheckboxIsErrorStyled } from '../checkbox.styled';
import { ICheckboxErrorStandAlone } from '../types/checkbox';

/**
 * CheckboxErrorStandAlone
 * @param {string} id - id of the checkbox
 * @param {string} dataTestId - data test id of the checkbox
 * @param {CheckboxPropsStylesType} styles - styles of the checkbox
 * @param {string} errorIcon - error icon of the checkbox
 * @param {string} errorAriaLiveType - error aria live type of the checkbox
 * @param {boolean} hasError - has error of the checkbox
 * @param {string} textError - text error of the checkbox
 * @returns {JSX.Element}
 */
export const CheckboxErrorStandAlone = ({
  id,
  dataTestId,
  styles,
  errorIcon,
  errorAriaLiveType,
  error,
  errorMessage,
}: ICheckboxErrorStandAlone): JSX.Element => (
  <CheckboxIsErrorStyled aria-live={errorAriaLiveType} id={id} styles={styles}>
    {error && errorMessage?.content && (
      <>
        <ElementOrIcon customIconStyles={styles?.errorIcon} {...errorIcon} />
        <Text
          component={TextComponentType.SPAN}
          customTypography={styles?.textError}
          dataTestId={dataTestId}
          {...errorMessage}
        >
          {errorMessage.content}
        </Text>
      </>
    )}
  </CheckboxIsErrorStyled>
);
