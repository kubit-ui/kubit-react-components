import * as React from 'react';
import { useEffect, useRef } from 'react';

// styles
import { ItemRoveStyled } from './itemRove.styled';
import { IItemRove } from './types';

const ItemRove = ({
  id,
  children,
  focus,
  index,
  setFocus,
  onSelectItem,
  asElement,
  role,
  onMouseOver,
  dataTestId,
  type,
  disabled = false,
  ariaSelected,
  ariaControls,
  ariaLabel,
  url,
  disableKeys = false,
  ariaDisabled = false,
  preventScrollOnFocus = false,
  ariaHidden = false,
  checkIsFirstTime = false,
}: IItemRove): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const isFirstTime = useRef(checkIsFirstTime);

  useEffect(() => {
    //It is needed to not put the focus automatically when the component appears
    if (focus && !isFirstTime.current) {
      ref && ref.current && ref.current.focus({ preventScroll: preventScrollOnFocus });
    } else {
      isFirstTime.current = false;
    }
  }, [focus]);

  const handleSelect = (hasOnclick: boolean) => {
    //It is needed because you can reach a disabled tab with keyboard arrows but you shouldnt be able to do any action.
    if (!disableKeys) {
      // setFocus only needs to be sent if we don't use useRoveFocus hook previously
      setFocus?.(index);
      if (hasOnclick) {
        onSelectItem && onSelectItem();
      }
    }
  };

  const handleFocus = () => {
    return focus ? 0 : -1;
  };

  return (
    <ItemRoveStyled
      ref={ref}
      aria-controls={ariaControls}
      aria-disabled={ariaDisabled}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      aria-selected={ariaSelected}
      as={asElement}
      data-testid={dataTestId}
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
    >
      {children}
    </ItemRoveStyled>
  );
};

/**
 * @description
 * ItemRove component is a component that can be used to select and navigate through a list of items with the keyboard arrows.
 * It can be used to create a list of options that can be selected.
 * @param {React.PropsWithChildren<IItemRove>} props
 * @returns {JSX.Element}
 */
export { ItemRove };
