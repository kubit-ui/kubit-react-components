import type { StateType } from '@/lib/types/states/states';

export type TabsStateTypes = Extract<
  StateType,
  | 'default'
  | 'selected'
  | 'unselected'
  | 'empty'
  | 'hover'
  | 'pressed'
  | 'disabled'
>;
