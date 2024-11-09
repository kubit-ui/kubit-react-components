import React from 'react';

import { useId } from '@/hooks/useId/useId';

import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { DigitButton } from './components/digitButton';
import { IVirtualKeyboardStandAlone } from './types/virtualKeyboard';
// styles
import {
  DigitButtonGrid,
  RemoveButtonStyled,
  VirtualKeyboardStyled,
} from './virtualKeyboard.styled';

export const VirtualKeyboardStandAloneComponent = (
  { dataTestId = 'virtual-keyboard', ...props }: IVirtualKeyboardStandAlone,
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
              dataTestId={`${dataTestId}-digit-button-${index}`}
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
