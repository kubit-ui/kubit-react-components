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

const orderDate = (
  date: string,
  format: string,
  isRange?: boolean
): { formatSeparator: string | undefined; formattedDate: string } => {
  const formatRegex = /[^\p{L}]+/gu;
  const dateRegex = /[^\d]+/g;

  const formatValueDate = (value: string): string =>
    value.replace(/[a-zA-Z,]+/, '').replace(/\s/g, '');

  const formattedValue = formatValueDate(date);

  // we want always this YYYY-MM-DD format
  const formatToOrderDate = 'YYYY-MM-DD';

  const correctOrder = formatToOrderDate.split('-');

  const newFormat =
    format.length > 8
      ? format
      : `${format.slice(0, 2)}-${format.slice(2, 4)}-${format.slice(4)}`;

  // to get separator
  const formatSeparator = newFormat.match(formatRegex)?.[0];

  const formatSplit = newFormat.split(formatRegex);

  let dateToCheck: string[] = [];

  let formattedDate = '';

  // Transform date into YYYY-MM-DD format
  const splitDate = (date) => {
    return correctOrder.map((element: string) => {
      if (element.includes('Y')) {
        return date[formatSplit.findIndex((x: string) => x.includes('Y'))];
      } else if (element.includes('M')) {
        return date[formatSplit.findIndex((x: string) => x.includes('M'))];
      } else if (element.includes('D')) {
        return date[formatSplit.findIndex((x: string) => x.includes('D'))];
      }
    });
  };

  if (formattedValue.length === newFormat.length) {
    const dateSplit = formattedValue.split(dateRegex);

    dateToCheck = splitDate(dateSplit);

    formattedDate = dateToCheck.join('-');
  } else if (isRange && date.length > newFormat.length) {
    const dateRangeSplit = date.split(dateRegex);
    //just take the second date to check
    const secondDate = dateRangeSplit.splice(3, 5);
    dateToCheck = splitDate(secondDate);
    formattedDate = dateToCheck.join('-');
  }

  return {
    formatSeparator,
    formattedDate,
  };
};

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
        isDatesEqual: (
          firsDate: string | number | Date,
          secondDate: string | number | Date
        ) => {
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
