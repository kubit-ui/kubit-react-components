/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC, createContext, useContext, useMemo, useState } from 'react';

import type { RecoverComponentStyles } from '@/lib/types/cssGenerator/cssGenerator';

import '../../components/screen-reader-only/screen-reader-only';
import { Provider } from '../cssProvider/provider';
import type {
  Breakpoints,
  StylesContextProps,
  StylesProviderProps,
} from './types/stylesProvider';

/**
 * React Context for styles and theming.
 * Provides access to styling utilities, theme management, and responsive breakpoints.
 */
export const StylesContext = createContext<StylesContextProps | undefined>(
  undefined,
);

/**
 * Custom hook to access the StylesContext.
 * Provides styling utilities including theme management, breakpoints, and component styles.
 *
 * @throws {Error} If used outside of a StylesProvider
 * @returns The current styles context value
 *
 * @example
 * ```tsx
 * const { currentTheme, changeTheme, getComponentStyles } = useStylesContext();
 * const styles = getComponentStyles({ component: 'button', variant: 'primary' });
 * ```
 */
export const useStylesContext = (): StylesContextProps => {
  const context = useContext(StylesContext);
  if (!context) {
    throw new Error('useStylesContext must be used within a StylesProvider');
  }
  return context;
};

/**
 * Default responsive breakpoints for the application.
 * Used when no custom breakpoints are provided.
 */
const defaultBreakpoints: Breakpoints = {
  lg: 992,
  md: 768,
  sm: 576,
  xl: 1200,
};

/**
 * Generates media query strings based on the provided breakpoints.
 * Creates responsive media queries for mobile, tablet, desktop, and large desktop sizes.
 *
 * @param breakpoints - The breakpoints configuration object
 * @returns Object containing media query strings for different screen sizes
 */
const buildMediaQueries = (breakpoints: Breakpoints) => ({
  onlyDesktop: `(max-width: ${breakpoints.xl}px)`,
  onlyLargeDesktop: `(min-width: ${breakpoints.xl}px)`,
  onlyMobile: `(max-width: ${breakpoints.md - 1}px)`,
  onlyTablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
});

/**
 * Provider component for styles, theming, and responsive design utilities.
 * Manages theme selection, CSS class generation, and provides styling context to child components.
 *
 * Features:
 * - Theme management with dynamic theme switching
 * - Responsive breakpoints and media queries
 * - Icon and illustration asset management
 * - Component-specific style retrieval
 * - CSS-in-JS support via Bernova provider
 *
 * @param props - Configuration props for the styles provider
 * @param props.children - React children to be wrapped by the provider
 * @param props.breakpoints - Custom responsive breakpoints (defaults to standard breakpoints if not provided)
 * @param props.icons - Map of icon names to URLs or base64 strings
 * @param props.illustrations - Map of illustration names to URLs or base64 strings
 * @param props.themeSelected - Initial theme to apply
 * @param props.bernovaProvider - Custom Bernova provider instance for advanced styling control
 * @param props.linkId - ID for the style link element in the DOM (default: 'kb-styled-provider')
 * @param props.jsInCss - Whether to inject CSS directly into JavaScript (default: true)
 *
 * @returns The styled provider component wrapping all child components
 *
 * @example
 * ```tsx
 * <StylesProvider
 *   themeSelected="dark"
 *   breakpoints={{ sm: 576, md: 768, lg: 992, xl: 1200 }}
 *   icons={{ home: '/icons/home.svg' }}
 * >
 *   <App />
 * </StylesProvider>
 * ```
 */
//! <-- Review the provider building -->
export const StylesProvider: FC<StylesProviderProps> = ({
  bernovaProvider,
  breakpoints: initialBreakpoints = defaultBreakpoints,
  children,
  icons: initialIcons = {},
  illustrations: initialIllustrations = {},
  jsInCss = true,
  linkId = 'kb-styled-provider',
  themeSelected,
}) => {
  const classes = [];
  const breakpoints = initialBreakpoints;
  const mediaQueries = buildMediaQueries(initialBreakpoints);
  const icons = initialIcons;
  const illustrations = initialIllustrations;

  /**
   * Initialize the Bernova CSS provider instance.
   * Uses the provided custom provider or falls back to the default Provider.
   */
  const provider = useMemo(() => {
    const currentProvider = bernovaProvider || Provider;
    return new currentProvider({
      jsInCss,
      linkId,
    });
  }, []);

  const [currentTheme, setCurrentTheme] = useState<string | null>(
    themeSelected || provider.themeSelected,
  );

  provider.themeSelected = currentTheme || '';

  /**
   * Changes the currently active theme.
   * Updates both the provider and the component state.
   *
   * @param themeName - The name of the theme to activate
   */
  const changeTheme = (themeName: string): void => {
    try {
      provider.themeSelected = themeName;
      setCurrentTheme(themeName);
    } catch (error) {
      // Handle error if theme change fails
    }
  };

  /**
   * Retrieves the compiled styles for a specific component and variant.
   * Provides a safe wrapper around the provider's getComponentStyles method.
   *
   * @param params - Parameters for style retrieval
   * @param params.component - The component name
   * @param params.variant - The variant name (optional)
   * @param params.additionalClassNames - Additional CSS classes to merge (optional)
   * @returns Object containing the component styles, or empty object if retrieval fails
   */
  const getComponentStyles = ({ additionalClassNames, component, variant }) => {
    try {
      return provider.getComponentStyles({
        additionalClassNames,
        component,
        variant: variant || '',
      });
    } catch (error) {
      return {};
    }
  };

  return (
    <StylesContext.Provider
      value={{
        breakpoints,
        changeTheme,
        classes,
        currentTheme,
        getComponentStyles: getComponentStyles as RecoverComponentStyles,
        icons,
        illustrations,
        mediaQueries,
        themeClassNames: provider.classNames as any,
        themes: provider.allThemes,
        themeVariables: provider.variables as any,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
};
