import React from 'react';

import { ErrorBoundary } from './errorBoundary';

interface FallbackComponentProps {
  children: React.ReactNode;
}

export const FallbackComponent = ({ children }: FallbackComponentProps): JSX.Element => (
  <ErrorBoundary fallBackComponent={<></>}>{children}</ErrorBoundary>
);
