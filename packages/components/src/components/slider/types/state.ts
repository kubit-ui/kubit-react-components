import type { StateType } from '@/lib/types/states/states';

export type SliderStateType = Extract<
  StateType,
  'default' | 'hover' | 'pressed' | 'disabled'
>;
