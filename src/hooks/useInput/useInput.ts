import {
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useInternalValidations } from '@/components/input/hooks';
import { ERROR_EXECUTION, FormatNumber } from '@/components/input/types/input';
import { InputTypeType } from '@/components/input/types/inputType';
import {
  checkValidFormattedNumber,
  convertDecimalSeparator,
  formatNumber,
  getDecimalSeparator,
  getState,
  removeThousandSeparator,
} from '@/components/input/utils';
import { truncatedValue } from '@/components/inputCurrency/helpers';
import { BACKSPACE, DELETE } from '@/constants';
import { useValidations } from '@/provider/validations';
import { EventKeyPressRefType } from '@/types/type';
import {
  cleanInputValue,
  formatMask,
  getPosition,
  isArrowDownPressed,
  isArrowUpPressed,
  maxCountBetweenChars,
} from '@/utils';
import { matchInputValue } from '@/utils/maskUtility/mask.utility';

import { limitValue } from './helpers/limitValue';
import { modifyInputNumberValue } from './helpers/modifyInputNumberValue';
import { ParamsTypeInputHook, ReturnTypeInputHook } from './types/inputHook';

export const useInput = (props: ParamsTypeInputHook): ReturnTypeInputHook => {
  const [value, setValue] = useState(props.currentValue || '');
  const [focus, setFocus] = useState(false);

  const { validationValue } = useValidations();
  const { internalErrors, checkInternalValidations } = useInternalValidations(
    props.type,
    props.minLength,
    props.onInternalErrors
  );

  const handleSetValue = value => {
    setValue(value);
  };

  const state = useMemo(
    () =>
      getState(
        value,
        focus,
        props.disabled,
        internalErrors.length > 0 || props.error,
        props.informationAssociated
      ),
    [value, focus, props.disabled, internalErrors.length, props.error, props.informationAssociated]
  );

  const eventKeyPressRef = useRef<EventKeyPressRefType>();
  const positionRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | undefined>();

  // Return ref of the input element
  useImperativeHandle(
    props.ref,
    () => {
      return inputRef.current;
    },
    []
  );

  const firstRender = useRef(true);

  useEffect(() => {
    if (props.currentValue !== undefined) {
      let newValue = props.currentValue;
      // format with formatNumber configuration
      if (firstRender.current && props.formatNumber && !focus) {
        // add thousand separator to the value
        newValue = addThousandSeparator(String(props.currentValue), props.formatNumber);
      }
      // limit or truncate the value
      controlValue(newValue);
    }
    firstRender.current = false;
  }, [props.currentValue]);

  useEffect(() => {
    positionRef.current = maxCountBetweenChars('#', props.mask) + 1;
  }, []);

  useEffect(() => {
    //avoid change value on input number using wheel mouse
    const input = inputRef.current;
    if (props.disabledWheelMouse && input) {
      const handleWheel = e => {
        e.preventDefault();
      };
      input.addEventListener('wheel', handleWheel);
      return () => {
        input.removeEventListener('wheel', handleWheel);
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (eventKeyPressRef.current && props.mask && inputRef?.current && value) {
      const position = getPosition(
        eventKeyPressRef.current.key,
        value,
        eventKeyPressRef.current.cursor,
        positionRef.current
      );
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        eventKeyPressRef.current.cursor.start + position,
        eventKeyPressRef.current.cursor.end + position
      );
    }
  }, [value]);

  const truncateFloatValue = value => {
    if (value === '') {
      return value;
    }
    const hasMark = value.match(/[^a-zA-Z0-9]/g);

    const isLastCharAMark =
      hasMark &&
      props.maxLength &&
      value.length >= props.maxLength &&
      value[props.maxLength - 1] === hasMark[0];

    return isLastCharAMark && props.type === InputTypeType.NUMBER
      ? value.replace(hasMark[0], '')
      : value;
  };

  const controlValue = value => {
    // control character limit
    const limitedValue = value && limitValue(value, props.min, props.max, props.maxLength);

    // truncate the value with maximun of decimals
    const truncateValue =
      props.truncate && props.maxDecimals !== null && props.maxDecimals !== undefined
        ? truncatedValue(
            String(limitedValue),
            props.maxDecimals,
            props.locale || props.formatNumber?.locale
          )
        : String(limitedValue);

    const valueTruncated = truncateFloatValue(truncateValue);

    handleSetValue(valueTruncated);
    return valueTruncated;
  };

  // add thousand separator to the value
  const addThousandSeparator = (value: string, format: FormatNumber) => {
    if (checkValidFormattedNumber(value, props.locale || format.locale)) {
      // remove existing thousand separator
      const newValue = removeThousandSeparator(value, props.locale || format.locale);
      // format value
      const formattedValue = formatNumber(Number(newValue), format, props.locale || format.locale);
      return formattedValue;
    }
    return value;
  };

  const handleChangeInternal: React.ChangeEventHandler<HTMLInputElement> = event => {
    let eventValue = event.target.value;
    // format value with the mask
    if (props.maskType) {
      let newMaskedValue = cleanInputValue(eventValue, props.maskType);
      if (props.mask) {
        newMaskedValue = formatMask(newMaskedValue, props.mask);
      }
      eventValue = newMaskedValue;
    } else if (props.regex) {
      const newMaskedValue = matchInputValue(String(value), eventValue, props.regex);
      eventValue = newMaskedValue;
    }

    // key validation
    if (props.errorExecution === ERROR_EXECUTION.ON_CHANGE && props.keyValidation) {
      props.onError?.(!validationValue(props.keyValidation, eventValue));
    }

    // limit or truncate the value
    const valueControlled = controlValue(eventValue);

    // check internal validations
    if (props.type !== InputTypeType.DATE) {
      checkInternalValidations(eventValue);
    }

    if (
      modifyInputNumberValue({
        value: eventValue,
        min: props.min,
        max: props.max,
        maxLength: props.maxLength,
      }) ||
      props.type !== InputTypeType.NUMBER
    ) {
      event.target.value = valueControlled;
    }

    // value = previous value
    // valueControlled = current value
    if (value === valueControlled) {
      return;
    }

    props.onChange?.(event);
  };

  const handleBlurInternal: FocusEventHandler<HTMLInputElement> = event => {
    if (props.formatNumber) {
      // add thousand separator to the value
      event.target.value = addThousandSeparator(event.target.value, props.formatNumber);
      handleSetValue(event.target.value);
    }
    props.onBlur?.(event);
    if (props.errorExecution === ERROR_EXECUTION.ON_BLUR && props.keyValidation) {
      props.onError?.(!validationValue(props.keyValidation, event.target.value));
    }
    setFocus(false);
  };

  const handleFocusInternal: FocusEventHandler<HTMLInputElement> = event => {
    if (props.formatNumber) {
      // remove thousand separator to the value
      event.target.value = removeThousandSeparator(
        event.target.value,
        props.locale || props.formatNumber?.locale,
        false
      );
      handleSetValue(event.target.value);
    }
    // transform the string value to a number format with dot as decimal separator to avoid errors
    const decimalNumber = convertDecimalSeparator(
      event.target.value,
      getDecimalSeparator(props.locale || props.formatNumber?.locale)
    );

    if (!isNaN(parseFloat(decimalNumber)) && isFinite(parseFloat(decimalNumber))) {
      event.target.value = decimalNumber;
    }
    props.onFocus?.(event);
    setFocus(true);
  };

  const handleKeyDownInternal: KeyboardEventHandler<HTMLInputElement> = event => {
    if (props.ignoreKeys?.includes(event.key)) {
      event.preventDefault();
    }
    if (
      props.type === InputTypeType.NUMBER &&
      (isArrowUpPressed(event.key) || isArrowDownPressed(event.key))
    ) {
      event.preventDefault();
    }

    const {
      key,
      currentTarget: { selectionStart, selectionEnd },
    } = event;
    let start = selectionStart;
    let end = selectionEnd;

    // Check if the input has a mask
    if (props.mask && inputRef.current && start !== null && end !== null) {
      // Check if the key pressed is "Backspace" or "Delete"
      // Check if the character at the cursor position is a mask character
      if (key === BACKSPACE.key && props.mask[start - 1] && props.mask[start - 1] !== '#') {
        let count = 1;
        // Check if the character at the cursor position is a mask character
        for (let index = start - 1; index >= 0; index--) {
          if (props.mask[index] === '#') {
            count = start - 1 - index;
            break;
          }
        }
        // Calculate the new cursor position
        start = start - count;
        end = end - count;
        // Set the cursor to the new position
        inputRef.current.setSelectionRange(start, end);
      } else if (key === DELETE.key && props.mask[end] && props.mask[end] !== '#') {
        let count = 1;
        // Check if the character at the cursor position is a mask character
        for (let index = end; index < props.mask.length; index++) {
          if (props.mask[index] === '#') {
            count = index - end;
            break;
          }
        }
        // Calculate the new cursor position
        start = start + count;
        end = end + count;
        // Set the cursor to the new position
        inputRef.current.setSelectionRange(start, end);
      }
    }

    const cursor = {
      start: start ?? 0,
      end: end ?? 0,
    };
    eventKeyPressRef.current = { key, cursor };
    props.onKeyDown?.(event);
  };

  return {
    value,
    state,
    inputRef,
    handleChangeInternal,
    handleBlurInternal,
    handleFocusInternal,
    handleKeyDownInternal,
    handleSetValue,
  };
};
