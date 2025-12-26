import type { StateType } from '@/lib/types/states/states';

export type TextAreaStateType = Extract<
  StateType,
  'empty' | 'active' | 'filled' | 'error' | 'disabled_filled' | 'disabled_empty'
>;
