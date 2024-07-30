import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { CheckboxWithLabelStandAlone } from './checkboxWithLabelStandAlone';
import {
  CheckboxWithLabelState,
  CheckboxWithLabelStatePropsStylesType,
  ICheckboxWithLabelControlled,
  ICheckboxWithLabelStandAlone,
} from './types';

const CheckboxWithLabelControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      state = CheckboxWithLabelState.DEFAULT_SELECTED,
      ctv,
      ...props
    }: ICheckboxWithLabelControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const stylesCheckboxWithLabel = useStyles<CheckboxWithLabelStatePropsStylesType, V>(
      STYLES_NAME.CHECKBOX_WITH_LABEL,
      props.variant,
      ctv
    );

    return (
      <CheckboxWithLabelStandAlone
        {...props}
        ref={ref}
        state={state}
        styles={stylesCheckboxWithLabel}
      />
    );
  }
);
CheckboxWithLabelControlledComponent.displayName = 'CheckboxWithLabelControlledComponent';

const CheckboxWithLabelBoundary = <V extends string | unknown>(
  props: ICheckboxWithLabelControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <CheckboxWithLabelStandAlone
          {...(props as unknown as ICheckboxWithLabelStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <CheckboxWithLabelControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the CheckBox component
 */
const CheckboxWithLabelControlled = React.forwardRef(CheckboxWithLabelBoundary) as <
  V extends string | unknown,
>(
  props: ICheckboxWithLabelControlled<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { CheckboxWithLabelControlled };
