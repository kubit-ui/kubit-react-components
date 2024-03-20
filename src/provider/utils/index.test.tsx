import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import { UtilsProvider, UtilsProviderProps, useUtilsProvider } from '.';
import { FORMAT_DATE } from './types';

describe('Utils provider', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const TestComponent = () => <div>Test component</div>;
  const mockProps = {
    formatDate: jest.fn(),
    transformDate: jest.fn(),
    dateHelpers: {
      getSubDays: jest.fn(),
      getSubMonths: jest.fn(),
      getSubYears: jest.fn(),
      getAddMonths: jest.fn(),
      getAddDays: jest.fn(),
      getAddYears: jest.fn(),
      getAllMonthName: jest.fn(),
      getAllWeekdayName: jest.fn(),
      isBefore: jest.fn(),
      isAfter: jest.fn(),
      isDatesEqual: jest.fn(),
    },
  };
  it('Should render children correctly', () => {
    render(
      <UtilsProvider {...mockProps}>
        <TestComponent />
      </UtilsProvider>
    );

    expect(screen.getAllByText('Test component')).toBeTruthy();
  });

  it('Should set utilities correctly', () => {
    const wrapper = ({ children }) => <UtilsProvider {...mockProps}>{children}</UtilsProvider>;

    const { result } = renderHook(() => useUtilsProvider(), { wrapper });
    const { formatDate } = result.current as UtilsProviderProps;

    formatDate(new Date(), 'mockFormat');

    expect(mockProps.formatDate).toHaveBeenCalled();
  });
  it('check FORMAT_DATE enum', () => {
    enum mockedFormatDate {
      d = 'd',
      dd = 'dd',
      ddd = 'ddd',
      dddd = 'dddd',
      t = 't',
      tt = 'tt',
      ttt = 'ttt',
      tttt = 'tttt',
      T = 'T',
      TT = 'TT',
      TTT = 'TTT',
      TTTT = 'TTTT',
      f = 'f',
      ff = 'ff',
      fff = 'fff',
      ffff = 'ffff',
      F = 'F',
      FF = 'FF',
      FFF = 'FFF',
      FFFF = 'FFFF',
    }
    expect(FORMAT_DATE).toStrictEqual(mockedFormatDate);
  });
  it('Should fail if utilies are not initialized correctly', () => {
    // Avoid to console the error, it is expected
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
    const { result } = renderHook(useUtilsProvider);
    expect(result?.error?.message).toBe(
      'UtilsProvider not initialized. Need to render <UtilsProvider> and configure each utility'
    );
  });
});
