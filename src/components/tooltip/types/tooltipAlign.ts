/**
 * Enum for tooltip align types
 * @name TooltipAlignType
 */
import type { PositionType } from '@/lib/types/positions/positions';

export type TooltipAlignType = Extract<
  PositionType,
  'top' | 'right' | 'bottom' | 'left'
>;
