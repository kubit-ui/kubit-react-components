import { ListDaysStateType } from '../../list/types/state';
import { getStateDay } from '../getState';
import {
  getDaysAndEmptyDaysUntilMaxDate,
  getFirstEmptyAndDisabledDays,
  handleKeyDownMove,
  handleKeyLeftMove,
  handleKeyPageDownMove,
  handleKeyPageUpMove,
  handleKeyRightMove,
  handleKeyTabMove,
  handleKeyUpMove,
} from '../handleKeysmoves';

describe('Calendar utils', () => {
  it('getState - It should return start_date_range with isSelectedToRight', () => {
    const dayFormatted = new Date();
    const isSelectedToLeft = () => false;
    const isSelectedToRight = () => true;
    const isGhostSelected = () => false;
    const selectedDate = [new Date()];
    const today = 'Today';
    const formatDate = () => 'example';
    expect(
      getStateDay({
        dayFormatted,
        isSelectedToLeft,
        isSelectedToRight,
        isGhostSelected,
        selectedDate,
        today,
        formatDate,
      })
    ).toBe(ListDaysStateType.START_DATE_RANGE);
  });
  it('getState - It should return current_day if today = formatDate()', () => {
    const dayFormatted = new Date();
    const isSelectedToLeft = () => false;
    const isSelectedToRight = () => false;
    const isGhostSelected = () => false;
    const selectedDate = [new Date()];
    const today = 'Today';
    const formatDate = () => 'Today';
    const hasRange = true;
    expect(
      getStateDay({
        dayFormatted,
        isSelectedToLeft,
        isSelectedToRight,
        isGhostSelected,
        selectedDate,
        today,
        formatDate,
        hasRange,
      })
    ).toBe(ListDaysStateType.CURRENT_DAY);
  });
  it('handleKeyMoves - handleKeyUp and handleKeyLeft - maxDate is after currentDate and previous = 0 return dayList.length - 1', () => {
    const emptyDaysList = [];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyLeftFunction = handleKeyLeftMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 0;
    const keyLeftResult = keyLeftFunction(previous);
    expect(keyLeftResult).toBe(dayList.length - 1);
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(dayList.length - 1);
  });
  it('handleKeyMoves - handleKeyUp and handleKeyLeft - maxDate is after currentDate and previous = 3 return previous - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyLeftFunction = handleKeyLeftMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 3;
    const keyLeftResult = keyLeftFunction(previous);
    expect(keyLeftResult).toBe(previous - 1);
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyUp and handleKeyLeft - maxDate is same as currentDate and previous === firstEmptyAndDisabledDays)', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2023, 2, 22);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyLeftFunction = handleKeyLeftMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 1;
    const keyLeftResult = keyLeftFunction(previous);
    expect(keyLeftResult).toBe(daysAndEmptyDaysUntilMaxDate);
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(daysAndEmptyDaysUntilMaxDate);
  });
  it('handleKeyMoves - handleKeyUp and handleKeyLeft - maxDate is after currentDate and previous === emptyDaysList.length', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyLeftFunction = handleKeyLeftMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 1;
    const keyLeftResult = keyLeftFunction(previous);
    expect(keyLeftResult).toBe(dayList.length - 1);
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(dayList.length - 1);
  });
  it('handleKeyMoves - handleKeyUp and handleKeyLeft - previous !== emptyDaysList.length', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyLeftFunction = handleKeyLeftMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 6;
    const keyLeftResult = keyLeftFunction(previous);
    expect(keyLeftResult).toBe(previous - 1);
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyUp and handleKeyLeft - minDate month and year is the same than currentDate and previous === firstEmptyAndDisabledDays', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2000, 0, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyLeftFunction = handleKeyLeftMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = firstEmptyAndDisabledDays;
    const keyLeftResult = keyLeftFunction(previous);
    expect(keyLeftResult).toBe(daysAndEmptyDaysUntilMaxDate);
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(dayList.length - 1);
  });

  it('handleKeyMoves - handleKeyUp - minDate is same as currentDate and previous - firstEmptyAndDisabledDays <= minDate.getDate() + 1 return firstEmptyAndDisabledDays - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = new Array(30);
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2000, 0, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 20;
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyUp - return previous - 7', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 0, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const keyUpFunction = handleKeyUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 20;
    const keyUpResult = keyUpFunction(previous);
    expect(keyUpResult).toBe(previous - 7);
  });

  //----------------------------------------------------------------
  it('handleKeyMoves - handleKeyDown and handleKeyRight - max date is after current date and previous=0', () => {
    const emptyDaysList = [];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 0;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(previous + 1 + daysAndEmptyDaysUntilMaxDate);
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(previous + 1 + daysAndEmptyDaysUntilMaxDate);
  });
  it('handleKeyMoves - handleKeyDown and handleKeyRight - maxDate is after currentDate and previous === dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 1;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(firstEmptyAndDisabledDays);
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(firstEmptyAndDisabledDays);
  });

  it('handleKeyMoves - handleKeyDown and handleKeyRight - maxDate the same as currentDate and daysAndEmptyDaysUntilMaxDate - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2023, 2, 22);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = daysAndEmptyDaysUntilMaxDate;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(firstEmptyAndDisabledDays);
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyRight - maxDate the same as currentDate and previous === dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2023, 2, 22);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });

    const previous = dayList.length - 1;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyDown and handleKeyRight - maxDate is after currentDate and previous === daysAndEmptyDaysUntilMaxDate', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = daysAndEmptyDaysUntilMaxDate;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(firstEmptyAndDisabledDays);
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyDown and handleKeyRight - maxDate is after currentDate and previous !== dayList.length - 1 and previous !== daysAndEmptyDaysUntilMaxDate - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 3;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(previous + 1);
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(dayList.length - 1);
  });

  it('handleKeyMoves - handleKeyDown and handleKeyRight - minDate is the same as currentDate and previous === dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2000, 0, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const rightKeyFunction = handleKeyRightMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = dayList.length - 1;
    const rightResult = rightKeyFunction(previous);
    expect(rightResult).toBe(firstEmptyAndDisabledDays);
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(firstEmptyAndDisabledDays);
  });

  it('handleKeyMoves - handleKeyDown - maxDate is same as currentDate and previous + firstEmptyAndDisabledDays + 1 >= maxDate.getDate() && previous !== daysAndEmptyDaysUntilMaxDate - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = new Array(30);
    const maxDate = new Date(2023, 2, 3);
    const currentDate = new Date(2023, 2, 3);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 10;
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(maxDate.getDate() + firstEmptyAndDisabledDays - 1);
  });
  it('handleKeyMoves - handleKeyDown - return previous + 7', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = new Array(30);
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const downKeyFunction = handleKeyDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 10;
    const downResult = downKeyFunction(previous);
    expect(downResult).toBe(previous + 7);
  });
  it('handleKeyMoves - handleKeyPageDown - maxDate is same as currentDate return daysAndEmptyDaysUntilMaxDate', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = new Array(30);
    const maxDate = new Date(2023, 2, 22);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const pageDownKeyFunction = handleKeyPageDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 10;
    const pageDownResult = pageDownKeyFunction(previous);
    expect(pageDownResult).toBe(daysAndEmptyDaysUntilMaxDate);
  });
  it('handleKeyMoves - handleKeyPageDown - maxDate is after currentDate return dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = new Array(30);
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const pageDownKeyFunction = handleKeyPageDownMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 10;
    const pageDownResult = pageDownKeyFunction(previous);
    expect(pageDownResult).toBe(dayList.length - 1);
  });
  it('handleKeyMoves - handleKeyPageUp - return firstEmptyAndDisabledDays - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = new Array(30);
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const firstEmptyAndDisabledDays = getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate
    );
    const daysAndEmptyDaysUntilMaxDate = getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate
    );

    const pageUpKeyFunction = handleKeyPageUpMove({
      dayList,
      maxDate,
      minDate,
      firstEmptyAndDisabledDays,
      daysAndEmptyDaysUntilMaxDate,
      currentDate,
    });
    const previous = 10;
    const pageUpResult = pageUpKeyFunction(previous);
    expect(pageUpResult).toBe(firstEmptyAndDisabledDays);
  });
  it('handleKeyMoves - handleKeyTabMove', () => {
    const previous = 3;
    expect(handleKeyTabMove(previous)).toBe(previous);
  });
  it('handleKeyMoves - getFirstEmptyAndDisabledDays - in minDate month and year', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const minDate = new Date(2000, 2, 15);
    const currentDate = new Date(2000, 2, 22);
    expect(getFirstEmptyAndDisabledDays(emptyDaysList, minDate, currentDate)).toBe(
      emptyDaysList.length + minDate.getDate() - 1
    );
  });
  it('handleKeyMoves - getFirstEmptyAndDisabledDays - in a different month and year than minDate', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const minDate = new Date(2000, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    expect(getFirstEmptyAndDisabledDays(emptyDaysList, minDate, currentDate)).toBe(
      emptyDaysList.length
    );
  });
  it('handleKeyMoves - getDaysAndEmptyDaysUntilMaxDate - in maxDate month and year', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const maxDate = new Date(2000, 2, 15);
    const currentDate = new Date(2000, 2, 15);
    expect(getDaysAndEmptyDaysUntilMaxDate(emptyDaysList, maxDate, currentDate)).toBe(
      emptyDaysList.length + maxDate.getDate() - 1
    );
  });
  it('handleKeyMoves - getDaysAndEmptyDaysUntilMaxDate - in a different month and year than maxDate', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const maxDate = new Date(2000, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    expect(getDaysAndEmptyDaysUntilMaxDate(emptyDaysList, maxDate, currentDate)).toBe(
      emptyDaysList.length
    );
  });
});
