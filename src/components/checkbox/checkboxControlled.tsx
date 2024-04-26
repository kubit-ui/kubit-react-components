import * as React from 'react';

import { STYLES_NAME } from '@/constants/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { CheckboxStandAlone } from './checkboxStandAlone';
import { CheckboxPropsStateStylesType, ICheckboxControlled, ICheckboxStandAlone } from './types';
import { getCheckBoxState } from './utils';

const CheckboxControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    props: ICheckboxControlled<V>,
    ref?: React.ForwardedRef<HTMLInputElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<CheckboxPropsStateStylesType, V>(
      STYLES_NAME.CHECKBOX,
      props.variant,
      props.ctv
    );
    const state = getCheckBoxState(props.checked, props.disabled, props.error, styles);

    return <CheckboxStandAlone ref={ref} state={state} styles={styles[state]} {...props} />;
  }
);
CheckboxControlledComponent.displayName = 'CheckboxControlledComponent';

const CheckboxBoundary = <V extends string | unknown>(
  props: ICheckboxControlled<V>,
  ref?: React.ForwardedRef<HTMLInputElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <CheckboxStandAlone {...(props as unknown as ICheckboxStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <CheckboxControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Checkbox component is a input component that can be used to select one or more options from a list of options.
 * It can be used to create a list of options that can be selected.
 * @param {React.PropsWithChildren<ICheckboxControlled<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Checkbox variant="checkbox" />
 */
const CheckboxControlled = React.forwardRef(CheckboxBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ICheckboxControlled<V>> & {
    ref?: React.ForwardedRef<HTMLInputElement> | undefined | null;
  }
) => ReturnType<typeof CheckboxBoundary>;

export { CheckboxControlled };
