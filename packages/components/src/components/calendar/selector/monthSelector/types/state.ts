import type { StateType } from '@/lib/types/states/states';

export type MonthSelectorStateType = Extract<
  StateType,
  'default' | 'disabled' | 'current' | 'hover' | 'selected' | 'current'
>;
