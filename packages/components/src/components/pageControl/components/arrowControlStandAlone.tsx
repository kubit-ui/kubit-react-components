import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';

import type { PageControlCssClasses } from '../types/pageControl';

interface ArrowControlStandAloneProps extends ElementOrIconProps {
  cssArrowControlClasses?: PageControlCssClasses;
}

/**
 * Standalone arrow control component for directional navigation.
 *
 * This component renders an arrow icon for page control navigation,
 * with active and inactive states.
 *
 * @example
 * ```tsx
 * <ArrowControlStandAlone
 *   icon={<ArrowIcon />}
 *   disabled={false}
 * />
 * ```
 */
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
