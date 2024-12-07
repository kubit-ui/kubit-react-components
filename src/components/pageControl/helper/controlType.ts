import { IElementOrIcon } from '@/components/elementOrIcon/types/elementOrIcon';

import { PageControlControlType } from '../types/pageControl';

export const isIElementOrIcon = (control?: PageControlControlType): control is IElementOrIcon => {
  return (control as IElementOrIcon)?.icon !== undefined;
};
