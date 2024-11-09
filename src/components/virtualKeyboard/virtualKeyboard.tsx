import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { VirtualKeyboardStateType } from './types/state';
import { IVirtualKeyboard, IVirtualKeyboardStandAlone } from './types/virtualKeyboard';
import { VirtualKeyboardStateStylesType } from './types/virtualKeyboardTheme';
import { VirtualKeyboardStandAlone } from './virtualKeyboardStandAlone';

export const VirtualKeyboardComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IVirtualKeyboard<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<VirtualKeyboardStateStylesType, V>(
      STYLES_NAME.VIRTUAL_KEYBOARD,
      variant,
      ctv
    );
    const [state, setState] = React.useState(VirtualKeyboardStateType.INACTIVE);

    const handleOnFocusVirtualKeyboard = () => {
      setState(VirtualKeyboardStateType.ACTIVE);
    };

    const handleOnBlurVirtualKeyboard = e => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setState(VirtualKeyboardStateType.INACTIVE);
      }
    };

    return (
      <VirtualKeyboardStandAlone
        {...props}
        ref={ref}
        state={state}
        styles={styles}
        onVirtualKeyboardBlur={handleOnBlurVirtualKeyboard}
        onVirtualKeyboardFocus={handleOnFocusVirtualKeyboard}
      />
    );
  }
);
VirtualKeyboardComponent.displayName = 'VirtualKeyboardComponent';

const VirtualKeyboardBoundary = <V extends string | unknown>(
  props: IVirtualKeyboard<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <VirtualKeyboardStandAlone
          {...(props as unknown as IVirtualKeyboardStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <VirtualKeyboardComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const VirtualKeyboard = React.forwardRef(VirtualKeyboardBoundary) as <V>(
  props: React.PropsWithChildren<IVirtualKeyboard<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof VirtualKeyboardBoundary>;

/**
 * @description
 * Component to show a virtual keyboard
 */
export { VirtualKeyboard };
