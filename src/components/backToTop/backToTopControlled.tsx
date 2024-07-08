import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { States, useManageState } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { BackToTopStandAlone } from './backToTopStandAlone';
import { BackToTopStateType, BackToTopStatesStyles } from './types';
import { IBackToTopControlled, IBackToTopStandAlone } from './types/backToTop';

const BackToTopControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      ctv,
      stopElement,
      visibilityScrollOffset = 1,
      bottomPosition = 40,
      ...props
    }: IBackToTopControlled<V>,
    ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<BackToTopStatesStyles, V>(STYLES_NAME.BACK_TO_TOP, variant, ctv);

    const innerRef = React.useRef<HTMLButtonElement | null>(null);

    React.useImperativeHandle(ref, () => {
      return innerRef?.current as HTMLButtonElement;
    }, []);

    const { state, setRef } = useManageState({
      states: Object.values(BackToTopStateType) as States,
      ref: innerRef as React.ForwardedRef<HTMLElement> | undefined | null,
    });

    const handleScrollListener = React.useCallback(() => {
      const stop = stopElement?.current ?? document.querySelector('footer');
      const button = innerRef?.current;
      if (!button) {
        return;
      }

      // set bottom position to 0 to calc the distance between the posible footer
      button.style.bottom = '0px';
      let newBottomPosition = bottomPosition;

      // update button bottom position when stop is present
      if (stop) {
        const buttonBottom = button.getBoundingClientRect().bottom;
        const stopTop = stop.getBoundingClientRect().top;
        const distance = buttonBottom - stopTop;
        if (distance > 0) {
          newBottomPosition += distance;
        }
      }

      // update the distance and set the visibility
      button.style.bottom = `${newBottomPosition}px`;
      const display = window.scrollY >= visibilityScrollOffset;
      button.style.display = display ? 'flex' : 'none';
    }, [visibilityScrollOffset]);

    React.useEffect(() => {
      handleScrollListener();
      window.addEventListener('scroll', handleScrollListener);
      return () => {
        window.removeEventListener('scroll', handleScrollListener);
      };
    }, [handleScrollListener]);

    return (
      <BackToTopStandAlone
        {...props}
        ref={setRef as React.ForwardedRef<HTMLButtonElement>}
        state={state as unknown as BackToTopStateType}
        styles={styles}
      />
    );
  }
);
BackToTopControlledComponent.displayName = 'BackToTopControlledComponent';

const BackToTopBoundary = <V extends string | unknown>(
  props: IBackToTopControlled<V>,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <BackToTopStandAlone {...(props as unknown as IBackToTopStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <BackToTopControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * BackToTop component is a component that shows a button to scroll to the top of the page.
 * @param {React.PropsWithChildren<IBackToTopControlled<V>>} props
 * @returns {JSX.Element}
 */
const BackToTopControlled = React.forwardRef(BackToTopBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IBackToTopControlled<V>> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof BackToTopBoundary>;

export { BackToTopControlled };
