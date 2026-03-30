import type { StateType } from '@/lib/types/states/states';

export type SelectorStateType = Extract<StateType, 'default' | 'disabled'>;
