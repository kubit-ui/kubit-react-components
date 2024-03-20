import * as React from 'react';

import {
  StyleSheetManager,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

import { FONTS_KUBIT_GLOBAL_STYLES, KUBIT_GLOBAL_STYLES, KUBIT_STYLES } from '@/designSystem/kubit';
import { DateFormatOptions } from '@/provider/utils/types';
import { FormatWeekdayOptionType } from '@/types';
import {
  formatDate,
  getAddDays,
  getAddMonths,
  getAddYears,
  getAllMonthNames,
  getAllWeekdayNames,
  getSubDays,
  getSubMonths,
  getSubYears,
  isAfter,
  isBefore,
  isDatesEqual,
  transformDate,
} from '@/utils/date';

import { ErrorBoundaryProvider } from './errorBoundary';
// context
import { GenericComponentsProvider, defaultGenericComponents } from './genericComponents';
// style
import { GlobalStyle } from './global.style';
import { ThemeInformationProvider } from './themeInformation';
import { UtilsProvider } from './utils';

export { useGenericComponents, GenericComponentContext } from './genericComponents';

export type { IGenericLink } from './genericComponents';

export { useThemeInformation, ThemeInformationProvider } from './themeInformation';

export * from './utils';

interface IThemeProvider {
  children?: React.ReactNode;
  withUtils?: boolean;
}

const KubitDefaultProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ThemeInformationProvider value={{ name: 'Kubit' }}>
      <GenericComponentsProvider value={defaultGenericComponents}>
        <GlobalStyle custom={KUBIT_GLOBAL_STYLES} customFonts={FONTS_KUBIT_GLOBAL_STYLES} />
        <StyleSheetManager /*enableVendorPrefixes shouldForwardProp={isPropValid}*/>
          <ErrorBoundaryProvider showErrorMessage={true}>
            <StyledComponentsThemeProvider theme={KUBIT_STYLES}>
              {children}
            </StyledComponentsThemeProvider>
          </ErrorBoundaryProvider>
        </StyleSheetManager>
      </GenericComponentsProvider>
    </ThemeInformationProvider>
  );
};

export const KubitProvider = ({ children, withUtils = true }: IThemeProvider): JSX.Element => {
  if (withUtils) {
    return (
      <UtilsProvider
        dateHelpers={{
          isAfter: (date1: Date, date2: Date) => {
            return isAfter(date1, date2);
          },
          isBefore: (date1: Date, date2: Date) => {
            return isBefore(date1, date2);
          },
          isDatesEqual: (firsDate: string | number | Date, secondDate: string | number | Date) => {
            return isDatesEqual(firsDate, secondDate);
          },
          getAddDays: (date: Date, days: number) => {
            return getAddDays(date, days);
          },
          getAddMonths: (date: Date, months: number) => {
            return getAddMonths(date, months);
          },
          getAddYears: (date: Date, years: number) => {
            return getAddYears(date, years);
          },
          getSubDays: (date: Date, days: number) => {
            return getSubDays(date, days);
          },
          getSubMonths: (date: Date, months: number) => {
            return getSubMonths(date, months);
          },
          getSubYears: (date: Date, years: number) => {
            return getSubYears(date, years);
          },
          getAllMonthName: () => {
            return getAllMonthNames();
          },
          getAllWeekdayName: (weekdayFormat: FormatWeekdayOptionType, isSundayFirst: boolean) => {
            return getAllWeekdayNames(weekdayFormat, isSundayFirst);
          },
        }}
        formatDate={(date: Date, format: string | DateFormatOptions) => {
          return formatDate(date, format);
        }}
        transformDate={(date: string | number, format: string | undefined) => {
          return transformDate(date, format);
        }}
      >
        <KubitDefaultProvider>{children}</KubitDefaultProvider>
      </UtilsProvider>
    );
  }
  return <KubitDefaultProvider>{children}</KubitDefaultProvider>;
};
