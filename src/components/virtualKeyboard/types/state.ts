import type { StateType } from '@/lib/types/states/states';

export type VirtualKeyboardStateType = Extract<
  StateType,
  'inactive' | 'active'
>;
