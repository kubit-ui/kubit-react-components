import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { List } from '../list';
import { IList } from '../types/list';

window.matchMedia = windowMatchMedia();

const mockProps: IList = {
  selectedDate: [new Date(), new Date()],
  currentDate: new Date(2023, 0, 5),
  minDate: new Date(2023, 0, 1),
  maxDate: new Date(2023, 0, 31),
  setSelectedDate: jest.fn(),
};

const formatDate = (date: Date, format) => {
  return date.toLocaleString('en-us', format);
};

const dayFormatted = (day: number): string => {
  return formatDate(new Date(2023, 0, day), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

describe('Date List', () => {
  it('Date List Component', async () => {
    const { container } = renderProvider(
      <table>
        <List {...mockProps} />
      </table>
    );

    const currentDay = screen.getByRole('button', { name: dayFormatted(5) });

    expect(currentDay).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Date List Component - On select date, setSelectedDate should be called', async () => {
    const setSelectedDate = jest.fn();
    const { container } = renderProvider(
      <table>
        <List {...mockProps} setSelectedDate={setSelectedDate} />
      </table>
    );

    const currentDay = screen.getByRole('button', { name: dayFormatted(5) });
    fireEvent.click(currentDay);

    expect(setSelectedDate).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Date List Component - On select date with range, setSelectedDate should be called for each range position I', async () => {
    const setSelectedDate = jest.fn();
    const { container } = renderProvider(
      <table>
        <List {...mockProps} hasRange setSelectedDate={setSelectedDate} />
      </table>
    );

    const day20 = screen.getByRole('button', { name: dayFormatted(20) });
    const day22 = screen.getByRole('button', { name: dayFormatted(22) });
    fireEvent.click(day20);
    fireEvent.click(day22);

    expect(setSelectedDate).toHaveBeenCalledTimes(2);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Date List Component - On select date with range, setSelectedDate should be called for each range position II', async () => {
    const setSelectedDate = jest.fn();
    const { container } = renderProvider(
      <table>
        <List {...mockProps} hasRange setSelectedDate={setSelectedDate} />
      </table>
    );

    const day4 = screen.getByRole('button', { name: dayFormatted(4) });
    const day16 = screen.getByRole('button', { name: dayFormatted(16) });
    fireEvent.click(day4);
    fireEvent.click(day16);

    expect(setSelectedDate).toHaveBeenCalledTimes(2);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Date List Component - use ghostDateSelected onMouseOver to right', async () => {
    const setSelectedDate = jest.fn();
    const { container } = renderProvider(
      <table>
        <List
          {...mockProps}
          currentDate={new Date(2023, 10, 5)}
          hasRange={true}
          maxDate={new Date(2023, 10, 30)}
          minDate={new Date(2023, 10, 1)}
          setSelectedDate={setSelectedDate}
        />
      </table>
    );

    const day8 = screen.getByLabelText('Wednesday, November 8, 2023');
    const day11 = screen.getByLabelText('Saturday, November 11, 2023');
    fireEvent.click(day8);
    fireEvent.mouseOver(day11);
    fireEvent.click(day11);

    expect(setSelectedDate).toHaveBeenCalledTimes(2);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Date List Component - use ghostDateSelected onMouseOver to left', async () => {
    const setSelectedDate = jest.fn();
    const { container } = renderProvider(
      <table>
        <List
          {...mockProps}
          hasRange
          currentDate={new Date(2023, 10, 5)}
          maxDate={new Date(2023, 10, 30)}
          minDate={new Date(2023, 10, 1)}
          selectedDate={[new Date(2023, 22, 5), new Date(2023, 22, 5)]}
          setSelectedDate={setSelectedDate}
        />
      </table>
    );
    const day8 = screen.getByLabelText('Wednesday, November 8, 2023');
    const day11 = screen.getByLabelText('Saturday, November 11, 2023');
    fireEvent.click(day11);
    fireEvent.mouseOver(day8);
    fireEvent.click(day8);

    expect(setSelectedDate).toHaveBeenCalledTimes(2);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
