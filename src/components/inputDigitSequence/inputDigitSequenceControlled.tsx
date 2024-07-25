import * as React from 'react';

import { useId } from '@/hooks/useId/useId';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { IInputDropdownStandAlone } from '../inputDropdown';
import { InputDropdownStandAlone } from '../inputDropdown/inputDropdownStandAlone';
import { useAnimation } from './hooks';
import { InputDigitSequenceStandAlone } from './inputDigitSequenceStandAlone';
import {
  IInputDigitSequenceControlled,
  InputDigitSequenceStateStyles,
  InputDigitSequenceStateType,
  UseStateInputDigitsType,
} from './types';

//constants
const INPUT_DIGIT_SEQUENCE_STYLES = 'INPUT_DIGIT_SEQUENCE_STYLES';
const NUMBER_REGEX = /^[0-9]*$/;
const ON_CHANGE_VALUE_VISIBLE_TIMEOUT = 500;

const InputDigitSequenceControlledComponet = ({
  variant,
  inputsArray,
  disabled = false,
  showDigitAfterWrite = true,
  showDigitTimeMiliseconds = ON_CHANGE_VALUE_VISIBLE_TIMEOUT,
  animated = false,
  ctv,
  ...props
}: IInputDigitSequenceControlled): JSX.Element => {
  const styles = useStyles<InputDigitSequenceStateStyles>(
    INPUT_DIGIT_SEQUENCE_STYLES,
    variant,
    ctv
  );
  const digitId = useId('digit');

  const [showPassword, setShowPassword] = React.useState(false);
  const [inputDigits, setInputDigits] = React.useState<UseStateInputDigitsType[]>(
    inputsArray.map((input, index) => {
      return {
        index: index,
        value: input.value ?? '',
        blockedBySystem: input.blockedBySystem,
        ['aria-label']: input['aria-label'],
      };
    })
  );

  const { ref, boxesAnimationDone, labelAnimationDone } = useAnimation({
    animated,
  });

  const getNextInput = (index: number) => {
    //we need to find the next input not BloquedBySystem
    //we get a new array from the actual index + 1
    const slicedInputDigits = inputDigits.slice(index + 1);
    //we get the first element with isBloquedBySystem=false
    const nextInputNotDisabled = slicedInputDigits.find(input => !input.blockedBySystem);
    if (nextInputNotDisabled) {
      const inputElement = document.getElementById(`${digitId}-${nextInputNotDisabled.index}`);
      inputElement?.focus();
    }
  };

  const [passwordIndex, setPasswordIndex] = React.useState<number>();
  const displayDigitTimeOut = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  // When unmount, delete displayDigitTimeOut
  React.useEffect(() => {
    return () => {
      if (displayDigitTimeOut.current) {
        clearTimeout(displayDigitTimeOut.current);
      }
    };
  }, []);

  const showDigit = (index: number) => {
    if (!showDigitAfterWrite) {
      return;
    }
    // Set visible the current index showDigitTimeMiliseconds (or change)
    if (displayDigitTimeOut.current) {
      clearTimeout(displayDigitTimeOut.current);
    }
    setPasswordIndex(index);
    displayDigitTimeOut.current = setTimeout(() => {
      setPasswordIndex(undefined);
    }, showDigitTimeMiliseconds);
  };

  const handleInputChange = (index: number): React.ChangeEventHandler<HTMLInputElement> => {
    return event => {
      const { value } = event.target;
      //we only allow number values
      if (NUMBER_REGEX.test(value)) {
        showDigit(index);
        const newDigits = [...inputDigits];
        newDigits[index].value = value;
        setInputDigits(newDigits);
        //when the user writes a new digit, we send the new array in case they want to check something
        props.onInputChange?.(newDigits, event);
        if (value !== '') {
          getNextInput(index);
        }
      }
    };
  };

  const handleClickActionButton: React.MouseEventHandler<HTMLButtonElement> = event => {
    setShowPassword(prevValue => !prevValue);
    props.actionButton?.onClick?.(event);
  };

  const state = !disabled
    ? InputDigitSequenceStateType.DEFAULT
    : InputDigitSequenceStateType.DISABLED;

  return (
    <InputDigitSequenceStandAlone
      {...props}
      ref={ref}
      animated={animated}
      boxesAnimationDone={boxesAnimationDone}
      digitId={digitId}
      disabled={disabled}
      inputDigits={inputDigits}
      labelAnimationDone={labelAnimationDone}
      passwordIndex={passwordIndex}
      showPassword={showPassword}
      state={state}
      styles={styles}
      onActionButtonClick={handleClickActionButton}
      onInputChange={handleInputChange}
    />
  );
};

const InputDigitSequenceBoundary = (props: IInputDigitSequenceControlled): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputDropdownStandAlone {...(props as unknown as IInputDropdownStandAlone)} />
      </FallbackComponent>
    }
  >
    <InputDigitSequenceControlledComponet {...props} />
  </ErrorBoundary>
);

export const InputDigitSequenceControlled = InputDigitSequenceBoundary;
