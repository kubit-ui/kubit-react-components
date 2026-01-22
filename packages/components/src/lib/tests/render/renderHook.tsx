import { Provider } from '@kubit-ui-web/design-system/provider/Provider';
import {
  type RenderHookResult,
  renderHook as renderHookrtl,
} from '@testing-library/react';

import { defaultGenericComponents } from '@/lib/provider/genericComponentsProvider/defaultGenericComponents';
import { GenericComponentsProvider } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';
import { StylesProvider } from '@/lib/provider/stylesProvider/stylesProvider';
import { UtilsProvider } from '@/lib/provider/utilsProvider/utilsProvider';
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

export const renderHook = <
  R,
  P extends { children?: React.ReactNode } = { children?: React.ReactNode },
>(
  hook: (props: P) => R,
): RenderHookResult<R, P> => {
  const Wrapper: React.FunctionComponent<{ children?: React.ReactNode }> = ({
    children,
  }) => (
    <GenericComponentsProvider value={{ ...defaultGenericComponents }}>
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
      >
        <StylesProvider bernovaProvider={Provider}>{children}</StylesProvider>
      </UtilsProvider>
    </GenericComponentsProvider>
  );

  return renderHookrtl(() => hook({} as P), { wrapper: Wrapper });
};
