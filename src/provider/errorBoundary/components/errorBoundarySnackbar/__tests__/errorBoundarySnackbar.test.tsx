import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ErrorBoundarySnackbar } from '../errorBoundarySnackbar';

const mockProps = {
  errorCount: 2,
  onClick: jest.fn(),
};

describe('ErrorBoundary Snackbar tests', () => {
  it('Should be have a right behaviour', () => {
    const { getByText } = renderProvider(<ErrorBoundarySnackbar {...mockProps} />);

    const errorSnackbar = getByText(`Error(s) ${mockProps.errorCount}`);
    expect(errorSnackbar).toBeInTheDocument();

    fireEvent.click(errorSnackbar);
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
