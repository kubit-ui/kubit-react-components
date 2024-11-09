import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { PageControlAutomateStandAlone } from './pageControlAutomateStandAlone';
import {
  IPageControlAutomateControlled,
  IPageControlAutomateStandAlone,
} from './types/pageControlAutomate';
import { PageControlAutomatePropsStylesType } from './types/pageControlAutomateTheme';

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
