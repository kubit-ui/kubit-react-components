import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';

import { IPaginationButtonControl } from '../types/pagination';
import { PaginationArrowIconStyleType } from '../types/paginationTheme';

interface IPaginationButtonControlProps {
  styles?: PaginationArrowIconStyleType;
  paginationButtonControl: IPaginationButtonControl;
  disabled: boolean;
}

export const PaginationButtonControl = ({
  styles,
  paginationButtonControl,
  disabled,
}: IPaginationButtonControlProps): JSX.Element => {
  const iconStyles = disabled && styles?.disabled ? styles.disabled : styles;
  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    !disabled && paginationButtonControl.onClick?.(event);
  };
  return (
    <ElementOrIcon
      altText={paginationButtonControl?.ariaLabel}
      aria-controls={paginationButtonControl?.ariaControls}
      aria-label={paginationButtonControl?.ariaLabel}
      customIconStyles={iconStyles}
      disabled={disabled}
      icon={paginationButtonControl?.icon}
      onClick={handleOnClick}
    />
  );
};
