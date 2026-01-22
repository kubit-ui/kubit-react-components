import type { StateType } from '@/lib/types/states/states';

export type StepperNumberStateType = Extract<
  StateType,
  'default' | 'completed' | 'inactive' | 'active'
>;
