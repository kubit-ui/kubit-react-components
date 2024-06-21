import { SelectorBoxFileStateType } from '../types';

export const getState = (
  loading: boolean,
  success: boolean,
  error: boolean,
  disabled: boolean
): SelectorBoxFileStateType => {
  if (disabled) {
    return SelectorBoxFileStateType.DISABLED;
  }
  if (error) {
    return SelectorBoxFileStateType.ERROR;
  }
  if (success) {
    return SelectorBoxFileStateType.SUCCESS;
  }
  if (loading) {
    return SelectorBoxFileStateType.LOADING;
  }
  return SelectorBoxFileStateType.DEFAULT;
};
