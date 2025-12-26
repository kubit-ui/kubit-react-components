import type { StateType } from '@/lib/types/states/states';

export type ChipStateType = Extract<
  StateType,
  'default' | 'error' | 'disabled'
>;
