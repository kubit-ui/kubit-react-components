import type { FormatDateType } from '@/lib/utils/date/types/format.types';

import {
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
} from '@/lib/utils/date/date';
import { formatDate } from '@/lib/utils/date/formatDate';
import { transformDate } from '@/lib/utils/date/transformDate';

import type { DateFormatOptions } from '../utilsProvider/types/utilsProvider';
import type { KubitProviderProps } from './types/kubitProvider';

import { defaultGenericComponents } from '../genericComponentsProvider/defaultGenericComponents';
import { GenericComponentsProvider } from '../genericComponentsProvider/genericComponentsProvider';
import { StylesProvider } from '../stylesProvider/stylesProvider';
import { UtilsProvider } from '../utilsProvider/utilsProvider';

/**
 * Main provider component for the Kubit component library.
 * Orchestrates all sub-providers (Utils, Styles, and GenericComponents) and provides
 * a single entry point for configuring the entire component library context.
 *
 * This provider wraps the application and supplies:
 * - Date manipulation and formatting utilities
 * - Theme and styling configuration
 * - Custom generic components (Link, Image)
 *
 * @param props - Configuration props for the provider
 * @param props.children - React children to be wrapped by the provider
 * @param props.genericComponentsProvider - Custom implementations of generic components (Link, Image).
 *        Defaults to library's built-in components if not provided
 * @param props.utilsConfig - Optional configuration to override default utility functions
 *        (date helpers, formatters, asset paths)
 *
 * @returns The provider component wrapping all child components
 *
 * @example
 * ```tsx
 * import { KubitProvider } from '@kubit/react-components';
 *
 * function App() {
 *   return (
 *     <KubitProvider
 *       genericComponentsProvider={{
 *         LINK: CustomLink,
 *         IMAGE: CustomImage,
 *       }}
 *     >
 *       <YourApp />
 *     </KubitProvider>
 *   );
 * }
 * ```
 */
export const KubitProvider = ({
  children,
  genericComponentsProvider = defaultGenericComponents,
  utilsConfig,
}: KubitProviderProps): JSX.Element => {
  return (
    <UtilsProvider
      dateHelpers={{
        getAddDays: (date: Date, days: number) => {
          return getAddDays(date, days);
        },
        getAddMonths: (date: Date, months: number) => {
          return getAddMonths(date, months);
        },
        getAddYears: (date: Date, years: number) => {
          return getAddYears(date, years);
        },
        getAllMonthName: () => {
          return getAllMonthNames();
        },
        getAllWeekdayName: (
          weekdayFormat: Intl.DateTimeFormatOptions['weekday'],
          isSundayFirst: boolean,
          locale?: string,
        ) => {
          return getAllWeekdayNames(weekdayFormat, isSundayFirst, locale);
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
        isAfter: (date1: Date, date2: Date) => {
          return isAfter(date1, date2);
        },
        isBefore: (date1: Date, date2: Date) => {
          return isBefore(date1, date2);
        },
        isDatesEqual: (
          firsDate: string | number | Date,
          secondDate: string | number | Date,
        ) => {
          return isDatesEqual(firsDate, secondDate);
        },
      }}
      formatDate={(
        date: Date,
        format: DateFormatOptions | FormatDateType | string,
        locale?: string,
      ) => {
        return formatDate(date, format, locale);
      }}
      transformDate={(date: string | number, format: string | undefined) => {
        return transformDate(date, format);
      }}
      {...utilsConfig}
    >
      <StylesProvider>
        <GenericComponentsProvider value={genericComponentsProvider}>
          {children}
        </GenericComponentsProvider>
      </StylesProvider>
    </UtilsProvider>
  );
};
