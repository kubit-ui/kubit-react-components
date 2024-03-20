import * as React from 'react';

import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { SummaryDetailsStandAlone } from './summaryDetailsStandAlone';
import {
  ISummaryDetailsControlled,
  ISummaryDetailsStandAlone,
  SummaryDetailsPropsStylesType,
} from './types';

const SUMMARY_DETAILS_STYLES = 'SUMMARY_DETAILS_STYLES';
const LINE_SEPARATOR_STYLES = 'LINE_SEPARATOR_STYLES';

const SummaryDetailsControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, extraCt, ...props }: React.PropsWithChildren<ISummaryDetailsControlled<V>>,
    ref: React.ForwardedRef<HTMLDetailsElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<SummaryDetailsPropsStylesType, V>(
      SUMMARY_DETAILS_STYLES,
      variant,
      ctv
    );
    const lineSeparatorLineStyles = useStyles<LineSeparatorLinePropsStylesType>(
      LINE_SEPARATOR_STYLES,
      styles.lineSeparatorVariant,
      extraCt
    );

    const handleBodyClick: React.MouseEventHandler<HTMLDivElement> = event => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <SummaryDetailsStandAlone
        {...props}
        ref={ref}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
        styles={styles}
        onBodyClick={handleBodyClick}
      />
    );
  }
);
SummaryDetailsControlledComponent.displayName = 'SummaryDetailsControlledComponent';

const SummaryDetailsBoundary = <V extends string | unknown>(
  props: React.PropsWithChildren<ISummaryDetailsControlled<V>>,
  ref: React.ForwardedRef<HTMLDetailsElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <SummaryDetailsStandAlone {...(props as unknown as ISummaryDetailsStandAlone)} />
      </FallbackComponent>
    }
  >
    <SummaryDetailsControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const SummaryDetailsControlled = React.forwardRef(SummaryDetailsBoundary) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<ISummaryDetailsControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDetailsElement> | undefined | null;
  }
) => ReturnType<typeof SummaryDetailsBoundary>;

export { SummaryDetailsControlled };
