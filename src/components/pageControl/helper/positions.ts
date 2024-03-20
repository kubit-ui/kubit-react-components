import { PageControlDirectionType } from '../types';

export const getPositionWithIn = (currentPosition: number, pages: number): number => {
  return Math.max(0, Math.min(currentPosition, pages - 1));
};

type CalcFirstLastVisiblePositionType = {
  isBullet: boolean;
  direction: PageControlDirectionType;
  currentPosition: number;
  pages: number;
  dots: number;
};

type CalcFirstLastVisiblePositionResultType = {
  firstVisiblePosition: number;
  lastVisiblePosition: number;
};

export const calcFirstLastVisiblePosition = ({
  isBullet,
  direction,
  currentPosition,
  pages,
  dots,
}: CalcFirstLastVisiblePositionType): CalcFirstLastVisiblePositionResultType => {
  let firstVisiblePosition = 0;
  let lastVisiblePosition = firstVisiblePosition + dots - 1;
  // On lines pagination (!isBullet), we do not use forth and back logic
  if (!isBullet || direction === PageControlDirectionType.FORTH) {
    if (currentPosition - dots < 0) {
      firstVisiblePosition = 0;
      lastVisiblePosition = firstVisiblePosition + dots - 1;
    } else {
      lastVisiblePosition = currentPosition;
      firstVisiblePosition = lastVisiblePosition - (dots - 1);
    }
  } else {
    if (pages - dots <= currentPosition) {
      lastVisiblePosition = pages - 1;
      firstVisiblePosition = lastVisiblePosition - (dots - 1);
    } else {
      firstVisiblePosition = currentPosition;
      lastVisiblePosition = firstVisiblePosition + dots - 1;
    }
  }
  return { firstVisiblePosition, lastVisiblePosition };
};
