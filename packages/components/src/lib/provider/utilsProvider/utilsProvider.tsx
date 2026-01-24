import { type JSX, createContext, useContext } from 'react';

import type {
  UtilsContextType,
  UtilsProviderProps,
} from './types/utilsProvider';

/**
 * React Context for utilities.
 * Provides a shared context for utility functions and assets across the application.
 */
export const UtilsContext = createContext<UtilsContextType | null>(null);

/**
 * `UtilsProvider` component.
 * Wraps its children with a `UtilsContext.Provider` to provide utility functions and assets.
 *
 * @param {UtilsProviderProps} props - The properties for the provider.
 * @param {object} props.assets - Assets or resources to be shared via the context.
 * @param {object} props.dateHelpers - Helper functions for date manipulation.
 * @param {function} props.formatDate - Function to format dates.
 * @param {function} props.transformDate - Function to transform dates.
 * @param {ReactElement} props.children - The child components to render inside the provider.
 * @returns {JSX.Element} The `UtilsProvider` component.
 *
 * @example
 * ```tsx
 * <UtilsProvider
 *   assets={assets}
 *   dateHelpers={dateHelpers}
 *   formatDate={formatDate}
 *   transformDate={transformDate}
 * >
 *   <App />
 * </UtilsProvider>
 * ```
 */
export const UtilsProvider = (props: UtilsProviderProps): JSX.Element => {
  const { assets, children, dateHelpers, formatDate, transformDate } = props;

  return (
    <UtilsContext.Provider
      value={{
        assets,
        dateHelpers,
        formatDate,
        transformDate,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

/**
 * Custom hook to access the `UtilsContext`.
 * Ensures that the context is properly initialized before use.
 *
 * @throws Will throw an error if the `UtilsProvider` is not rendered in the component tree.
 * @returns {UtilsContextType} The utilities provided by the context.
 *
 * @example
 * ```tsx
 * const { formatDate, transformDate } = useUtilsProvider();
 * const formattedDate = formatDate(new Date());
 * ```
 */
export const useUtilsProvider = (): UtilsContextType => {
  const utilsContext = useContext(UtilsContext);

  if (!utilsContext) {
    throw new Error(
      'UtilsProvider not initialized. Ensure <UtilsProvider> is rendered and configured properly.',
    );
  }

  return { ...utilsContext };
};
