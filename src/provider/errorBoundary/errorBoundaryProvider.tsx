import React, { useState } from 'react';

import { ErrorBoundaryPortal } from './components/errorBoundaryPortal/errorBoundaryPortal';
import { ErrorBoundaryContext } from './errorBoundaryContext';
import { ErrorBoundaryErrors } from './types/errorBoundary';

interface IErrorBoundaryProvider {
  children: React.ReactNode;
  showErrorMessage?: boolean;
  idCreateModal?: string | null;
  customFallback?: JSX.Element;
}

export const ErrorBoundaryProvider = ({
  children,
  showErrorMessage = true,
  idCreateModal,
  customFallback,
}: IErrorBoundaryProvider): JSX.Element => {
  const [errors, setErrors] = useState<Array<ErrorBoundaryErrors>>([]);

  const getErrors = (error: ErrorBoundaryErrors) => {
    setErrors(prev => [...prev, error]);
  };

  return (
    <>
      <ErrorBoundaryContext.Provider value={{ errors, getErrors, customFallback }}>
        {errors.length && showErrorMessage ? (
          <ErrorBoundaryPortal errors={errors} portalId={idCreateModal} />
        ) : null}
        {children}
      </ErrorBoundaryContext.Provider>
    </>
  );
};
