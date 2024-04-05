import React from 'react';

import {
  FONTS_KUBIT_GLOBAL_STYLES,
  FONTS_KUBIT_WIREFRAME_GLOBAL_STYLES,
  KUBIT_GLOBAL_STYLES,
  KUBIT_WIREFRAME_GLOBAL_STYLES,
} from '../../src/designSystem';
import {
  ThemeProvider as BaseThemeProvider,
  IGenericLink,
  UtilsProvider,
} from '../../src/provider';
import { DateFormatOptions } from '../../src/provider/utils/types';
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
} from '../../src/utils/date';

const link = React.forwardRef((props: IGenericLink, ref: unknown) => {
  return (
    <a
      ref={ref as React.LegacyRef<HTMLAnchorElement> | undefined}
      href={props.url}
      className={props.className}
      aria-disabled={props['aria-disabled']}
      aria-label={props['aria-label']}
      aria-describedby={props['aria-describedby']}
      target={props.target}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      role={props.role}
      data-testid={props.dataTestId}
      draggable={props.draggable}
    >
      {props.children}
    </a>
  );
});

const globalStyles = {
  kubit: KUBIT_GLOBAL_STYLES,
  kubit_wireframe_vulcan: KUBIT_WIREFRAME_GLOBAL_STYLES,
};

const globalFontStyles = {
  kubit: FONTS_KUBIT_GLOBAL_STYLES,
  kubit_wireframe_vulcan: FONTS_KUBIT_WIREFRAME_GLOBAL_STYLES,
};

export const ThemeProvider = ({ children, theme, themeName = 'kubit' }) => {
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
        getAllWeekdayName: () => {
          return getAllWeekdayNames();
        },
      }}
      formatDate={(date: Date, format: string | DateFormatOptions) => {
        return formatDate(date, format);
      }}
      transformDate={(date: string | number, format: string | undefined) => {
        return transformDate(date, format);
      }}
    >
      <BaseThemeProvider
        showErrors={true}
        styles={theme}
        genericComponents={{ LINK: link }}
        customGlobalStyles={globalStyles[themeName]}
        customFonts={globalFontStyles[themeName]}
        themeInformation={{
          name: themeName,
        }}
      >
        {children}
      </BaseThemeProvider>
    </UtilsProvider>
  );
};
