import React from 'react';

import { Snackbar } from './errorBoundarySnackbar.styled';

interface SnackbarProps {
  errorCount: number;
  onClick: () => void;
}

export const ErrorBoundarySnackbar = ({ errorCount, onClick }: SnackbarProps): JSX.Element => (
  <Snackbar onClick={onClick}>Error(s) {errorCount}</Snackbar>
);
