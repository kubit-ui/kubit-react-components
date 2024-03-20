import * as React from 'react';
import { PropsWithChildren, createContext, useContext } from 'react';

import {
  IThemeInformationProvider,
  IUseThemeInformation,
  ThemeInformation,
} from './themeInformation.type';

export const ThemeInformationContext = createContext<ThemeInformation | null>(null);

export const ThemeInformationProvider = ({
  children,
  value,
}: PropsWithChildren<IThemeInformationProvider>): JSX.Element => {
  return (
    <ThemeInformationContext.Provider value={value}>{children}</ThemeInformationContext.Provider>
  );
};

export const useThemeInformation: IUseThemeInformation = () => {
  const context = useContext(ThemeInformationContext);
  if (!context) {
    throw new Error('should use useThemeInformation into ThemeInformationProvider');
  }

  return context;
};
