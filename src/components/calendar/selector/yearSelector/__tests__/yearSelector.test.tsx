import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { YearSelector } from '../yearSelector';

window.matchMedia = windowMatchMedia();

const mockProps = {
  currentDate: new Date(2022, 0, 17),
  setCurrentDate: jest.fn(),
  today: new Date(),
  minDate: new Date(2020, 0, 1),
  maxDate: new Date(2025, 11, 30),
};

const yearList = [2000, 2001, 2002, 2003];

describe('YearSelector', () => {
  it('YearSelector component', () => {
    renderProvider(<YearSelector {...mockProps} />);

    expect(screen.getByRole('button', { name: '2020' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2021' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2022' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2023' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2024' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2025' })).toBeInTheDocument();
  });

  it('YearSelector component - onClick year, setCurrentDate should be called', () => {
    const setCurrentDate = jest.fn();
    renderProvider(<YearSelector {...mockProps} setCurrentDate={setCurrentDate} />);

    const button2024 = screen.getByRole('button', { name: '2024' });

    fireEvent.click(button2024);

    expect(setCurrentDate).toHaveBeenCalled();
  });
});
