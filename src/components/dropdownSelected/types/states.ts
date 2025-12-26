import type { StateType } from '@/lib/types/states/states';

export type DropdownSelectedStateType = Extract<StateType, 'default' | 'hover'>;
