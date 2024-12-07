import '@testing-library/jest-dom/extend-expect';

import { fireEvent } from '@testing-library/react';
import React from 'react';

import * as useMediaDevice from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia/windowMatchMedia';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { ButtonControlStandAlone } from '../components/buttonControlStandAlone';

describe('ButtonControlStandAlone', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  });

  it('renders correctly with default props', () => {
    const { getByRole } = renderProvider(<ButtonControlStandAlone />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toBeDisabled();
  });

  it('renders correctly with disabled prop', () => {
    const { getByRole } = renderProvider(<ButtonControlStandAlone disabled />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('passes aria props correctly', () => {
    const { getByRole } = renderProvider(<ButtonControlStandAlone aria-label="custom button" />);
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'custom button');
  });

  it('handles click events correctly', () => {
    const handleClick = jest.fn();
    const { getByRole } = renderProvider(<ButtonControlStandAlone onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
