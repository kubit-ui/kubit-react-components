import type { StateType } from '@/lib/types/states/states';

export type OptionStateType = Extract<
  StateType,
  | 'default'
  | 'filling'
  | 'hover'
  | 'selected'
  | 'selected_hover'
  | 'multiple_selected'
  | 'multiple_selected_hover'
  | 'disabled'
  | 'focus'
>;
