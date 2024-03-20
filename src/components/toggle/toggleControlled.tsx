import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { POSITIONS } from '@/types';
import { isKeyEnterPressed, isKeySpacePressed } from '@/utils';

import { ToggleStandAlone } from './toggleStandAlone';
import type { IToggleControlled, IToggleStandAlone, ToggleStateStyleType } from './types';
import { getToggleState } from './utils/getToggleState';

const TOGGLE_STYLES = 'TOGGLE_STYLES';

const ToggleControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      ctv,
      hasThreePositions = false,
      togglePosition = hasThreePositions ? POSITIONS.CENTER : POSITIONS.LEFT,
      disabled = false,
      onChange,
      onClick,
      onKeyDown,
      ...props
    }: IToggleControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styleVariant = useStyles<ToggleStateStyleType, V>(TOGGLE_STYLES, variant, ctv);

    const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = e => {
      if (!disabled && (isKeySpacePressed(e.key) || isKeyEnterPressed(e.key))) {
        let newPosition = POSITIONS.LEFT;
        if (
          (togglePosition === POSITIONS.LEFT && !hasThreePositions) ||
          togglePosition === POSITIONS.CENTER
        ) {
          newPosition = POSITIONS.RIGHT;
        } else if (togglePosition === POSITIONS.LEFT && hasThreePositions) {
          newPosition = POSITIONS.CENTER;
        }
        onChange?.(newPosition);
        onKeyDown?.(e);
      }
    };

    const handleOnClick = (newPosition: POSITIONS, e: React.MouseEvent<HTMLElement>) => {
      onChange?.(newPosition);
      onClick?.(e);
    };

    const state = getToggleState(hasThreePositions, togglePosition, disabled);

    const styles = styleVariant[state];

    return (
      <ToggleStandAlone
        {...props}
        ref={ref}
        disabled={disabled}
        hasThreePositions={hasThreePositions}
        styles={styles}
        togglePosition={togglePosition}
        onClick={handleOnClick}
        onKeyDown={handleKeyDown}
      />
    );
  }
);
ToggleControlledComponent.displayName = 'ToggleControlledComponent';

const ToggleBoundary = <V extends string | unknown>(
  props: IToggleControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ToggleStandAlone {...(props as unknown as IToggleStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <ToggleControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const ToggleControlled = React.forwardRef(ToggleBoundary) as <V>(
  props: React.PropsWithChildren<IToggleControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ToggleBoundary>;

/**
 * @description
 * Toggle component is a component that can be used to create a toggle switch.
 * @param {React.PropsWithChildren<IToggleControlled<V>>} props
 * @returns {JSX.Element}
 * @constructor
 */
export { ToggleControlled };
