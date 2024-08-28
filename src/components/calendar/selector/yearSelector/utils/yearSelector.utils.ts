const YEARS_IN_ROW = 4;

export const firstYear = (yearList: number[]): number => {
  return yearList.findIndex(year => year === yearList[0]);
};
export const lastYear = (yearList: number[]): number => {
  return yearList.findIndex(year => year === yearList[yearList.length - 1]);
};

export const keyLeftMove = (yearList: number[]): ((previous: number) => number) => {
  return previous => {
    return previous === firstYear(yearList) ? lastYear(yearList) : previous - 1;
  };
};

export const keyRightMove = (yearList: number[]): ((previous: number) => number) => {
  return previous => {
    return previous === lastYear(yearList) ? firstYear(yearList) : previous + 1;
  };
};

export const keyUpMove = (yearList: number[]): ((previous: number) => number) => {
  return previous => {
    if (previous === firstYear(yearList)) {
      return lastYear(yearList);
    }
    return previous <= YEARS_IN_ROW ? firstYear(yearList) : previous - YEARS_IN_ROW;
  };
};

export const keyDownMove = (yearList: number[]): ((previous: number) => number) => {
  return previous => {
    if (previous === lastYear(yearList)) {
      return firstYear(yearList);
    }
    return previous >= lastYear(yearList) - YEARS_IN_ROW
      ? lastYear(yearList)
      : previous + YEARS_IN_ROW;
  };
};

export const keyTabMove = (previous: number): number => previous;
