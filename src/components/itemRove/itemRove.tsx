import { useEffect, useRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { classNames as classNamesUtil } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { ItemRoveProps } from './types/itemRove';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * ItemRove component is a navigable item that can be used to create a list of selectable options.
 * It supports keyboard navigation and various accessibility features.
 */
export const ItemRove: React.FC<ItemRoveProps> = ({
  ariaControls,
  ariaDisabled = false,
  ariaHidden = false,
  ariaLabel,
  ariaSelected,
  asElement,
  checkIsFirstTime = false,
  children,
  classNames,
  customAttributes,
  disabled = false,
  disableKeys = false,
  focus,
  id,
  index,
  onMouseOver,
  onSelectItem,
  preventScrollOnFocus = false,
  role,
  setFocus,
  type,
  url,
  ...props
}) => {
  const ref = useRef<HTMLElement>(null);
  const isFirstTime = useRef(checkIsFirstTime);

  const cssClasses = useClassName({
    component: 'ITEM_ROVE',
  });

  const customProps = pickCustomAttributes({ ...props, ...customAttributes });

  useEffect(() => {
    if (focus && !isFirstTime.current) {
      ref.current?.focus({ preventScroll: preventScrollOnFocus });
    } else {
      isFirstTime.current = false;
    }
  }, [focus, preventScrollOnFocus]);

  const handleSelect = (hasOnclick: boolean) => {
    if (!disableKeys) {
      setFocus?.(index);
      if (hasOnclick) {
        onSelectItem?.();
      }
    }
  };

  const handleFocus = () => (focus ? 0 : -1);

  return (
    <CustomComponent
      ref={ref}
      aria-controls={ariaControls}
      aria-disabled={ariaDisabled}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      aria-selected={ariaSelected}
      className={classNamesUtil(cssClasses.item_rove, classNames)}
      component={asElement}
      data-testid="item-rove"
      disabled={disabled}
      id={id}
      role={role}
      tabIndex={handleFocus()}
      type={type}
      url={url}
      onClick={() => handleSelect(true)}
      onFocus={onMouseOver}
      onKeyDown={() => handleSelect(false)}
      onMouseOver={onMouseOver}
      {...customProps}
    >
      {children}
    </CustomComponent>
  );
};
