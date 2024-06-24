import { CommonStyleType, DeviceBreakpointsType, IconTypes, TypographyTypes } from '@/types';

import { PaginationState } from './state';

export type PaginationArrowIconStyleType = IconTypes & { disabled?: IconTypes };
export type PaginationCounterNumber = {
  [device in DeviceBreakpointsType]?: {
    counters?: number;
  };
};

export type PaginationCommonProps = {
  container?: CommonStyleType;
  pagesContainer?: CommonStyleType;
  paginationLeftArrowIcon?: PaginationArrowIconStyleType;
  paginationRightArrowIcon?: PaginationArrowIconStyleType;
  paginationCountersNumber?: PaginationCounterNumber;
};

export type PaginationStateProps = {
  pageContainer?: CommonStyleType & { clickable?: CommonStyleType };
  page?: TypographyTypes;
};

export type PaginationStyledProps = PaginationCommonProps & {
  [state in PaginationState]?: PaginationStateProps;
};

export type PaginationThemeProps<V extends string | number | symbol> = {
  [variant in V]: PaginationStyledProps;
};
