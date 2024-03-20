import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { PageControlAutomateStandAlone } from './pageControlAutomateStandAlone';
import {
  IPageControlAutomateControlled,
  IPageControlAutomateStandAlone,
  PageControlAutomatePropsStylesType,
} from './types';

const PageControlAutomateControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IPageControlAutomateControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<PageControlAutomatePropsStylesType, V>(
      STYLES_NAME.PAGE_CONTROL_AUTOMATE,
      variant,
      ctv
    );
    return <PageControlAutomateStandAlone {...props} ref={ref} styles={styles} />;
  }
);
PageControlAutomateControlledComponent.displayName = 'PageControlAutomateControlledComponent';

const PageControlAutomateBoundary = <V extends string | unknown>(
  props: IPageControlAutomateControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <PageControlAutomateStandAlone
          {...(props as unknown as IPageControlAutomateStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <PageControlAutomateControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const PageControlAutomateControlled = React.forwardRef(PageControlAutomateBoundary) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IPageControlAutomateControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PageControlAutomateBoundary>;

export { PageControlAutomateControlled };
