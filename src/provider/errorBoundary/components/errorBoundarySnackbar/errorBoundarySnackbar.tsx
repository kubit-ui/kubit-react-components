import React from 'react';

import { Button } from '@/components/button';
import { ButtonSizeType, ButtonVariantType } from '@/designSystem/kubit/components/variants';

import { Snackbar } from './errorBoundarySnackbar.styled';

interface SnackbarProps {
  errorCount: number;
  onClick: () => void;
}

export const ErrorBoundarySnackbar = ({ errorCount, onClick }: SnackbarProps): JSX.Element => (
  <Snackbar>
    <Button size={ButtonSizeType.LARGE} variant={ButtonVariantType.PRIMARY} onClick={onClick}>
      Error(s) {errorCount}
    </Button>
  </Snackbar>
);
