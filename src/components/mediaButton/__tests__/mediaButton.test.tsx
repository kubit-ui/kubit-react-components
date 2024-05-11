import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { IMediaButton, MediaButton } from '../index';
import { MediaButtonSizeType } from '../types/sizes';

const mockProps: IMediaButton = {
  variant: 'DEFAULT',
  hasBackground: true,
  icon: { icon: 'CLOSE', altText: 'First icon' },
  size: MediaButtonSizeType.LARGE,
  twistedIcon: { icon: 'CARD', altText: 'Second icon' },
  loader: { altText: 'Loader' },
};

describe('MediaButton component', () => {
  it('Should render first icon', async () => {
    const { container } = renderProvider(<MediaButton {...mockProps} />);

    const button = screen.getByRole('button', { name: mockProps.icon.altText });

    expect(button).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render second icon when twisted', async () => {
    const { container } = renderProvider(<MediaButton {...mockProps} twisted />);

    const button = screen.getByRole('button', { name: mockProps.twistedIcon?.altText });

    expect(button).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('iconToTransition may be undefined', async () => {
    renderProvider(<MediaButton {...mockProps} twistedIcon={undefined} />);

    const button = screen.getByRole('button', { name: mockProps.icon.altText });

    expect(button).toBeInTheDocument();
  });

  it('Should render a loader when loading', async () => {
    const { container } = renderProvider(<MediaButton {...mockProps} loading />);

    const loader = screen.getByText(mockProps.loader?.altText as string);

    expect(loader).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should allow configure tabIndex to disable', () => {
    renderProvider(<MediaButton {...mockProps} tabIndex={-1} />);

    const button = screen.getByRole(ROLES.BUTTON);

    expect(button).toHaveProperty('tabIndex', -1);
  });

  it('onClick a callback is litening', () => {
    const mockOnClick = jest.fn();
    renderProvider(<MediaButton {...mockProps} onClick={mockOnClick} />);

    const firstButton = screen.getByRole('button', { name: mockProps.icon.altText });
    fireEvent.click(firstButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
