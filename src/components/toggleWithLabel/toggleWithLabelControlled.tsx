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

    const toggleRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
      if (toggleRef.current) {
        toggleRef.current.focus();
        toggleRef.current.click();
      }
    };

    return (
      <ToggleWithLabelStandAlone
        ref={ref}
        styles={styles}
        toggleRef={toggleRef}
        onClick={handleClick}
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
