import { ListDaysStateType } from '../../list/types/state';
import { getStateDay } from '../getState';
import {
  getAvailableDaysAfterCurrentDate,
  getAvailableDaysBeforeCurrentDate,
  handleKeyDownAndRightMove,
  handleKeyTabMove,
  handleKeyUpAndLeftMove,
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
  it('handleKeyMoves - handleKeyUpAndLeftMove - isAfter=true and previous=0 return dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => true;
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 2;
    const availableDaysAfterCurrentDate = 2;

    const myFunction = handleKeyUpAndLeftMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 0;
    const result = myFunction(previous);
    expect(result).toBe(dayList.length - 1);
  });
  it('handleKeyMoves - handleKeyUpAndLeftMove - isAfter=true and previous=3 return previous - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => true;
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 2;
    const availableDaysAfterCurrentDate = 2;

    const myFunction = handleKeyUpAndLeftMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 3;
    const result = myFunction(previous);
    expect(result).toBe(previous - 1);
  });
  it('handleKeyMoves - handleKeyUpAndLeftMove - isAfter=false and previous===emptyDaysList.length and currentDate.getMonth() !== maxDate.getMonth()', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => false;
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 2;
    const availableDaysAfterCurrentDate = 2;

    const myFunction = handleKeyUpAndLeftMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 1;
    const result = myFunction(previous);
    expect(result).toBe(dayList.length - 1);
  });
  it('handleKeyMoves - handleKeyUpAndLeftMove - isAfter=false and previous===emptyDaysList.length and currentDate.getMonth() === maxDate.getMonth()', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => false;
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 4;
    const availableDaysAfterCurrentDate = 4;

    const myFunction = handleKeyUpAndLeftMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 1;
    const result = myFunction(previous);
    expect(result).toBe(availableDaysAfterCurrentDate - 1);
  });
  it('handleKeyMoves - handleKeyUpAndLeftMove - isAfter=false and previous!==emptyDaysList.length', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => false;
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 4;
    const availableDaysAfterCurrentDate = 4;

    const myFunction = handleKeyUpAndLeftMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 6;
    const result = myFunction(previous);
    expect(result).toBe(previous - 1);
  });
  //----------------------------------------------------------------
  it('handleKeyMoves - handleKeyDownAndRightMove - isAfter=true and previous=0', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => true;
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 2;
    const availableDaysAfterCurrentDate = 2;

    const myFunction = handleKeyDownAndRightMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 0;
    const result = myFunction(previous);
    expect(result).toBe(previous + 1 + availableDaysAfterCurrentDate);
  });
  it('handleKeyMoves - handleKeyDownAndRightMove - isAfter=true and previous === dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => true;
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 4;
    const availableDaysAfterCurrentDate = 2;

    const myFunction = handleKeyDownAndRightMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 1;
    const result = myFunction(previous);
    expect(result).toBe(availableDaysBeforeCurrentDate);
  });
  it('handleKeyMoves - handleKeyDownAndRightMove - isAfter=false and previous === dayList.length - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => false;
    const maxDate = new Date(2025, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 2;
    const availableDaysAfterCurrentDate = 2;

    const myFunction = handleKeyDownAndRightMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 1;
    const result = myFunction(previous);
    expect(result).toBe(emptyDaysList.length);
  });
  it('handleKeyMoves - handleKeyDownAndRightMove - isAfter=false and previous !== dayList.length - 1 and previous === availableDaysAfterCurrentDate - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => false;
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 4;
    const availableDaysAfterCurrentDate = 4;

    const myFunction = handleKeyDownAndRightMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 3;
    const result = myFunction(previous);
    expect(result).toBe(emptyDaysList.length);
  });
  it('handleKeyMoves - handleKeyDownAndRightMove - isAfter=false and previous !== dayList.length - 1 and previous !== availableDaysAfterCurrentDate - 1', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const dayList = [new Date(2023, 0, 15), new Date(2023, 0, 16)];
    const isAfter = () => false;
    const maxDate = new Date(2025, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    const minDate = new Date(2000, 0, 15);
    const availableDaysBeforeCurrentDate = 4;
    const availableDaysAfterCurrentDate = 6;

    const myFunction = handleKeyDownAndRightMove({
      emptyDaysList,
      dayList,
      isAfter,
      maxDate,
      currentDate,
      minDate,
      availableDaysBeforeCurrentDate,
      availableDaysAfterCurrentDate,
    });
    const previous = 3;
    const result = myFunction(previous);
    expect(result).toBe(previous + 1);
  });
  it('handleKeyMoves - handleKeyTabMove', () => {
    const previous = 3;
    expect(handleKeyTabMove(previous)).toBe(previous);
  });
  it('handleKeyMoves - getAvailableDaysBeforeCurrentDate - with minDate.getMonth() === currentDate.getMonth()', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const minDate = new Date(2000, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    expect(getAvailableDaysBeforeCurrentDate(emptyDaysList, minDate, currentDate)).toBe(
      emptyDaysList.length + minDate.getDate()
    );
  });
  it('handleKeyMoves - getAvailableDaysBeforeCurrentDate - with minDate.getMonth() !== currentDate.getMonth()', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const minDate = new Date(2000, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    expect(getAvailableDaysBeforeCurrentDate(emptyDaysList, minDate, currentDate)).toBe(
      emptyDaysList.length
    );
  });
  it('handleKeyMoves - getAvailableDaysAfterCurrentDate - with minDate.getMonth() === currentDate.getMonth()', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const maxDate = new Date(2000, 2, 15);
    const currentDate = new Date(2023, 2, 22);
    expect(getAvailableDaysAfterCurrentDate(emptyDaysList, maxDate, currentDate)).toBe(
      emptyDaysList.length + maxDate.getDate()
    );
  });
  it('handleKeyMoves - getAvailableDaysAfterCurrentDate - with minDate.getMonth() !== currentDate.getMonth()', () => {
    const emptyDaysList = [new Date(2023, 0, 15)];
    const maxDate = new Date(2000, 0, 15);
    const currentDate = new Date(2023, 2, 22);
    expect(getAvailableDaysAfterCurrentDate(emptyDaysList, maxDate, currentDate)).toBe(
      emptyDaysList.length
    );
  });
});
