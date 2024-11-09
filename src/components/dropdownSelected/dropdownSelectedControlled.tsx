import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { isKeyTabPressed } from '@/utils/keyboard/keyboard.utility';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { useGenericComponents } from '../../provider/genericComponents/genericComponentsProvider';
import { ROLES } from '../../types/role/role';
import { focusFirstDescendant } from '../../utils/focusHandlers/focusHandlers';
import { ListOptionsType } from '../listOptions/types/type';
import { DropdownSelectedStandAlone } from './dropdownSelectedStandAlone';
import { IDropdownSelectedControlled, IDropdownSelectedStandAlone } from './types/dropdownSelected';
import { DropdownSelectedStateStylesType } from './types/dropdownSelectedTheme';
import { getState } from './utils/state';

// eslint-disable-next-line react/display-name
const DropdownSelectedControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, onMouseEnter, onMouseLeave, ...props }: IDropdownSelectedControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const [hover, setHover] = React.useState(false);
    const stateStyles = useStyles<DropdownSelectedStateStylesType, V>(
      STYLES_NAME.DROPDOWN_SELECTED,
      variant,
      props.ctv
    );

    const styles = stateStyles[getState({ hover })];

    const listOptionsRef = React.useRef<HTMLDivElement>(null);

    const handleOnKeyDownButton: React.KeyboardEventHandler<
      HTMLButtonElement | HTMLLinkElement
    > = event => {
      if (props.open && isKeyTabPressed(event.key) && !event.shiftKey && listOptionsRef?.current) {
        if (props.listOptions.type === ListOptionsType.SELECTION) {
          (listOptionsRef?.current?.firstElementChild as HTMLElement)?.focus();
        } else {
          focusFirstDescendant(listOptionsRef?.current as HTMLElement);
        }
        event.preventDefault();
      }
    };

    React.useEffect(() => {
      if (props.closePopoverOnScroll) {
        window.addEventListener('scroll', props.onClosePopover);
        return () => {
          window.removeEventListener('scroll', props.onClosePopover);
        };
      }
      return undefined;
    }, []);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      setHover(true);
      onMouseEnter?.(event);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      setHover(false);
      onMouseLeave?.(event);
    };

    const { LINK } = useGenericComponents();

    return (
      <DropdownSelectedStandAlone
        ref={ref}
        component={!props.url ? ROLES.BUTTON : LINK}
        listOptionsRef={listOptionsRef}
        styles={styles}
        onButtonKeyDown={handleOnKeyDownButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);

const DropdownSelectedBoundary = <V extends string | unknown>(
  props: IDropdownSelectedControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <DropdownSelectedStandAlone
          {...(props as unknown as IDropdownSelectedStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <DropdownSelectedControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const DropdownSelectedControlled = React.forwardRef(DropdownSelectedBoundary) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IDropdownSelectedControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { DropdownSelectedControlled };
