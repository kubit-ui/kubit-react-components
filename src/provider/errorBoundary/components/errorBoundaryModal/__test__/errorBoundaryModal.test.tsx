import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ErrorBoundaryModal } from '../errorBoundaryModal';

const mockProps = {
  errors: [
    { error: 'first error', errorInfo: 'This is the first error info' },
    { error: 'first error', errorInfo: 'This is the first error info' },
  ],
  onClose: jest.fn(),
};

jest.mock('../../../../../assets/storybook/icons/icon_x_close.svg', () => (
  <img alt="closeIcon" src="" />
));

describe('ErrorBoundary Modal Tests', () => {
  it('Should be call onClickClose function when closeButton is clicked. Default open is true', () => {
    const { getByAltText } = renderProvider(<ErrorBoundaryModal {...mockProps} />);

    const closeButton = getByAltText('closeIcon');
    expect(closeButton).toBeInTheDocument();
  });

  it('Should have a right behaviour in the footer buttons', () => {
    const { getByRole, queryByText } = renderProvider(<ErrorBoundaryModal {...mockProps} />);

    const prevButton = getByRole('button', { name: 'prev' });
    const nextButton = getByRole('button', { name: 'next' });

    fireEvent.click(nextButton);
    expect(queryByText('2/2')).toBeTruthy();

    fireEvent.click(prevButton);
    expect(queryByText('1/2')).toBeTruthy();
  });
});
