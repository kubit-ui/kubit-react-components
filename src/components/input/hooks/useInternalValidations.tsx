import { useState } from 'react';

import { InputTypeType, InternalErrorType } from '../types';

const EMAIL_REGEXP = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

type ReturnType = {
  internalErrors: string[];
  checkInternalValidations: (value: string) => void;
  addInternalError: (internalErrorType: InternalErrorType) => void;
  removeInternalError: (internalErrorType: InternalErrorType) => void;
};

// WARNING!!: Use this hook with caution, in general, validations shouldn't be handle internally
export const useInternalValidations = (
  type?: InputTypeType,
  minLength?: number,
  onInternalErrors?: (errors: string[]) => void
): ReturnType => {
  const [internalErrors, setInternalErrors] = useState<string[]>([]);

  const checkInternalValidations = (value: string) => {
    const errors: string[] = [];
    // Email validation
    if (value && type === InputTypeType.EMAIL && !EMAIL_REGEXP.test(value)) {
      errors.push(InternalErrorType.INVALID_EMAIL);
    }
    // Min length validation
    const minLengthValidation = () => {
      if (type === InputTypeType.TEXT && minLength && value.length < minLength) {
        errors.push(InternalErrorType.INVALID_MIN_LENGTH);
      }
    };
    minLengthValidation();
    setInternalErrors(errors);
    onInternalErrors?.(errors);
  };

  const addInternalError = (internalErrorType: InternalErrorType) => {
    const errors: Set<string> = new Set(internalErrors);
    errors.add(internalErrorType);
    setInternalErrors(Array.from(errors));
    onInternalErrors?.(Array.from(errors));
  };

  const removeInternalError = (internalErrorType: InternalErrorType) => {
    const errors: Set<string> = new Set(internalErrors);
    errors.forEach(error => {
      if (error === internalErrorType) {
        errors.delete(error);
      }
    });
    setInternalErrors(Array.from(errors));
    onInternalErrors?.(Array.from(errors));
  };

  return { internalErrors, checkInternalValidations, addInternalError, removeInternalError };
};
