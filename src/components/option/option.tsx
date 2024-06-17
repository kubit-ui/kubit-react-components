import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { useGenericComponents } from '@/provider/genericComponents';

import { OptionStandAlone } from './optionStandAlone';
import { IOption, IOptionStandAlone, OptionPropsStylesType, OptionStateType } from './types';

export const OptionComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, focus, onFocus, onBlur, ctv, ...props }: IOption<V>,
    ref: React.ForwardedRef<HTMLElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<OptionPropsStylesType, V>(STYLES_NAME.OPTION, variant, ctv);
    const hasFocusStyles = !!styles?.[OptionStateType.FOCUS];
    const { LINK: genericLinkComponent } = useGenericComponents();
    const innerRef = React.useRef<HTMLElement>();
    const [hover, setHover] = React.useState(false);
    const [focused, setFocused] = React.useState(false);

    React.useImperativeHandle(ref, () => {
      return innerRef.current as HTMLElement;
    }, []);

    React.useEffect(() => {
      if (focus) {
        innerRef.current?.focus();
      }
    }, [focus]);

    const _onFocus = (event: React.FocusEvent<HTMLElement>) => {
      onFocus?.(event);
      setFocused(hasFocusStyles);
    };
    const _onBlur = (event: React.FocusEvent<HTMLElement>) => {
      onBlur?.(event);
      setFocused(false);
    };

    return (
      <OptionStandAlone
        {...props}
        ref={innerRef}
        componentLink={genericLinkComponent}
        focus={focused}
        hover={hover}
        styles={styles}
        onBlur={_onBlur}
        onFocus={_onFocus}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  }
);
OptionComponent.displayName = 'OptionComponent';

const OptionBoundary = <V extends string | unknown>(
  props: IOption<V>,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <OptionStandAlone {...(props as unknown as IOptionStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <OptionComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Option = React.forwardRef(OptionBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IOption<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof OptionBoundary>;

/**
 * @description
 * Option component is used to create a list of options.
 * You can combine with ItemRove component to create a list of options with keyboard navigation.
 * @link ItemRove
 * @param {React.PropsWithChildren<IOption<V>>} props
 * @returns {JSX.Element}
 */
export { Option };
