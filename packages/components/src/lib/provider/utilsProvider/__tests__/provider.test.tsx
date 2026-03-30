import { renderHook, screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import type { UtilsProviderProps } from '../types/utilsProvider';

import { FORMAT_DATE } from '../../../utils/date/types/format.types';
import { UtilsProvider, useUtilsProvider } from '../utilsProvider';

describe('Utils provider', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  const TestComponent = () => <div>Test component</div>;
  const mockProps = {
    dateHelpers: {
      getAddDays: vi.fn(),
      getAddMonths: vi.fn(),
      getAddYears: vi.fn(),
      getAllMonthName: vi.fn(),
      getAllWeekdayName: vi.fn(),
      getSubDays: vi.fn(),
      getSubMonths: vi.fn(),
      getSubYears: vi.fn(),
      isAfter: vi.fn(),
      isBefore: vi.fn(),
      isDatesEqual: vi.fn(),
    },
    formatDate: vi.fn(),
    transformDate: vi.fn(),
  };
  it('Should render children correctly', () => {
    render(
      <UtilsProvider {...mockProps}>
        <TestComponent />
      </UtilsProvider>,
    );

    expect(screen.getAllByText('Test component')).toBeTruthy();
  });

  it('Should set utilities correctly', () => {
    const wrapper = ({ children }) => (
      <UtilsProvider {...mockProps}>{children}</UtilsProvider>
    );

    const { result } = renderHook(() => useUtilsProvider(), { wrapper });
    const { formatDate } = result.current as UtilsProviderProps;

    formatDate(new Date(), 'mockFormat');

    expect(mockProps.formatDate).toHaveBeenCalled();
  });
  it('check FORMAT_DATE object', () => {
    const mockedFormatDate = {
      d: 'd',
      dd: 'dd',
      ddd: 'ddd',
      dddd: 'dddd',
      f: 'f',
      F: 'F',
      ff: 'ff',
      FF: 'FF',
      fff: 'fff',
      FFF: 'FFF',
      ffff: 'ffff',
      FFFF: 'FFFF',
      t: 't',
      T: 'T',
      tt: 'tt',
      TT: 'TT',
      ttt: 'ttt',
      TTT: 'TTT',
      tttt: 'tttt',
      TTTT: 'TTTT',
    } as const;
    expect(FORMAT_DATE).toStrictEqual(mockedFormatDate);
  });
  it('Should fail if utilies are not initialized correctly', () => {
    // Avoid to console the error, it is expected
    vi.spyOn(console, 'error').mockImplementationOnce(vi.fn());

    expect(() => {
      renderHook(useUtilsProvider);
    }).toThrow(
      'UtilsProvider not initialized. Ensure <UtilsProvider> is rendered and configured properly.',
    );
  });
});
