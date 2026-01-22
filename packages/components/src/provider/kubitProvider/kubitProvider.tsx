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
        getAddDays,
        getAddMonths,
        getAddYears,
        getAllMonthName: (
          monthFormat: Intl.DateTimeFormatOptions['month'],
          locale?: string,
        ) => {
          // Filter out numeric formats as getAllMonthNames only supports text formats
          const format =
            monthFormat === 'numeric' || monthFormat === '2-digit'
              ? 'long'
              : monthFormat || 'long';
          return getAllMonthNames(format, locale);
        },
        getAllWeekdayName: getAllWeekdayNames,
        getSubDays,
        getSubMonths,
        getSubYears,
        isAfter,
        isBefore,
        isDatesEqual,
      }}
      formatDate={formatDate}
      transformDate={transformDate}
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
