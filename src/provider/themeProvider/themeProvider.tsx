import isPropValid from '@emotion/is-prop-valid';

import React from 'react';

import {
  CSSProp,
  DefaultTheme,
  StyleSheetManager,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

import { ErrorBoundaryProvider } from '../errorBoundary/errorBoundaryProvider';
import { GenericComponentsType } from '../genericComponents/genericComponents.type';
import { GenericComponentsProvider } from '../genericComponents/genericComponentsProvider';
import { GlobalStyle } from '../global.style/global.style';
import { ThemeInformationProvider } from '../themeInformation/themeInformation';
import { ThemeInformation } from '../themeInformation/themeInformation.type';

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
  styles,
  customGlobalStyles,
  genericComponents,
  themeInformation,
  customFonts,
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
