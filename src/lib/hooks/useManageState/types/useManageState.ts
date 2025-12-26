import type { StateType } from '@/lib/types/states/states';

export interface ParamsType {
  states?: StateType[];
  ref?: React.ForwardedRef<HTMLElement> | undefined | null;
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
}
