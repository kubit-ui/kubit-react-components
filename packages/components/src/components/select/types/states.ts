import type { StateType } from '@/lib/types/states/states';

export type SelectStateType = Extract<StateType, 'default' | 'hover'>;
