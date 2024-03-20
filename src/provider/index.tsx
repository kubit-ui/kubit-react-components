import isPropValid from '@emotion/is-prop-valid';

import * as React from 'react';

import {
  CSSProp,
  DefaultTheme,
  StyleSheetManager,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

import { KUBIT_GLOBAL_STYLES, KUBIT_STYLES } from '@/designSystem/kubit';

import { ErrorBoundaryProvider } from './errorBoundary';
// context
import {
  GenericComponentsProvider,
  GenericComponentsType,
  defaultGenericComponents,
} from './genericComponents';
// style
import { GlobalStyle } from './global.style';
import { ThemeInformation, ThemeInformationProvider } from './themeInformation';

export { useGenericComponents, GenericComponentContext } from './genericComponents';

export type { IGenericLink } from './genericComponents';

export { useThemeInformation, ThemeInformationProvider } from './themeInformation';

export * from './utils';

interface IThemeProvider {
  children?: React.ReactNode;
  styles: DefaultTheme;
  genericComponents: GenericComponentsType;
  country?: string;
  regex?: unknown;
  customGlobalStyles?: CSSProp;
  themeInformation: ThemeInformation;
  customFonts?: CSSProp;
  showErrors?: boolean;
  idCreateModal?: string | null;
  customFallback?: JSX.Element;
}

/**
 * @name ThemeProvider
 * @description
 * ThemeProvider is a wrapper component that provides the theme to all components in its subtree via the context API.
 * It should be used once at the root of your React component tree.
 * @example
 * <ThemeProvider styles={theme}>
 *  <App />
 * </ThemeProvider>
 * @param {React.ReactNode} children - React children
 * @param {DefaultTheme} styles - Theme object
 * @param {GenericComponentsType} genericComponents - Generic components
 * @param {string} country - Country
 * @param {unknown} regex - Regex
 * @param {CSSProp} customGlobalStyles - Custom global styles
 * @param {ThemeInformation} themeInformation - Theme information
 * @returns {JSX.Element} - ThemeProvider component

 */

export const ThemeProvider = ({
  children,
  styles = KUBIT_STYLES,
  customGlobalStyles = KUBIT_GLOBAL_STYLES,
  genericComponents = defaultGenericComponents,
  themeInformation = { name: 'Kubit' },
  customFonts = {},
  showErrors = false,
  idCreateModal = null,
  customFallback,
}: IThemeProvider): JSX.Element => {
  return (
    <ThemeInformationProvider value={themeInformation}>
      <GenericComponentsProvider value={genericComponents}>
        <GlobalStyle custom={customGlobalStyles} customFonts={customFonts} />
        <StyleSheetManager enableVendorPrefixes shouldForwardProp={isPropValid}>
          <ErrorBoundaryProvider
            customFallback={customFallback}
            idCreateModal={idCreateModal}
            showErrorMessage={showErrors}
          >
            <StyledComponentsThemeProvider theme={styles}>{children}</StyledComponentsThemeProvider>
          </ErrorBoundaryProvider>
        </StyleSheetManager>
      </GenericComponentsProvider>
    </ThemeInformationProvider>
  );
};
