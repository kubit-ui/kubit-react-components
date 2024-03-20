import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { useGenericComponents } from '@/provider/genericComponents';

import { OptionStandAlone } from './optionStandAlone';
import { IOption, IOptionStandAlone, OptionPropsStylesType } from './types';

export const OptionComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, focus, ctv, ...props }: IOption<V>,
    ref: React.ForwardedRef<HTMLElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<OptionPropsStylesType, V>(STYLES_NAME.OPTION, variant, ctv);
    const { LINK: genericLinkComponent } = useGenericComponents();
    const innerRef = React.useRef<HTMLElement>();
    const [hover, setHover] = React.useState(false);

    React.useImperativeHandle(
      ref,
      () => {
        return innerRef.current as HTMLElement;
      },
      []
    );

    React.useEffect(() => {
      if (focus) {
        innerRef.current?.focus();
      }
    }, [focus]);

    return (
      <OptionStandAlone
        {...props}
        ref={innerRef}
        componentLink={genericLinkComponent}
        hover={hover}
        styles={styles}
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
