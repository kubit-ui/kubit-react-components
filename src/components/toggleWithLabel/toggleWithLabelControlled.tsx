import React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { POSITIONS } from '@/types/positions/positions';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { ToggleWithLabelStandAlone } from './toggleWithLabelStandAlone';
import { IToggleWithLabelControlled, IToggleWithLabelStandAlone } from './types/toggleWithLabel';
import { ToggleWithLabelStylePropsType } from './types/toggleWithLabelTheme';

const TOGGLE_WITH_LABEL_STYLES = 'TOGGLE_WITH_LABEL_STYLES';

const ToggleWithLabelControlledComponent = React.forwardRef(
  (
    { variant, ctv, onFieldSetClick, onClick, ...props }: IToggleWithLabelControlled,
    ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ToggleWithLabelStylePropsType>(TOGGLE_WITH_LABEL_STYLES, variant, ctv);

    const handleFieldSetClick = (e: React.MouseEvent<HTMLFieldSetElement, MouseEvent>) => {
      if (props.disabled) {
        return;
      }

      // When comming from handleOnClick, the onChange is already called so we avoid calling it again
      const avoidCallingOnChange = (
        e as React.MouseEvent<HTMLFieldSetElement, MouseEvent> & { avoidCallingOnChange?: boolean }
      )?.avoidCallingOnChange;
      // Do not use !avoidCallingOnChange to call onChange when avoidCallingOnChange is undefined
      if (avoidCallingOnChange !== true) {
        let newPosition = POSITIONS.LEFT;
        if (
          (props.togglePosition === POSITIONS.LEFT && !props.hasThreePositions) ||
          props.togglePosition === POSITIONS.CENTER
        ) {
          newPosition = POSITIONS.RIGHT;
        } else if (props.togglePosition === POSITIONS.LEFT && props.hasThreePositions) {
          newPosition = POSITIONS.CENTER;
        }
        props.onChange?.(newPosition);
      }
      onFieldSetClick?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, position: POSITIONS) => {
      Object.defineProperties(e, {
        avoidCallingOnChange: {
          value: true,
        },
      });
      onClick?.(e, position);
    };

    return (
      <ToggleWithLabelStandAlone
        ref={ref}
        styles={styles}
        onClick={handleClick}
        onFieldSetClick={handleFieldSetClick}
        {...props}
      />
    );
  }
);
ToggleWithLabelControlledComponent.displayName = 'ToggleWithLabelControlledComponent';

const ToggleWithLabelBoundary = (
  props: IToggleWithLabelControlled,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ToggleWithLabelStandAlone
          {...(props as unknown as IToggleWithLabelStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <ToggleWithLabelControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the Toggle component
 */
export const ToggleWithLabelControlled = React.forwardRef(ToggleWithLabelBoundary);
