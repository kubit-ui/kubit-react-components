import type { StateType } from '@/lib/types/states/states';

export type SelectorBoxFileStateType = Extract<
  StateType,
  'default' | 'loading' | 'success' | 'error' | 'disabled'
>;
