import { STATES } from '@/lib/types/states/states';

import type { SelectorBoxFileStateType } from '../../types/state';

export const getState = (
  loading: boolean,
  success: boolean,
  error: boolean,
  disabled: boolean,
): SelectorBoxFileStateType => {
  if (disabled) {
    return STATES.DISABLED;
  }
  if (error) {
    return STATES.ERROR;
  }
  if (success) {
    return STATES.SUCCESS;
  }
  if (loading) {
    return STATES.LOADING;
  }
  return STATES.DEFAULT;
};
