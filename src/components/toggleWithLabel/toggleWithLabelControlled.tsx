import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { ToggleWithLabelStandAlone } from './toggleWithLabelStandAlone';
import type { IToggleWithLabelControlled, IToggleWithLabelStandAlone } from './types';
import { ToggleWithLabelStylePropsType } from './types/toggleWithLabelTheme';

const TOGGLE_WITH_LABEL_STYLES = 'TOGGLE_WITH_LABEL_STYLES';

const ToggleWithLabelControlledComponent = React.forwardRef(
  (
    { variant, ctv, ...props }: IToggleWithLabelControlled,
    ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ToggleWithLabelStylePropsType>(TOGGLE_WITH_LABEL_STYLES, variant, ctv);

    return <ToggleWithLabelStandAlone ref={ref} styles={styles} {...props} />;
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

export const ToggleWithLabelControlled = React.forwardRef(ToggleWithLabelBoundary);
