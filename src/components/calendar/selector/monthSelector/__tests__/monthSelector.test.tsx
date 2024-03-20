import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { MonthSelector } from '../monthSelector';
import { keyLeftMove, keyRightMove, keyTabMove } from '../utils';

window.matchMedia = windowMatchMedia();

const mockProps = {
  currentDate: new Date(2022, 11, 17),
  setCurrentDate: jest.fn(),
  today: new Date(),
};

describe('MonthSelector', () => {
  it('MonthSelector component', () => {
    renderProvider(<MonthSelector {...mockProps} />);

    const selector = screen.getAllByRole('button');

    expect(selector).toHaveLength(12);
  });

  it('MonthSelector component - onClick month, setCurrentDate should be called', () => {
    const setCurrentDate = jest.fn();
    renderProvider(<MonthSelector {...mockProps} setCurrentDate={setCurrentDate} />);

    const selector = screen.getAllByRole('button');

    fireEvent.click(selector[5]);

    expect(setCurrentDate).toHaveBeenCalled();
  });
  it('MonthSelector utils - left key pressed should be move to a previous position', () => {
    const result = keyLeftMove(5);

    expect(result).toBe(4);
  });

  it('MonthSelector utils - left key pressed should be move to the end', () => {
    const result = keyLeftMove(0);

    expect(result).toBe(new Date().getMonth());
  });

  it('MonthSelector utils - right key pressed should be move to a next position', () => {
    const result = keyRightMove(5)(6);

    expect(result).toBe(6);
  });

  it('MonthSelector utils - right key pressed should be move to the start', () => {
    const result = keyRightMove(12)(12);

    expect(result).toBe(0);
  });

  it('MonthSelector utils - tab key pressed should be move outside month list', () => {
    const result = keyTabMove(5);

    expect(result).toBe(5);
  });
});
