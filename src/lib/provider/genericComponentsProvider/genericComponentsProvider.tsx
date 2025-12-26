import { type PropsWithChildren, createContext, useContext } from 'react';

import type {
  GenericComponentsProviderProps,
  GenericComponentsType,
} from './types/genericComponentsProvider';

export const GenericComponentContext =
  createContext<GenericComponentsType | null>(null);

export const GenericComponentsProvider = ({
  children,
  value,
}: PropsWithChildren<GenericComponentsProviderProps>): JSX.Element => {
  return (
    <GenericComponentContext.Provider value={value}>
      {children}
    </GenericComponentContext.Provider>
  );
};

export const useGenericComponents = (): GenericComponentsType => {
  const context = useContext(GenericComponentContext);

  if (!context) {
    throw Error(
      'Generic components context is being used without a provider or with an unsupported value',
    );
  }

  return context;
};
