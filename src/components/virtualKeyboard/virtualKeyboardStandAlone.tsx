import * as React from 'react';

import { useId } from '@/hooks/useId/useId';

import { ButtonType } from '../button/types';
import { ElementOrIcon } from '../elementOrIcon';
import { DigitButton } from './components/digitButton';
import { IVirtualKeyboardStandAlone } from './types';
// styles
import {
  DigitButtonGrid,
  RemoveButtonStyled,
  VirtualKeyboardStyled,
} from './virtualKeyboard.styled';

export const VirtualKeyboardStandAloneComponent = (
  { dataTestId, ...props }: IVirtualKeyboardStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('virtualKeyboard');
  const virtualKeyboardId = props.id ?? uniqueId;

  return (
    <VirtualKeyboardStyled
      ref={ref}
      data-testid={dataTestId}
      id={virtualKeyboardId}
      styles={props.styles?.[props.state]}
      onBlur={props.onVirtualKeyboardBlur}
      onFocus={props.onVirtualKeyboardFocus}
    >
      <DigitButtonGrid styles={props.styles?.[props.state]}>
        {props.digits.map((digit, index) => {
          return (
            <DigitButton
              key={digit}
              dataTestId={`${dataTestId}DigitButton${index}`}
              digit={digit}
              styles={props.styles?.[props.state]}
              onClick={props.onDigitButtonClick}
            />
          );
        })}
      </DigitButtonGrid>
      <RemoveButtonStyled
        styles={props.styles?.[props.state]}
        type={ButtonType.BUTTON}
        onClick={props.onRemoveButtonClick}
      >
        <ElementOrIcon
          customIconStyles={props.styles?.[props.state]?.container?.icon}
          dataTestId={`${dataTestId}RemoveButton`}
          {...props.icon}
        />
      </RemoveButtonStyled>
    </VirtualKeyboardStyled>
  );
};

/**
 * @description
 * VirtualKeyboardStandAlone component
 */
export const VirtualKeyboardStandAlone = React.forwardRef(VirtualKeyboardStandAloneComponent);
