import { DeviceBreakpointsType } from '@/types';

import { BUILD_SCREEN_READER_CURRENT_PAGE_KEY, BUILD_SCREEN_READER_NUM_PAGES_KEY } from '../types';

interface IUseMediaProgressBarIndexProps {
  index: number;
  barsNum: number;
  currentBar: number;
  device: DeviceBreakpointsType;
  maxBars: ({ default: number } & { [device in DeviceBreakpointsType]?: number }) | undefined;
}
export const mediaProgressBarIndex = ({
  index,
  barsNum,
  currentBar,
  device,
  maxBars,
}: IUseMediaProgressBarIndexProps): number | undefined => {
  const MAX_NUMBER_OF_BARS = maxBars?.[device] || maxBars?.default;

  const lastBarIndex = barsNum - 1;

  if (!MAX_NUMBER_OF_BARS) return index;

  // avoid render more bars than MAX_NUMBER_OF_BARS
  if (index >= MAX_NUMBER_OF_BARS) return;
  // currentBar goes to the last bar when number of bars is greater than MAX_NUMBER_OF_BARS
  if (currentBar === lastBarIndex && barsNum > MAX_NUMBER_OF_BARS) {
    return index + (currentBar + 1 - MAX_NUMBER_OF_BARS);
    // currentBar stays in the next to last bar when there is more bars than MAX_NUMBER_OF_BARS
  } else if (currentBar + 2 >= MAX_NUMBER_OF_BARS && currentBar !== lastBarIndex) {
    return index + (currentBar + 2 - MAX_NUMBER_OF_BARS);
  }
  return index;
};

export const buildMediaProgessBarAriaLabel = (
  currentBar: number,
  barsNum: number,
  barAriaLabel?: string
): string | undefined => {
  if (!barAriaLabel) {
    return barAriaLabel;
  }
  const currentPageRegExp = new RegExp(BUILD_SCREEN_READER_CURRENT_PAGE_KEY, 'g');
  const numPagesRegExp = new RegExp(BUILD_SCREEN_READER_NUM_PAGES_KEY, 'g');

  return barAriaLabel
    .replace(currentPageRegExp, String(currentBar + 1))
    .replace(numPagesRegExp, String(barsNum));
};
