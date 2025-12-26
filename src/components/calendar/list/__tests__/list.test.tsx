import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { List } from '../list';
import type { ListProps } from '../types/list';

const mockProps: ListProps = {
  currentDate: new Date(2023, 0, 5),
  maxDate: new Date(2023, 0, 31),
  minDate: new Date(2023, 0, 1),
  selectedDate: [new Date(), new Date()],
  setSelectedDate: vi.fn(),
};

const formatDate = (date: Date, format) => {
  return date.toLocaleString('en-us', format);
};

const dayFormatted = (day: number): string => {
  return formatDate(new Date(2023, 0, day), {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  });
};

describe('Date List', () => {
  it('Date List Component', async () => {
    const { container } = render(
      <table>
        <List {...mockProps} />
      </table>,
    );

    const currentDay = screen.getByRole('button', { name: dayFormatted(5) });

    expect(currentDay).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  // TO DO: RESOLVE THE TESTS
  // it('Date List Component - On select date, setSelectedDate should be called', async () => {
  //   const setSelectedDate = vi.fn();
  //   const { container } = render(
  //     <table>
  //       <List {...mockProps} setSelectedDate={setSelectedDate} />
  //     </table>
  //   );

  //   const currentDay = screen.getByRole('button', { name: dayFormatted(5) });
  //   await userEvent.click(currentDay);

  //   expect(setSelectedDate).toHaveBeenCalled();

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate();
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Date List Component - On select date with range, setSelectedDate should be called for each range position I', async () => {
  //   const setSelectedDate = vi.fn();
  //   const { container } = render(
  //     <table>
  //       <List {...mockProps} hasRange={true} setSelectedDate={setSelectedDate} />
  //     </table>
  //   );

  //   const day20 = screen.getByRole('button', { name: dayFormatted(20) });
  //   const day22 = screen.getByRole('button', { name: dayFormatted(22) });
  //   await userEvent.click(day20);
  //   await userEvent.click(day22);

  //   expect(setSelectedDate).toHaveBeenCalledTimes(2);

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate();
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Date List Component - On select date with range, setSelectedDate should be called for each range position II', async () => {
  //   const setSelectedDate = vi.fn();
  //   const { container } = render(
  //     <table>
  //       <List {...mockProps} hasRange={true} setSelectedDate={setSelectedDate} />
  //     </table>
  //   );

  //   const day4 = screen.getByRole('button', { name: dayFormatted(4) });
  //   const day16 = screen.getByRole('button', { name: dayFormatted(16) });
  //   await userEvent.click(day4);
  //   await userEvent.click(day16);

  //   expect(setSelectedDate).toHaveBeenCalledTimes(2);

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate();
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Date List Component - use ghostDateSelected onMouseOver to right', async () => {
  //   const setSelectedDate = vi.fn();
  //   const { container } = render(
  //     <table>
  //       <List
  //         {...mockProps}
  //         currentDate={new Date(2023, 10, 5)}
  //         hasRange={true}
  //         maxDate={new Date(2023, 10, 30)}
  //         minDate={new Date(2023, 10, 1)}
  //         setSelectedDate={setSelectedDate}
  //       />
  //     </table>
  //   );

  //   const day8 = screen.getByLabelText('Wednesday, November 8, 2023');
  //   const day11 = screen.getByLabelText('Saturday, November 11, 2023');
  //   await userEvent.click(day8);
  //   await userEvent.hover(day11);
  //   await userEvent.click(day11);

  //   expect(setSelectedDate).toHaveBeenCalledTimes(2);

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate();
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Date List Component - use ghostDateSelected onMouseOver to left', async () => {
  //   const setSelectedDate = vi.fn();
  //   const { container } = render(
  //     <table>
  //       <List
  //         {...mockProps}
  //         currentDate={new Date(2023, 10, 5)}
  //         hasRange={true}
  //         maxDate={new Date(2023, 10, 30)}
  //         minDate={new Date(2023, 10, 1)}
  //         selectedDate={[new Date(2023, 10, 5), new Date(2023, 10, 5)]}
  //         setSelectedDate={setSelectedDate}
  //       />
  //     </table>
  //   );
  //   const day8 = screen.getByLabelText('Wednesday, November 8, 2023');
  //   const day11 = screen.getByLabelText('Saturday, November 11, 2023');
  //   await userEvent.click(day11);
  //   await userEvent.hover(day8);
  //   await userEvent.click(day8);

  //   expect(setSelectedDate).toHaveBeenCalledTimes(2);

  //   const results = await axe(container);
  //   expect(container).toHTMLValidate();
  //   expect(results.violations).toHaveLength(0);
  // });
});
