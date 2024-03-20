import { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';

import { useValidations } from '@/provider/validations';

import { limitValue } from './helpers/limitValue';

type ParamsType = {
  errorExecution?: string;
  initialValue?: string | number;
  currentValue?: string | number;
  keyValidation?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onError?: (value: boolean) => void;
  max?: string;
  min?: string;
  maxLength?: number;
};

type ReturnType = {
  value: string | undefined | number;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  handleBlurInternal: FocusEventHandler<HTMLInputElement>;
  handleChangeInternal: ChangeEventHandler<HTMLInputElement>;
};

export const useInputDeprecated = ({
  errorExecution,
  initialValue,
  keyValidation,
  currentValue,
  onBlur,
  onChange,
  onError,
  max,
  min,
  maxLength,
}: ParamsType): ReturnType => {
  const [value, setValue] = useState(currentValue || initialValue || '');

  const { validationValue } = useValidations();

  useEffect(() => {
    if (String(currentValue) === String(initialValue) && String(currentValue) !== value) {
      setValue(initialValue || '');
    }
  }, [currentValue]);

  const handleChangeInternal: ChangeEventHandler<HTMLInputElement> = e => {
    const {
      target: { value: valueInput },
    } = e;

    if (onChange) {
      onChange(e);
    }

    if (onError && errorExecution === 'onChange' && keyValidation) {
      onError(!validationValue(keyValidation, valueInput));
    }

    const limitedValue = valueInput && limitValue(valueInput, min, max, maxLength);
    setValue(limitedValue);
  };

  const handleBlurInternal: FocusEventHandler<HTMLInputElement> = e => {
    const {
      target: { value: valueInput },
    } = e;

    if (onBlur) {
      onBlur(e);
    }
    if (onError && errorExecution === 'onBlur' && keyValidation) {
      onError(!validationValue(keyValidation, valueInput));
    }
  };

  return {
    handleChangeInternal,
    handleBlurInternal,
    value,
  };
};
