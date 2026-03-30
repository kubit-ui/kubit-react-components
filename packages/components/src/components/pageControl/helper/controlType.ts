import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';

import type { PageControlControlProps } from '../types/pageControl';

export const isElementOrIconProps = (
  control?: PageControlControlProps,
): control is ElementOrIconProps => {
  return (control as ElementOrIconProps)?.icon !== undefined;
};
