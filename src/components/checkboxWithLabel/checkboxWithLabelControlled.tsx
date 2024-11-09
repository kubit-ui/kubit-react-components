import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { CheckboxWithLabelStandAlone } from './checkboxWithLabelStandAlone';
import {
  ICheckboxWithLabelControlled,
  ICheckboxWithLabelStandAlone,
} from './types/checkboxWithLabel';
import { CheckboxWithLabelStatePropsStylesType } from './types/checkboxWithLabelTheme';
import { CheckboxWithLabelState } from './types/state';

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
