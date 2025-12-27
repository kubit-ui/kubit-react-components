import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';

import type { PageControlCssClasses } from '../types/pageControl';

interface ArrowControlStandAloneProps extends ElementOrIconProps {
  cssArrowControlClasses?: PageControlCssClasses;
}

export const ArrowControlStandAlone = ({
  cssArrowControlClasses,
  disabled = false,
  ...props
}: ArrowControlStandAloneProps): JSX.Element => {
  const state = disabled ? 'inactive' : 'active';
  const customAttributes = {
    'data-state': state,
  };
  return (
    <ElementOrIcon
      className={cssArrowControlClasses?.icon}
      customAttributes={customAttributes}
      disabled={disabled}
      {...props}
    />
  );
};
