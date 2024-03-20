import React, { PropsWithChildren, createContext, useContext } from 'react';

import { checkRegex } from '@/utils/';

import { IUseValidations, IValidationsProvider, ValidationsType } from './validations.type';

export const ValidationsContext = createContext<ValidationsType | null>(null);

export const ValidationsProvider = ({
  children,
  value,
}: PropsWithChildren<IValidationsProvider>): JSX.Element => {
  return <ValidationsContext.Provider value={value}>{children}</ValidationsContext.Provider>;
};

export const useValidations = (): IUseValidations => {
  const context = useContext(ValidationsContext);

  const validationValue = (key: string, value: string): boolean => {
    const validation: string | ((value: string) => boolean) | undefined =
      context?.regex?.[context?.country || '']?.[key] || context?.regex?.[key];

    if (!validation) {
      throw Error('Function does not exist');
    }

    if (typeof validation === 'function') {
      return validation(value);
    }

    return checkRegex(validation, value);
  };
  return {
    validationValue,
  };
};
