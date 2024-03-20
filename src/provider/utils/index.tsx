import * as React from 'react';
import { ReactElement, useContext } from 'react';

import { UtilsContext, UtilsContextType } from './context';

// custom types

export type UtilsProviderProps = UtilsContextType & {
  children: ReactElement;
};
export type { UtilsContextType } from './context';

/**
 * UtilsProvider
 * @param {UtilsProviderProps} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <UtilsProvider
 *  formatDate={formatDate}
 * transformDate={transformDate}
 * dateHelpers={dateHelpers}
 * assets={assets}
 * >
 * <App />
 * </UtilsProvider>

 */

export const UtilsProvider = (props: UtilsProviderProps): JSX.Element => {
  const { formatDate, transformDate, dateHelpers, children, assets } = props;

  return (
    <UtilsContext.Provider
      value={{
        assets,
        formatDate,
        transformDate,
        dateHelpers,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtilsProvider = (): UtilsContextType => {
  const utilsContext = useContext(UtilsContext);

  if (!utilsContext) {
    throw Error(
      'UtilsProvider not initialized. Need to render <UtilsProvider> and configure each utility'
    );
  }
  return { ...utilsContext };
};
