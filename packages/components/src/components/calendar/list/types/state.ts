import type { StateType } from '@/lib/types/states/states';

export type ListDaysStateType = Extract<
  StateType,
  | 'default'
  | 'disabled'
  | 'hover'
  | 'current_day'
  | 'selected'
  | 'start_date_range'
  | 'end_date_range'
  | 'midle_date_range'
>;
