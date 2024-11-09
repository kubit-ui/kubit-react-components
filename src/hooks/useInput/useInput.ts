/* eslint-disable complexity */
import {
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useInternalValidations } from '@/components/input/hooks/useInternalValidations';
import {
  ERROR_EXECUTION,
  FormatNumber,
  INTERNAL_ERROR_EXECUTION,
} from '@/components/input/types/input';
import { InputTypeType } from '@/components/input/types/inputType';
import {
  checkValidFormattedNumber,
  convertDecimalSeparator,
  formatNumber,
  getDecimalSeparator,
  removeThousandSeparator,
} from '@/components/input/utils/formatNumber';
import { getState } from '@/components/input/utils/state.utils';
import { truncatedValue } from '@/components/inputCurrency/helpers/truncatedValue';
import { BACKSPACE, DELETE } from '@/constants/keyboardKeys/keyboardKeys';
import { EventKeyPressRefType } from '@/types/type/type';
import { cleanInputValue, formatMask, matchInputValue } from '@/utils/maskUtility/mask.utility';

import { useValidations } from '../../provider/validations/validationsProvider';
import { getPosition } from '../../utils/cursorUtility/cursor.utility';
import { isArrowDownPressed, isArrowUpPressed } from '../../utils/keyboard/keyboard.utility';
import { maxCountBetweenChars } from '../../utils/stringUtility/string.utility';
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
  const pasteRef = useRef<boolean>(false);

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
    // prevent the behaviour, when the value is changed by paste method
    if (pasteRef.current) {
      pasteRef.current = false;
      return;
    }
    if (eventKeyPressRef.current && props.mask && inputRef?.current && value) {
      const { start, end } = eventKeyPressRef.current.cursor;
      // if multiple digits are selected, recovery the selected area
      const area = Math.abs(start - end);
      // this the mask representation of the selected area
      const selected = props.mask.slice(start, end);
      // match the mask representation with the mask character
      const maskChart = selected.match(/#/g);
      // calculate the difference between the selected area and the mask representation
      const diffStart = maskChart ? Math.abs(maskChart.length - area) : 0;
      const diffEnd = maskChart ? maskChart.length : 0;

      const position = getPosition(
        eventKeyPressRef.current.key,
        value,
        eventKeyPressRef.current.cursor,
        positionRef.current
      );
      inputRef.current.focus();
      inputRef.current.setSelectionRange(start + diffStart + position, end - diffEnd + position);
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
    if (
      props.type !== InputTypeType.DATE &&
      (props.internalErrorExecution === INTERNAL_ERROR_EXECUTION.ON_CHANGE ||
        props.internalErrorExecution === INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR)
    ) {
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
    if (
      props.internalErrorExecution === INTERNAL_ERROR_EXECUTION.ON_BLUR ||
      props.internalErrorExecution === INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR
    ) {
      checkInternalValidations(event.target.value);
    }
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
    let start = selectionStart ?? 0;
    let end = selectionEnd ?? 0;

    const isSelected = Math.abs(start - end) > 0;

    // Check if the input has a mask
    if (props.mask && inputRef.current && start !== null && end !== null) {
      // Check if the key pressed is "Backspace" or "Delete"
      // Check if the character at the cursor position is a mask character
      if (key === BACKSPACE.key && props.mask[start - 1] && props.mask[start - 1] !== '#') {
        if (!isSelected) {
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
        }
        // Set the cursor to the new position
        inputRef.current.setSelectionRange(start, end);
      } else if (key === DELETE.key && props.mask[end] && props.mask[end] !== '#') {
        if (!isSelected) {
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
        }
        // Set the cursor to the new position
        inputRef.current.setSelectionRange(start, end);
      }
    }

    const cursor = {
      start: start,
      end: end,
    };
    eventKeyPressRef.current = { key, cursor };
    props.onKeyDown?.(event);
  };

  const handlePasteInternal: React.ClipboardEventHandler<HTMLInputElement> = event => {
    const clipboardData = event.clipboardData;
    const pastedData = clipboardData?.getData('Text');
    if (props.ignoreKeys?.some(key => pastedData.includes(key)) || props.disabledCopyAndPaste) {
      event.preventDefault();
      return;
    }
    pasteRef.current = true;
    props.onPaste?.(event);
  };

  return {
    value,
    state,
    inputRef,
    eventKeyPressRef,
    handleChangeInternal,
    handleBlurInternal,
    handleFocusInternal,
    handleKeyDownInternal,
    handleSetValue,
    handlePasteInternal,
  };
};
