/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC, createContext, useContext, useMemo, useState } from 'react';

import type { RecoverComponentStyles } from '@/lib/types/cssGenerator/cssGenerator';

import '../../components/screen-reader-only/screen-reader-only';
import type {
  Breakpoints,
  StylesContextProps,
  StylesProviderProps,
} from './types/stylesProvider';

import { Provider } from '../cssProvider/provider';

export const StylesContext = createContext<StylesContextProps | undefined>(
  undefined,
);

/**
 * Custom hook to access the `StylesContext`.
 *
 * @throws Will throw an error if used outside of a `StylesProvider`.
 * @returns The current value of the `StylesContext`.
 */
export const useStylesContext = (): StylesContextProps => {
  const context = useContext(StylesContext);
  if (!context) {
    throw new Error('useStylesContext must be used within a StylesProvider');
  }
  return context;
};

const defaultBreakpoints: Breakpoints = {
  lg: 992,
  md: 768,
  sm: 576,
  xl: 1200,
};

/**
 * Utility function to generate media queries based on breakpoints.
 *
 * @param breakpoints - The breakpoints object containing size definitions.
 * @returns An object containing media query strings for different screen sizes.
 */
const buildMediaQueries = (breakpoints: Breakpoints) => ({
  onlyDesktop: `(max-width: ${breakpoints.xl}px)`,
  onlyLargeDesktop: `(min-width: ${breakpoints.xl}px)`,
  onlyMobile: `(max-width: ${breakpoints.md - 1}px)`,
  onlyTablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
});

/**
 * Provider component to supply styles-related data to its children, including theme management.
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

  // Initialize the Provider instance
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
   * Change the current theme.
   *
   * @param themeName - The name of the theme to switch to.
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
   * Retrieve styles for a specific component and variant.
   *
   * @param component - The component name.
   * @param variant - The variant name.
   * @returns The styles for the specified component and variant.
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
