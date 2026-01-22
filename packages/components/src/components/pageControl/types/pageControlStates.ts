import type { StateType } from '@/lib/types/states/states';

export type PageControlState = Extract<
  StateType,
  'current' | 'default' | 'last'
>;
export type ArrowsControlState = Extract<StateType, 'inactive' | 'active'>;
export type PageControlDirectionType = 'forth' | 'back';
