import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { KUBIT_STYLES } from '@/designSystem/kubit';

import { ErrorBoundaryModal, ErrorBoundarySnackbar } from './components';
import { ErrorBoundaryContext } from './errorBoundaryContext';
import { ErrorBoundaryErrors } from './types/errorBoundary';

const CustomProviderErrorBoundary = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <StyledComponentsThemeProvider theme={KUBIT_STYLES}>{children}</StyledComponentsThemeProvider>
    </>
  );
};

export const ErrorBoundaryProvider = ({
  children,
  showErrorMessage = true,
  idCreateModal,
  customFallback,
}: {
  children: React.ReactNode;
  showErrorMessage?: boolean;
  idCreateModal?: string | null;
  customFallback?: JSX.Element;
}): JSX.Element => {
  const [errors, setErrors] = useState<Array<ErrorBoundaryErrors>>([]);
  const [showErrors, setShowErrors] = React.useState<boolean>(false);

  const handleShowError = () => {
    setShowErrors(prev => !prev);
  };
  const getErrors = (error: ErrorBoundaryErrors) => {
    setErrors(prev => [...prev, error]);
  };
  return (
    <>
      <ErrorBoundaryContext.Provider value={{ errors, getErrors, customFallback }}>
        {errors.length && showErrorMessage
          ? createPortal(
              <CustomProviderErrorBoundary>
                {!showErrors && showErrorMessage && (
                  <ErrorBoundarySnackbar errorCount={errors.length} onClick={handleShowError} />
                )}
                <ErrorBoundaryModal errors={errors} open={showErrors} onClose={handleShowError} />
              </CustomProviderErrorBoundary>,
              idCreateModal
                ? document.getElementById(idCreateModal) || document.body
                : document.body
            )
          : null}
        {children}
      </ErrorBoundaryContext.Provider>
    </>
  );
};
