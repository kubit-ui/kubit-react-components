import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { MonthSelector } from '../monthSelector';

window.matchMedia = windowMatchMedia();

const mockProps = {
  currentDate: new Date(2022, 11, 17),
  minDate: new Date(2023, 0, 1),
  maxDate: new Date(2023, 0, 31),
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
});
