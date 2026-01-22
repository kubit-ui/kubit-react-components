import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { PageControlButtonProps } from '../types/pageControl';

interface ButtonControlStandAloneProps
  extends PageControlButtonProps, DataAttributes {
  cssPageControlClasses?: string;
  position?: 'left' | 'right';
}

/**
 * Standalone button control component for page control navigation.
 *
 * This component renders a navigation button for page controls,
 * typically used for pagination or carousel navigation.
 *
 * @example
 * ```tsx
 * <ButtonControlStandAlone
 *   position="left"
 *   disabled={false}
 *   onClick={() => {}}
 * />
 * ```
 */
export const ButtonControlStandAlone = ({
  cssPageControlClasses,
  disabled = false,
  position,
  ...props
}: ButtonControlStandAloneProps): JSX.Element => {
  const customProps = pickCustomAttributes(props);

  return (
    <button
      // className={classNames('kbt-page-control__button', {
      //   [`${cssPageControlClasses?.leftbuttoncontrol}`]: position === 'left',
      //   [`${cssPageControlClasses?.rightbuttoncontrol}`]: position === 'right',
      // })}
      className={cssPageControlClasses}
      disabled={disabled}
      type="button"
      {...props}
      {...customProps}
    />
  );
};
