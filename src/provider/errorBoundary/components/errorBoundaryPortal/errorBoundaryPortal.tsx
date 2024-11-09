import React from 'react';
import { createPortal } from 'react-dom';

import { ErrorBoundaryErrors } from '../../types/errorBoundary';
import { ErrorBoundaryModal } from '../errorBoundaryModal/errorBoundaryModal';
import { ErrorBoundarySnackbar } from '../errorBoundarySnackbar/errorBoundarySnackbar';

interface IErrorBoundaryPortal {
  errors: ErrorBoundaryErrors[];
  portalId?: string | null;
}

export const ErrorBoundaryPortal = ({
  portalId,
  errors,
}: IErrorBoundaryPortal): React.ReactPortal => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };
  return createPortal(
    <>
      <ErrorBoundarySnackbar errorCount={errors.length} onClick={handleOpen} />
      <ErrorBoundaryModal errors={errors} open={open} onClose={handleOpen} />
    </>,
    portalId ? document.getElementById(portalId) || document.body : document.body
  );
};
