import type { StateType } from '@/lib/types/states/states';

export type RadioButtonStateType = Extract<
  StateType,
  | 'default'
  | 'disabled'
  | 'disabled_selected'
  | 'selected'
  | 'error'
  | 'error_selected'
>;
