import { type PropsWithChildren, createContext, useContext } from 'react';

import type {
  GenericComponentsProviderProps,
  GenericComponentsType,
} from './types/genericComponentsProvider';

/**
 * React Context for generic component implementations.
 * Provides access to custom Link and Image components throughout the application.
 */
export const GenericComponentContext =
  createContext<GenericComponentsType | null>(null);

/**
 * Provider component for custom generic component implementations.
 * Allows applications to inject their own Link and Image components
 * (e.g., Next.js Link, React Router Link) to be used by all Kubit components.
 *
 * This is essential for integrating Kubit components with different routing libraries
 * or custom implementations while maintaining consistent behavior across the application.
 *
 * @param props - Provider props
 * @param props.children - React children to be wrapped by the provider
 * @param props.value - Custom generic components to be used throughout the application
 *
 * @returns The provider component wrapping all child components
 *
 * @example
 * ```tsx
 * import { Link } from 'react-router-dom';
 *
 * const customComponents = {
 *   LINK: Link,
 *   IMAGE: CustomImage,
 * };
 *
 * <GenericComponentsProvider value={customComponents}>
 *   <App />
 * </GenericComponentsProvider>
 * ```
 */
export const GenericComponentsProvider = ({
  children,
  value,
}: PropsWithChildren<GenericComponentsProviderProps>): JSX.Element => {
  return (
    <GenericComponentContext.Provider value={value}>
      {children}
    </GenericComponentContext.Provider>
  );
};

/**
 * Custom hook to access the generic components context.
 * Provides access to the custom Link and Image components configured in the provider.
 *
 * @throws {Error} If used outside of a GenericComponentsProvider or with invalid value
 * @returns The generic components (LINK, IMAGE) from the context
 *
 * @example
 * ```tsx
 * const { LINK, IMAGE } = useGenericComponents();
 *
 * return (
 *   <LINK url="/home">
 *     <IMAGE src="/logo.png" alt="Logo" />
 *   </LINK>
 * );
 * ```
 */
export const useGenericComponents = (): GenericComponentsType => {
  const context = useContext(GenericComponentContext);

  if (!context) {
    throw Error(
      'Generic components context is being used without a provider or with an unsupported value',
    );
  }

  return context;
};
