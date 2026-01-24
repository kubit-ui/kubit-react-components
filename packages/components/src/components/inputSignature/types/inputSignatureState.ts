import type { StateType } from '@/lib/types/states/states';

export type InputSignatureState = Extract<
  StateType,
  'default' | 'active' | 'filled' | 'error' | 'disabled'
>;
