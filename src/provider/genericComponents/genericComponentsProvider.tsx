import * as React from 'react';

import { GenericComponentsType, IGenericComponentsProvider } from './genericComponents.type';

export const GenericComponentContext = React.createContext<GenericComponentsType | null>(null);

export const GenericComponentsProvider = ({
  children,
  value,
}: React.PropsWithChildren<IGenericComponentsProvider>): JSX.Element => {
  return (
    <GenericComponentContext.Provider value={value}>{children}</GenericComponentContext.Provider>
  );
};

export const useGenericComponents = (): GenericComponentsType => {
  const context = React.useContext(GenericComponentContext);

  if (!context) {
    throw Error(
      'Generic components context is being used without a provider or with an unsupported value'
    );
  }

  return context;
};
