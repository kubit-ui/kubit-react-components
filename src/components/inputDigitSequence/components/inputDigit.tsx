import * as React from 'react';

import { Label } from '@/components/label';
import { Text } from '@/components/text';
import { InputModeType } from '@/types';
import { InputTypeType } from '@/types/inputType';

import { InputDigitAndNumberContainer, InputDigitStyled } from '../inputDigitSequence.styled';
import {
  InputDigitSequenceStateStyles,
  InputDigitSequenceStateType,
  UseStateInputDigitsType,
} from '../types';

interface IInputDigit {
  styles?: InputDigitSequenceStateStyles;
  state: InputDigitSequenceStateType;
  inputDigit?: UseStateInputDigitsType;
  disabled?: boolean;
  error?: boolean;
  showPassword?: boolean;
  inputMode?: InputModeType;
  label?: number;
  inputId?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  animated: boolean;
  boxesAnimationDone: boolean;
  tabIndex?: number;
  ariaHidden?: boolean;
}

export const InputDigit = (props: IInputDigit): JSX.Element | null => {
  const handleFocusInput = e => {
    e.target.select();
  };

  const stateStyles = props.styles?.[props.state];
  const inputStateStyles =
    props.styles?.[
      props.inputDigit?.blockedBySystem
        ? InputDigitSequenceStateType.BLOCKED_BY_SYSTEM
        : props.state
    ];
  const disabled = props.disabled || props.inputDigit?.blockedBySystem;

  return (
    <InputDigitAndNumberContainer
      animated={props.animated}
      boxesAnimationDone={props.boxesAnimationDone}
      styles={stateStyles}
    >
      <InputDigitStyled
        aria-hidden={props.ariaHidden}
        aria-label={props.inputDigit?.['aria-label']}
        aria-required={!disabled}
        disabled={disabled}
        error={props.error}
        id={props.inputId}
        inputMode={props.inputMode}
        maxLength={1}
        styles={inputStateStyles}
        tabIndex={props.tabIndex}
        type={
          props.showPassword && !props.inputDigit?.blockedBySystem
            ? InputTypeType.TEXT
            : InputTypeType.PASSWORD
        }
        value={props.inputDigit?.value}
        onChange={props.onChange}
        onFocus={handleFocusInput}
      />
      {props.inputId ? (
        <Label
          color={stateStyles?.inputNumber?.color}
          inputId={props.inputId}
          textVariant={stateStyles?.inputNumber?.font_variant}
          weight={stateStyles?.inputNumber?.font_weight}
        >
          {props.label}
        </Label>
      ) : (
        <Text
          color={stateStyles?.inputNumber?.color}
          variant={stateStyles?.inputNumber?.font_variant}
          weight={stateStyles?.inputNumber?.font_weight}
        >
          {props.label}
        </Text>
      )}
    </InputDigitAndNumberContainer>
  );
};
