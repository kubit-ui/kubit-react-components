import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { keyLeftMove, keyRightMove, keyTabMove } from '../utils';
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

  it('YearSelector utils - left key pressed should be move to a previous position', () => {
    const result = keyLeftMove(yearList)(2);

    expect(result).toBe(1);
  });

  it('YearSelector utils - left key pressed should be move to the end', () => {
    const result = keyLeftMove(yearList)(0);

    expect(result).toBe(yearList.length - 1);
  });

  it('YearSelector utils - right key pressed should be move to a next position', () => {
    const result = keyRightMove(yearList)(2);

    expect(result).toBe(3);
  });

  it('YearSelector utils - right key pressed should be move to the start', () => {
    const result = keyRightMove(yearList)(3);

    expect(result).toBe(0);
  });

  it('YearSelector utils - tab key pressed should be move outside month list', () => {
    const result = keyTabMove(5);

    expect(result).toBe(5);
  });
});
