import type { MouseEventHandler } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';

import type {
  PaginationButtonControlProps,
  PaginationCssClasses,
} from '../types/pagination';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';

export const PaginationButtonControl = ({
  cssClasses,
  disabled,
  paginationButtonControl,
  position = 'left',
}: {
  cssClasses?: PaginationCssClasses;
  paginationButtonControl: PaginationButtonControlProps | undefined;
  disabled: boolean;
  position?: 'left' | 'right';
}): JSX.Element => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!disabled) {
      paginationButtonControl?.onClick?.(event);
    }
  };
  const customAttributes = {
    'data-state': disabled ? 'disabled' : '',
  };
  return (
    <ElementOrIcon
      altText={paginationButtonControl?.ariaLabel}
      aria-controls={paginationButtonControl?.ariaControls}
      aria-label={paginationButtonControl?.ariaLabel}
      className={classNames(
        { [`${cssClasses?.paginationleftarrowicon}`]: position === 'left' },
        { [`${cssClasses?.paginationrightarrowicon}`]: position === 'right' },
      )}
      customAttributes={customAttributes}
      disabled={disabled}
      icon={paginationButtonControl?.icon}
      onClick={handleOnClick}
    />
  );
};
