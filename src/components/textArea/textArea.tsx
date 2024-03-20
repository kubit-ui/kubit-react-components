import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TextAreaStandAlone } from './textAreaStandAlone';
import { ITextArea, ITextAreaStandAlone, TextAreaVariantStylesType } from './types';
import { getState } from './utils';

const TEXT_AREA_STYLES = 'TEXT_AREA_STYLES';

const TextAreaComponent = React.forwardRef(
  <V extends string | unknown>(
    { disabled = false, error = false, onFocus, onBlur, ctv, ...props }: ITextArea<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<TextAreaVariantStylesType, V>(TEXT_AREA_STYLES, props.variant, ctv);
    const [active, setActive] = React.useState(false);

    const _onFocus: React.FocusEventHandler<HTMLTextAreaElement> = event => {
      if (styles.labelInsideTextArea) {
        const target = event?.target as HTMLElement;
        const parentElement = target?.parentElement;
        if (target && parentElement) {
          const targetComputedStyles = window.getComputedStyle(target);
          parentElement.style.outline = targetComputedStyles.outline;
          parentElement.style.boxShadow = targetComputedStyles.boxShadow;
          target.style.outline = 'none';
          target.style.boxShadow = 'none';
        }
      }
      setActive(true);
      onFocus?.(event);
    };

    const _onBlur: React.FocusEventHandler<HTMLTextAreaElement> = event => {
      if (styles.labelInsideTextArea) {
        const target = event?.target as HTMLElement;
        const parentElement = target?.parentElement as HTMLElement;
        if (target && parentElement) {
          parentElement.style.removeProperty('outline');
          parentElement.style.removeProperty('boxShadow');
          target.style.removeProperty('outline');
          target.style.removeProperty('boxShadow');
        }
      }
      setActive(false);
      onBlur?.(event);
    };

    return (
      <TextAreaStandAlone
        ref={ref}
        state={getState(disabled, error, props.value, active)}
        styles={styles}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...props}
      />
    );
  }
);
TextAreaComponent.displayName = 'TextAreaComponent';

const TextareaBoundary = <V extends string | unknown>(
  props: ITextArea<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TextAreaStandAlone {...(props as unknown as ITextAreaStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <TextAreaComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const TextArea = React.forwardRef(TextareaBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ITextArea<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof TextareaBoundary>;

export { TextArea };
