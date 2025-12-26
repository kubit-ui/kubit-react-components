import type { PositionType } from '@/lib/types/positions/positions';

export type LinkPositionType = Extract<
  PositionType,
  'right' | 'top' | 'left' | 'bottom'
>;
