import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { ListStylesType } from '../list/types/listTheme';
import { MonthSelectorStateType } from '../selector/monthSelector/types/state';
import { SelectorStateType } from '../selector/types/state';
import { YearSelectorStateType } from '../selector/yearSelector/types/state';
import type { CalendarVariantType } from './variant';

/**
 * @description
 * interface for calendar theme styles
 * @interface CalendarContainerStylesType
 */
export type CalendarContainerStylesType = {
  container?: CommonStyleType;
  selectorContainer?: CommonStyleType;
  selectorIconAndBackTextContainer?: CommonStyleType;
  leftArrow?: IconTypes;
  rightArrow?: IconTypes;
  colorArrowDisabled?: string;
  backText?: TypographyTypes;
  selectorOptionsContainer?: CommonStyleType;
  selectorOptions?: {
    [key in SelectorStateType]?: CommonStyleType & TypographyTypes;
  } & {
    sizeSelectorButton?: string;
    variantSelectorButton?: string;
  };
  useDaySelector?: boolean;
  headerContainer?: CommonStyleType;
  headerRow?: CommonStyleType;
  weekDayContainer?: CommonStyleType;
  weekDay?: TypographyTypes;
  daysList?: ListStylesType;
  monthsList?: CommonStyleType;
  monthListItem?: {
    [state in MonthSelectorStateType]?: CommonStyleType;
  };
  monthElement?: {
    [state in MonthSelectorStateType]?: CommonStyleType;
  };
  month?: {
    [state in MonthSelectorStateType]?: TypographyTypes;
  };
  yearsList?: CommonStyleType;
  yearListItem?: {
    [state in YearSelectorStateType]?: CommonStyleType;
  };
  yearElement?: {
    [state in YearSelectorStateType]?: CommonStyleType;
  };
  year?: {
    [state in YearSelectorStateType]?: TypographyTypes;
  };
};

export type CalendarStylesVariantType = {
  [key in CalendarVariantType]?: CalendarContainerStylesType;
};

export type CalendarStylesType = CalendarStylesVariantType;
